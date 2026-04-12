"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  buttonLabel?: string;
  href?: string;
  dark?: boolean;
}

export default function CTABanner({
  headline = "Working on a project? Let's talk.",
  subtext = "Tell us about your build and we'll respond fast with a competitive quote.",
  buttonLabel = "Get in Touch",
  href = "/contact",
  dark = false,
}: CTABannerProps) {
  return (
    <section
      className={`border-t border-black ${dark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h2
              className="font-black leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {headline}
            </h2>
            <p className={`text-base ${dark ? "text-[#888888]" : "text-[#888888]"}`}>
              {subtext}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href={href}
              className={`inline-block text-sm font-bold px-10 py-4 uppercase tracking-widest transition-colors duration-150 ${
                dark
                  ? "bg-white text-black hover:bg-black hover:text-white border border-white"
                  : "bg-black text-white hover:bg-white hover:text-black border border-black"
              }`}
            >
              {buttonLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
