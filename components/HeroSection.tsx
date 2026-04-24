"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-black min-h-screen flex flex-col justify-center pt-16">
      {/* Large Logo Watermark, bottom right */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/logo.png"
          alt=""
          width={900}
          height={320}
          className="w-[60vw] max-w-3xl opacity-[0.28] brightness-0 invert object-contain -translate-x-8 -translate-y-8"
          priority
        />
      </div>

      {/* Horizontal rule accent */}
      <div className="absolute top-16 left-0 right-0 border-t border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#888888] text-xs font-bold tracking-[0.3em] uppercase mb-8"
          >
            Residential & Commercial Plumbing, Melbourne
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white leading-[0.95] mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.8rem)" }}
          >
            <span className="block font-thin tracking-[0.2em] uppercase" style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)" }}>
              Livesay Plumbing
            </span>
            <span className="block font-black mt-3">
              Built on <span className="text-[#1e5fa8]">Quality</span>
              <br />& Reliability.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[#888888] text-lg lg:text-xl font-light leading-relaxed max-w-xl mb-12"
          >
            Melbourne's residential & commercial plumbing partner for builders and developers
            who can't afford delays. Professional on site. Accountable start to finish.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-block bg-[#1e5fa8] text-white text-sm font-bold px-8 py-4 uppercase tracking-widest hover:bg-white hover:text-[#1e5fa8] border border-[#1e5fa8] transition-colors duration-150"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="inline-block bg-transparent text-white text-sm font-bold px-8 py-4 uppercase tracking-widest border border-white/30 hover:border-white transition-colors duration-150"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10" />
    </section>
  );
}
