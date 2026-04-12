import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About, Livesay Plumbing",
  description:
    "Livesay Plumbing, Melbourne's trusted residential & commercial plumbing contractor. Fully licensed, insured, and based in Frankston South. Serving builders and developers across the southeastern suburbs.",
  openGraph: {
    title: "About | Livesay Plumbing",
    description:
      "Livesay Plumbing, residential & commercial plumbing built on quality and reliability. Serving Melbourne's southeastern corridor.",
  },
};

const licences = [
  { label: "Plumbing Licence", value: "Licence No. 52722", issuer: "BPC, Building & Plumbing Commission" },
  { label: "Public Liability Insurance", value: "$20,000,000 Cover", issuer: "" },
  { label: "ABN", value: "53 855 113 375", issuer: "Australian Business Register" },
];

const suburbZones = [
  {
    zone: "CBD & Inner City",
    suburbs: ["Melbourne CBD", "Docklands", "Port Melbourne", "South Yarra", "St Kilda", "Richmond", "Cremorne"],
  },
  {
    zone: "Inner Southeast",
    suburbs: ["Prahran", "Windsor", "Armadale", "Malvern", "Glen Iris", "Hawthorn", "Toorak", "Caulfield"],
  },
  {
    zone: "Middle Southeast",
    suburbs: ["Bentleigh", "Moorabbin", "Highett", "Hampton", "Sandringham", "Cheltenham", "Mentone", "Mordialloc"],
  },
  {
    zone: "Eastern Suburbs",
    suburbs: ["Clayton", "Oakleigh", "Springvale", "Noble Park", "Dandenong", "Keysborough", "Dingley Village", "Lynbrook"],
  },
  {
    zone: "Outer Southeast",
    suburbs: ["Chelsea", "Edithvale", "Bonbeach", "Carrum", "Seaford", "Carrum Downs", "Skye", "Langwarrin"],
  },
  {
    zone: "Frankston & Peninsula",
    suburbs: ["Frankston South ★", "Frankston", "Karingal", "Mount Eliza", "Mornington", "Baxter", "Somerville", "Cranbourne"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-black pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#888888] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Who We Are
          </p>
          <h1
            className="text-white font-black leading-none mb-6 uppercase"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Livesay Plumbing
          </h1>
          <p className="text-[#888888] text-lg max-w-2xl leading-relaxed">
            Melbourne-based residential & commercial plumbing company.
            Built on quality and reliability, serving builders, developers,
            and property owners across the southeastern suburbs.
          </p>
        </div>
      </section>

      {/* About the Company */}
      <section className="bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left, Company values */}
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#888888] mb-6">
                About Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-black leading-tight mb-8">
                A plumbing business built on doing the job right.
              </h2>
              <div className="flex flex-col gap-5 text-[#888888] leading-relaxed text-base">
                <p>
                  Livesay Plumbing brings over 20 years of experience delivering
                  residential and commercial plumbing across Melbourne.
                </p>
                <p>
                  We work alongside builders as a reliable, professional trade
                  partner — focused on quality and efficiency.
                </p>
              </div>
            </div>

            {/* Right, Stats + values */}
            <div className="flex flex-col gap-0">
              <div className="grid grid-cols-2 gap-0">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "Res. & Commercial", label: "Plumbing" },
                  { value: "Licensed", label: "& Fully Insured" },
                  { value: "Melbourne", label: "Based" },
                ].map((stat) => (
                  <div key={stat.label} className="border border-black p-6 -mt-px -ml-px">
                    <p className="text-black font-black text-xl mb-1 leading-tight">{stat.value}</p>
                    <p className="text-[#888888] text-xs uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="border border-black border-t-0 bg-[#F2F2F2] p-8">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#888888] mb-4">
                  Why builders choose us
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Clean. Professional. Reliable.",
                    "On time — no delays",
                    "We handle the full scope",
                    "Quick to respond and solve problems",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-black flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.2" strokeLinecap="square"/>
                        </svg>
                      </div>
                      <p className="text-[#888888] text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licences & Compliance */}
      <section className="bg-[#F2F2F2] border-b border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="border-b border-black pb-8 mb-12">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#888888] mb-3">
              Credentials
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
              Licences & Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {licences.map((item, i) => (
              <div key={i} className="border border-black p-8 -mt-px -ml-px bg-white">
                <div className="w-8 h-8 bg-black mb-5 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 3" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
                  </svg>
                </div>
                <p className="font-black text-sm uppercase tracking-wide text-black mb-2">
                  {item.label}
                </p>
                <p className="text-black font-bold text-base mb-1">{item.value}</p>
                <p className="text-[#888888] text-xs">{item.issuer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-black bg-white p-6">
            <p className="text-[#888888] text-sm leading-relaxed">
              All licences are current and verifiable through the Building & Plumbing Commission (BPC).
              Copies of insurance certificates and licence documents are available on request.{" "}
              <a href="/contact" className="text-black font-medium underline hover:no-underline">
                Contact us for documentation.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="border-b border-black pb-8 mb-12">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#888888] mb-3">
              Where We Work
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight max-w-2xl">
              Melbourne's Southeastern Corridor
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Description */}
            <div className="lg:col-span-1">
              <p className="text-[#888888] leading-relaxed mb-6">
                Based in Frankston South, Livesay Plumbing covers an equal
                radius north to the Melbourne CBD and south through the
                Mornington Peninsula, with strong coverage across the eastern
                and southeastern suburbs.
              </p>
              <p className="text-[#888888] leading-relaxed mb-8">
                For projects outside this area, reach out, we assess each
                opportunity individually and can mobilise resources for the
                right project.
              </p>
              <div className="border border-black p-6 bg-[#F2F2F2]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2">Base Location</p>
                <p className="font-black text-black text-lg uppercase tracking-wide">Frankston South, VIC</p>
                <p className="text-[#888888] text-sm mt-1">Serving Greater Melbourne</p>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-block bg-black text-white text-sm font-bold px-8 py-4 uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors duration-150"
              >
                Enquire About Your Location
              </Link>
            </div>

            {/* Suburb Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {suburbZones.map((zone, i) => (
                  <div key={i} className="border border-black p-6 -mt-px -ml-px">
                    <p className="text-xs font-black uppercase tracking-widest text-black mb-4 border-b border-black pb-3">
                      {zone.zone}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {zone.suburbs.map((suburb) => (
                        <span
                          key={suburb}
                          className={`text-xs px-2.5 py-1.5 uppercase tracking-wide font-medium border ${
                            suburb.includes("★")
                              ? "bg-black text-white border-black"
                              : "bg-[#F2F2F2] text-black border-[#888888]"
                          }`}
                        >
                          {suburb}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#888888] text-xs mt-4">
                ★ Base location &nbsp;·&nbsp; Coverage extends further, enquire for your specific suburb.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to work with us?"
        subtext="Get in touch and we'll respond fast with a quote tailored to your project."
        buttonLabel="Request a Quote"
        href="/contact"
        dark
      />
    </>
  );
}
