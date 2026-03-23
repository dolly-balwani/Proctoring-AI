import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "ProctorAI — Intelligent Exam Surveillance",
    description:
        "Next-generation AI-powered exam proctoring with 5-channel multimodal behavioral analysis, real-time monitoring, and privacy-first architecture.",
    keywords: ["AI proctoring", "exam monitoring", "behavioral analysis", "online exam", "cheating detection"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="noise-overlay">{children}</body>
        </html>
    );
}
