import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

// ── Update this to your deployed URL ─────────────────────────────────────────
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahmed-ali-portfolio.vercel.app";

// ── Structured data (JSON-LD) ─────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmed Ali",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer from Alexandria, Egypt, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Building scalable web applications with clean code.",
  url: SITE_URL,
  image: `${SITE_URL}/assets/Ahmed.jpg`,
  email: "ahmedswe508@gmail.com",
  telephone: "+201119929583",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alexandria",
    addressCountry: "EG",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Alexandria University",
    department: "Faculty of Computing and Data Science",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "MERN Stack",
    "Redux Toolkit",
    "Tailwind CSS",
    "RESTful API",
    "Full Stack Development",
  ],
  worksFor: [
    { "@type": "Organization", name: "MDARJ", address: { "@type": "PostalAddress", addressLocality: "Alexandria", addressCountry: "EG" } },
    { "@type": "Organization", name: "Priceless Health", address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" } },
  ],
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ahmed Ali – Full Stack Developer Portfolio",
  url: SITE_URL,
  description:
    "Portfolio of Ahmed Ali, Full Stack Developer specializing in the MERN stack.",
  author: { "@type": "Person", name: "Ahmed Ali" },
};

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ahmed Ali – Full Stack Developer | MERN Stack",
    template: "%s | Ahmed Ali",
  },
  description:
    "Ahmed Ali is a Full Stack Developer from Alexandria, Egypt, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Available for full-time and freelance web development opportunities.",
  keywords: [
    "Ahmed Ali",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Web Developer Egypt",
    "Software Engineer Alexandria",
    "MongoDB Developer",
    "Express.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ahmed Ali", url: SITE_URL }],
  creator: "Ahmed Ali",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ahmed Ali – Full Stack Developer",
    title: "Ahmed Ali – Full Stack Developer | MERN Stack",
    description:
      "Full Stack Developer specializing in MERN stack. Building scalable web applications with React, Node.js, MongoDB, and Express. Available for opportunities.",
    images: [
      {
        url: "/assets/Ahmed.jpg",
        width: 800,
        height: 800,
        alt: "Ahmed Ali – Full Stack Developer from Alexandria, Egypt",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Ali – Full Stack Developer | MERN Stack",
    description:
      "Full Stack Developer specializing in MERN stack. Building scalable web applications with React, Node.js, MongoDB, and Express.",
    images: ["/assets/Ahmed.jpg"],
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
  alternates: {
    canonical: SITE_URL,
  },
  // Uncomment and fill in after verifying in Google Search Console / Bing:
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  //   other: { "msvalidate.01": "YOUR_BING_VERIFICATION_CODE" },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-[#030712] text-white antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
