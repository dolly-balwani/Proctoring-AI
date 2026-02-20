import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import MonitoringSection from "@/components/MonitoringSection";
import BehavioralAnalysisSection from "@/components/BehavioralAnalysisSection";
import IncidentTimelineSection from "@/components/IncidentTimelineSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <PhilosophySection />
            <MonitoringSection />
            <BehavioralAnalysisSection />
            <IncidentTimelineSection />
            <IntelligenceSection />
            <ClosingSection />
        </main>
    );
}
