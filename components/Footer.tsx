import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/projects" },
  { label: "Get a Quote", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Large Logo Watermark Band */}
      <div className="border-b border-white/10 overflow-hidden relative flex items-center justify-center py-10">
        <Image
          src="/logo.png"
          alt=""
          width={800}
          height={285}
          className="w-[60vw] max-w-3xl opacity-[0.12] brightness-0 invert object-contain select-none pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/20 pb-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Livesay Plumbing"
                width={160}
                height={58}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-[#888888] text-sm leading-relaxed max-w-xs">
              Residential & commercial plumbing across Melbourne.
              Professional. Reliable. Built around your programme.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#888888] mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-[#888888] transition-colors duration-150 uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#888888] mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs text-[#888888] uppercase tracking-wide mb-1">
                  Based In
                </p>
                <p className="text-sm text-white font-medium">Frankston South, VIC</p>
              </div>
              <div>
                <p className="text-xs text-[#888888] uppercase tracking-wide mb-1">
                  Phone
                </p>
                <a
                  href="tel:+61410982052"
                  className="text-sm text-white hover:text-[#888888] transition-colors"
                >
                  +61 410 982 052
                </a>
              </div>
              <div>
                <p className="text-xs text-[#888888] uppercase tracking-wide mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@livesayplumbing.com.au"
                  className="text-sm text-white hover:text-[#888888] transition-colors"
                >
                  info@livesayplumbing.com.au
                </a>
              </div>
              <div>
                <p className="text-xs text-[#888888] uppercase tracking-wide mb-1">
                  Service Area
                </p>
                <p className="text-sm text-white">Melbourne, VIC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-[#888888]">
            <span>ABN: [Placeholder]</span>
            <span>Licensed & Insured</span>
            <span>Melbourne, VIC, Australia</span>
          </div>
          <p className="text-xs text-[#888888]">
            © 2025 Livesay Plumbing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
