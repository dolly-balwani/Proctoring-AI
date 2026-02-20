export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-32">
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 bg-neutral-50/80 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neutral-950" />
                    <span className="text-sm font-medium tracking-tight">ProctorAI</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm text-neutral-500">
                    <a href="#philosophy" className="hover:text-neutral-950 transition-colors">Philosophy</a>
                    <a href="#monitoring" className="hover:text-neutral-950 transition-colors">Monitoring</a>
                    <a href="#analysis" className="hover:text-neutral-950 transition-colors">Analysis</a>
                    <a href="#intelligence" className="hover:text-neutral-950 transition-colors">Intelligence</a>
                </div>
                <div className="text-sm text-neutral-400 font-mono">v2.0</div>
            </nav>

            <div className="max-w-5xl">
                <p className="text-sm font-mono text-neutral-400 mb-8 tracking-widest uppercase">
                    AI-Powered Exam Surveillance
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] text-neutral-950 mb-8">
                    Observe.<br />
                    Understand.<br />
                    Protect.
                </h1>
                <p className="text-lg md:text-xl text-neutral-500 max-w-xl leading-relaxed mt-12">
                    A silent intelligence layer that watches, interprets, and safeguards the integrity of every examination — without intrusion.
                </p>
            </div>

            <div className="mt-24 flex items-center gap-6">
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                    <div className="w-8 h-px bg-neutral-300" />
                    <span className="font-mono">Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}
