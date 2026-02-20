export default function IntelligenceSection() {
    return (
        <section id="intelligence" className="px-6 md:px-16 lg:px-24 xl:px-32 py-32 md:py-48">
            <div className="max-w-6xl">
                <p className="text-sm font-mono text-neutral-400 mb-6 tracking-widest uppercase">
                    05 — Post-Exam Intelligence
                </p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-neutral-950 mb-16 max-w-4xl">
                    The exam ends. The analysis begins.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
                    <div className="bg-neutral-50 p-8 md:p-12">
                        <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center mb-8">
                            <span className="text-xs font-mono text-neutral-500">01</span>
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-950 mb-4">Session Report</h3>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            A comprehensive breakdown of every session — behavioral heatmaps,
                            anomaly clusters, and subject-level risk profiles compiled into a
                            single auditable document.
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-8 md:p-12">
                        <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center mb-8">
                            <span className="text-xs font-mono text-neutral-500">02</span>
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-950 mb-4">Pattern Graphs</h3>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Cross-session behavioral patterns visualized over time. Identify
                            repeat offenders, systemic vulnerabilities, and environmental
                            factors that correlate with misconduct.
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-8 md:p-12">
                        <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center mb-8">
                            <span className="text-xs font-mono text-neutral-500">03</span>
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-950 mb-4">Institutional Insights</h3>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Aggregate intelligence across departments, semesters, and exam
                            types. ProctorAI evolves its understanding with every session,
                            adapting baselines to institutional patterns.
                        </p>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="bg-neutral-100 rounded-lg p-8 md:p-12">
                        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-6">Sample Output</p>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="flex justify-between text-neutral-500">
                                <span>session_id</span>
                                <span className="text-neutral-950">EX-2026-0847</span>
                            </div>
                            <div className="h-px bg-neutral-200" />
                            <div className="flex justify-between text-neutral-500">
                                <span>subjects_analyzed</span>
                                <span className="text-neutral-950">48</span>
                            </div>
                            <div className="h-px bg-neutral-200" />
                            <div className="flex justify-between text-neutral-500">
                                <span>total_flags</span>
                                <span className="text-neutral-950">3</span>
                            </div>
                            <div className="h-px bg-neutral-200" />
                            <div className="flex justify-between text-neutral-500">
                                <span>integrity_score</span>
                                <span className="text-neutral-950">97.2</span>
                            </div>
                            <div className="h-px bg-neutral-200" />
                            <div className="flex justify-between text-neutral-500">
                                <span>report_status</span>
                                <span className="text-neutral-950">generated</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-neutral-950 mb-6">
                            From raw signal to institutional knowledge.
                        </h3>
                        <p className="text-neutral-500 leading-relaxed mb-6">
                            Every session contributes to a growing corpus of behavioral data.
                            ProctorAI transforms ephemeral observations into durable
                            intelligence that strengthens exam integrity over time.
                        </p>
                        <p className="text-neutral-500 leading-relaxed">
                            Reports are generated automatically, encrypted at rest,
                            and accessible only to authorized institutional stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
