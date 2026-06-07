import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Improves loading performance
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'vaishvi jariwala',
  jobTitle: 'Software Engineer',
  description: 'Design-savvy engineer specializing in prototype-to-production development',
  url: 'https://github.com/vaishvijariwala/vaishvi-portfolio.git',
  sameAs: [
    'https://linkedin.com/in/vaishvi-jariwala',
    'https://github.com/vaishvijariwala'
  ]
}

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "vaishvi jariwala",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin ="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"/>
      </head>
      <body
        className= "antialiased bg-[#fde7ee] text-black selection:bg-black selection:text-white"
        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontOpticalSizing: "auto" }}
      >
        {children}
      </body>
    </html>
  );
}
