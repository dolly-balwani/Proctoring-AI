"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/lib/auth";
import {
    Shield,
    LayoutDashboard,
    FileText,
    Users,
    BarChart3,
    AlertTriangle,
    ChevronLeft,
    ChevronRight,
    LogOut,
    Bell,
    Search,
} from "lucide-react";

const navItems = [
    { href: "/dashboard", label: "Live Monitor", icon: LayoutDashboard },
    { href: "/dashboard/exams", label: "Exams", icon: FileText },
    { href: "/dashboard/students", label: "Students", icon: Users },
    { href: "/dashboard/reports", label: "Reports", icon: BarChart3 },
    { href: "/dashboard/incidents", label: "Incidents", icon: AlertTriangle },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { user, signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
        router.push("/");
    };

    return (
        <div className="min-h-screen bg-surface-0 flex">
            {/* Sidebar */}
            <motion.aside
                className="fixed top-0 left-0 h-full z-40 flex flex-col border-r border-subtle"
                animate={{ width: collapsed ? 72 : 260 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: "rgba(6, 6, 10, 0.95)", backdropFilter: "blur(20px)" }}
            >
                {/* Logo */}
                <div className="px-4 py-5 flex items-center gap-3 border-b border-subtle">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyber-cyan to-cyber-indigo flex items-center justify-center flex-shrink-0 shadow-glow-cyan">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                    <AnimatePresence>
                        {!collapsed && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="text-sm font-bold text-white tracking-tight whitespace-nowrap"
                            >
                                ProctorAI
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 px-3 py-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
                        return (
                            <Link key={item.href} href={item.href}>
                                <motion.div
                                    className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group cursor-pointer ${
                                        isActive
                                            ? "text-white"
                                            : "text-gray-500 hover:text-gray-300"
                                    }`}
                                    whileHover={{ x: 2 }}
                                >
                                    {/* Active glow bg */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 rounded-xl"
                                            style={{
                                                background: "linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(99, 102, 241, 0.06))",
                                                border: "1px solid rgba(0, 212, 255, 0.12)",
                                            }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                    )}
                                    {/* Active side indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full bg-cyber-cyan shadow-glow-cyan"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                    <item.icon className={`w-[18px] h-[18px] flex-shrink-0 relative z-10 ${isActive ? "text-cyber-cyan" : "group-hover:text-cyber-cyan/60"} transition-colors duration-300`} />
                                    <AnimatePresence>
                                        {!collapsed && (
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="relative z-10 whitespace-nowrap"
                                            >
                                                {item.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        );
                    })}
                </nav>

                {/* User & Collapse */}
                <div className="px-3 py-4 space-y-2 border-t border-subtle">
                    {/* User Card */}
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyber-indigo to-cyber-violet flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">
                            {user?.name?.charAt(0) || "A"}
                        </div>
                        <AnimatePresence>
                            {!collapsed && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex-1 min-w-0"
                                >
                                    <p className="text-xs font-medium text-white truncate">{user?.name || "Admin"}</p>
                                    <p className="text-[10px] text-gray-500 truncate">{user?.email || "admin@proctai.com"}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Sign Out */}
                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500 hover:text-rose-400 hover:bg-rose-500/5 transition-all duration-300"
                    >
                        <LogOut className="w-[18px] h-[18px] flex-shrink-0" />
                        <AnimatePresence>
                            {!collapsed && (
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    Sign out
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>

                    {/* Collapse Toggle */}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="w-full flex items-center justify-center py-2 rounded-xl text-gray-600 hover:text-gray-400 hover:bg-white/[0.02] transition-all duration-300"
                    >
                        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                    </button>
                </div>
            </motion.aside>

            {/* Main Content */}
            <motion.main
                className="flex-1 min-h-screen"
                animate={{ marginLeft: collapsed ? 72 : 260 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Top Bar */}
                <header className="sticky top-0 z-30 h-16 flex items-center justify-between px-8 border-b border-subtle" style={{ background: "rgba(6, 6, 10, 0.8)", backdropFilter: "blur(12px)" }}>
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-semibold text-white">
                            {navItems.find((n) => pathname === n.href || (n.href !== "/dashboard" && pathname.startsWith(n.href)))?.label || "Dashboard"}
                        </h2>
                        <div className="status-dot live" />
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Search */}
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-cyber-cyan transition-colors" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-48 pl-9 pr-4 py-2 rounded-xl bg-white/[0.03] border border-subtle text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyber-cyan/30 focus:bg-white/[0.05] transition-all duration-300"
                            />
                        </div>

                        {/* Notifications */}
                        <button className="relative p-2 rounded-xl text-gray-500 hover:text-cyber-cyan hover:bg-white/[0.03] transition-all duration-300">
                            <Bell className="w-[18px] h-[18px]" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.4)]" />
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8">
                    {children}
                </div>
            </motion.main>
        </div>
    );
}
