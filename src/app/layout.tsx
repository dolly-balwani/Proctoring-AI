import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "ProctorAI — Intelligent Exam Surveillance",
    description:
        "An advanced AI-powered exam surveillance platform delivering real-time behavioral analysis, anomaly detection, and post-exam intelligence.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
