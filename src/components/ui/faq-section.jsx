import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How secure are the digital credentials?",
    answer: "Our platform utilizes bank-grade encryption and blockchain-backed verification. Every credential issued is cryptographically signed, making it completely tamper-proof and instantly verifiable by any third party."
  },
  {
    question: "Can I issue certificates in bulk?",
    answer: "Absolutely. You can easily upload a CSV file or connect your CRM via our API to issue thousands of personalized credentials simultaneously, saving you hours of manual work."
  },
  {
    question: "Does the platform support custom branding?",
    answer: "Yes, our white-label solution allows you to fully customize the credential designs, email templates, and the verification landing pages with your organization's logo, colors, and typography."
  },
  {
    question: "How do earners share their credentials?",
    answer: "Earners receive a secure link to their credential, which features one-click sharing integrations for LinkedIn (as a verified license/certification), Twitter, Facebook, and direct PDF downloads."
  },
  {
    question: "Is there an API available for integration?",
    answer: "Yes, we offer a comprehensive REST API and webhooks. You can seamlessly integrate credential issuance and verification directly into your existing LMS, CRM, or custom software stack."
  },
  {
    question: "How does the pricing structure work?",
    answer: "We offer flexible, tier-based pricing depending on your issuance volume. Unlike traditional platforms, we don't charge per-verification fees, and active credentials remain hosted forever."
  },
  {
    question: "Can I revoke or expire a credential?",
    answer: "Yes. As an issuer, you maintain full control. You can set automatic expiration dates during issuance, or manually revoke a credential at any time if compliance or certification statuses change."
  },
  {
    question: "Do you provide analytics on credential usage?",
    answer: "We provide deep, real-time analytics. You can track open rates, share rates across social media, and see exactly how many times each credential has been verified by employers."
  }
];

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div 
      className={cn(
        "border border-border/40 rounded-2xl overflow-hidden transition-all duration-300",
        isOpen ? "bg-primary/5 border-primary/30" : "bg-card/50 hover:bg-card hover:border-border"
      )}
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
      >
        <span className={cn(
          "font-medium text-[15px] transition-colors",
          isOpen ? "text-primary font-semibold" : "text-foreground"
        )}>
          {question}
        </span>
        <div className={cn(
          "ml-4 flex-shrink-0 transition-transform duration-300",
          isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
        )}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/20 mt-1">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // Split FAQs into two columns for desktop
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section id="faq" className="relative py-24 select-none bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Everything you need to know about issuing and managing digital credentials on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftColumnFaqs.map((faq, index) => {
              const actualIndex = index;
              return (
                <FaqItem
                  key={`left-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === actualIndex}
                  onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                />
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightColumnFaqs.map((faq, index) => {
              const actualIndex = index + leftColumnFaqs.length;
              return (
                <FaqItem
                  key={`right-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === actualIndex}
                  onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
