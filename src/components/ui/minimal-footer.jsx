"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MinimalFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-card font-sans overflow-hidden border-t border-x border-border rounded-t-[32px] md:rounded-t-[48px] relative">
      {/* Primary color gradient glow effect at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      {/* The inner container keeps the content aligned with the rest of the site's max-width, while the background spans 100vw / w-full */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12 flex flex-col gap-8 md:gap-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Get started today
          </h2>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button className="font-medium px-6 py-3 h-auto rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Large Logo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-2 pb-6 w-full">
          {/* Logo Icon */}
          <img
            src="/3.png"
            alt="CredeneE Icon"
            width={192}
            height={192}
            loading="lazy"
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-md shrink-0"
          />
          {/* Text Logo */}
          <h1 className="text-[10vw] md:text-[80px] lg:text-[100px] font-medium text-foreground tracking-tight leading-none uppercase">
            CredenceE
          </h1>
        </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 text-sm text-muted-foreground w-full max-w-5xl">
          <div className="max-w-xs">
            <h4 className="text-foreground font-medium text-base mb-4">
              Get started with smarter, safer
              <br />
              credential operations.
            </h4>
          </div>

          <div>
            <h4 className="text-foreground font-medium text-base mb-4">
              Contact Us
            </h4>
            <p className="mb-2 leading-relaxed">
              Nagpur,
              <br />
              MH, INDIA
            </p>
            <a
              href="mailto:connect@credencee.com"
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              connect@credencee.com
            </a>
          </div>

          <div>
            <h4 className="text-foreground font-medium text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#statistics"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  Track Record
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-full gap-6">
          {/* Bottom Row */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-muted-foreground">
            <p>© {year} CredeneE. All Rights Reserved by Traillx.</p>
            <p>
              Crafted by{" "}
              <a
                href="https://traillx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Traillx
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
