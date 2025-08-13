import React from "react";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


/**
 * One-file React portfolio inspired by the two screenshots the user shared:
 *  - Conversational hero with big type (Andrew-style)
 *  - Friendly, graphic footer message (Pop Up Grocer-style)
 * Tailwind is assumed available by the host environment. shadcn/ui is used for buttons/cards.
 *
 * Replace any copy or project data below without touching layout.
 */

const PROJECTS = [
  {
    title: "MD/SA Analytics Platform — Frontend Redesign & APIs",
    org: "Fluor Corporation",
    year: "2024",
    blurb:
      "Led rapid prototyping and shipped production modules for an enterprise analytics platform. Built RESTful APIs with Spring Boot and orchestrated data flows; delivered a full front‑end refresh that boosted engagement.",
    skills: ["Spring Boot", "REST APIs", "Frontend", "Prototyping"],
    links: [
      { label: "Notes", href: "#" },
    ],
  },
  {
    title: "International Supplier Base: Market Entry Analysis",
    org: "Fluor Corporation",
    year: "2025",
    blurb:
      "Interviewed stakeholders across functions, modeled scenarios, and pinpointed optimization opportunities for international market entry in energy/nuclear supply chains.",
    skills: ["Data Analysis", "Financial Modeling", "Stakeholder Research"],
    links: [{ label: "Overview", href: "#" }],
  },
  {
    title: "Biomedical Data Infrastructure for NIH Repositories",
    org: "Dept. of Biomedical Informatics (SBU)",
    year: "2024",
    blurb:
      "Built APIs and web apps that improved access to genomic + EHR datasets under Prof. Richard Moffitt; delivered visualization tooling for researchers.",
    skills: ["APIs", "Web Apps", "Data Viz"],
    links: [{ label: "Abstract", href: "#" }],
  },
  {
    title: "Regression & Pipelines — R/Python",
    org: "Personal Research",
    year: "2023—24",
    blurb:
      "End‑to‑end analysis: imputation, linear models, feature significance across 24 variables; built reusable ETL/pipeline utilities.",
    skills: ["R", "Python", "ETL", "Modeling"],
    links: [{ label: "Repo", href: "#" }],
  },
];

const LINKS = {
  email: "mailto:vaishvijariwala03@gmail.com",
  github: "https://github.com/vaishvijariwala",
  linkedin: "https://www.linkedin.com/in/vaishvi-jariwala",
};

export default function Portfolio() {
  return (
    <div id="top" className="$1">
      {/* Top strip */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#fde7ee]/80 border-b border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2"><span className="uppercase tracking-widest">Designer · Engineer</span><span className="h-1 w-1 rounded-full bg-black/60"/></div>
          <a href="#top" className="font-medium hover:underline">Vaishvi Jariwala</a>
          <nav className="flex items-center gap-6">
            <a href="#work" className="hover:underline">Work</a>
            <a href="#play" className="hover:underline">Play</a>
            <a href="#info" className="hover:underline">Info</a>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 pt-16 pb-8">
        <p className="text-[clamp(2rem,7vw,4.5rem)] leading-[1.05] font-[700] tracking-tight">
          Vaishvi is a design‑savvy engineer in NYC. She builds systems and stories that
          make data, products, and brands easier to understand. Her sweet spot is
          <em className="px-1 rounded bg-black text-white"> prototype‑to‑production</em> — rapid exploration that turns into real, shipped experiences.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild className="rounded-2xl px-4">
            <a href="#work">See the work <ArrowRight className="ml-1 h-4 w-4"/></a>
          </Button>
          <a href={LINKS.github} className="inline-flex items-center gap-2 underline decoration-2 underline-offset-2">
            <Github className="h-4 w-4"/> Github
          </a>
          <a href={LINKS.linkedin} className="inline-flex items-center gap-2 underline decoration-2 underline-offset-2">
            <Linkedin className="h-4 w-4"/> LinkedIn
          </a>
          <a href={LINKS.email} className="inline-flex items-center gap-2 underline decoration-2 underline-offset-2">
            <Mail className="h-4 w-4"/> Email
          </a>
        </div>
      </header>

      {/* Client/experience ticker */}
      <section className="mx-auto max-w-6xl px-4 py-6 border-y border-black/10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          {[
            "Fluor Corporation",
            "Dept. of Biomedical Informatics",
            "Dept. of Applied Math & Stats",
            "Wang Center",
            "Stony Brook University",
          ].map((name) => (
            <span key={name} className="inline-flex items-center gap-2">
              <span className="i">•</span><span className="font-medium">{name}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-[800] tracking-tight">Selected Work</h2>
          <span className="inline-flex items-center gap-2 text-sm"><Sparkles className="h-4 w-4"/> shipped + in progress</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, idx) => (
            <Card key={idx} className="rounded-2xl border-black/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  {p.title}
                </CardTitle>
                <div className="mt-1 text-sm text-black/70">{p.org} · {p.year}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[15px] leading-6">{p.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {p.skills.map((s) => (
                    <span key={s} className="text-xs rounded-full border border-black/20 px-2 py-1">{s}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-1">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} className="text-sm inline-flex items-center gap-1 underline underline-offset-4">
                      {l.label} <ExternalLink className="h-3.5 w-3.5"/>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Play / Experiments */}
      <section id="play" className="mx-auto max-w-6xl px-4 py-14 border-y border-black/10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-[800] tracking-tight">Play</h2>
          <p className="mt-2 text-[15px] max-w-2xl">
            Little prototypes, visual riffs, and throwaway ideas that sometimes grow up into real projects.
            Reach out if something sparks.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="aspect-[4/3] rounded-2xl border border-black/10 bg-white/50 grid place-items-center text-sm">
              <span className="opacity-60">Drop an experiment here</span>
            </div>
          ))}
        </div>
      </section>

      {/* Info / About */}
      <section id="info" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-[800] tracking-tight">Info</h2>
            <p className="text-[15px] leading-6">
              I’m a senior at Stony Brook (Technological Systems Mgmt, CS + Applied Stats minor) who likes
              turning messy problems into clear products. I enjoy fast iterations, clean interfaces,
              and the boring-but-essential parts of engineering: naming, docs, and tests.
            </p>
            <ul className="text-[15px] leading-7 list-disc pl-5">
              <li>Languages: Python, Java, R, SQL, TypeScript/JS, HTML/CSS</li>
              <li>Frameworks: Spring Boot, React, RESTful APIs; some Angular</li>
              <li>Data: ETL/pipelines, databases, viz; Git, VS Code, Bash/Zsh</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="outline" className="rounded-2xl">
                <a href={LINKS.email}><Mail className="h-4 w-4 mr-2"/>Email me</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href={LINKS.github}><Github className="h-4 w-4 mr-2"/>GitHub</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href={LINKS.linkedin}><Linkedin className="h-4 w-4 mr-2"/>LinkedIn</a>
              </Button>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl border border-black/10 p-4 bg-white/40">
              <h3 className="font-semibold mb-2">Currently</h3>
              <ul className="text-sm leading-6 list-disc pl-5">
                <li>Summer intern at Fluor (Supply Chain & Strategy)</li>
                <li>Practicing deeper coding (beyond LeetCode)</li>
                <li>Exploring ML + product systems projects</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 p-4 bg-white/40">
              <h3 className="font-semibold mb-2">Looking for</h3>
              <ul className="text-sm leading-6 list-disc pl-5">
                <li>Fall collaborations (NYC)</li>
                <li>Mentors in ML/product design</li>
                <li>Opportunities post‑grad (Jan ‘26)</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Big friendly footer */}
      <footer className="mt-6 border-t border-black/10 bg-[#fff6bf] text-black">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <div className="text-[clamp(2rem,8vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight">
              Thank you for your curiosity.
            </div>
            <p className="mt-3 text-[15px] opacity-80 max-w-2xl mx-auto">
              If something here resonated, say hi. I love talking about thoughtful software,
              calm interfaces, and building with intention.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Button asChild className="rounded-2xl"><a href={LINKS.email}><Mail className="h-4 w-4 mr-2"/>Let’s chat</a></Button>
              <Button asChild variant="outline" className="rounded-2xl"><a href={LINKS.github}><Github className="h-4 w-4 mr-2"/>GitHub</a></Button>
              <Button asChild variant="outline" className="rounded-2xl"><a href={LINKS.linkedin}><Linkedin className="h-4 w-4 mr-2"/>LinkedIn</a></Button>
            </div>

            <div className="mt-12 grid md:grid-cols-4 gap-8 text-left">
              <div>
                <div className="font-semibold mb-2">Visit</div>
                <div className="text-sm text-black/80">NYC · often in Houston</div>
              </div>
              <div>
                <div className="font-semibold mb-2">Explore</div>
                <ul className="text-sm space-y-1">
                  <li><a className="underline underline-offset-4 decoration-2 hover:opacity-75" href="#work">Work</a></li>
                  <li><a className="underline underline-offset-4 decoration-2 hover:opacity-75" href="#play">Play</a></li>
                  <li><a className="underline underline-offset-4 decoration-2 hover:opacity-75" href="#info">Info</a></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">Learn</div>
                <ul className="text-sm space-y-1">
                  <li>BS, Tech Systems Mgmt + CS & Applied Maths + Stats)</li>
                  <li>Stony Brook University</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">Let’s talk</div>
                <ul className="text-sm space-y-1">
                  <li><a className="underline underline-offset-4 decoration-2 hover:opacity-75" href={LINKS.email}>vaishvijariwala03@gmail.com</a></li>
                  <li><a className="underline underline-offset-4 decoration-2 hover:opacity-75" href={LINKS.linkedin}>LinkedIn</a></li>
                  <li><a className="underline underline-offset-4 decoration-2 hover:opacity-75" href={LINKS.github}>GitHub</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-xs text-black/60">© {new Date().getFullYear()} Vaishvi Jariwala</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
