export default function BehavioralAnalysisSection() {
    const behaviors = [
        { label: "Gaze deviation", value: 12, max: 100 },
        { label: "Head movement", value: 8, max: 100 },
        { label: "Object detection", value: 3, max: 100 },
        { label: "Audio anomaly", value: 5, max: 100 },
        { label: "Posture shift", value: 18, max: 100 },
    ];

    const timeSegments = [
        { time: "00:00", level: 1 },
        { time: "00:15", level: 2 },
        { time: "00:30", level: 1 },
        { time: "00:45", level: 3 },
        { time: "01:00", level: 1 },
        { time: "01:15", level: 2 },
        { time: "01:30", level: 4 },
        { time: "01:45", level: 2 },
        { time: "02:00", level: 1 },
        { time: "02:15", level: 1 },
    ];

    return (
        <section id="analysis" className="px-6 md:px-16 lg:px-24 xl:px-32 py-32 md:py-48">
            <div className="max-w-6xl">
                <p className="text-sm font-mono text-neutral-400 mb-6 tracking-widest uppercase">
                    03 — Behavioral Analysis
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-950 mb-6">
                    Patterns reveal intent.
                </h2>
                <p className="text-lg text-neutral-500 max-w-2xl mb-20 leading-relaxed">
                    The system decomposes behavior into discrete signals — each weighted,
                    correlated, and scored against a baseline of expected conduct.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-8">
                            Signal Distribution
                        </p>
                        <div className="space-y-6">
                            {behaviors.map((b) => (
                                <div key={b.label}>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <span className="text-sm text-neutral-700">{b.label}</span>
                                        <span className="text-sm font-mono text-neutral-400">{b.value}%</span>
                                    </div>
                                    <div className="w-full h-1 bg-neutral-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-neutral-950 rounded-full"
                                            style={{ width: `${b.value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-8">
                            Anomaly Density Over Time
                        </p>
                        <div className="flex items-end gap-2 h-48">
                            {timeSegments.map((seg, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                                    <div
                                        className="w-full bg-neutral-950 rounded-sm"
                                        style={{ height: `${seg.level * 25}%` }}
                                    />
                                    <span className="text-[10px] font-mono text-neutral-400 mt-3">{seg.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Models Active</p>
                        <p className="text-2xl font-semibold text-neutral-950">7</p>
                    </div>
                    <div>
                        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Signals / Min</p>
                        <p className="text-2xl font-semibold text-neutral-950">1,240</p>
                    </div>
                    <div>
                        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Correlation Score</p>
                        <p className="text-2xl font-semibold text-neutral-950">0.96</p>
                    </div>
                    <div>
                        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Confidence</p>
                        <p className="text-2xl font-semibold text-neutral-950">High</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
