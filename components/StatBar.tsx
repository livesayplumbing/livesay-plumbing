"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "Licensed", label: "& Fully Insured" },
  { value: "Melbourne", label: "Based & Operated" },
];

export default function StatBar() {
  return (
    <section className="bg-[#1a1a1a] border-t border-b border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="py-10 px-6 border-r border-white/10 last:border-r-0 border-b lg:border-b-0 even:border-r-0 lg:even:border-r"
            >
              <p className="text-white font-black text-3xl lg:text-4xl mb-1 leading-none">
                {stat.value}
              </p>
              <p className="text-[#888888] text-xs uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
