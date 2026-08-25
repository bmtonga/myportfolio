import "./CaseStudy.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";

const architecture = [
  {
    label: "01 / WEB PORTAL",
    title: "Django + React",
    body: "Primary routing and customer interface, with responsive static pages, Django authentication, and relational car make and model data.",
  },
  {
    label: "02 / REVIEW SERVICE",
    title: "Express + MongoDB",
    body: "A containerized REST microservice for dealership locations and customer reviews, queried by dealer ID and US state.",
  },
  {
    label: "03 / AI ANALYSIS",
    title: "IBM Code Engine",
    body: "A serverless sentiment service that classifies review text as positive, neutral, or negative when feedback is retrieved.",
  },
  {
    label: "04 / DELIVERY",
    title: "Docker + Kubernetes",
    body: "Containerized services, automated linting, and cloud-native deployment practices for the complete application stack.",
  },
];

export default function CaseStudy() {
  return (
    <div className="case-study-page">
      <header className="case-study-header">
        <a className="case-study-brand" href="/">
          Bernard K. Mtonga <span>_</span>
        </a>
        <div className="case-study-header-actions">
          <a className="back-link" href="/">
            ← Portfolio
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="case-study-main">
        <section className="case-study-hero" aria-labelledby="case-study-title">
          <div>
            <small>01 / FEATURED CASE STUDY</small>
            <p className="case-study-kicker">IBM Full Stack Developer Capstone</p>
            <h1 id="case-study-title">Car Dealership Review Portal.</h1>
          </div>
          <div className="case-study-hero-meta">
            <p>
              A cloud-native customer review portal built as the final practical
              assessment for the IBM Full Stack Software Developer Professional
              Certificate.
            </p>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>Full Stack Software Engineer</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Microservices, AI, and cloud deployment</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="case-study-section case-study-context">
          <div className="case-study-label">THE CHALLENGE</div>
          <div>
            <h2>Make local dealership feedback useful, searchable, and actionable.</h2>
            <p>
              A national dealership company needed one place for customers to
              find local branches, read real reviews, submit feedback, and
              understand the sentiment behind customer comments.
            </p>
          </div>
        </section>

        <section className="case-study-section">
          <div className="case-study-label">CUSTOMER EXPERIENCE</div>
          <div className="experience-grid">
            <article>
              <b>01</b>
              <h3>Find a dealer</h3>
              <p>React components list dealership locations and filter them by US state.</p>
            </article>
            <article>
              <b>02</b>
              <h3>Share a review</h3>
              <p>Authenticated customers can submit a rating and written feedback for a selected branch.</p>
            </article>
            <article>
              <b>03</b>
              <h3>Read the signal</h3>
              <p>Each retrieved review is enriched with an AI sentiment classification.</p>
            </article>
          </div>
        </section>

        <section className="case-study-section architecture-section">
          <div className="case-study-label">SYSTEM ARCHITECTURE</div>
          <div className="architecture-intro">
            <h2>One customer experience, four connected layers.</h2>
            <p>
              Django proxies requests to the review service while also managing
              authentication and relational inventory data. The service boundary
              keeps review data and AI analysis independent from the main portal.
            </p>
          </div>
          <div className="architecture-grid">
            {architecture.map((layer) => (
              <article key={layer.label}>
                <small>{layer.label}</small>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section scope-section">
          <div className="case-study-label">ENGINEERING SCOPE</div>
          <div>
            <h2>Full-stack work across product, services, and operations.</h2>
            <ul className="scope-list">
              <li>Responsive HTML, CSS, Bootstrap, and React user interfaces</li>
              <li>Django authentication, models, views, and microservice proxy functions</li>
              <li>Node.js and Express REST endpoints backed by MongoDB</li>
              <li>Containerization, automated linting, and Kubernetes deployment workflows</li>
            </ul>
          </div>
        </section>

        <section className="case-study-evidence">
          <small>PROJECT EVIDENCE</small>
          <h2>Repository, deployment, and screenshots coming soon.</h2>
          <p>
            I am preparing the supporting project evidence for this case study.
            Until then, this page documents the system, its customer flows, and
            the engineering scope without claiming unverified outcomes.
          </p>
        </section>
      </main>

      <footer className="case-study-footer">
        <span>© 2026 BERNARD K. MTONGA</span>
        <a href="/">BACK TO PORTFOLIO ↑</a>
      </footer>
    </div>
  );
}
