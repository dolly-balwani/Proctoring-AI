import { motion } from "framer-motion";
import { Camera, Mail, Lock, Shield } from "lucide-react";
import FloatingOrbs from "@/components/FloatingOrbs";

const Login = () => (
  <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
    <FloatingOrbs />

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-panel w-full max-w-md gradient-border"
    >
      <div className="p-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold gradient-text">ProctorAI</span>
        </div>

        <h2 className="text-xl font-semibold text-foreground text-center mb-2">Welcome Back</h2>
        <p className="text-sm text-muted-foreground text-center mb-8">Sign in to access your exams</p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="student@university.edu"
                className="w-full bg-muted/50 border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-muted/50 border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          {/* Face Verification */}
          <div className="glass-card p-4 mt-6">
            <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
              <Camera className="w-4 h-4 text-primary" /> Face Verification
            </p>
            <div className="aspect-video bg-muted/30 rounded-lg border border-border flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Camera preview</p>
              </div>
            </div>
            <button className="w-full mt-3 py-2 rounded-lg bg-secondary/20 text-secondary text-sm font-medium hover:bg-secondary/30 transition-colors">
              Start Verification
            </button>
          </div>

          <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(190_95%_55%/0.3)] mt-4">
            Sign In
          </button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Secured by AI-powered biometric verification
        </p>
      </div>
    </motion.div>
  </div>
);

export default Login;
