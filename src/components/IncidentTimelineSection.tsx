export default function IncidentTimelineSection() {
    const incidents = [
        {
            time: "00:12:04",
            type: "Gaze",
            description: "Subject 14 — sustained lateral gaze deviation for 8.2 seconds",
            severity: "low",
        },
        {
            time: "00:34:17",
            type: "Object",
            description: "Subject 07 — unregistered device detected near workspace",
            severity: "high",
        },
        {
            time: "00:51:33",
            type: "Audio",
            description: "Ambient noise spike — localized to sector 3, Row B",
            severity: "medium",
        },
        {
            time: "01:08:45",
            type: "Posture",
            description: "Subject 22 — repeated forward lean pattern flagged",
            severity: "low",
        },
        {
            time: "01:42:11",
            type: "Gaze",
            description: "Subject 07 — secondary gaze anomaly correlated with prior flag",
            severity: "high",
        },
    ];

    const severityColor: Record<string, string> = {
        low: "bg-neutral-300",
        medium: "bg-neutral-500",
        high: "bg-neutral-950",
    };

    return (
        <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-32 md:py-48 bg-neutral-100">
            <div className="max-w-6xl">
                <p className="text-sm font-mono text-neutral-400 mb-6 tracking-widest uppercase">
                    04 — Incident Timeline
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-950 mb-6">
                    A chronology of signals.
                </h2>
                <p className="text-lg text-neutral-500 max-w-2xl mb-20 leading-relaxed">
                    Every flagged behavior is timestamped, classified, and placed within
                    the broader context of the examination session.
                </p>

                <div className="relative">
                    <div className="absolute left-[7px] top-0 bottom-0 w-px bg-neutral-300 hidden md:block" />
                    <div className="space-y-0">
                        {incidents.map((incident, i) => (
                            <div key={i} className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-neutral-200 last:border-b-0">
                                <div className="flex items-start gap-4 md:gap-0">
                                    <div className={`hidden md:block w-[15px] h-[15px] rounded-full ${severityColor[incident.severity]} mt-1 relative z-10`} />
                                    <div className="md:ml-6">
                                        <p className="font-mono text-sm text-neutral-950">{incident.time}</p>
                                        <p className="text-xs font-mono text-neutral-400 mt-1 uppercase tracking-wider">{incident.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between gap-4">
                                    <p className="text-neutral-700 leading-relaxed">{incident.description}</p>
                                    <span className={`shrink-0 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${incident.severity === "high"
                                            ? "border-neutral-950 text-neutral-950"
                                            : incident.severity === "medium"
                                                ? "border-neutral-400 text-neutral-500"
                                                : "border-neutral-300 text-neutral-400"
                                        }`}>
                                        {incident.severity}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
