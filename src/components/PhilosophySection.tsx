export default function PhilosophySection() {
    return (
        <section id="philosophy" className="px-6 md:px-16 lg:px-24 xl:px-32 py-32 md:py-48">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-6xl">
                <div>
                    <p className="text-sm font-mono text-neutral-400 mb-6 tracking-widest uppercase">
                        01 — Philosophy
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-950">
                        Surveillance should be felt, not seen.
                    </h2>
                </div>
                <div className="flex flex-col justify-end">
                    <p className="text-neutral-500 text-lg leading-relaxed mb-8">
                        ProctorAI operates as an ambient intelligence layer.
                        It does not confront — it comprehends. Every micro-expression,
                        every gaze deviation, every behavioral anomaly is silently
                        catalogued and contextualized.
                    </p>
                    <p className="text-neutral-500 text-lg leading-relaxed mb-12">
                        The system exists at the intersection of computer vision,
                        behavioral psychology, and statistical inference. No alerts.
                        No interruptions. Just truth.
                    </p>
                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
                        <div>
                            <p className="text-3xl font-semibold text-neutral-950">99.7%</p>
                            <p className="text-sm text-neutral-400 mt-1">Detection accuracy</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-neutral-950">&lt;40ms</p>
                            <p className="text-sm text-neutral-400 mt-1">Inference latency</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-neutral-950">Zero</p>
                            <p className="text-sm text-neutral-400 mt-1">False positives shipped</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
