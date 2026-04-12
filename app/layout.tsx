import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

export const metadata: Metadata = {
  title: {
    default: "Livesay Plumbing | Residential & Commercial Plumbing Melbourne",
    template: "%s | Livesay Plumbing",
  },
  description:
    "Livesay Plumbing, Melbourne's trusted residential & commercial plumbing contractor. Reliable, professional, and built around your programme. Serving builders and developers across Melbourne.",
  keywords: [
    "residential and commercial plumbing Melbourne",
    "plumbing contractor Melbourne",
    "builder plumber Melbourne",
    "hydraulic services Melbourne",
    "residential & commercial plumber",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Livesay Plumbing",
    title: "Livesay Plumbing | Residential & Commercial Plumbing Melbourne",
    description:
      "Melbourne's trusted residential & commercial plumbing contractor for builders and developers. On time. On site. Done right.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Livesay Plumbing | Residential & Commercial Plumbing Melbourne",
    description:
      "Melbourne's trusted residential & commercial plumbing contractor for builders and developers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="pb-14 md:pb-0">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
