import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services, Residential & Commercial Plumbing Melbourne",
  description:
    "Full-scope residential & commercial plumbing services for Melbourne builders and developers. Rough-in, fit-outs, hydraulics, gas, drainage, roofing, hot water, and maintenance contracts.",
  openGraph: {
    title: "Services | Livesay Plumbing",
    description:
      "Full-scope residential & commercial plumbing services for Melbourne builders and developers.",
  },
};

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26V16m0 0V8l8-4 8 4v8m-16 0h16m0 0v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <rect x="12" y="18" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Hydraulic Services",
    description:
      "Full hot and cold hydraulic services for residential and commercial projects, coordinated across all trades at every stage of the build.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
    title: "Gas Fitting",
    description:
      "Residential and commercial gas installation for new builds and upgrades.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 20l12-12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <path d="M10 20v-6l6-4 6 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <path d="M4 20h24v4H4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 20v4M16 20v4M24 20v4" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    title: "Roofing",
    description:
      "All roof works including new roofs, guttering, box gutters, downpipes, roof penetrations, flashings, skylights and roof replacements.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 24h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <path d="M8 24V14l8-6 8 6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <path d="M4 28v-4M28 28v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <path d="M12 24v-6h8v6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Sewer & Stormwater Drainage Systems",
    description:
      "Residential and commercial sewer and stormwater drainage, above and below ground. Pit installations, pump stations and detention systems.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12h24M4 20h24" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 4v24M20 4v24" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Maintenance",
    description:
      "Scheduled and reactive maintenance contracts for residential & commercial properties, strata managers, and developers.",
    highlight: "Fast response times",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4c0 0-8 6-8 14a8 8 0 0016 0c0-8-8-14-8-14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" fill="none"/>
        <path d="M16 14v8M12 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    ),
    title: "Water Filtration",
    description:
      "Whole house and whole property water filtration systems for residential, commercial, and rural properties. We supply and install systems that improve water quality, protect appliances, and meet the needs of your property and lifestyle.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="6" width="16" height="20" rx="0" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 14h8M12 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <path d="M14 6V4h4v2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Hot Water Specialist",
    description:
      "Residential & commercial hot water system upgrades, replacements, and new installations across all types, gas, electric, heat pump, and solar-boosted.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-black pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#888888] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            What We Do
          </p>
          <h1 className="text-white font-black leading-none mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Services
          </h1>
          <p className="text-[#888888] text-lg max-w-2xl leading-relaxed">
            Below ground to roofing. Livesay Plumbing partners with Melbourne
            builders and developers who need a plumbing contractor they can
            rely on at every stage of the project.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black">
            {services.map((service, i) => (
              <div key={service.title} className="h-full">
                <ServiceCard {...service} index={i} />
              </div>
            ))}
            {/* 8th slot, CTA card to complete the grid */}
            <div className="bg-black p-8 flex flex-col justify-between h-full min-h-[220px]">
              <p className="text-white font-black text-base uppercase tracking-wide leading-snug">
                Got a project in the pipeline?
              </p>
              <a
                href="/contact"
                className="mt-6 inline-block bg-[#1e5fa8] text-white text-xs font-bold px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-[#1e5fa8] border border-[#1e5fa8] transition-colors duration-150 self-start"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Got a project in the pipeline? Get in touch."
        subtext="Tell us about your upcoming build and we'll put together a competitive quote fast."
        buttonLabel="Request a Quote"
        href="/contact"
        dark
      />
    </>
  );
}
