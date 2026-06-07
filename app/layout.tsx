import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const BASE_URL = "https://vaishvijariwala.github.io/vaishvi-portfolio";

export const metadata: Metadata = {
  title: "Vaishvi Jariwala — Design Engineer & Storyteller",
  description:
    "Design engineer and storyteller passionate about creative AI, UI/UX at CalArts, previously at Fluor — portfolio and selected projects.",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
  keywords: [
    "Vaishvi Jariwala",
    "design engineer",
    "UI UX designer",
    "portfolio",
    "CalArts",
    "creative AI",
  ],
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Vaishvi Jariwala",
    title: "Vaishvi Jariwala — Design Engineer & Storyteller",
    description:
      "Design engineer and storyteller passionate about creative AI, UI/UX at CalArts, previously at Fluor.",
    images: [{ url: `${BASE_URL}/images/profilepicture.jpg`, width: 1200, height: 630, alt: "Vaishvi Jariwala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishvi Jariwala — Design Engineer & Storyteller",
    description: "Design engineer passionate about creative AI and UI/UX.",
    images: [`${BASE_URL}/images/profilepicture.jpg`],
    creator: "@vaishvi222",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* WebSite schema — tells Google the canonical site name + URL */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Vaishvi Jariwala",
              url: BASE_URL,
            }),
          }}
        />
        {/* Person schema — links the site to Vaishvi as a real entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vaishvi Jariwala",
              url: BASE_URL,
              jobTitle: "Design Engineer",
              sameAs: [
                "https://www.linkedin.com/in/vaishvi-jariwala/",
                "https://github.com/vaishvijariwala",
                "https://x.com/vaishvi222",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
