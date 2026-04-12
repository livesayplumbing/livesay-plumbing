"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  category: string;
  location: string;
  description: string;
  image?: string;
  index?: number;
}

export default function ProjectCard({
  name,
  category,
  location,
  description,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-black bg-white group hover:bg-[#F2F2F2] transition-colors duration-200"
    >
      {/* Image */}
      <div className="aspect-[16/9] w-full relative overflow-hidden bg-[#1a1a1a]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 font-black text-5xl select-none">LP</span>
          </div>
        )}
        {/* Dark overlay */}
        {image && (
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
        )}
        {/* Category tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white text-black text-xs font-bold px-3 py-1.5 uppercase tracking-widest">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 border-t border-black">
        <h3 className="font-black text-base uppercase tracking-wide text-black leading-snug mb-2">
          {name}
        </h3>
        <p className="text-[#888888] text-xs uppercase tracking-widest mb-3 font-medium">
          {location}
        </p>
        <p className="text-sm text-[#888888] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
