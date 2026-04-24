"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? "border-b border-black" : "border-b border-black"
      }`}
    >
      {/* Mobile Nav Row */}
      <div className="md:hidden border-b border-black">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Livesay Plumbing"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-wide text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Livesay Plumbing"
                width={220}
                height={80}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-black hover:text-[#888888] transition-colors duration-150 uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#1e5fa8] text-white text-sm font-semibold px-5 py-2.5 uppercase tracking-wide hover:bg-white hover:text-[#1e5fa8] border border-[#1e5fa8] transition-colors duration-150"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
