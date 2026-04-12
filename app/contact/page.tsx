import type { Metadata } from "next";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact, Request a Quote",
  description:
    "Get in touch with Livesay Plumbing. Tell us about your project and our team will get back to you fast with a competitive residential & commercial quote.",
  openGraph: {
    title: "Contact | Livesay Plumbing",
    description:
      "Request a residential & commercial plumbing quote from Livesay Plumbing, Melbourne.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-black pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#888888] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Get a Quote
          </p>
          <h1
            className="text-white font-black leading-none mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Let's Work
            <br />
            Together.
          </h1>
          <p className="text-[#888888] text-lg max-w-xl leading-relaxed">
            Tell us about your project and we'll get back to you fast.
          </p>
        </div>
      </section>

      {/* Form + Contact Panel */}
      <section className="bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form, 2 cols */}
            <div className="lg:col-span-2">
              <div className="border-b border-black pb-6 mb-10">
                <h2 className="text-2xl font-black text-black uppercase tracking-wide">
                  Project Enquiry
                </h2>
                <p className="text-[#888888] text-sm mt-2">
                  Fields marked * are required.
                </p>
              </div>
              <QuoteForm />
            </div>

            {/* Contact Panel, 1 col */}
            <div className="lg:col-span-1">
              <div className="border border-black">
                {/* Company header */}
                <div className="bg-black p-8">
                  <div className="mb-5">
                    <Image
                      src="/logo.png"
                      alt="Livesay Plumbing"
                      width={140}
                      height={50}
                      className="h-10 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                  <p className="text-white font-black text-xl uppercase tracking-wide">
                    Livesay Plumbing
                  </p>
                  <p className="text-[#888888] text-xs uppercase tracking-widest mt-1">
                    Residential & Commercial Plumbing, Melbourne
                  </p>
                </div>

                {/* Contact Details */}
                <div className="p-8 flex flex-col gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+61410982052"
                      className="text-black font-bold text-lg hover:text-[#888888] transition-colors"
                    >
                      +61 410 982 052
                    </a>
                  </div>

                  <div className="border-t border-[#F2F2F2] pt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:info@livesayplumbing.com.au"
                      className="text-black font-medium text-sm hover:text-[#888888] transition-colors break-all"
                    >
                      info@livesayplumbing.com.au
                    </a>
                  </div>

                  <div className="border-t border-[#F2F2F2] pt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2">
                      Service Area
                    </p>
                    <p className="text-black text-sm font-medium">
                      Greater Melbourne, VIC
                    </p>
                    <p className="text-[#888888] text-xs mt-1 leading-relaxed">
                      We operate across all Melbourne metro suburbs and
                      surrounding areas.
                    </p>
                  </div>

                  <div className="border-t border-[#F2F2F2] pt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2">
                      Response Time
                    </p>
                    <p className="text-black text-sm font-medium">
                      Within 24 hours
                    </p>
                    <p className="text-[#888888] text-xs mt-1 leading-relaxed">
                      We respond to all enquiries promptly. For urgent project
                      needs, call us directly.
                    </p>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="px-8 pb-8">
                  <a
                    href="tel:+61410982052"
                    className="w-full bg-black text-white text-sm font-bold py-4 uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors duration-150 flex items-center justify-center gap-3"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M3 1h3l1.5 4-2 1.5a9 9 0 004 4L11 8.5l4 1.5v3a1 1 0 01-1 1A13 13 0 012 2a1 1 0 011-1z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="square"
                        fill="none"
                      />
                    </svg>
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom info strip */}
      <section className="bg-[#F2F2F2] border-b border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {[
              {
                label: "Licensed & Insured",
                desc: "Fully licensed residential & commercial plumbing contractor. Full public liability and professional indemnity coverage.",
              },
              {
                label: "Fast Quoting",
                desc: "We understand tender timelines. We turn quotes around quickly without compromising accuracy.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-black p-8 -mt-px -ml-px bg-white"
              >
                <p className="font-black text-sm uppercase tracking-wide text-black mb-2">
                  {item.label}
                </p>
                <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
