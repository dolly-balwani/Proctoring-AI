import { motion } from "framer-motion";
import { Camera, Send } from "lucide-react";
import ExamTimer from "@/components/ExamTimer";
import AlertBox from "@/components/AlertBox";
import GlassPanel from "@/components/GlassPanel";

const questions = [
  {
    id: 1,
    text: "What is the time complexity of binary search on a sorted array of n elements?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
  },
  {
    id: 2,
    text: "Which data structure uses LIFO (Last In, First Out) principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
  },
];

const alerts = [
  { type: "looking-away" as const, message: "Looking away detected", time: "2 min ago" },
  { type: "tab-switch" as const, message: "Tab switching detected", time: "5 min ago" },
  { type: "multiple-faces" as const, message: "Multiple faces detected", time: "8 min ago" },
];

const ExamPage = () => (
  <div className="min-h-screen gradient-bg">
    {/* Top Bar */}
    <div className="glass-panel rounded-none border-x-0 border-t-0 px-4 lg:px-8 py-3 flex items-center justify-between">
      <div>
        <h1 className="text-sm font-semibold text-foreground">Data Structures & Algorithms</h1>
        <p className="text-xs text-muted-foreground">Question 1 of 30</p>
      </div>
      <div className="flex items-center gap-4">
        <ExamTimer initialMinutes={45} />
        <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
          <Send className="w-4 h-4" /> Submit
        </button>
      </div>
    </div>

    {/* Main Layout */}
    <div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-6 h-[calc(100vh-4rem)]">
      {/* Question Panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:w-1/3"
      >
        <GlassPanel className="h-full overflow-y-auto">
          <h2 className="text-sm font-semibold text-primary mb-4">Questions</h2>
          <div className="space-y-4">
            {questions.map((q) => (
              <div key={q.id} className="p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer border border-transparent hover:border-primary/20">
                <p className="text-xs text-muted-foreground mb-1">Q{q.id}</p>
                <p className="text-sm text-foreground">{q.text}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Answer Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="lg:flex-1"
      >
        <GlassPanel className="h-full flex flex-col">
          <h2 className="text-sm font-semibold text-primary mb-4">Answer</h2>
          <div className="mb-6">
            <p className="text-foreground mb-4">{questions[0].text}</p>
            <div className="space-y-2">
              {questions[0].options.map((opt, i) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 cursor-pointer transition-colors border border-transparent hover:border-primary/20"
                >
                  <input type="radio" name="answer" className="accent-[hsl(190,95%,55%)]" />
                  <span className="text-sm text-foreground">{String.fromCharCode(65 + i)}. {opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Code editor placeholder */}
          <div className="flex-1 bg-muted/20 rounded-lg border border-border p-4 font-mono text-sm text-muted-foreground">
            <p className="text-xs text-primary mb-2">// Code Editor</p>
            <p>{"// Write your solution here..."}</p>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Monitoring Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="lg:w-80"
      >
        <div className="space-y-4 h-full flex flex-col">
          {/* Webcam */}
          <GlassPanel>
            <p className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
              <Camera className="w-4 h-4" /> Live Monitoring
            </p>
            <div className="aspect-video bg-muted/20 rounded-lg border border-border flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Webcam Active</p>
                <div className="w-2 h-2 rounded-full bg-success mx-auto mt-2 pulse-glow" />
              </div>
            </div>
          </GlassPanel>

          {/* Alerts */}
          <GlassPanel className="flex-1 overflow-y-auto">
            <p className="text-sm font-semibold text-warning mb-3">AI Alerts</p>
            <div className="space-y-2">
              {alerts.map((a, i) => (
                <AlertBox key={i} type={a.type} message={a.message} time={a.time} />
              ))}
            </div>
          </GlassPanel>
        </div>
      </motion.div>
    </div>
  </div>
);

export default ExamPage;
