import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Hero195 } from "@/components/ui/hero-195";
import { FeatureStack } from "@/components/ui/feature-stack";
import { StatisticsSection } from "@/components/ui/statistics-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { FaqSection } from "@/components/ui/faq-section";
import { MinimalFooter } from "@/components/ui/minimal-footer";

const HomePage = () => {
  return (
    <div className="min-h-screen text-foreground font-sans transition-colors duration-300 selection:bg-primary/20">
      {/* Integrated Shadcn Hero195 tabbed dashboard preview */}
      <Hero195 />

      {/* Core Features Section (Modular Stack Animation) */}
      <section id="features" className="w-full">
        <FeatureStack />
      </section>

      {/* Track Record of Excellence (Statistics) */}
      <StatisticsSection />

      {/* New 100vh Split Layout Pricing Section */}
      <PricingSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer (Bento Minimal Layout) */}
      <MinimalFooter />
    </div>
  );
};

export default HomePage;
