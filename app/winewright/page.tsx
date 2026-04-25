import Image from "next/image";
import Link from "next/link";
import "../winewright.css";

export default function WineWrightPage() {
  return (
    <main className="winewright-page">
      <div className="hero">
        <div className="winewright-back">
          <Link href="/">← Back to portfolio</Link>
        </div>
        <div className="hero-inner">
          <span className="wip-badge">
            <span className="wip-dot" />
            Case Study
          </span>
          <h1 className="font-playfair">
            WineWright <em>Project Overview</em>
          </h1>
          <p className="hero-sub">
            A mobile app concept for wine enthusiasts that helps users find the right wine pairing
            for meals and learn through concise tasting and varietal insights.
          </p>
          <div className="meta-row">
            <div className="meta-item">
              <label>Role</label>
              <span>Product Designer</span>
            </div>
            <div className="meta-item">
              <label>Timeline</label>
              <span>CalArts UI/UX Specialization</span>
            </div>
            <div className="meta-item">
              <label>Focus</label>
              <span>Research, IA, Visual System, Prototype</span>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <section>
          <div className="section-label">Overview</div>
          <h2 className="section-title">Problem and Product Direction</h2>
          <p className="section-body">
            Wine selection can feel intimidating for casual users: there is too much jargon, too
            many options, and not enough practical guidance tied to what they are actually eating.
            WineWright reframes discovery around meal-first pairing with clear, lightweight tasting
            notes so users can make confident decisions faster.
          </p>

          <div className="overview-grid">
            <article className="overview-card">
              <div className="icon">🎯</div>
              <h3>Goal</h3>
              <p>Recommend the right wine for a meal in just a few taps.</p>
            </article>
            <article className="overview-card">
              <div className="icon">👥</div>
              <h3>Audience</h3>
              <p>Wine-curious users who want guidance without expert-level vocabulary.</p>
            </article>
            <article className="overview-card">
              <div className="icon">🧭</div>
              <h3>Experience</h3>
              <p>Simple search, guided discovery, and educational micro-content.</p>
            </article>
          </div>
        </section>

        <hr className="divider" />

        <section>
          <div className="section-label">Initial Findings</div>
          <h2 className="section-title">What Needed to Be Solved First</h2>
          <p className="section-body">
            Early wireframes and journey maps showed three recurring friction points: users did not
            know where to start, pairing logic felt opaque, and screen hierarchy made dense
            information harder to scan quickly.
          </p>

          <div className="process-steps">
            <article className="step">
              <div className="step-num">01</div>
              <div className="step-content">
                <h4>Entry flow clarity</h4>
                <p>
                  Centered the primary action around meal input so users immediately understand what
                  to do next.
                </p>
              </div>
            </article>
            <article className="step">
              <div className="step-num">02</div>
              <div className="step-content">
                <h4>Decision confidence</h4>
                <p>
                  Added concise descriptors (notes, color profile, ABV) to make recommendations feel
                  explainable, not random.
                </p>
              </div>
            </article>
            <article className="step">
              <div className="step-num">03</div>
              <div className="step-content">
                <h4>Information architecture</h4>
                <p>
                  Separated home-level discovery from lower-level wine detail pages for easier
                  progressive disclosure.
                </p>
              </div>
            </article>
          </div>
        </section>

        <hr className="divider" />

        <section>
          <div className="section-label">Design System</div>
          <h2 className="section-title">Moodboard, Color, and Pattern Language</h2>
          <p className="section-body">
            The visual system was built to feel warm and premium while still readable on mobile.
            Deep wine tones set brand character, while gold accents guide calls-to-action and key
            data points.
          </p>

          <div className="palette-row">
            <div className="swatch">
              <div className="swatch-color" style={{ background: "#4a1a25" }} />
              <div className="swatch-label">
                <strong>Wine Deep</strong>#4A1A25
              </div>
            </div>
            <div className="swatch">
              <div className="swatch-color" style={{ background: "#7b2d3e" }} />
              <div className="swatch-label">
                <strong>Wine</strong>#7B2D3E
              </div>
            </div>
            <div className="swatch">
              <div className="swatch-color" style={{ background: "#b8965a" }} />
              <div className="swatch-label">
                <strong>Gold Accent</strong>#B8965A
              </div>
            </div>
            <div className="swatch">
              <div className="swatch-color" style={{ background: "#faf7f2" }} />
              <div className="swatch-label">
                <strong>Cream Surface</strong>#FAF7F2
              </div>
            </div>
          </div>

          <div className="icons-row">
            <div className="icon-card">
              <div className="icon-circle" style={{ background: "#f5eef0" }}>
                🍷
              </div>
              <label>Pairing</label>
            </div>
            <div className="icon-card">
              <div className="icon-circle" style={{ background: "#f7f0e6" }}>
                🔍
              </div>
              <label>Search</label>
            </div>
            <div className="icon-card">
              <div className="icon-circle" style={{ background: "#eef6ee" }}>
                📚
              </div>
              <label>Learn</label>
            </div>
            <div className="icon-card">
              <div className="icon-circle" style={{ background: "#f0f4ff" }}>
                ✨
              </div>
              <label>Recommend</label>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section>
          <div className="section-label">Core Screens</div>
          <h2 className="section-title">From Home Discovery to Wine Details</h2>
          <p className="section-body">
            Final static interface work focused on two anchor screens: a lightweight home/discovery
            view and a structured wine detail page with pairing context and tasting notes.
          </p>

          <div className="screens-grid">
            <article className="screen-card">
              <div className="screen-mockup">
                <div className="phone-frame">
                  <div className="phone-status">
                    <span className="phone-dot" />
                    <span className="phone-dot" />
                    <span className="phone-dot" />
                  </div>
                  <div className="phone-body">
                    <div className="phone-header">WineWright, Sam</div>
                    <div className="phone-icon-row">
                      <div className="phone-icon" style={{ background: "#b8965a", color: "#fff" }}>
                        🍷
                      </div>
                      <div className="phone-icon" style={{ background: "#ffffff33", color: "#fff" }}>
                        🍽️
                      </div>
                      <div className="phone-icon" style={{ background: "#ffffff33", color: "#fff" }}>
                        ⭐
                      </div>
                    </div>
                    <div className="phone-search">
                      <span className="phone-search-text">What meal are you having?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="screen-info">
                <h4>Main / Home Screen</h4>
                <p>Entry point for meal-based search and quick recommendation prompts.</p>
              </div>
            </article>

            <article className="screen-card">
              <div className="screen-mockup">
                <div className="phone-frame wine-detail-phone">
                  <div className="phone-status">
                    <span className="phone-dot" />
                    <span className="phone-dot" />
                    <span className="phone-dot" />
                  </div>
                  <div className="phone-body">
                    <div className="cin-cin">CIN CIN</div>
                    <div className="wine-name">GAMAY</div>
                    <span className="wine-img-placeholder" />
                    <div className="wine-attr-row">
                      <div className="wine-attr">Cherry, raspberry, currant</div>
                      <div className="wine-attr">Pale ruby color</div>
                    </div>
                    <div className="wine-attr-row">
                      <div className="wine-attr">10-11.5% ABV</div>
                      <div className="wine-attr">Great with herb-crusted salmon</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="screen-info">
                <h4>Lower-Level Detail Screen</h4>
                <p>
                  Educational view combining tasting profile, color, alcohol range, and food pairing.
                </p>
              </div>
            </article>
          </div>
        </section>

        <hr className="divider" />

        <section>
          <div className="section-label">Reflection</div>
          <h2 className="section-title">What I Learned Building WineWright</h2>

          <div className="learnings-grid">
            <article className="learning-card">
              <span className="tag tag-research">Research</span>
              <p>
                Even in concept projects, user journeys are the fastest way to identify confusion
                points and shape a cleaner first-use experience.
              </p>
            </article>
            <article className="learning-card">
              <span className="tag tag-design">Design System</span>
              <p>
                A small but deliberate pattern library made screens more consistent and reduced
                redesign churn while iterating.
              </p>
            </article>
            <article className="learning-card">
              <span className="tag tag-ux">UX Writing</span>
              <p>
                Microcopy like “What meal are you having?” improved guidance more than adding extra
                controls or dense onboarding.
              </p>
            </article>
            <article className="learning-card">
              <span className="tag tag-next">Product Thinking</span>
              <p>
                Recommendation trust depends on visible reasoning; users respond better when the app
                explains why a pairing is suggested.
              </p>
            </article>
          </div>
        </section>

        <section className="next-steps">
          <div className="section-label">Next Steps</div>
          <h2 className="section-title">How I Would Extend This Project</h2>
          <ul className="next-list">
            <li>Add preference onboarding for sweetness, body, and budget constraints.</li>
            <li>Run usability testing on recommendation confidence and screen comprehension.</li>
            <li>Prototype dynamic pairing explanations powered by structured rules and AI.</li>
            <li>Expand to restaurant mode with menu-photo parsing and instant pair suggestions.</li>
          </ul>
        </section>

        <div className="cta-row">
          <Link href="/" className="btn btn-primary">
            Back to Portfolio
          </Link>
          <a href="mailto:vaishvijariwala03@gmail.com" className="btn btn-outline">
            Contact
          </a>
        </div>

        <div className="footer-note">
          WineWright case study assembled from wireframes, journey maps, moodboard + pattern
          library, and final static interface deliverables.
        </div>

        <footer className="case-study-footer-art" aria-label="Footer illustration">
          <Image
            src="/images/winewright-case-study-footer.png"
            alt="Line drawing of people gathered around a bar with drinks"
            width={736}
            height={700}
            className="case-study-footer-img"
            sizes="(max-width: 600px) 100vw, 520px"
          />
        </footer>
      </div>
    </main>
  );
}
