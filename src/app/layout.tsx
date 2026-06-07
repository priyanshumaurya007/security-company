import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Garud Corporate Solutions | Security Services in Lucknow",
    template: "%s | Garud Corporate Solutions",
  },
  description:
    "Garud Corporate Solutions provides premium security services, CCTV surveillance, access control, facility management, and manpower supply in Lucknow, Uttar Pradesh. Trusted, verified, and available 24/7.",
  keywords: [
    "Security Services in Lucknow",
    "Facility Management Services in Lucknow",
    "Security Guard Agency Lucknow",
    "CCTV Surveillance Lucknow",
    "Event Security Lucknow",
    "Crowd Management Lucknow",
    "Access Control Systems Lucknow",
    "Housekeeping Services Lucknow",
    "Manpower Supply Lucknow",
    "Security Consulting Lucknow",
    "Garud Corporate Solutions",
    "Emergency Response Lucknow",
  ],
  authors: [{ name: "Garud Corporate Solutions" }],
  creator: "Garud Corporate Solutions",
  publisher: "Garud Corporate Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://garudcorporatesolutions.com",
    siteName: "Garud Corporate Solutions",
    title: "Garud Corporate Solutions | Security & Facility Management in Lucknow",
    description:
      "Your Trust, Our Responsibility. Professional Security & Facility Management Solutions for a Safer Future. Based in Lucknow, serving across Uttar Pradesh.",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Garud Corporate Solutions – Premium Security Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garud Corporate Solutions | Security Services in Lucknow",
    description:
      "Professional Security & Facility Management Solutions. 24/7 Support. Verified Staff. Lucknow, UP.",
    images: ["/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico',        sizes: 'any' },
      { url: '/favicon-16x16.png',  sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png',  sizes: '32x32', type: 'image/png' },
    ],
    apple:    [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other:    [
      { rel: 'android-chrome-192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: "garud-corporate-solutions-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#080808] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
