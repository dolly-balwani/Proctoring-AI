import { AlertTriangle, Eye, Monitor, Users } from "lucide-react";
import { motion } from "framer-motion";

type AlertType = "looking-away" | "multiple-faces" | "tab-switch" | "general";

interface AlertBoxProps {
  type: AlertType;
  message: string;
  time?: string;
}

const alertConfig: Record<AlertType, { icon: typeof AlertTriangle; color: string }> = {
  "looking-away": { icon: Eye, color: "text-warning" },
  "multiple-faces": { icon: Users, color: "text-destructive" },
  "tab-switch": { icon: Monitor, color: "text-warning" },
  general: { icon: AlertTriangle, color: "text-warning" },
};

const AlertBox = ({ type, message, time }: AlertBoxProps) => {
  const { icon: Icon, color } = alertConfig[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card p-3 flex items-center gap-3 border-l-2 border-l-warning"
    >
      <Icon className={`w-4 h-4 ${color} shrink-0`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground truncate">{message}</p>
        {time && <p className="text-xs text-muted-foreground">{time}</p>}
      </div>
    </motion.div>
  );
};

export default AlertBox;
