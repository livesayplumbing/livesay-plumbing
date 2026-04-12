"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  index?: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  rating,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-black bg-white p-8 flex flex-col gap-6"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill={i < rating ? "#000000" : "none"}
            stroke="#000000"
            strokeWidth="1.5"
          >
            <polygon points="7,1 8.8,5.2 13.5,5.5 10,8.5 11.1,13.2 7,10.5 2.9,13.2 4,8.5 0.5,5.5 5.2,5.2" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-black text-sm leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="border-t border-black pt-5">
        <p className="font-black text-sm uppercase tracking-wide text-black">
          {name}
        </p>
        <p className="text-[#888888] text-xs uppercase tracking-widest mt-1">
          {role}, {company}
        </p>
      </div>
    </motion.div>
  );
}
