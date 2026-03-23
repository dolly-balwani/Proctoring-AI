import { motion } from "framer-motion";
import { Calendar, Play, CheckCircle, ShieldCheck, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import Card3D from "@/components/Card3D";
import FloatingOrbs from "@/components/FloatingOrbs";

const stats = [
  { icon: Calendar, label: "Upcoming Exams", value: "3", color: "text-primary" },
  { icon: Play, label: "Active Exams", value: "1", color: "text-success" },
  { icon: CheckCircle, label: "Completed", value: "12", color: "text-secondary" },
  { icon: ShieldCheck, label: "Integrity Score", value: "94%", color: "text-primary" },
];

const exams = [
  { name: "Data Structures & Algorithms", date: "Mar 25, 2026", time: "10:00 AM", status: "upcoming", duration: "2 hrs" },
  { name: "Machine Learning Fundamentals", date: "Mar 23, 2026", time: "2:00 PM", status: "active", duration: "1.5 hrs" },
  { name: "Database Management Systems", date: "Mar 20, 2026", time: "9:00 AM", status: "completed", duration: "2 hrs" },
  { name: "Computer Networks", date: "Mar 18, 2026", time: "11:00 AM", status: "completed", duration: "1.5 hrs" },
];

const statusColors: Record<string, string> = {
  upcoming: "bg-primary/10 text-primary",
  active: "bg-success/10 text-success",
  completed: "bg-muted text-muted-foreground",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const Dashboard = () => (
  <div className="min-h-screen gradient-bg">
    <FloatingOrbs />
    <Navbar />

    <div className="pt-16 flex">
      <DashboardSidebar />

      <main className="flex-1 p-6 lg:p-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <h1 className="text-2xl font-bold text-foreground mb-1">Student Dashboard</h1>
          <p className="text-muted-foreground text-sm mb-8">Welcome back, Alex. Here's your exam overview.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} custom={i} initial="hidden" animate="visible" variants={fadeUp}>
              <Card3D>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center`}>
                    <s.icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Exam list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">My Exams</h2>
          <div className="glass-panel overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border text-xs text-muted-foreground uppercase tracking-wider">
                    <th className="text-left px-6 py-4">Exam</th>
                    <th className="text-left px-6 py-4">Date</th>
                    <th className="text-left px-6 py-4">Duration</th>
                    <th className="text-left px-6 py-4">Status</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {exams.map((exam) => (
                    <tr key={exam.name} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-foreground">{exam.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          {exam.date} · {exam.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{exam.duration}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[exam.status]}`}>
                          {exam.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {exam.status === "active" && (
                          <a href="/exam" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                            Enter →
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  </div>
);

export default Dashboard;
