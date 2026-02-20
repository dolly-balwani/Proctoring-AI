export default function ClosingSection() {
    return (
        <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-32 md:py-48 bg-neutral-950 text-white">
            <div className="max-w-4xl">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-12">
                    Integrity is not enforced.<br />
                    It is understood.
                </h2>
                <p className="text-lg text-neutral-400 max-w-xl leading-relaxed mb-16">
                    ProctorAI is built for institutions that believe in rigorous,
                    respectful, and intelligent examination oversight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-white text-neutral-950 text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors">
                        Request Access
                    </button>
                    <button className="px-8 py-4 border border-neutral-700 text-neutral-300 text-sm font-medium rounded-lg hover:border-neutral-500 hover:text-white transition-colors">
                        Read Documentation
                    </button>
                </div>
            </div>

            <footer className="mt-32 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-sm font-medium">ProctorAI</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-neutral-500">
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Contact</span>
                </div>
                <p className="text-sm text-neutral-600 font-mono">© 2026</p>
            </footer>
        </section>
    );
}
