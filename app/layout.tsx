import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Vaishvi Jariwala — Designer & Engineer",
  description:
    "Vaishvi Jariwala is a design-savvy software engineer in NYC building systems and stories that make data, products, and brands easier to understand.",
};

export const viewport: Viewport = {
  themeColor: "#fdfbf3",
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
      <body
        className={`${plusJakarta.className} ${fraunces.variable} antialiased bg-background text-foreground selection:bg-foreground selection:text-background`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
