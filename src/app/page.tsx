import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import TechShowcase from "@/components/landing/TechShowcase";
import FairnessPipeline from "@/components/landing/FairnessPipeline";
import ComparisonMatrix from "@/components/landing/ComparisonMatrix";
import DashboardPreview from "@/components/landing/DashboardPreview";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import CTASection from "@/components/landing/CTASection";
import ParticleField from "@/components/landing/ParticleField";

export default function Home() {
    return (
        <main className="relative">
            <ParticleField />
            <HeroSection />
            <ProblemSection />
            <TechShowcase />
            <FairnessPipeline />
            <ComparisonMatrix />
            <DashboardPreview />
            <ArchitectureSection />
            <CTASection />
        </main>
    );
}
