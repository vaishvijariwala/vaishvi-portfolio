"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import WhyHireVaishvi from "./why-hire-vaishvi";
import "./calm.css";

const WINEWRIGHT_DESCRIPTION =
  "End-to-end design of a mobile app that turns natural language into wine discovery. Includes user research, journey mapping, content mapping, interaction design, and a full prototype — built for non-technical users navigating a complex domain.";

/* ─── projects: static tile + title below (Laurel-style grid) ─── */

type Project = {
  id: string;
  title: string;
  status: string;
  video: string | null;
  href: string;
  placeholder: string;
  ratio: "square" | "landscape";
  thumbnail?: string;
};

const PROJECTS: Project[] = [
  {
    id: "001",
    title: "wine wright",
    status: "work in progress",
    video: null,
    href: "/winewright",
    placeholder: "#e8e8dd",
    ratio: "landscape" as const,
    thumbnail: "/images/winewright-thumbnail.png",
  },
  {
    id: "002",
    title: "ai job fit",
    status: "agentic pipeline",
    video: null,
    href: "#",
    placeholder: "#dfe8e4",
    ratio: "square" as const,
    thumbnail: "/images/ai-fit-generator-thumbnail.png",
  },
  {
    id: "003",
    title: "md/sa analytics",
    status: "fluor · 2024",
    video: null,
    href: "#",
    placeholder: "#e0e4e8",
    ratio: "landscape" as const,
    thumbnail: "/images/mdsa-thumbnail.png",
  },
  {
    id: "004",
    title: "market entry",
    status: "fluor · 2025",
    video: null,
    href: "#",
    placeholder: "#ebe8e0",
    ratio: "square" as const,
    thumbnail: "/images/market-entry-thumbnail.png",
  },
  {
    id: "005",
    title: "ai & agency",
    status: "research",
    video: null,
    href: "#",
    placeholder: "#e4ebe8",
    ratio: "landscape" as const,
  },
  {
    id: "006",
    title: "nih data",
    status: "sbu biomedicine",
    video: null,
    href: "#",
    placeholder: "#e2e2eb",
    ratio: "landscape" as const,
  },
  {
    id: "007",
    title: "coming soon",
    status: "—",
    video: null,
    href: "#",
    placeholder: "#e6e4ef",
    ratio: "square" as const,
  },
  {
    id: "008",
    title: "coming soon",
    status: "—",
    video: null,
    href: "#",
    placeholder: "#ece6e0",
    ratio: "landscape" as const,
  },
  {
    id: "009",
    title: "coming soon",
    status: "—",
    video: null,
    href: "#",
    placeholder: "#e0eae6",
    ratio: "square" as const,
  },
];

const EXPERIMENTS = [
  { label: "ascii webcam", href: "#" },
  { label: "neural net from scratch", href: "#" },
  { label: "sir / sis models", href: "#" },
];

const LINKS = {
  email: "mailto:vaishvijariwala03@gmail.com",
  github: "https://github.com/vaishvijariwala",
  linkedin: "https://www.linkedin.com/in/vaishvi-jariwala",
};

function ProjectBlock({
  title,
  status,
  video,
  href,
  placeholder,
  ratio,
  thumbnail,
  onCardClick,
}: {
  title: string;
  status: string;
  video: string | null;
  href: string;
  placeholder: string;
  ratio: "square" | "landscape";
  thumbnail?: string;
  onCardClick?: () => void;
}) {
  const ratioClass =
    ratio === "square" ? "calm-ratio-square" : "calm-ratio-landscape";

  const body = (
    <>
      <figure className={`video-mask ${ratioClass}`}>
        {video ? (
          <video
            src={video}
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"
          />
        ) : thumbnail ? (
          <Image
            src={thumbnail}
            alt="WineWright UI: buttons, circular icons, and pattern elements"
            fill
            className="calm-thumb-img"
            sizes="(max-width: 720px) 90vw, 360px"
          />
        ) : (
          <div
            className="calm-placeholder"
            style={{ background: placeholder }}
            aria-hidden
          />
        )}
      </figure>
      <div className="title">
        {title}
        <div className="gray">{status}</div>
      </div>
    </>
  );

  if (onCardClick) {
    return (
      <div className="grid-item">
        <button type="button" className="calm-card-btn" onClick={onCardClick}>
          {body}
        </button>
      </div>
    );
  }

  if (href === "#") {
    return (
      <div className="grid-item">
        <div>{body}</div>
      </div>
    );
  }

  return (
    <div className="grid-item">
      <Link href={href}>{body}</Link>
    </div>
  );
}

function WineWrightModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="calm-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="calm-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wine-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="calm-modal-close"
          onClick={onClose}
          aria-label="close"
        >
          ×
        </button>
        <h2 id="wine-modal-title">wine wright</h2>
        <p>{WINEWRIGHT_DESCRIPTION}</p>
        <div className="calm-modal-actions">
          <Link href="/winewright" onClick={onClose}>
            full case study
          </Link>
        </div>
      </div>
    </div>
  );
}

function AIFitModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="calm-modal-backdrop" onClick={onClose} role="presentation">
      <div className="calm-modal calm-modal-ai-fit" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="calm-modal-close" onClick={onClose} aria-label="close">
          ×
        </button>
        <WhyHireVaishvi />
      </div>
    </div>
  );
}

export default function Home() {
  const [wineModalOpen, setWineModalOpen] = useState(false);
  const [aiFitModalOpen, setAiFitModalOpen] = useState(false);
  const closeWineModal = useCallback(() => setWineModalOpen(false), []);
  const closeAiFitModal = useCallback(() => setAiFitModalOpen(false), []);

  return (
    <div className="calm-portfolio" id="top">
      <WineWrightModal open={wineModalOpen} onClose={closeWineModal} />
      <AIFitModal open={aiFitModalOpen} onClose={closeAiFitModal} />

      <div className="calm-shell">
        <aside className="calm-sidebar">
          <Link href="/" className="calm-name">
            vaishvi jariwala
          </Link>
          <nav className="calm-nav" id="home">
            <a href="#work">
              work
            </a>
            <br />
            <a href="#writing">
              writing
            </a>
            <br />
            <a href="#play">
              play
            </a>
            <br />
            <a href="#learning">
              learning
            </a>
          </nav>
        </aside>

        <div className="calm-main">
          <div id="regular-content">
            <section id="work" aria-label="work">
              <div className="grid calm-grid">
                {PROJECTS.map((p) => (
                  <ProjectBlock
                    key={p.id}
                    title={p.title}
                    status={p.status}
                    video={p.video}
                    href={p.href}
                    placeholder={p.placeholder}
                    ratio={p.ratio}
                    thumbnail={p.thumbnail}
                    onCardClick={
                      p.id === "001"
                        ? () => setWineModalOpen(true)
                        : p.id === "002"
                          ? () => setAiFitModalOpen(true)
                          : undefined
                    }
                  />
                ))}
              </div>
            </section>

            <section id="writing" className="calm-section" aria-label="writing">
              <h2>writing</h2>
              <p className="gray">Notes and essays — coming soon.</p>
            </section>

            <section id="play" className="calm-section" aria-label="play">
              <h2>play</h2>
              <ul className="calm-play-list">
                {EXPERIMENTS.map((exp) => (
                  <li key={exp.label}>
                    <a href={exp.href}>{exp.label}</a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="learning" className="calm-section" aria-label="learning">
              <h2>learning</h2>
              <p>
                CalArts UI/UX specialization, Stony Brook (TSM + CS + applied math & stats).
              </p>
            </section>
          </div>

          <footer className="calm-footer home" id="official-footer">
            <div className="calm-footer-row">
              <div>
                <a href={LINKS.email}>email</a>
                {" · "}
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                  github
                </a>
                {" · "}
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin
                </a>
              </div>
              <a href="#top" className="calm-back-top">
                ↑
              </a>
            </div>
            <p className="gray" style={{ marginTop: "1.25em" }}>
              © {new Date().getFullYear()} vaishvi jariwala · nyc
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
