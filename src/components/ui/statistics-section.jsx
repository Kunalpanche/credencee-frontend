"use client";

import React from "react";

const stats = [
  {
    title: "STUDENTS CERTIFIED",
    value: "10,000+",
    description:
      "Successfully certified students across educational programs and organizations.",
  },
  {
    title: "VERIFICATION SPEED",
    value: "Instant",
    description:
      "Fast certificate verification via QR code and secure public links in under a second.",
  },
  {
    title: "TAMPER-PROOF IDENTITY",
    value: "100%",
    description:
      "Secure digital credentials backed by advanced cryptographic signing technology.",
  },
  {
    title: "ENTERPRISE INFRASTRUCTURE",
    value: "99.99%",
    description:
      "Trusted by educational institutions for robust, scalable, and tamper-proof credential issuance.",
  },
];

export function StatisticsSection() {
  return (
    <section id="statistics" className="py-24 relative overflow-hidden z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight leading-[1.1]">
              Track Record
              <br />
              Of Excellence
            </h2>
          </div>
          <div className="max-w-[280px] md:text-right mb-2">
            <p className="text-muted-foreground text-sm leading-relaxed">
              A data-driven reflection
              <br />
              of our work and impact.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-card/50 backdrop-blur-md border border-border/40 rounded-[24px] p-8 flex flex-col justify-between min-h-[340px] hover:bg-card/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group"
            >
              <h3 className="text-foreground font-heading font-semibold text-base uppercase tracking-tight max-w-[160px] leading-tight">
                {stat.title}
              </h3>

              <div className="flex-1 flex items-center group-hover:scale-105 transition-transform duration-300 origin-left">
                <span className="text-6xl md:text-7xl font-heading font-bold text-primary tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                  {stat.value}
                </span>
              </div>

              <p className="text-muted-foreground text-[14px] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
