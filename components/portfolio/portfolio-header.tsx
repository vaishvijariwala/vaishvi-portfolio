import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_LINKS, navLinkClass } from "@/lib/portfolio";

function LogoMark() {
  return (
    <Link
      href="/"
      className="block leading-none no-underline transition-opacity hover:opacity-90 motion-safe:hover:scale-[1.02] motion-reduce:hover:scale-100 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-portfolio-accent"
      aria-label="Home"
    >
      <span className="relative block h-11 w-[7.25rem] sm:h-12 sm:w-[7.75rem]">
        <Image
          src="/images/vai.png"
          alt=""
          fill
          sizes="160px"
          className="object-contain object-center"
          priority
        />
      </span>
    </Link>
  );
}

export type PortfolioHeaderProps = {
  /** Use hash links for same-page anchors (home). Off-site pages use `/#section`. */
  samePageAnchors?: boolean;
  /** Mark resume nav item as current page */
  resumeCurrent?: boolean;
};

function NavProjectsExtrasAbout({
  samePageAnchors,
}: {
  samePageAnchors: boolean;
}) {
  if (samePageAnchors) {
    return (
      <>
        <a href="#projects" className={navLinkClass}>
          Projects
        </a>
        <a href="#extras" className={navLinkClass}>
          Extras
        </a>
      </>
    );
  }
  return (
    <>
      <Link href="/#projects" className={navLinkClass}>
        Projects
      </Link>
      <Link href="/#extras" className={navLinkClass}>
        Extras
      </Link>
    </>
  );
}

function NavAbout({ samePageAnchors }: { samePageAnchors: boolean }) {
  if (samePageAnchors) {
    return (
      <a href="#about" className={navLinkClass}>
        About
      </a>
    );
  }
  return (
    <Link href="/#about" className={navLinkClass}>
      About
    </Link>
  );
}

export function PortfolioHeader({
  samePageAnchors = false,
  resumeCurrent = false,
}: PortfolioHeaderProps) {
  return (
    <header
      className="grid grid-cols-1 justify-items-center gap-5 pb-10 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:pb-14"
      role="navigation"
      aria-label="Primary"
    >
      <div className="order-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:order-none md:justify-self-start lg:gap-x-10">
        <NavProjectsExtrasAbout samePageAnchors={samePageAnchors} />
      </div>

      <div className="order-1 flex justify-center md:order-none md:justify-self-center">
        <LogoMark />
      </div>

      <div className="order-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:order-none md:justify-self-end lg:gap-x-10">
        {resumeCurrent ? (
          <span
            className="border-b border-portfolio-accent text-[0.9375rem] font-medium lowercase tracking-wide text-portfolio-ink"
            aria-current="page"
          >
            Resume
          </span>
        ) : (
          <Link href="/resume" className={navLinkClass}>
            Resume
          </Link>
        )}
        <NavAbout samePageAnchors={samePageAnchors} />
      </div>
    </header>
  );
}

export function PortfolioContactFooter() {
  return (
    <footer className="mt-16 border-t border-black/10 pt-8 text-sm lowercase text-portfolio-muted">
      <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
        <a
          href={PORTFOLIO_LINKS.email}
          className="border-b border-black/15 text-portfolio-ink no-underline transition-colors hover:border-portfolio-accent"
        >
          email
        </a>
        <span className="text-black/25">·</span>
        <a
          href={PORTFOLIO_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-black/15 text-portfolio-ink no-underline transition-colors hover:border-portfolio-accent"
        >
          github
        </a>
        <span className="text-black/25">·</span>
        <a
          href={PORTFOLIO_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-black/15 text-portfolio-ink no-underline transition-colors hover:border-portfolio-accent"
        >
          linkedin
        </a>
      </div>
      <p className="mt-6 text-center text-portfolio-muted">
        © {new Date().getFullYear()} vaishvi jariwala
      </p>
    </footer>
  );
}
