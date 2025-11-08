import { AccountAnalysisSection } from "@/components/AccountAnalysis";
import { ActionPlanSection } from "@/components/ActionPlanSection";
import { ContentMatrix } from "@/components/ContentMatrix";
import { DiscoverySection } from "@/components/DiscoverySection";
import { HeroSection } from "@/components/HeroSection";
import { HookPlaybookSection } from "@/components/HookPlaybookSection";
import { MetricsSection } from "@/components/MetricsSection";
import { OpsSection } from "@/components/OpsSection";
import { TimelineSection } from "@/components/TimelineSection";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
      <HeroSection />
      <AccountAnalysisSection />
      <HookPlaybookSection />
      <ContentMatrix />
      <TimelineSection />
      <OpsSection />
      <MetricsSection />
      <DiscoverySection />
      <ActionPlanSection />
      <footer className="pb-10 text-center text-xs text-mist/60">
        Built by the Hybrid Growth Intelligence Lab · Engineered for 100K followers in 10 months.
      </footer>
    </main>
  );
}
