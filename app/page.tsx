"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

/* ─────────────── DATA ─────────────── */

const PROJECTS = [
  {
    title: "MD/SA Analytics Platform — Frontend Redesign & APIs",
    org: "Fluor Corporation",
    year: "2024",
    description:
      "Led rapid prototyping and shipped production modules for an enterprise analytics platform. Built RESTful APIs with Spring Boot and orchestrated data flows; delivered a full front‑end refresh that boosted engagement.",
    skills: ["Spring Boot", "REST APIs", "Frontend", "Prototyping"],
    link: { label: "Notes", href: "#" },
  },
  {
    title: "International Supplier Base: Market Entry Analysis",
    org: "Fluor Corporation",
    year: "2025",
    description:
      "Interviewed stakeholders across functions, modeled scenarios, and pinpointed optimization opportunities for international market entry in energy/nuclear supply chains.",
    skills: ["Data Analysis", "Financial Modeling", "Stakeholder Research"],
    link: { label: "Overview", href: "#" },
  },
  {
    title: "Biomedical Data Infrastructure for NIH Repositories",
    org: "Dept. of Biomedical Informatics (SBU)",
    year: "2024",
    description:
      "Built APIs and web apps that improved access to genomic + EHR datasets under Prof. Richard Moffitt; delivered visualization tooling for researchers.",
    skills: ["APIs", "Web Apps", "Data Viz"],
    link: { label: "Abstract", href: "#" },
  },
  {
    title: "Regression & Pipelines — R/Python",
    org: "Personal Research",
    year: "2023–24",
    description:
      "End‑to‑end analysis: imputation, linear models, feature significance across 24 variables; built reusable ETL/pipeline utilities.",
    skills: ["R", "Python", "ETL", "Modeling"],
    link: { label: "Repo", href: "#" },
  },
];

const TICKER_ITEMS = [
  "Fluor Corporation",
  "Dept. of Biomedical Informatics",
  "Dept. of Applied Math & Stats",
  "Wang Center",
  "Stony Brook University",
];

const LINKS = {
  email: "mailto:vaishvijariwala03@gmail.com",
  github: "https://github.com/vaishvijariwala",
  linkedin: "https://www.linkedin.com/in/vaishvi-jariwala",
};

const SKILLS_DATA = [
  { label: "Languages", value: "Python, Java, R, SQL, TypeScript/JS, HTML/CSS" },
  { label: "Frameworks", value: "Spring Boot, React, RESTful APIs; some Angular" },
  { label: "Data", value: "ETL/pipelines, databases, viz; Git, VS Code, Bash/Zsh" },
];

/* ─────────────── HELPERS ─────────────── */

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────── CUSTOM CURSOR ─────────────── */

function CustomCursor() {
  const cursorX = useSpring(0, { stiffness: 300, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 30 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="h-5 w-5 rounded-full border-2 border-foreground mix-blend-difference"
            style={{ background: "white" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────── NAV ─────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="text-lg font-extrabold tracking-tight">
          Vaishvi Jariwala
        </a>
        <span className="hidden text-sm font-medium tracking-wide text-muted sm:block">
          Designer &middot; Engineer
        </span>
        <div className="flex items-center gap-6 text-sm font-medium">
          {["Work", "Play", "Info"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative py-1"
            >
              {link}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

/* ─────────────── HERO ─────────────── */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  const heroText =
    "Vaishvi is a design‑savvy engineer in NYC. She builds systems and stories that make data, products, and brands easier to understand. Her sweet spot is prototype‑to‑production — rapid exploration that turns into real, shipped experiences.";
  const words = heroText.split(" ");

  return (
    <motion.header
      id="top"
      ref={ref}
      style={{ opacity, y }}
      className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10 lg:pt-40 lg:pb-20"
    >
      <h1 className="text-[clamp(2rem,5vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-balance">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3 + i * 0.04,
            }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:scale-105"
        >
          See the work
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60"
        >
          <Github className="h-4 w-4" /> Github
        </a>
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a
          href={LINKS.email}
          className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60"
        >
          <Mail className="h-4 w-4" /> Email
        </a>
      </motion.div>
    </motion.header>
  );
}

/* ─────────────── TICKER ─────────────── */

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <FadeUp>
      <div className="border-y border-border overflow-hidden py-5">
        <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {items.map((name, i) => (
            <span key={i} className="flex items-center gap-4 text-sm font-medium text-muted">
              <span className="text-accent">•</span>
              {name}
            </span>
          ))}
          {items.map((name, i) => (
            <span key={`dup-${i}`} className="flex items-center gap-4 text-sm font-medium text-muted">
              <span className="text-accent">•</span>
              {name}
            </span>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

/* ─────────────── PROJECT CARD ─────────────── */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  return (
    <FadeUp delay={index * 0.1}>
      <div className="group relative flex flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-350 ease-out hover:border-transparent hover:bg-dark-card">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold leading-snug tracking-tight transition-colors duration-350 group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted transition-colors duration-350 group-hover:text-background/60">
              {project.org} &middot; {project.year}
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-350 group-hover:border-accent group-hover:bg-accent/10">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-350 group-hover:rotate-45 group-hover:text-accent" />
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted transition-colors duration-350 group-hover:text-background/60">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium transition-colors duration-350 group-hover:border-background/20 group-hover:text-background/80"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={project.link.href}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent underline underline-offset-4 transition-opacity hover:opacity-70 group-hover:text-accent"
            onClick={(e) => e.stopPropagation()}
          >
            {project.link.label}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </FadeUp>
  );
}

/* ─────────────── SELECTED WORK ─────────────── */

function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <FadeUp>
        <div className="flex items-baseline gap-4">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Selected Work
          </h2>
          <span className="text-sm font-medium text-muted">shipped + in progress</span>
        </div>
      </FadeUp>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ─────────────── PLAY / EXPERIMENTS ─────────────── */

function Experiments() {
  return (
    <section id="play" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <FadeUp>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Play
        </h2>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          Little prototypes, visual riffs, and throwaway ideas that sometimes grow up into real projects. Reach out if something sparks.
        </p>
      </FadeUp>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, n) => (
          <FadeUp key={n} delay={n * 0.08}>
            <motion.div
              whileHover={{
                rotate: [0, -1, 1, -0.5, 0],
                transition: { duration: 0.5, type: "spring" },
              }}
              className="flex aspect-[4/3] items-center justify-center rounded-2xl border-2 border-dashed border-border"
            >
              <span className="text-sm font-medium text-muted">
                Drop an experiment here
              </span>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── INFO / ABOUT ─────────────── */

function Info() {
  return (
    <section id="info" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-5">
        {/* Bio - 3 columns */}
        <div className="lg:col-span-3">
          <FadeUp>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Info
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              I&rsquo;m a senior at Stony Brook (Technological Systems Mgmt, CS + Applied Stats minor) who likes turning messy problems into clear products. I enjoy fast iterations, clean interfaces, and the boring-but-essential parts of engineering: naming, docs, and tests.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-10 space-y-4">
              {SKILLS_DATA.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 border-b border-border pb-4 sm:flex-row sm:gap-6"
                >
                  <span className="w-28 shrink-0 text-sm font-bold uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={LINKS.email}
                className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Sidebar - 2 columns */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <FadeUp delay={0.3}>
            <div className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Currently
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Summer intern at Fluor (Supply Chain & Strategy)",
                  "Practicing deeper coding (beyond LeetCode)",
                  "Exploring ML + product systems projects",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Looking for
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Fall collaborations (NYC)",
                  "Mentors in ML/product design",
                  "Opportunities post‑grad (Jan '26)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */

function Footer() {
  return (
    <footer className="bg-dark text-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <FadeUp>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-balance">
            Thank you for your curiosity.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/70">
            If something here resonated, say hi. I love talking about thoughtful software, calm interfaces, and building with intention.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={LINKS.email}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:scale-105"
            >
              <Mail className="h-4 w-4" /> Let&rsquo;s chat
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-medium text-background/80 transition-colors hover:border-background/40 hover:text-background"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-medium text-background/80 transition-colors hover:border-background/40 hover:text-background"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="mt-20 grid gap-10 border-t border-background/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">
                Visit
              </h4>
              <p className="mt-3 text-sm text-background/70">
                NYC
                <br />
                often in Houston
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">
                Explore
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                {["Work", "Play", "Info"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-background/70 transition-colors hover:text-background"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">
                Learn
              </h4>
              <p className="mt-3 text-sm text-background/70">
                BS, Tech Systems Mgmt + CS &amp; Applied Maths + Stats
                <br />
                Stony Brook University
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">
                Let&rsquo;s talk
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={LINKS.email}
                    className="text-background/70 transition-colors hover:text-background"
                  >
                    vaishvijariwala03@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 transition-colors hover:text-background"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 transition-colors hover:text-background"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </FadeUp>

        <div className="mt-12 text-xs text-background/30">
          &copy; {new Date().getFullYear()} Vaishvi Jariwala
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── PAGE ─────────────── */

export default function Portfolio() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <SelectedWork />
        <Experiments />
        <Info />
      </main>
      <Footer />
    </>
  );
}