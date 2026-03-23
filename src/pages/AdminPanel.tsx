import { motion } from "framer-motion";
import { Camera, AlertTriangle, ShieldAlert, Users, Eye, Monitor } from "lucide-react";
import Navbar from "@/components/Navbar";
import GlassPanel from "@/components/GlassPanel";
import FloatingOrbs from "@/components/FloatingOrbs";

const candidates = [
  { name: "Alice Johnson", status: "Active", integrity: 96, alerts: 1 },
  { name: "Bob Smith", status: "Active", integrity: 72, alerts: 5 },
  { name: "Carol Williams", status: "Completed", integrity: 98, alerts: 0 },
  { name: "David Brown", status: "Active", integrity: 85, alerts: 3 },
  { name: "Eva Martinez", status: "Flagged", integrity: 45, alerts: 9 },
];

const events = [
  { icon: Eye, message: "Bob Smith – Looking away for 12s", time: "1 min ago", severity: "warning" },
  { icon: Users, message: "Eva Martinez – Multiple faces detected", time: "3 min ago", severity: "critical" },
  { icon: Monitor, message: "Eva Martinez – Tab switch detected (3 times)", time: "4 min ago", severity: "critical" },
  { icon: Eye, message: "David Brown – Looking away for 8s", time: "7 min ago", severity: "warning" },
  { icon: AlertTriangle, message: "Bob Smith – Suspicious head movement", time: "12 min ago", severity: "warning" },
];

const statusStyle: Record<string, string> = {
  Active: "bg-success/10 text-success",
  Completed: "bg-muted text-muted-foreground",
  Flagged: "bg-destructive/10 text-destructive",
};

const AdminPanel = () => (
  <div className="min-h-screen gradient-bg">
    <FloatingOrbs />
    <Navbar />

    <main className="pt-20 px-4 lg:px-8 max-w-7xl mx-auto pb-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-bold text-foreground mb-1">Proctor Dashboard</h1>
        <p className="text-sm text-muted-foreground mb-8">Monitor active exams and review flagged candidates.</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Candidates Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2"
        >
          <GlassPanel>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-primary" /> Candidate Monitoring
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border text-xs text-muted-foreground uppercase tracking-wider">
                    <th className="text-left px-4 py-3">Student</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-left px-4 py-3">Integrity</th>
                    <th className="text-left px-4 py-3">Alerts</th>
                  </tr>
                </thead>
                <tbody>
                  {candidates.map((c) => (
                    <tr key={c.name} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-foreground">{c.name}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusStyle[c.status]}`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 rounded-full bg-muted/50 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${c.integrity > 80 ? "bg-success" : c.integrity > 60 ? "bg-warning" : "bg-destructive"}`}
                              style={{ width: `${c.integrity}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{c.integrity}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-sm font-medium ${c.alerts > 3 ? "text-destructive" : "text-muted-foreground"}`}>
                          {c.alerts}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          {/* Live Monitor */}
          <GlassPanel>
            <h2 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
              <Camera className="w-4 h-4" /> Live Monitor
            </h2>
            <div className="aspect-video bg-muted/20 rounded-lg border border-border flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Select a candidate</p>
              </div>
            </div>
          </GlassPanel>

          {/* Alert Feed */}
          <GlassPanel>
            <h2 className="text-sm font-semibold text-warning mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Alert Feed
            </h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {events.map((e, i) => (
                <div key={i} className={`flex items-start gap-2 p-2 rounded-lg bg-muted/10 border-l-2 ${e.severity === "critical" ? "border-l-destructive" : "border-l-warning"}`}>
                  <e.icon className={`w-4 h-4 mt-0.5 shrink-0 ${e.severity === "critical" ? "text-destructive" : "text-warning"}`} />
                  <div>
                    <p className="text-xs text-foreground">{e.message}</p>
                    <p className="text-xs text-muted-foreground">{e.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </main>
  </div>
);

export default AdminPanel;
