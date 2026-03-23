import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface ExamTimerProps {
  initialMinutes?: number;
}

const ExamTimer = ({ initialMinutes = 60 }: ExamTimerProps) => {
  const [seconds, setSeconds] = useState(initialMinutes * 60);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const isLow = seconds < 300;

  return (
    <div className={`flex items-center gap-2 glass-panel px-4 py-2 ${isLow ? "animate-glow-pulse border-destructive" : ""}`}>
      <Clock className={`w-4 h-4 ${isLow ? "text-destructive" : "text-primary"}`} />
      <span className={`font-mono text-lg font-bold ${isLow ? "text-destructive" : "text-foreground"}`}>
        {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
      </span>
    </div>
  );
};

export default ExamTimer;
