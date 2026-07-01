import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export function PricingSection() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="pricing" className="w-full bg-transparent py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-[14px] font-semibold uppercase tracking-wider block mb-2">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight font-bold tracking-tight">
            Honest plans.
          </h2>
          <p className="text-muted-foreground text-[16px] mt-2">
            Pick the tier that fits your organization. Upgrade or downgrade
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {/* Starter Plan */}
          <div className="bg-card border border-border/50 rounded-[24px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div>
              <h3 className="font-bold text-[18px] text-card-foreground">
                Starter
              </h3>
              <p className="text-[14px] text-muted-foreground mt-1">
                Perfect for small training academies
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-[36px] font-bold text-card-foreground">
                  ₹499
                </span>
                <span className="text-[14px] text-muted-foreground">
                  /month
                </span>
              </div>
              <ul className="mt-8 flex flex-col gap-4 text-[14px]">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check size={14} className="text-primary" /> Up to 100
                  Credentials/mo
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check size={14} className="text-primary" /> 2 Active
                  Templates
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check size={14} className="text-primary" /> QR Verification
                </li>
              </ul>
            </div>
            <button
              onClick={handleScrollToContact}
              className="mt-8 block w-full text-center text-[14px] font-medium text-foreground hover:underline cursor-pointer bg-transparent border-0"
            >
              Get in Touch →
            </button>
          </div>

          {/* Growth Plan - Highlighted with primary border */}
          <div className="bg-card border-2 border-primary rounded-[24px] p-8 flex flex-col justify-between shadow-md relative hover:shadow-lg transition-all duration-300 z-10">
            <div className="absolute -top-3.5 left-6 bg-primary text-primary-foreground text-[13px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Popular
            </div>
            <div>
              <h3 className="font-bold text-[18px] text-card-foreground">
                Growth
              </h3>
              <p className="text-[14px] text-muted-foreground mt-1">
                For growing bootcamps & institutes
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-[36px] font-bold text-card-foreground">
                  ₹1,499
                </span>
                <span className="text-[14px] text-muted-foreground">
                  /month
                </span>
              </div>
              <ul className="mt-8 flex flex-col gap-4 text-[14px]">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check size={14} className="text-primary" /> Up to 1,000
                  Credentials/mo
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check size={14} className="text-primary" /> 10 Active
                  Templates
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check size={14} className="text-primary" /> Custom Branding
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check size={14} className="text-primary" /> CSV Bulk
                  Generation
                </li>
              </ul>
            </div>
            <button
              onClick={handleScrollToContact}
              className="mt-8 w-full bg-primary hover:bg-primary/90 text-primary-foreground text-center font-bold py-3 rounded-full transition-all shadow-md cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-card border border-border/50 rounded-[24px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div>
              <h3 className="font-bold text-[18px] text-card-foreground">
                Professional
              </h3>
              <p className="text-[14px] text-muted-foreground mt-1">
                For universities & enterprises
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-[36px] font-bold text-card-foreground">
                  ₹4,999
                </span>
                <span className="text-[14px] text-muted-foreground">
                  /month
                </span>
              </div>
              <ul className="mt-8 flex flex-col gap-4 text-[14px]">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check size={14} className="text-primary" /> Unlimited
                  Credentials
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check size={14} className="text-primary" /> Advanced
                  Analytics
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check size={14} className="text-primary" /> API & Webhooks
                  Access
                </li>
              </ul>
            </div>
            <button
              onClick={handleScrollToContact}
              className="mt-8 block w-full text-center text-[14px] font-medium text-foreground hover:underline cursor-pointer bg-transparent border-0"
            >
              Get in Touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
