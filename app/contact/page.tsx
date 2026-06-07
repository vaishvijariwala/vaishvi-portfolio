"use client";

import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import "../portfolio.css";

export default function ContactPage() {
  return (
    <div className="page" style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* Nav */}
      <header className="nav">
        <div className="nav-left">
          <Link href="/" className="nav-link">Projects</Link>
          <Link href="/contact" className="nav-link active">Contacts</Link>
        </div>
        <div className="nav-logo">
          <Image src="/images/logo.png" alt="" width={387} height={125} priority className="h-14 w-auto" />
        </div>
        <div className="nav-right">
          <Link href="/resume" className="nav-link">Resume</Link>
          <Link href="/about" className="nav-link">About</Link>
        </div>
      </header>

      {/* Main contact links — large purple stacked type */}
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - var(--nav-h))",
        padding: "40px 64px 80px",
      }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: 0, textAlign: "center" }}>
          {[
            { label: "mail", href: "mailto:vaishvijariwala03@gmail.com" },
            { label: "linkedIn", href: "https://www.linkedin.com/in/vaishvi-jariwala" },
            { label: "github", href: "https://github.com/vaishvijariwala" },
            //{ label: "dribble", href: "#" },
            //{ label: "arena", href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              style={{
                fontFamily: "\"Shree Devanagari 714\", \"Georgia\", serif",
                fontWeight: 700,
                fontSize: "clamp(48px, 10vw, 150px)",
                lineHeight: 1.45,
                letterSpacing: "-0.005em",
                color: "var(--purple)",
                textDecoration: "none",
                transition: "opacity 0.15s",
                display: "block",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {label}
            </a>
          ))}
        </nav>
      </main>

    </div>
  );
}
