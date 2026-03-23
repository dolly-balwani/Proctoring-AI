import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield, Brain, Eye, Monitor, FileWarning, ArrowRight,
  UserCheck, Laptop, Cpu, Bell, FileText, Github, Mail, ChevronRight,
} from "lucide-react";
import Card3D from "@/components/Card3D";
import Navbar from "@/components/Navbar";
import FloatingOrbs from "@/components/FloatingOrbs";

const features = [
  { icon: UserCheck, title: "Face Recognition", desc: "Biometric authentication ensures only verified students access exams." },
  { icon: Eye, title: "Real-time Proctoring", desc: "AI-powered webcam monitoring tracks eye movement and behavior." },
  { icon: Brain, title: "Cheating Detection", desc: "Deep learning models detect suspicious patterns instantly." },
  { icon: Monitor, title: "Browser Monitoring", desc: "Track tab switches, copy-paste, and screen sharing attempts." },
  { icon: FileWarning, title: "Automated Reports", desc: "Comprehensive integrity reports generated after each exam." },
];

const steps = [
  { icon: UserCheck, label: "User Auth" },
  { icon: Laptop, label: "Exam Interface" },
  { icon: Cpu, label: "AI Monitoring" },
  { icon: Bell, label: "Alert System" },
  { icon: FileText, label: "Reports" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Landing = () => (
  <div className="min-h-screen gradient-bg">
    <FloatingOrbs />
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 mb-8 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            AI-Powered Examination Security
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-foreground">Secure Exams with</span>
          <br />
          <span className="gradient-text glow-text">AI Proctoring</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          An intelligent examination platform that uses AI-driven face recognition,
          real-time behavior analysis, and automated cheating detection to ensure exam integrity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(190_95%_55%/0.3)]"
          >
            Start Exam <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card font-semibold text-foreground hover:bg-muted/30 transition-colors"
          >
            View Dashboard
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Powered by <span className="gradient-text">Advanced AI</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Our multi-layered AI system monitors every aspect of the examination process.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card3D className="h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Architecture */}
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-14"
        >
          System <span className="gradient-text">Architecture</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <div className="glass-panel px-6 py-4 flex flex-col items-center gap-2 min-w-[120px]">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium text-foreground text-center">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-bold gradient-text">ProctorAI</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          AI-Assisted Online Examination & Proctoring System — Capstone Project
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default Landing;
