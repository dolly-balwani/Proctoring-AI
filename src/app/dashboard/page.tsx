"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Activity,
    Users,
    AlertTriangle,
    ShieldCheck,
    TrendingDown,
    Eye,
    Wifi,
    Clock,
} from "lucide-react";

// ─── Animated Number Counter ────────────────────────────────
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        const duration = 1200;
        const steps = 40;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setDisplay(value);
                clearInterval(timer);
            } else {
                setDisplay(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [value]);
    return <>{display}{suffix}</>;
}

// ─── Trust Gauge SVG ────────────────────────────────────────
function TrustGauge({ score, size = 56 }: { score: number; size?: number }) {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;
    const color = score >= 70 ? "#10b981" : score >= 40 ? "#f59e0b" : "#f43f5e";

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="-rotate-90">
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                <motion.circle
                    cx={size / 2} cy={size / 2} r={radius} fill="none"
                    stroke={color} strokeWidth="4" strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ filter: `drop-shadow(0 0 6px ${color}40)` }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold" style={{ color }}>{score}</span>
            </div>
        </div>
    );
}

// ─── Demo data ──────────────────────────────────────────────
const demoStudents = [
    { id: "1", name: "Arjun Mehta", email: "arjun@university.edu", trustScore: 92, status: "active" as const, violations: 0, avatar: "AM" },
    { id: "2", name: "Priya Sharma", email: "priya@university.edu", trustScore: 78, status: "active" as const, violations: 2, avatar: "PS" },
    { id: "3", name: "Rahul Verma", email: "rahul@university.edu", trustScore: 45, status: "active" as const, violations: 5, avatar: "RV" },
    { id: "4", name: "Sneha Patel", email: "sneha@university.edu", trustScore: 88, status: "active" as const, violations: 1, avatar: "SP" },
    { id: "5", name: "Karan Singh", email: "karan@university.edu", trustScore: 34, status: "active" as const, violations: 8, avatar: "KS" },
    { id: "6", name: "Ananya Gupta", email: "ananya@university.edu", trustScore: 96, status: "active" as const, violations: 0, avatar: "AG" },
];

const demoIncidents = [
    { id: "1", student: "Karan Singh", type: "tab_switch", severity: "high" as const, time: "2 min ago", channels: ["interaction", "gaze"] },
    { id: "2", student: "Rahul Verma", type: "gaze_away", severity: "medium" as const, time: "5 min ago", channels: ["gaze", "headPose"] },
    { id: "3", student: "Priya Sharma", type: "audio_speech", severity: "low" as const, time: "8 min ago", channels: ["audio"] },
    { id: "4", student: "Karan Singh", type: "multiple_faces", severity: "critical" as const, time: "12 min ago", channels: ["face"] },
    { id: "5", student: "Rahul Verma", type: "clipboard_use", severity: "medium" as const, time: "15 min ago", channels: ["interaction"] },
];

const severityConfig = {
    info: { color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
    low: { color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    medium: { color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
    high: { color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
    critical: { color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20" },
};

export default function DashboardPage() {
    const avgTrust = Math.round(demoStudents.reduce((s, st) => s + st.trustScore, 0) / demoStudents.length);

    return (
        <div className="space-y-8">
            {/* ─── Stats Row ─────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                    { label: "Active Sessions", value: 6, icon: Users, color: "from-cyber-cyan/20 to-cyber-cyan/5", iconColor: "text-cyber-cyan", suffix: "" },
                    { label: "Avg Trust Score", value: avgTrust, icon: ShieldCheck, color: "from-emerald-500/20 to-emerald-500/5", iconColor: "text-emerald-400", suffix: "%" },
                    { label: "Violations Today", value: 16, icon: AlertTriangle, color: "from-amber-500/20 to-amber-500/5", iconColor: "text-amber-400", suffix: "" },
                    { label: "Flagged Incidents", value: 3, icon: TrendingDown, color: "from-rose-500/20 to-rose-500/5", iconColor: "text-rose-400", suffix: "" },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        className="glass-card p-5 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</span>
                                <stat.icon className={`w-4 h-4 ${stat.iconColor}`} />
                            </div>
                            <p className="text-3xl font-bold text-white">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ─── Main Grid ─────────────────────────────── */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Student Grid (2/3 width) */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Wifi className="w-4 h-4 text-cyber-cyan" />
                            Live Monitoring
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className="status-dot live" />
                            <span className="text-xs text-emerald-400 font-mono">STREAMING</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {demoStudents.map((student, i) => (
                            <motion.div
                                key={student.id}
                                className="glass-card p-4 cursor-pointer group"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + i * 0.06 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-indigo/40 to-cyber-violet/40 flex items-center justify-center text-[10px] font-bold text-white/80">
                                            {student.avatar}
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-white truncate max-w-[100px]">{student.name}</p>
                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                <div className={`w-1.5 h-1.5 rounded-full ${student.trustScore >= 70 ? "bg-emerald-400" : student.trustScore >= 40 ? "bg-amber-400" : "bg-rose-400"}`}
                                                    style={{ boxShadow: `0 0 4px ${student.trustScore >= 70 ? "rgba(16,185,129,0.4)" : student.trustScore >= 40 ? "rgba(245,158,11,0.4)" : "rgba(244,63,94,0.4)"}` }}
                                                />
                                                <span className="text-[10px] text-gray-500 font-mono">
                                                    {student.trustScore >= 70 ? "NORMAL" : student.trustScore >= 40 ? "WATCHING" : "FLAGGED"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <TrustGauge score={student.trustScore} size={44} />
                                </div>

                                {/* Webcam placeholder */}
                                <div className="w-full aspect-video rounded-lg bg-surface-2 border border-subtle mb-3 flex items-center justify-center overflow-hidden relative">
                                    <Eye className="w-5 h-5 text-gray-700" />
                                    {/* Scan line */}
                                    <div className="absolute inset-0 scan-line opacity-30" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] text-gray-600 font-mono">
                                        {student.violations} violation{student.violations !== 1 ? "s" : ""}
                                    </span>
                                    {/* 5 channel dots */}
                                    <div className="flex gap-1">
                                        {["face", "gaze", "head", "audio", "interact"].map((ch, ci) => (
                                            <div
                                                key={ch}
                                                className={`w-1.5 h-1.5 rounded-full ${
                                                    student.trustScore > 70 + ci * 5
                                                        ? "bg-emerald-400/60"
                                                        : student.trustScore > 40 + ci * 3
                                                        ? "bg-amber-400/60"
                                                        : "bg-rose-400/60"
                                                }`}
                                                title={ch}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Incident Timeline (1/3 width) */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Activity className="w-4 h-4 text-amber-400" />
                            Incident Feed
                        </h3>
                        <span className="text-[10px] text-gray-500 font-mono">{demoIncidents.length} events</span>
                    </div>

                    <div className="space-y-2">
                        {demoIncidents.map((incident, i) => {
                            const sev = severityConfig[incident.severity];
                            return (
                                <motion.div
                                    key={incident.id}
                                    className="glass-card p-3.5 group cursor-pointer"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.08 }}
                                    whileHover={{ x: -2 }}
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${sev.color} ${sev.bg} border ${sev.border}`}>
                                                {incident.severity}
                                            </span>
                                            <span className="text-[10px] text-gray-600 font-mono flex items-center gap-1">
                                                <Clock className="w-2.5 h-2.5" />
                                                {incident.time}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-300 mb-1.5">
                                        <span className="text-white font-medium">{incident.student}</span>
                                        {" — "}
                                        {incident.type.replace(/_/g, " ")}
                                    </p>
                                    <div className="flex gap-1">
                                        {incident.channels.map((ch) => (
                                            <span key={ch} className="px-1.5 py-0.5 rounded text-[9px] font-mono text-gray-500 bg-white/[0.03] border border-subtle">
                                                {ch}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Review Queue CTA */}
                    <motion.button
                        className="w-full glass-card p-3 text-center text-xs text-cyber-cyan hover:text-white transition-colors duration-300 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="flex items-center justify-center gap-2">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            3 incidents pending review →
                        </span>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
