"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border border-black bg-white p-8 hover:bg-[#F2F2F2] transition-colors duration-200 group h-full"
    >
      <div className="text-black mb-6 group-hover:scale-105 transition-transform duration-200">
        {icon}
      </div>
      <h3 className="font-black text-base uppercase tracking-wide text-black mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-[#888888] text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
