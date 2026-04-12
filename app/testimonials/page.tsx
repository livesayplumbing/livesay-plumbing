import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Testimonials, What Builders Say",
  description:
    "Real feedback from Melbourne builders, project managers, and site foremen about working with Livesay Plumbing.",
  openGraph: {
    title: "Testimonials | Livesay Plumbing",
    description:
      "What Melbourne builders and developers say about working with Livesay Plumbing.",
  },
};

const testimonials = [
  {
    quote:
      "The Livesay team are exactly what you want on a commercial site, they show up on time, keep their area clean, and never leave you waiting on RFIs. They've been our preferred plumber on every project for the last three years.",
    name: "James R.",
    role: "Project Manager",
    company: "Coburn Build Group",
    rating: 5,
  },
  {
    quote:
      "We've used Livesay across three consecutive projects now. The difference is that they understand programme, they're not just plumbers, they think like builders. That makes a massive difference when you're trying to hit a handover date.",
    name: "Tom H.",
    role: "Site Foreman",
    company: "Meridian Constructions",
    rating: 5,
  },
  {
    quote:
      "Responsive, professional, and they solved a drainage issue on site that two other contractors had already given up on. Livesay Plumbing is the first call we make when we start a new project.",
    name: "Sarah M.",
    role: "Construction Director",
    company: "Apex Development Group",
    rating: 5,
  },
  {
    quote:
      "I've worked with a lot of trade contractors over the years. Livesay stand out because they take ownership. If something's not right, they don't make excuses, they fix it. That's rare and that's why we keep coming back.",
    name: "David K.",
    role: "Senior Project Manager",
    company: "Greystone Developments",
    rating: 5,
  },
  {
    quote:
      "Fast quote, fair price, and delivered exactly what was promised. The fitout on our Collins St project ran ahead of schedule, largely because the Livesay team were ready to move when every other trade was still organising themselves.",
    name: "Rachel T.",
    role: "Development Manager",
    company: "Trantino Property Group",
    rating: 5,
  },
  {
    quote:
      "I put Livesay on a tough drainage job in Reservoir, tight access, awkward programme, and a design that needed reworking in the field. They handled it without fuss and got us over the line for the slab pour. Couldn't ask for more.",
    name: "Mark S.",
    role: "Site Manager",
    company: "Halloran Civil & Build",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-black pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#888888] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Client Feedback
          </p>
          <h1
            className="text-white font-black leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Testimonials
          </h1>
          <p className="text-[#888888] text-lg max-w-2xl leading-relaxed">
            What builders say about Livesay Plumbing.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-[#F2F2F2] border-b border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {testimonials.map((t, i) => (
              <div key={t.name + i} className="-mt-px -ml-px">
                <TestimonialCard {...t} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust panel */}
      <section className="bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#888888] mb-4">
                Our Track Record
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight">
                A reputation built one project at a time.
              </h2>
            </div>
            <div>
              <p className="text-[#888888] leading-relaxed mb-4">
                Every testimonial above comes from a builder, project manager,
                or site foreman who put their project in our hands and got the
                result they needed. We don't chase volume, we build
                relationships.
              </p>
              <p className="text-[#888888] leading-relaxed">
                The best reference we can give you is a conversation with the
                people we've worked with. Reach out and we'll connect you with
                builders we've worked alongside.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to add your name to the list?"
        subtext="Get in touch and let's discuss how we can make your next project run smoother."
        buttonLabel="Request a Quote"
        href="/contact"
        dark
      />
    </>
  );
}
