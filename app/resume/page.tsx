import type { Metadata } from "next";
import Link from "next/link";
import {
  PortfolioContactFooter,
  PortfolioHeader,
} from "@/components/portfolio/portfolio-header";
import { PORTFOLIO_LINKS } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Resume — Vaishvi Jariwala",
  description:
    "Résumé: design engineer and storyteller — experience, education, and skills.",
};

const sectionLabel =
  "mb-3 block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-portfolio-soft";

const bodyP = "m-0 text-[0.95rem] font-light leading-relaxed text-portfolio-ink";

const itemTitle = "text-base font-semibold lowercase tracking-tight text-portfolio-ink";

const itemMeta = "mt-0.5 text-sm font-normal text-portfolio-muted";

const bulletList =
  "mt-3 list-none space-y-2 pl-0 text-[0.92rem] font-light leading-snug text-portfolio-ink [&>li]:relative [&>li]:pl-[1.1em] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-portfolio-soft [&>li]:before:content-['·']";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-portfolio-bg text-base leading-[1.55] text-portfolio-ink antialiased [font-feature-settings:'kern'_1,'liga'_1]">
      <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-8 sm:px-10 sm:pt-10 md:pl-14 md:pr-12 lg:pl-[4.5rem] lg:pr-14">
        <PortfolioHeader samePageAnchors={false} resumeCurrent />

        <Link
          href="/"
          className="inline-block border-b border-black/20 text-sm font-medium lowercase text-portfolio-ink no-underline transition-colors hover:border-portfolio-accent hover:text-portfolio-accent"
        >
          ← portfolio
        </Link>

        <main className="mx-auto max-w-[640px] pt-10 md:max-w-[680px] md:pt-14">
          <header className="border-b border-black/[0.08] pb-10">
            <h1 className="m-0 text-3xl font-light lowercase tracking-tight text-portfolio-ink md:text-[2.125rem]">
              vaishvi jariwala
            </h1>
            <p className="mt-2 text-lg font-normal lowercase text-portfolio-muted md:text-xl">
              design engineer · storyteller
            </p>
            <p className="mt-4 text-[0.95rem] font-light lowercase leading-relaxed text-portfolio-ink">
              Passionate about{" "}
              <span className="font-medium underline decoration-[1.5px] decoration-wavy decoration-portfolio-wavy underline-offset-[0.2em]">
                creative ai
              </span>
              , product narrative, and systems that make complex ideas legible.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm lowercase text-portfolio-ink">
              <li>
                <a
                  href={PORTFOLIO_LINKS.email}
                  className="border-b border-black/15 no-underline transition-colors hover:border-portfolio-accent"
                >
                  email
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-black/15 no-underline transition-colors hover:border-portfolio-accent"
                >
                  linkedin
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-black/15 no-underline transition-colors hover:border-portfolio-accent"
                >
                  github
                </a>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="border-b border-black/15 no-underline transition-colors hover:border-portfolio-accent"
                >
                  work
                </Link>
              </li>
            </ul>
          </header>

          <section className="border-b border-black/[0.08] py-10" aria-labelledby="resume-summary">
            <span id="resume-summary" className={sectionLabel}>
              Summary
            </span>
            <p className={bodyP}>
              Design engineer blending research, interaction design, and technical
              implementation. Currently deepening craft through the{" "}
              <strong className="font-medium">CalArts UI/UX specialization</strong>
              ; previously delivered analytics, market strategy, and engineering
              work at <strong className="font-medium">Fluor</strong>.
            </p>
          </section>

          <section className="border-b border-black/[0.08] py-10" aria-labelledby="resume-exp">
            <span id="resume-exp" className={sectionLabel}>
              Experience
            </span>

            <article className="mt-2">
              <h2 className={itemTitle}>Fluor Corporation</h2>
              <p className={itemMeta}>
                Design & engineering-adjacent roles · multiple teams · 2024—2025
              </p>
              <ul className={bulletList}>
                <li>
                  Analytics and visualization work supporting market and strategy
                  decisions (e.g. MD/SA analytics, market entry narratives).
                </li>
                <li>
                  Cross-functional collaboration across data, engineering, and
                  business stakeholders; clear communication of technical concepts.
                </li>
                <li>
                  Iterative delivery in complex domains; attention to IA, narrative,
                  and stakeholder alignment.
                </li>
              </ul>
            </article>
          </section>

          <section className="border-b border-black/[0.08] py-10" aria-labelledby="resume-edu">
            <span id="resume-edu" className={sectionLabel}>
              Education
            </span>

            <article className="mt-2 space-y-8">
              <div>
                <h2 className={itemTitle}>California Institute of the Arts</h2>
                <p className={itemMeta}>UI/UX specialization · in progress</p>
                <p className={`${bodyP} mt-3`}>
                  Coursework and projects in user research, information architecture,
                  visual systems, and prototyping.
                </p>
              </div>
              <div>
                <h2 className={itemTitle}>Stony Brook University</h2>
                <p className={itemMeta}>
                  Technology & society / CS / applied math & statistics
                </p>
                <p className={`${bodyP} mt-3`}>
                  Foundation in quantitative reasoning, computing, and systems
                  thinking.
                </p>
              </div>
            </article>
          </section>

          <section className="border-b border-black/[0.08] py-10" aria-labelledby="resume-skills">
            <span id="resume-skills" className={sectionLabel}>
              Skills
            </span>
            <div className="mt-1 flex flex-wrap gap-2">
              {[
                "UI / UX",
                "design systems",
                "Figma",
                "user research",
                "prototyping",
                "TypeScript",
                "React",
                "data storytelling",
                "creative AI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[0.8rem] font-medium lowercase tracking-wide text-portfolio-ink shadow-[var(--shadow-portfolio-card)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="py-10" aria-labelledby="resume-projects">
            <span id="resume-projects" className={sectionLabel}>
              Selected projects
            </span>
            <p className={bodyP}>
              <Link
                href="/winewright"
                className="border-b border-black/20 font-medium text-portfolio-ink no-underline transition-colors hover:border-portfolio-accent hover:text-portfolio-accent"
              >
                Wine Wright
              </Link>
              {" — "}
              mobile concept: natural language to wine discovery; full case study on
              site.
            </p>
          </section>

          <PortfolioContactFooter />
        </main>
      </div>
    </div>
  );
}
