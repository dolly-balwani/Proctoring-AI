// ========================================
// ProctorAI — Socket.IO Real-Time Server
// Handles student→admin streaming: trust scores, violations, admin actions
// Run: npx ts-node server.ts (or via dev:socket script)
// ========================================

import { createServer } from "http";
import { Server } from "socket.io";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const nextPort = 3000;
const socketPort = 3001;

// ── Active sessions in memory ────────────────────────
interface LiveStudent {
    sessionId: string;
    examId: string;
    userId: string;
    userName: string;
    socketId: string;
    trustScore: number;
    lastUpdate: number;
}

const liveStudents = new Map<string, LiveStudent>(); // sessionId → LiveStudent

// ── Socket.IO Server ─────────────────────────────────
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: [`http://${hostname}:${nextPort}`, `http://localhost:${nextPort}`],
        methods: ["GET", "POST"],
    },
    transports: ["websocket", "polling"],
});

io.on("connection", (socket) => {
    console.log(`🔌 Client connected: ${socket.id}`);

    // ── Student joins exam ──
    socket.on("student:join", (data: {
        sessionId: string;
        examId: string;
        userId: string;
        userName: string;
    }) => {
        console.log(`📥 Student joined: ${data.userName} (session: ${data.sessionId})`);

        // Track live student
        liveStudents.set(data.sessionId, {
            ...data,
            socketId: socket.id,
            trustScore: 100,
            lastUpdate: Date.now(),
        });

        // Join exam room for scoped broadcasting
        socket.join(`exam:${data.examId}`);
        socket.join(`session:${data.sessionId}`);

        // Broadcast to admin room
        io.to("admin").emit("student:join", {
            ...data,
            trustScore: 100,
            timestamp: Date.now(),
        });

        // Send current live count
        io.to("admin").emit("live:count", { count: liveStudents.size });
    });

    // ── Student sends signal update ──
    socket.on("signal:update", (data: {
        sessionId: string;
        snapshot: unknown;
    }) => {
        const student = liveStudents.get(data.sessionId);
        if (student) {
            const snap = data.snapshot as { trustScore?: number };
            student.trustScore = snap.trustScore ?? student.trustScore;
            student.lastUpdate = Date.now();
        }

        // Forward to admin room (throttled by client to 1/s)
        io.to("admin").emit("signal:update", {
            sessionId: data.sessionId,
            snapshot: data.snapshot,
            timestamp: Date.now(),
        });
    });

    // ── Student reports violation ──
    socket.on("violation:create", (data: {
        sessionId: string;
        type: string;
        severity: string;
        description: string;
        channels: string[];
    }) => {
        console.log(`⚠️  Violation: ${data.type} (${data.severity}) — session: ${data.sessionId}`);

        // Forward to admin
        io.to("admin").emit("violation:create", {
            ...data,
            timestamp: Date.now(),
        });
    });

    // ── Student leaves ──
    socket.on("student:leave", (data: { sessionId: string }) => {
        const student = liveStudents.get(data.sessionId);
        if (student) {
            console.log(`📤 Student left: ${student.userName}`);
            liveStudents.delete(data.sessionId);

            io.to("admin").emit("student:leave", {
                sessionId: data.sessionId,
                userName: student.userName,
                timestamp: Date.now(),
            });
            io.to("admin").emit("live:count", { count: liveStudents.size });
        }
    });

    // ── Admin joins admin room ──
    socket.on("admin:join", () => {
        console.log(`👑 Admin connected: ${socket.id}`);
        socket.join("admin");

        // Send current live students to admin
        const students = Array.from(liveStudents.values()).map((s) => ({
            sessionId: s.sessionId,
            examId: s.examId,
            userId: s.userId,
            userName: s.userName,
            trustScore: s.trustScore,
            lastUpdate: s.lastUpdate,
        }));
        socket.emit("live:students", { students, count: students.length });
    });

    // ── Admin sends action to student ──
    socket.on("admin:action", (data: {
        violationId: string;
        sessionId: string;
        action: string;
        note?: string;
    }) => {
        console.log(`👑 Admin action: ${data.action} → session: ${data.sessionId}`);

        // Forward to the specific student's session room
        io.to(`session:${data.sessionId}`).emit("admin:action", {
            violationId: data.violationId,
            action: data.action,
            note: data.note,
        });
    });

    // ── Disconnect cleanup ──
    socket.on("disconnect", () => {
        console.log(`🔌 Client disconnected: ${socket.id}`);

        // Remove student from live tracking
        for (const [sessionId, student] of liveStudents.entries()) {
            if (student.socketId === socket.id) {
                liveStudents.delete(sessionId);
                io.to("admin").emit("student:leave", {
                    sessionId,
                    userName: student.userName,
                    timestamp: Date.now(),
                });
                io.to("admin").emit("live:count", { count: liveStudents.size });
                break;
            }
        }
    });
});

// ── Periodic health broadcast (every 5s) ─────────────
setInterval(() => {
    const students = Array.from(liveStudents.values()).map((s) => ({
        sessionId: s.sessionId,
        userName: s.userName,
        trustScore: s.trustScore,
        lastUpdate: s.lastUpdate,
    }));
    io.to("admin").emit("live:heartbeat", {
        students,
        count: students.length,
        timestamp: Date.now(),
    });
}, 5000);

// ── Start ────────────────────────────────────────────
httpServer.listen(socketPort, () => {
    console.log(`\n🚀 Socket.IO server running on http://${hostname}:${socketPort}`);
    console.log(`   Waiting for connections from Next.js app on port ${nextPort}...\n`);
});
