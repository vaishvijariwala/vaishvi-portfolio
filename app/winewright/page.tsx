import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import "../portfolio.css";
import "./winewright.css";

export default function WineWrightPage() {
  return (
    <div className="ww-page">

      {/* ── HERO ── */}
      <section className="ww-hero">
        <nav className="ww-hero-topnav">
          <Link href="/" className="ww-topnav-link">←Home</Link>
          <Link href="/citybinsentinel" className="ww-topnav-link">Next Project →</Link>
        </nav>

        <h1 className="ww-hero-title">WINE{"  "}WRIGHT</h1>

        <div className="ww-hero-mockup">
          <Image
            src="/images/ww-hero-mockup.png"
            alt="WineWright app screens"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="ww-hero-bottom">
          <dl className="ww-hero-meta">
            <dt>TYPE</dt><dd>Self-initiated</dd>
            <dt>ROLE</dt><dd>UX design, UI design, research, illustration</dd>
            <dt>PLATFORM</dt><dd>iOS</dd>
            <dt>DESIGN TOOLS</dt><dd>Figma, Canva, Procreate, paper</dd>
          </dl>

          <p className="ww-hero-desc">
            Designing an app-based service from scratch for wine enthusiasts that finds the right
            wine to pair with any meal, and to read and learn more about wine pairings.
          </p>
        </div>

        <div className="ww-hero-cta-row">
          <a
            href="https://www.figma.com/proto/ax2AZUNsRE0cP3WVefPHhn/WineWright-Wireframe-1?node-id=3-29&p=f&viewport=-2638%2C-158%2C0.9&t=Jc1EeR4PRiUH6B4G-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A28&show-proto-sidebar=1&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
            className="ww-explore-btn"
          >
            Explore Prototype →
          </a>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="ww-section">
        <h2 className="ww-section-label">The problem I wanted to solve</h2>
        <div className="ww-section-body">
          <p>Wine selection is quietly intimidating. Walk into a restaurant, flip to the wine list, and most people either point at something mid-price and hope for the best, or ask a server and half-process their answer. The jargon is a wall. The options are too many. And the feedback loop — did this actually go well with the food? — is almost impossible to build across different meals, bottles, and occasions.</p>
          <p>Existing apps tend to cater to enthusiasts who already know what they&rsquo;re looking for. They&rsquo;re database-first, search-first, expert-first. I wanted to design something meal-first: you tell the app what you&rsquo;re eating, and it tells you what to drink. Friendly. Visual. Fast.</p>
          <p>WineWright started as a CalArts course project and became something I kept returning to — because the problem is real, the design space is under explored, and the constraints forced genuinely interesting decisions.</p>
        </div>

        <div className="ww-center-img">
          <Image
            src="/images/ww-notes-1.jpg"
            alt="First page of notes: the original concept"
            width={392}
            height={523}
            className="ww-img"
          />
          <p className="ww-caption">First page of notes: the original concept.</p>
        </div>

        <h2 className="ww-section-label">What made this difficult</h2>
        <div className="ww-section-body">
          <p>The core tension I kept running into: wine pairing is actually complex, but the app has to feel simple. Every design decision lived in that gap.</p>
          <p>Too much information and you replicate the problem you&rsquo;re solving — overwhelming users with tasting notes, region classifications, and ABV ranges they didn&rsquo;t ask for. Too little and the recommendation feels arbitrary, and users have no way to build trust or intuition over time.</p>
          <p>A second tension: who exactly is the user? Someone grabbing a bottle for weeknight pasta has completely different needs than someone hosting a dinner party and trying to impress. The app couldn&rsquo;t be all things, so I had to choose.</p>
        </div>

        <h2 className="ww-section-label">The Research</h2>
      </section>

      {/* ── RESEARCH ── */}
      <section className="ww-section">
        <div className="ww-section-body">
          <p>I started by talking to people (friends &amp; fam) — not just about wine, but about the moments where the gap between wanting to choose well and actually knowing how felt most acute. A few patterns surfaced quickly.</p>
          <p>The intimidation is social, not informational. Most people said they didn&rsquo;t feel they lacked information — they felt they lacked confidence. They worried about ordering wrong in front of someone. They second-guessed themselves at the shelf. This was important: the design problem wasn&rsquo;t a knowledge gap to fill, it was <span className="ww-highlight">a confidence gap</span> to close.</p>
          <p>People <span className="ww-highlight">anchor on food</span>, not wine. Almost everyone described their wine decisions in terms of what they were eating. &ldquo;I knew I was making pasta so I wanted something Italian.&rdquo; &ldquo;We were grilling so I figured red.&rdquo; The mental model was already meal-first. Designing around it wasn&rsquo;t a creative choice — it was following the grain of how people actually think.</p>
          <p>Trust in recommendations is fragile. When I asked about apps or websites people had tried, the common complaint was that recommendations felt generic and unexplained. &ldquo;It just told me Cabernet. I don&rsquo;t know why. How do I know that&rsquo;s right for this?&rdquo; An unexplained recommendation felt like a guess. A recommendation with even a brief reason felt <span className="ww-highlight">credible</span>.</p>
          <p>The casual user doesn&rsquo;t want to learn, they want to decide. There was a meaningful split between people who wanted to understand wine better over time and people who just wanted the answer right now. My primary user was the second type: someone who wants to <span className="ww-highlight">feel good about their choice</span> in three taps, not someone who wants wine school on their phone.</p>
        </div>

        <div className="ww-center-img">
          <Image
            src="/images/ww-research-notes.jpg"
            alt="Research notes"
            width={380}
            height={291}
            className="ww-img"
          />
        </div>
      </section>

      {/* ── PERSONAS ── */}
      <section className="ww-section">
        <div className="ww-persona-card">
          <div className="ww-persona-img-wrap">
            <Image src="/images/ww-persona-sam.png" alt="Sam persona illustration" width={148} height={219} className="ww-persona-img" />
          </div>
          <p className="ww-persona-text">
            <strong>Sam</strong>:&nbsp; a casual home cook in their late 20s loves skiing. Buys wine a few times a month. Wants to feel like they got it right without having to think too hard. Gets frustrated by recommendation apps that feel cold or jargon-heavy. <em>Primary design target.</em>
          </p>
        </div>

        <div className="ww-persona-card">
          <div className="ww-persona-img-wrap ww-persona-img-wrap--alex">
            <Image src="/images/ww-persona-alex.png" alt="Alex persona illustration" width={104} height={233} className="ww-persona-img" />
          </div>
          <p className="ww-persona-text">
            <strong>Alex</strong>:&nbsp; a slightly more engaged wine drinker who hosts occasionally, wants to understand why a pairing works, and would actually read tasting notes if they were written well. <em>Secondary user; a reason to invest in the detail view.</em>
          </p>
        </div>

        <div className="ww-pullquote-wrap">
          <span className="ww-quote-mark ww-quote-mark--open">&ldquo;</span>
          <div className="ww-pullquote-card">
            <p className="ww-pullquote-text">
              Sam drove every core <span style={{ color: "var(--purple)" }}>flow decision</span>. Alex justified <span style={{ color: "var(--purple)" }}>the depth</span> that&rsquo;s there if you want it
            </p>
          </div>
          <span className="ww-quote-mark ww-quote-mark--close">&rdquo;</span>
        </div>
      </section>

      {/* ── DEFINING THE PROBLEM ── */}
      <section className="ww-section">
        <h2 className="ww-section-label">Defining the problem to solve</h2>
        <p className="ww-section-intro">After research, I wrote a problem statement to pressure-test the scope:</p>

        <div className="ww-note-card">
          <p className="ww-note-text">
            Sam wants to choose the right wine for a meal without feeling out of their depth — but most tools either overwhelm them with information or give recommendations that feel arbitrary and untrustworthy.
          </p>
        </div>

        <div className="ww-section-body">
          <p>This framing ruled out a few things. WineWright wasn&rsquo;t going to be a wine discovery app (browsing for its own sake), a social app (ratings and reviews), or a learning app (wine education). It was going to be a pairing utility with enough warmth and personality that it felt like a recommendation from someone who actually knew you.</p>
          <p>The core value proposition I committed to:</p>
          <ul>
            <li>Search by specific meal, get a wine — in a few taps</li>
            <li>See brief, sensory tasting notes (taste, colour, aroma) — not jargon</li>
            <li>Save wines you like so recommendations improve over time</li>
            <li>Order online directly from the result — remove the last friction point</li>
          </ul>
        </div>

        <h2 className="ww-section-label">Exploring ideas</h2>
        <div className="ww-section-body">
          <p>Before wire-framing, I pushed myself with &ldquo;what if&rdquo; questions to avoid locking in too early.</p>
          <p><em>What if the first screen was just a camera?</em> Too ambitious for v1 — saved for a future scan-a-menu feature.</p>
          <p><em>What if results were a swipeable single card?</em> Interesting, but users wanted to compare at least two options.</p>
          <p><em>What if the home was organised by meal type — breakfast, dinner, occasion?</em> Users didn&rsquo;t think in categories. They thought in dishes.</p>
          <p><em>What if tasting notes used sensory icons instead of prose?</em> <span className="ww-highlight">This one stuck</span>. A nose for aroma, lips for taste, an eye for colour. It organised information around how people actually experience wine — not how critics write about it.</p>
        </div>
      </section>

      {/* ── WIREFRAMES ── */}
      <section className="ww-section">
        <h2 className="ww-section-label">Wireframes</h2>

        <div className="ww-center-img">
          <Image src="/images/ww-wireframe-steps.jpg" alt="Step 3 — Prototype & User Experience" width={645} height={41} className="ww-img" />
        </div>

        <div className="ww-section-body">
          <p>The result screen had the most tension: how much tasting information is too much? I explored three versions.</p>
          <p>Full text tasting notes — too much to scan. A bar-chart breakdown of body/acidity/tannins — useful but cold. Sensory icons with brief descriptors — fast to read, immediately recognizable as WineWright.</p>
          <p>Option 3 won. It solved the information problem and created a visual identity at the same time.</p>
        </div>

        <div className="ww-center-img">
          <Image src="/images/ww-flow-chart.jpg" alt="User interaction flow chart" width={455} height={328} className="ww-img" />
        </div>

        <p className="ww-section-intro">With a &ldquo;no bad ideas&rdquo; mindset, I sketched some rough solutions addressing persona needs in different ways.</p>
      </section>

      {/* ── VISUAL DESIGN ── */}
      <section className="ww-section">
        <div className="ww-center-img">
          <Image src="/images/ww-notes-2.jpg" alt="Wireframe sketches" width={351} height={468} className="ww-img" />
        </div>

        <h2 className="ww-section-label">Visual design</h2>
        <p className="ww-section-intro">
          I collected references before touching Figma. I was drawn to natural wine culture — small producers, handmade labels, physical warmth. Not cellar-formal. More like: the friend who brings an interesting bottle and tells you why they picked it.
        </p>
      </section>

      {/* ── FINAL PROTOTYPE ── */}
      <section className="ww-section">
        <div className="ww-screens-grid">
          <div className="ww-screen-img-wrap">
            <Image src="/images/ww-moodboard.jpg" alt="Visual references and moodboard" width={453} height={350} className="ww-img" />
          </div>
          <div className="ww-screen-img-wrap">
            <Image src="/images/ww-design-system.jpg" alt="Design system" width={454} height={351} className="ww-img" />
          </div>
        </div>

        <h2 className="ww-section-label">The final Prototype</h2>

        <div className="ww-prototype-wrap">
          <Image src="/images/ww-prototype.png" alt="WineWright final prototype screens" width={855} height={500} className="ww-img" />
        </div>
        <p className="ww-caption">Still a work in progress!</p>
      </section>

      {/* ── WHAT I LEARNT ── */}
      <section className="ww-section">
        <h2 className="ww-section-label">What I learnt</h2>
        <div className="ww-section-body">
          <p>The biggest shift: the app&rsquo;s job isn&rsquo;t to teach people about wine. It&rsquo;s to make them feel smart about a choice they just made. Those are completely different briefs.</p>
          <p>The sensory icon system is the decision I&rsquo;m most proud of. It resolved the information overload problem without dumbing anything down — it just organised information around how people experience wine, not how critics write about it. I didn&rsquo;t arrive at it through a framework. I arrived at it by asking &ldquo;what if&rdquo; until something clicked.</p>
          <p>What I&rsquo;d do differently: I&rsquo;d test the meal-first search model earlier. I designed in the assumption that users think food-first — my research supported it, but I never stress-tested whether the search bar was the right entry point versus a browse or camera model. That assumption had the most downstream consequences and got the least rigorous validation.</p>
        </div>

        <p className="ww-caption ww-feedback-link">
          <a href="mailto:vaishvijariwala03@gmail.com" className="ww-wavy-link">
            I&rsquo;d love to hear your views on this project :)
          </a>
        </p>

        <div className="ww-bottom-nav">
          <Link href="/" className="project-btn ww-btn-outline">←Home</Link>
          <Link href="/citybinsentinel" className="project-btn">Next Project →</Link>
        </div>
      </section>

    </div>
  );
}
