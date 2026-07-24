import type { Metadata } from "next";
import { Container } from "@/components/atoms/Container";
import { PageHero } from "@/components/organisms/PageHero";
import { AiAssistantPanel } from "@/features/ai/AiAssistantPanel";

export const metadata: Metadata = {
  title: "AI Assistant",
  description: "AI Procurement Assistant for supplier matching, RFQ drafts, and landed cost.",
};

export default function AiAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Module 19"
        title="AI Procurement Assistant"
        description="Match suppliers, draft RFQs, estimate landed cost, and prepare customs hints — demo assistant with catalog-aware responses."
      />
      <section className="py-16">
        <Container>
          <AiAssistantPanel />
        </Container>
      </section>
    </>
  );
}
