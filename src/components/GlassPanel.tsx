import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

const GlassPanel = ({ children, className = "" }: GlassPanelProps) => (
  <div className={`glass-panel p-6 ${className}`}>
    {children}
  </div>
);

export default GlassPanel;
