import { motion } from "framer-motion";
import { Award, ShieldCheck, Activity, Clock, Eye, Monitor, Users, AlertTriangle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Card3D from "@/components/Card3D";
import GlassPanel from "@/components/GlassPanel";
import FloatingOrbs from "@/components/FloatingOrbs";

const timeline = [
  { time: "10:00 AM", event: "Exam started", icon: CheckCircle, color: "text-success" },
  { time: "10:12 AM", event: "Looking away detected (3s)", icon: Eye, color: "text-warning" },
  { time: "10:25 AM", event: "Tab switch detected", icon: Monitor, color: "text-warning" },
  { time: "10:38 AM", event: "Multiple faces detected", icon: Users, color: "text-destructive" },
  { time: "10:45 AM", event: "Suspicious head movement", icon: AlertTriangle, color: "text-warning" },
  { time: "11:30 AM", event: "Exam submitted", icon: CheckCircle, color: "text-success" },
];

const Results = () => (
  <div className="min-h-screen gradient-bg">
    <FloatingOrbs />
    <Navbar />

    <main className="pt-20 px-4 lg:px-8 max-w-5xl mx-auto pb-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-bold text-foreground mb-1">Exam Results</h1>
        <p className="text-sm text-muted-foreground mb-8">Data Structures & Algorithms — March 23, 2026</p>
      </motion.div>

      {/* Score Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Award, label: "Exam Score", value: "78/100", color: "text-primary" },
          { icon: ShieldCheck, label: "Integrity Score", value: "72%", color: "text-warning" },
          { icon: Activity, label: "Risk Level", value: "Medium", color: "text-warning" },
          { icon: Clock, label: "Duration", value: "1h 30m", color: "text-muted-foreground" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card3D>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                  <s.icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            </Card3D>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* AI Summary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <GlassPanel className="h-full">
            <h2 className="text-lg font-semibold text-foreground mb-4">AI Monitoring Summary</h2>
            <div className="space-y-4">
              {[
                { label: "Eye Tracking Violations", value: 3, max: 10 },
                { label: "Tab Switches", value: 1, max: 5 },
                { label: "Face Detection Issues", value: 1, max: 5 },
                { label: "Suspicious Movements", value: 2, max: 10 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{m.label}</span>
                    <span className="text-foreground font-medium">{m.value}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-muted/50 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        m.value / m.max > 0.6 ? "bg-destructive" : m.value / m.max > 0.3 ? "bg-warning" : "bg-success"
                      }`}
                      style={{ width: `${(m.value / m.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>

        {/* Event Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <GlassPanel className="h-full">
            <h2 className="text-lg font-semibold text-foreground mb-4">Event Timeline</h2>
            <div className="space-y-0">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-3 pb-4 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center">
                      <t.icon className={`w-4 h-4 ${t.color}`} />
                    </div>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-sm text-foreground">{t.event}</p>
                    <p className="text-xs text-muted-foreground">{t.time}</p>
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

export default Results;
