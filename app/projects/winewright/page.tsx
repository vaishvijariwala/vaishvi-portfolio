import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Winewright case study — styled like Rachel Chen's Figma project
 * https://www.rachelchen.tech/projects/figma
 */

const SECTIONS = [
  { id: "challenge", label: "Challenge" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "outcome", label: "Outcome" },
];

export default function WinewrightCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F7F6EE] text-black">
      {/* Sticky nav */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#F7F6EE]/80 border-b border-black/10">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between text-sm">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 hover:underline font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <nav className="flex items-center gap-6">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:underline opacity-80 hover:opacity-100"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 pb-24">
        {/* Hero */}
        <header className="pt-12 pb-16">
          <p className="text-sm uppercase tracking-widest text-black/60 mb-2">
            Winewright • Concept
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[800] tracking-tight leading-[1.1]">
            Wine discovery, personalized
          </h1>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="text-black/60 uppercase tracking-wider mb-1">Role</p>
              <p className="font-medium">Product Designer</p>
            </div>
            <div>
              <p className="text-black/60 uppercase tracking-wider mb-1">Timeline</p>
              <p className="font-medium">[Add timeline]</p>
            </div>
            <div>
              <p className="text-black/60 uppercase tracking-wider mb-1">Team</p>
              <p className="font-medium">[Add team members]</p>
            </div>
            <div>
              <p className="text-black/60 uppercase tracking-wider mb-1">Skills</p>
              <p className="font-medium">Product Design, User Research, Prototyping</p>
            </div>
          </div>
        </header>

        {/* Challenge */}
        <section id="challenge" className="scroll-mt-20 py-12">
          <p className="text-sm uppercase tracking-widest text-black/60 mb-3">
            Challenge
          </p>
          <h2 className="text-2xl md:text-3xl font-[700] tracking-tight mb-6">
            How might we help people discover wines that pair with their meals?
          </h2>
          <p className="text-[15px] leading-7 text-black/90 max-w-2xl mb-8">
            [Add your challenge description — e.g., the design brief, constraints, or goals for the project.]
          </p>
          <div className="rounded-2xl overflow-hidden border border-black/10 bg-white/50">
            <Image
              src="/winewright/wireframe-1.png"
              alt="Winewright landing — Sign In / Log In"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="scroll-mt-20 py-12">
          <p className="text-sm uppercase tracking-widest text-black/60 mb-3">
            Problem
          </p>
          <h2 className="text-2xl md:text-3xl font-[700] tracking-tight mb-6">
            Choosing wine can feel overwhelming...
          </h2>
          <p className="text-[15px] leading-7 text-black/90 max-w-2xl mb-4">
            [Add problem statement — e.g., people struggle to pick wines that complement their food, or find recommendations too generic.]
          </p>
          <h2 className="text-2xl md:text-3xl font-[700] tracking-tight mt-10 mb-6">
            ...and existing tools don&apos;t make it easier.
          </h2>
          <p className="text-[15px] leading-7 text-black/90 max-w-2xl mb-4">
            [Add second problem — e.g., apps are cluttered, sign-up is friction-heavy, or recommendations lack personalization.]
          </p>
          <p className="text-lg font-semibold mt-8 mb-8">
            What if there was a simple way to find the right wine for any meal?
          </p>
          <div className="rounded-2xl overflow-hidden border border-black/10 bg-white/50">
            <Image
              src="/winewright/wireframe-2.png"
              alt="Winewright Sign Up flow"
              width={800}
              height={600}
              className="w-full h-auto object-contain max-w-sm mx-auto"
            />
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="scroll-mt-20 py-12">
          <p className="text-sm uppercase tracking-widest text-black/60 mb-3">
            Solution
          </p>
          <h2 className="text-2xl md:text-3xl font-[700] tracking-tight mb-6">
            Winewright: Personalized wine discovery by food
          </h2>
          <p className="text-[15px] leading-7 text-black/90 max-w-2xl mb-6">
            [Add solution description — e.g., a mobile-first app that lets users search by food to get tailored wine recommendations. Streamlined sign-up with email or social (Gmail, Facebook) reduces friction.]
          </p>
          <h3 className="text-xl font-[600] mt-10 mb-4">
            Discover what&apos;s popular and what&apos;s for you.
          </h3>
          <p className="text-[15px] leading-7 text-black/90 max-w-2xl mb-8">
            [Add feature description — e.g., &quot;Popular Today&quot; and &quot;Recommended For You&quot; surfaces curated and personalized picks. Search by food to find pairings instantly.]
          </p>
          <div className="rounded-2xl overflow-hidden border border-black/10 bg-white/50">
            <Image
              src="/winewright/wireframe-3.png"
              alt="Winewright home — Popular Today, Recommended For You"
              width={800}
              height={600}
              className="w-full h-auto object-contain max-w-sm mx-auto"
            />
          </div>
        </section>

        {/* Outcome */}
        <section id="outcome" className="scroll-mt-20 py-12">
          <p className="text-sm uppercase tracking-widest text-black/60 mb-3">
            Outcome
          </p>
          <h2 className="text-2xl md:text-3xl font-[700] tracking-tight mb-6">
            [Add outcome headline]
          </h2>
          <p className="text-[15px] leading-7 text-black/90 max-w-2xl">
            [Add outcome — e.g., what you learned, feedback received, next steps, or impact of the project.]
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-black/10">
          <p className="text-sm text-black/60">Designed + Coded with care</p>
          <p className="mt-1 text-sm font-medium">by Vaishvi Jariwala</p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.linkedin.com/in/vaishvi-jariwala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 hover:opacity-75"
            >
              LinkedIn
            </a>
            <a
              href="mailto:vaishvijariwala03@gmail.com"
              className="text-sm underline underline-offset-4 hover:opacity-75"
            >
              Email
            </a>
            <a
              href="https://github.com/vaishvijariwala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 hover:opacity-75"
            >
              Github
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
}
