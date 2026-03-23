import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, BarChart3, User, LogOut, Shield } from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "My Exams", path: "/exam", icon: FileText },
  { label: "Results", path: "/results", icon: BarChart3 },
  { label: "Profile", path: "/profile", icon: User },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-[calc(100vh-4rem)] glass-panel rounded-none border-t-0 border-l-0 border-b-0">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-bold gradient-text">ProctorAI</span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {sidebarLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              location.pathname === link.path
                ? "bg-primary/10 text-primary glow-border"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
            }`}
          >
            <link.icon className="w-5 h-5" />
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-border">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors w-full">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
