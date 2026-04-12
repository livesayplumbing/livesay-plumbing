import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Work, Livesay Plumbing",
  description:
    "Browse the work of Livesay Plumbing, residential and commercial plumbing across Melbourne's southeastern suburbs.",
  openGraph: {
    title: "Our Work | Livesay Plumbing",
    description:
      "Residential and commercial plumbing work across Melbourne by Livesay Plumbing.",
  },
};

const photos = [
  "/photos/24.jpg",
  "/photos/03.jpg",
  "/photos/32.jpg",
  "/photos/111.jpg",
  "/photos/h.jpg",
  "/photos/22.jpg",
  "/photos/222.jpg",
  "/photos/33.jpg",
  "/photos/44.jpg",
  "/photos/444.jpg",
  "/photos/66.jpg",
  "/photos/666.jpg",
  "/photos/6666.jpg",
  "/photos/777.jpg",
  "/photos/8888.jpg",
  "/photos/91.jpg",
  "/photos/92.jpg",
  "/photos/99.jpg",
  "/photos/1.jpg",
  "/photos/11.png",
  "/photos/27.jpg",
  "/photos/02.jpg",
  "/photos/56.jpg",
  "/photos/65.jpg",
  "/photos/78.jpg",
  "/photos/88.jpg",
  "/photos/2.jpg",
];

export default function OurWorkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-black pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#888888] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Portfolio
          </p>
          <h1
            className="text-white font-black leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Our Work
          </h1>
          <p className="text-[#888888] text-lg max-w-2xl leading-relaxed">
            A selection of residential and commercial plumbing work across
            Melbourne's southeastern suburbs.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {photos.map((src, i) => (
              <div
                key={i}
                className="border border-black -mt-px -ml-px overflow-hidden group"
              >
                <div className="bg-[#1a1a1a] aspect-[4/3] w-full relative">
                  <Image
                    src={src}
                    alt="Livesay Plumbing work"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Like what you see? Let's work together."
        subtext="Get in touch and we'll put together a quote for your project."
        buttonLabel="Request a Quote"
        href="/contact"
        dark
      />
    </>
  );
}
