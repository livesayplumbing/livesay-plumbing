"use client";

import { motion } from "framer-motion";

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
    title: "Mobilise to Your Schedule",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
    title: "Complete, Compliant & Ready for Handover",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h6l3 8 5-18 3 10h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    ),
    title: "We Respond Within 1 Business Day",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white border-t border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        {/* Header */}
        <div className="mb-16 border-b border-black pb-8">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#888888] mb-3">
            Why Builders Choose Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight max-w-2xl">
            The trade partner you can depend on.
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-black p-8 -mt-px -ml-px"
            >
              <div className="text-black mb-6">{value.icon}</div>
              <h3 className="font-black text-base uppercase tracking-wide text-black leading-snug">
                {value.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
