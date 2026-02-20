export default function MonitoringSection() {
    return (
        <section id="monitoring" className="px-6 md:px-16 lg:px-24 xl:px-32 py-32 md:py-48 bg-neutral-950 text-white">
            <div className="max-w-6xl">
                <p className="text-sm font-mono text-neutral-500 mb-6 tracking-widest uppercase">
                    02 — Live Monitoring
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-16">
                    Every frame, analyzed.
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 aspect-video bg-neutral-900 rounded-lg border border-neutral-800 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full border-2 border-neutral-700 mx-auto mb-4 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-neutral-500" />
                                </div>
                                <p className="text-sm text-neutral-500 font-mono">Live Feed — Exam Hall A</p>
                            </div>
                        </div>
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-xs font-mono text-neutral-500">REC</span>
                        </div>
                        <div className="absolute top-4 right-4">
                            <span className="text-xs font-mono text-neutral-600">14:32:07</span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                            <div className="flex gap-4">
                                <div className="text-xs font-mono text-neutral-600">
                                    <span className="text-neutral-400">FPS</span> 30
                                </div>
                                <div className="text-xs font-mono text-neutral-600">
                                    <span className="text-neutral-400">RES</span> 1080p
                                </div>
                            </div>
                            <div className="text-xs font-mono text-neutral-600">
                                <span className="text-neutral-400">SUBJECTS</span> 48
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex-1 bg-neutral-900 rounded-lg border border-neutral-800 p-6 flex flex-col justify-between">
                            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Trust Score</p>
                            <div>
                                <p className="text-5xl font-semibold text-white">94</p>
                                <p className="text-sm text-neutral-500 mt-1">/ 100</p>
                            </div>
                            <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden mt-4">
                                <div className="w-[94%] h-full bg-neutral-400 rounded-full" />
                            </div>
                        </div>
                        <div className="flex-1 bg-neutral-900 rounded-lg border border-neutral-800 p-6 flex flex-col justify-between">
                            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Anomalies</p>
                            <p className="text-5xl font-semibold text-white">3</p>
                            <p className="text-sm text-neutral-500">flagged this session</p>
                        </div>
                        <div className="flex-1 bg-neutral-900 rounded-lg border border-neutral-800 p-6 flex flex-col justify-between">
                            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Uptime</p>
                            <p className="text-2xl font-semibold text-white font-mono">02:14:33</p>
                            <p className="text-sm text-neutral-500">continuous analysis</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
