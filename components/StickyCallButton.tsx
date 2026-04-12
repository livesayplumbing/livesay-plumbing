"use client";

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-black">
      <a
        href="tel:+61410982052"
        className="flex items-center justify-center gap-3 bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-150"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 1h3l1.5 4-2 1.5a9 9 0 004 4L11 8.5l4 1.5v3a1 1 0 01-1 1A13 13 0 012 2a1 1 0 011-1z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="square"
            fill="none"
          />
        </svg>
        Call Us, +61 410 982 052
      </a>
    </div>
  );
}
