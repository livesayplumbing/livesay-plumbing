import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import StatBar from "@/components/StatBar";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Livesay Plumbing | Residential & Commercial Plumbing Melbourne",
  description:
    "Melbourne's residential & commercial plumbing company for builders and developers. On time. On site. Done right. Contact Livesay Plumbing for a quote.",
  openGraph: {
    title: "Livesay Plumbing | Residential & Commercial Plumbing Melbourne",
    description:
      "Melbourne's residential & commercial plumbing contractor for builders and developers. On time. On site. Done right.",
  },
};



const photoStrip = [
  { src: "/photos/32.jpg", alt: "Roof plumbing" },
  { src: "/photos/78.jpg", alt: "Hot water system" },
  { src: "/photos/24.jpg", alt: "Drainage excavation" },
  { src: "/photos/66.jpg", alt: "Livesay Plumbing work" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <StatBar />

      {/* How We Work, Process */}
      <section className="bg-white border-t border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="border-b border-black pb-8 mb-12">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#888888] mb-3">
              Our Process
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
              How we work.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              {
                step: "01",
                title: "Enquiry",
                desc: "Submit your project details via phone, email, or our quote form. We respond within 1 business day.",
              },
              {
                step: "02",
                title: "Quote",
                desc: "We review your scope and provide a detailed, competitive quote. No vague estimates, you know exactly what you're getting.",
              },
              {
                step: "03",
                title: "On Site",
                desc: "We mobilise to your schedule. Clean, professional, coordinated with your other trades. No surprises.",
              },
              {
                step: "04",
                title: "Handover",
                desc: "Complete, compliant, and ready for handover.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-black p-8 -mt-px -ml-px">
                <p className="font-black text-6xl leading-none mb-6 select-none text-[#E0E0E0]">
                  {item.step}
                </p>
                <h3 className="font-black text-base uppercase tracking-wide text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="border-t border-black grid grid-cols-2 lg:grid-cols-4">
        {photoStrip.map((photo, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden border-r border-black last:border-r-0 bg-[#1a1a1a]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </section>



      <CTABanner
        headline="Working on a project? Let's talk."
        subtext="Tell us about your build and we'll get back to you fast with a competitive quote."
        buttonLabel="Contact Us"
        href="/contact"
        dark
      />
    </>
  );
}
