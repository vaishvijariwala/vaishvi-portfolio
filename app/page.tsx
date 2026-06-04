"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "./portfolio.css";
import "./home.css";

const ALL_PROJECTS = [
  {
    id: "winewright",
    label: "Wine Wright—An app for wine enthusiasts",
    href: "/winewright",
    image: "/images/winewrightprototype.jpg",
    imageAlt: "WineWright app screens",
    external: false,
  },
  {
    id: "citybinsentinel",
    label: "CityBin Sentinel—Smart waste management",
    href: "/citybinsentinel",
    image: "/images/citybinsentinel-hero.png",
    imageAlt: "CityBin Sentinel design",
    external: false,
  },
  {
    id: "ascii",
    label: "Coding Ascii Art—Pj5",
    href: "https://github.com/vaishvijariwala/asciiVideo",
    image: "/images/ascii-hero.png",
    imageAlt: "ASCII art coding project",
    external: true,
  },
  {
    id: "fluor",
    label: "Various Projects—Fluor Internships",
    href: null,
    image: "/images/fluor-hero.png",
    imageAlt: "Fluor internship projects",
    external: false,
  },
];

function GridCell({ label, href, image, imageAlt, external }: (typeof ALL_PROJECTS)[0]) {
  const inner = (
    <>
      <div className="grid-cell-image">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="grid-cell-img"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
      <p className="grid-cell-label">{label}</p>
    </>
  );

  if (!href) return <div className="grid-cell">{inner}</div>;
  if (external) return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="grid-cell">{inner}</a>
  );
  return <Link href={href} className="grid-cell">{inner}</Link>;
}

function Nav() {
  return (
    <header className="nav">
      <div className="nav-left">
        <Link href="/#projects" className="nav-link">Projects</Link>
        <Link href="/contact" className="nav-link">Contacts</Link>
      </div>
      <div className="nav-logo">
        <Link href="/" aria-label="Home" className="vai-logo-link">
          <Image
            src="/images/logo.png"
            alt="vai"
            width={387}
            height={125}
            priority
            className="vai-logo h-14 w-auto"
          />
        </Link>
      </div>
      <div className="nav-right">
        <a
          href="https://drive.google.com/file/d/1T1JTg3ZAW5jkzOWmpk2zW_THGYvU2m5L/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          Resume
        </a>
        <Link href="/about" className="nav-link">About</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-cta">If you have scrolled this far, it means you should hire me.</p>
      <nav className="footer-socials" aria-label="Social links">
        <a href="https://www.linkedin.com/in/vaishvi-jariwala/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zM6.5 7.73C5.5 7.73 4.75 6.97 4.75 6S5.5 4.27 6.5 4.27 8.25 5.03 8.25 6 7.5 7.73 6.5 7.73zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97V19h-3V9h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19z"/>
          </svg>
        </a>
        <a href="mailto:vaishvijariwala03@gmail.com" className="footer-social-link" aria-label="Email">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
          </svg>
        </a>
        <a href="https://github.com/vaishvijariwala" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
        <a href="https://x.com/vaishvi222" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter / X">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </nav>
    </footer>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  /* Scroll parallax + fade for hero */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (heroRef.current) {
        const opacity = Math.max(0, 1 - y / 480);
        const nudge = y * 0.18;
        heroRef.current.style.opacity = String(opacity);
        heroRef.current.style.transform = `translateY(${nudge}px)`;
      }
      if (photoRef.current) {
        photoRef.current.style.transform = `translateY(${y * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Stagger-in grid cells on scroll */
  useEffect(() => {
    const cells = document.querySelectorAll<HTMLElement>(".grid-cell");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("grid-cell--visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    cells.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <div className="page">
      <Nav />

      <section className="hero" ref={heroRef}>
        <div className="hero-photo-wrap" ref={photoRef}>
          <Image
            src="/images/vaishvi-photo.jpg"
            alt="Vaishvi Jariwala"
            width={187}
            height={280}
            className="hero-photo"
            priority
          />
        </div>
        <p className="hero-bio">
          vaishvi jariwala is a{" "}
          <span className="design-engineer">design engineer</span>
          {" → a storyteller passionate about creative ai technology currently studying ui/ux specialisation @"}
          <a href="https://www.coursera.org/specializations/ui-ux-design" target="_blank" rel="noopener noreferrer" className="hero-bio-link">calarts</a>
          {" while exploring all things creative previously @"}
          <a href="https://www.fluor.com/" target="_blank" rel="noopener noreferrer" className="hero-bio-link">fluor</a>
        </p>
        <p className="hero-cta">Explore my projects below ↓</p>
      </section>

      <main id="projects" className="project-grid">
        {ALL_PROJECTS.map((p) => (
          <GridCell key={p.id} {...p} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
