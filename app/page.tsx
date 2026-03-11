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
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink } from "lucide-react";

/* ─────────────── DATA ─────────────── */

const PROJECTS = [
  {
    title: "WineWright — No-Code AI Agent Interface",
    org: "CalArts UI/UX Design Specialization",
    year: "2024–25",
    description:
      "End-to-end design of a mobile app that turns natural language into wine discovery. Includes user research, journey mapping, content mapping, interaction design, and a full prototype — built for non-technical users navigating a complex domain.",
    skills: ["UX Research", "Interaction Design", "Prototyping", "Design Systems"],
    link: { label: "Case Study", href: "#" },
    featured: true,
  },
  {
    title: "AI-Agent Job Fit Generator",
    org: "Dust MCP Server",
    year: "2025",
    description:
      "Built an end-to-end agentic pipeline that ingests profile data, runs multi-step LLM reasoning to evaluate role fit, and generates personalized outputs in under 2 seconds. Replaced 30–45 min of manual analysis per role.",
    skills: ["LLM Pipelines", "Prompt Engineering", "Agentic Architecture", "Dust MCP"],
    link: { label: "Overview", href: "#" },
    featured: true,
  },
  {
    title: "MD/SA Analytics Platform — Frontend Redesign & APIs",
    org: "Fluor Corporation",
    year: "2024",
    description:
      "Shipped production modules for an enterprise analytics platform. Built RESTful APIs with Spring Boot, orchestrated data flows, and delivered a full front-end refresh that reduced reporting latency by 30%.",
    skills: ["Spring Boot", "REST APIs", "TypeScript", "React"],
    link: { label: "Notes", href: "#" },
    featured: false,
  },
  {
    title: "International Supplier Base: Market Entry Analysis",
    org: "Fluor Corporation",
    year: "2025",
    description:
      "Ran 20+ executive stakeholder interviews, modeled market entry scenarios, and produced Board-level white papers that directly influenced a multimillion-dollar investment decision.",
    skills: ["Financial Modeling", "Stakeholder Research", "Data Analysis"],
    link: { label: "Overview", href: "#" },
    featured: false,
  },
  {
    title: "AI Dependency & Human Agency — Research",
    org: "Independent Research",
    year: "2024–25",
    description:
      "Mixed-methods research on how AI tools affect decision-making confidence and personal agency. Synthesized peer-reviewed literature, developed a self-ethnography framework, and designed surveys targeting graduate students and early-career professionals.",
    skills: ["UX Research", "Mixed Methods", "Literature Synthesis", "Survey Design"],
    link: { label: "Read More", href: "#" },
    featured: false,
  },
  {
    title: "Biomedical Data Infrastructure for NIH Repositories",
    org: "Dept. of Biomedical Informatics, SBU",
    year: "2024",
    description:
      "Built APIs and web apps that improved access to genomic and EHR datasets under Prof. Richard Moffitt. Delivered interactive visualization tooling for research teams.",
    skills: ["APIs", "Web Apps", "Data Viz", "Python"],
    link: { label: "Abstract", href: "#" },
    featured: false,
  },
];

const EXPERIMENTS = [
  {
    title: "ASCII Webcam",
    description: "Real-time video converted to ASCII art in the browser.",
    tag: "Creative Code",
    href: "#",
  },
  {
    title: "Neural Net from Scratch",
    description: "Fully vectorized backprop in NumPy. No frameworks.",
    tag: "ML",
    href: "#",
  },
  {
    title: "SIR/SIS Epidemic Models",
    description: "Mathematical biology simulations in Python.",
    tag: "Computational",
    href: "#",
  },
];

const TICKER_ITEMS = [
  "Fluor Corporation",
  "Dept. of Biomedical Informatics",
  "Dept. of Applied Math & Stats",
  "CalArts",
  "Stony Brook University",
];

const LINKS = {
  email: "mailto:vaishvijariwala03@gmail.com",
  github: "https://github.com/vaishvijariwala",
  linkedin: "https://www.linkedin.com/in/vaishvi-jariwala",
};

const SKILLS_DATA = [
  { label: "Languages", value: "Python, TypeScript, JavaScript, Java, R, SQL, HTML/CSS" },
  { label: "Frameworks", value: "React, Spring Boot, Node.js, Next.js, RESTful APIs" },
  { label: "AI & Data", value: "LLM pipelines, agentic systems, ETL, data viz, NumPy, pandas" },
  { label: "Design", value: "Figma, UX research, interaction design, prototyping" },
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
      style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
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
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.25em]">
          Vaishvi&nbsp;Jariwala
        </a>
        <span className="hidden text-xs font-medium tracking-[0.2em] uppercase text-muted sm:block">
          Designer · Engineer
        </span>
        <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em]">
          {["Work", "Play", "Info"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="group relative py-1">
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

  return (
    <motion.header
      id="top"
      ref={ref}
      style={{ opacity, y }}
      className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10 lg:pt-40 lg:pb-20"
    >
      <div className="grid gap-4 text-[clamp(1.6rem,2.3vw,2.1rem)] leading-[1.4] font-heading">
        <div className="grid grid-cols-[minmax(70px,120px)_1fr] gap-x-6">
          <span className="eyebrow text-muted">HELLO</span>
          <p className="tracking-tight">
            My name is <span className="italic">Vaishvi</span> and I&rsquo;m a design‑savvy{" "}
            <span className="italic">engineer</span> in NYC.
          </p>
        </div>
        <div className="grid grid-cols-[minmax(70px,120px)_1fr] gap-x-6">
          <span className="eyebrow text-muted">I BUILD</span>
          <p className="tracking-tight">
            systems and stories that make <span className="italic">data</span>, products, and brands
            easier to understand.
          </p>
        </div>
        <div className="grid grid-cols-[minmax(70px,120px)_1fr] gap-x-6">
          <span className="eyebrow text-muted">I LOVE</span>
          <p className="tracking-tight">
            paper‑to‑prototype pipelines, layouts, and interfaces that feel calm, intentional, and{" "}
            <span className="italic">ship‑ready</span>.
          </p>
        </div>
        <div className="grid grid-cols-[minmax(70px,120px)_1fr] gap-x-6">
          <span className="eyebrow text-muted">SWEET SPOT</span>
          <p className="tracking-tight">
            moving from <span className="italic">prototype to production</span>—turning rapid
            exploration into real products.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 btn-primary transition-transform duration-200 hover:scale-105"
        >
          See the work <ArrowUpRight className="h-4 w-4" />
        </a>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60">
          <Github className="h-4 w-4" /> Github
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a href={LINKS.email}
          className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60">
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
          {[...items, ...items].map((name, i) => (
            <span key={i} className="flex items-center gap-4 text-sm font-medium text-muted">
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

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  return (
    <FadeUp delay={index * 0.1}>
      <div className="group relative flex flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-350 ease-out hover:border-transparent hover:bg-dark-card h-full">
        <div className="mb-4 flex items-center justify-between text-xs font-medium text-muted border-b border-border pb-2">
          <span className="tracking-[0.2em] uppercase">
            {String(index + 1).padStart(3, "0")}
          </span>
          <span className="text-[0.7rem] tracking-[0.18em] uppercase">
            {project.org}
          </span>
        </div>
        {project.featured && (
          <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
            Featured
          </span>
        )}
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
          {project.skills.map((s, i) => {
            const palette = ["tag-yellow", "tag-green", "tag-blue", "tag-pink"];
            const colorClass = palette[i % palette.length];
            return (
              <span
                key={s}
                className={`tag-pill ${colorClass} border border-border transition-colors duration-350 group-hover:border-background/40`}
              >
                {s}
              </span>
            );
          })}
        </div>
        <div className="mt-6">
          <a href={project.link.href}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent underline underline-offset-4 transition-opacity hover:opacity-70"
            onClick={(e) => e.stopPropagation()}>
            {project.link.label} <ArrowUpRight className="h-3.5 w-3.5" />
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
          <h2 className="font-heading text-3xl md:text-4xl leading-tight">Selected Work</h2>
          <span className="text-sm font-medium text-muted">Shipped and in progress</span>
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
        <h2 className="font-heading text-3xl md:text-4xl leading-tight">Play</h2>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          Little prototypes, visual riffs, and experiments that sometimes grow into real projects.
        </p>
      </FadeUp>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERIMENTS.map((exp, n) => (
          <FadeUp key={n} delay={n * 0.08}>
            <motion.a
              href={exp.href}
              whileHover={{ rotate: [0, -1, 1, -0.5, 0], transition: { duration: 0.5, type: "spring" } }}
              className="group flex aspect-[4/3] flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-accent/40 hover:bg-dark-card"
            >
              <span className="tag-pill tag-blue inline-flex w-fit text-foreground">
                {exp.tag}
              </span>
              <div>
                <h3 className="text-base font-bold tracking-tight transition-colors group-hover:text-accent">
                  {exp.title}
                </h3>
                <p className="mt-1 text-sm text-muted transition-colors group-hover:text-background/60">
                  {exp.description}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                View <ExternalLink className="h-3 w-3" />
              </div>
            </motion.a>
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
        {/* Bio */}
        <div className="lg:col-span-3">
          <FadeUp>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight">Info</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Recent graduate from Stony Brook University (B.S. Technological Systems Management,
              Computer Science specialization, double major in Applied Mathematics and Statistics —
              Dean&rsquo;s List). Based in New York City, actively seeking full-time roles at the
              intersection of engineering, AI, and product. I like turning messy problems into clear
              systems, fast iterations, and the boring-but-essential parts of engineering: naming,
              docs, and tests.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-10 space-y-4">
              {SKILLS_DATA.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 border-b border-border pb-4 sm:flex-row sm:gap-6">
                  <span className="w-28 shrink-0 text-sm font-bold uppercase tracking-wider">{item.label}</span>
                  <span className="text-sm leading-relaxed text-muted">{item.value}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={LINKS.email} className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60">
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <FadeUp delay={0.3}>
            <div className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider">Currently</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Seeking full-time roles in NYC (open to hybrid/remote)",
                  "Building out AI and design portfolio projects",
                  "CalArts UI/UX Design Specialization — in progress",
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
              <h3 className="text-sm font-bold uppercase tracking-wider">Open to</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Software engineering & full-stack roles",
                  "Solutions engineering & GTM technical roles",
                  "Product design & UX research roles",
                  "AI/ML adjacent product and ops roles",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.45}>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent">Work Authorization</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Authorized to work in the US on STEM OPT (3-year eligibility). No sponsorship required for STEM roles.
              </p>
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
          <h2 className="font-heading text-[clamp(2.4rem,4.8vw,4.8rem)] leading-[1.02] text-balance">
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
            <a href={LINKS.email} className="inline-flex items-center gap-2 btn-primary transition-transform duration-200 hover:scale-105">
              <Mail className="h-4 w-4" /> Let&rsquo;s chat
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-medium text-background/80 transition-colors hover:border-background/40 hover:text-background">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-medium text-background/80 transition-colors hover:border-background/40 hover:text-background">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="mt-20 grid gap-10 border-t border-background/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">Visit</h4>
              <p className="mt-3 text-sm text-background/70">New York City</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {["Work", "Play", "Info"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-background/70 transition-colors hover:text-background">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">Education</h4>
              <p className="mt-3 text-sm text-background/70">
                B.S. Technological Systems Management<br />
                + Applied Mathematics &amp; Statistics<br />
                Stony Brook University, Dec 2025
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-background/40">Let&rsquo;s talk</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href={LINKS.email} className="text-background/70 transition-colors hover:text-background">vaishvijariwala03@gmail.com</a></li>
                <li><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-background/70 transition-colors hover:text-background">LinkedIn</a></li>
                <li><a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-background/70 transition-colors hover:text-background">GitHub</a></li>
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
        <SelectedWork />
        <Experiments />
        <Info />
      </main>
      <Footer />
    </>
  );
}