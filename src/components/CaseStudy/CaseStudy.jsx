import "./CaseStudy.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import aboutHeroScreenshot from "../../../Assets/Images/Screenshot 2026-08-16 115232.png";
import aboutStoryScreenshot from "../../../Assets/Images/Screenshot 2026-08-16 115247.png";
import teamScreenshot from "../../../Assets/Images/Screenshot 2026-08-16 115300.png";
import contactScreenshot from "../../../Assets/Images/Screenshot 2026-08-16 115312.png";

const architecture = [
  {
    label: "01 / WEB PORTAL",
    title: "Django + React",
    body: "The main dealership website provides static pages, Django authentication, React interactions, and SQLite-backed car make and model data.",
  },
  {
    label: "02 / REVIEW SERVICE",
    title: "Express + MongoDB",
    body: "A Dockerized Express and MongoDB service exposes dealership and review operations, including dealer lookup, state filtering, and review insertion.",
  },
  {
    label: "03 / AI ANALYSIS",
    title: "IBM Code Engine",
    body: "A Code Engine endpoint analyzes retrieved review text and returns a positive, negative, or neutral sentiment classification.",
  },
  {
    label: "04 / DELIVERY",
    title: "Docker + Kubernetes",
    body: "CI/CD linting, local testing, Docker workflows, and Kubernetes deployment support the complete application stack.",
  },
];

const projectScreens = [
  { image: aboutHeroScreenshot, title: "About page", caption: "Branded About page and navigation." },
  { image: aboutStoryScreenshot, title: "Story and values", caption: "Dealership narrative with mission, vision, and values." },
  { image: teamScreenshot, title: "Team profiles", caption: "Team presentation for dealership roles." },
  { image: contactScreenshot, title: "Contact page", caption: "Dealership contact details and customer support channels." },
];

export default function CaseStudy() {
  return (
    <div className="case-study-page">
      <header className="case-study-header">
        <a className="case-study-brand" href={import.meta.env.BASE_URL}>
          Bernard K. Mtonga
        </a>
        <div className="case-study-header-actions">
          <a className="action-control secondary back-link" href={import.meta.env.BASE_URL}>
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
              A full-stack customer review portal built as the final practical
              assessment for the IBM Full Stack Software Developer Professional
              Certificate.
            </p>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>Lead Developer, IBM Capstone</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Django, React, services, and deployment</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="case-study-section case-study-context">
          <div className="case-study-label">THE CHALLENGE</div>
          <div>
            <h2>Turn market feedback into a trusted, searchable dealership directory.</h2>
            <p>
              A national dealership company used a market survey to identify a
              need for one central database of dealership reviews across the
              United States. The portal had to make branches easy to find,
              feedback easy to share, and customer sentiment easier to understand.
            </p>
          </div>
        </section>

        <section className="case-study-section">
          <div className="case-study-label">CUSTOMER EXPERIENCE</div>
          <div className="experience-grid">
            <article>
              <b>01</b>
              <h3>Anonymous users</h3>
              <p>Browse all dealerships, filter by state, open a dealer detail page, and read reviews displayed on Bootstrap cards.</p>
            </article>
            <article>
              <b>02</b>
              <h3>Authorized users</h3>
              <p>Log in, open the review flow for any dealership, submit vehicle and purchase details, and see the newest review first.</p>
            </article>
            <article>
              <b>03</b>
              <h3>Admin users</h3>
              <p>Use the Django admin site to add and maintain car makes, models, and other supporting attributes.</p>
            </article>
          </div>
        </section>

        <section className="case-study-section process-section">
          <div className="case-study-label">DISCOVERY & CONSTRAINTS</div>
          <div>
            <h2>Start with the survey insight, user roles, and service boundaries.</h2>
            <div className="process-grid">
              <article>
                <small>USER JOBS</small>
                <p>Find a dealership by state, understand existing feedback, and share a useful review.</p>
              </article>
              <article>
                <small>CONSTRAINTS</small>
                <p>Connect Django data and authentication with dealer lookup, review storage, and sentiment analysis services.</p>
              </article>
              <article>
                <small>DECISION</small>
                <p>Keep the customer flow simple while separating car data, dealership reviews, analysis, and delivery concerns.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="case-study-section architecture-section">
          <div className="case-study-label">SYSTEM ARCHITECTURE</div>
          <div className="architecture-intro">
            <h2>One dealership experience, four connected layers.</h2>
            <p>
              The browser interacts with the Django dealership website. Django
              stores car data in SQLite and proxies dealer and review requests to
              the containerized Express/MongoDB service, while also consuming the
              Code Engine sentiment analyzer.
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
              <li>Static About and Contact pages with responsive React and Bootstrap interfaces</li>
              <li>Django authentication, SQLite car data, admin management, and proxy endpoints</li>
              <li>Dealer filtering, dealership details, review cards, and authenticated review submission</li>
              <li>Express and MongoDB dealer/review service with sentiment analysis through Code Engine</li>
              <li>CI/CD linting, Docker workflows, local testing, and Kubernetes deployment</li>
            </ul>
          </div>
        </section>

        <section className="case-study-section process-section">
          <div className="case-study-label">DELIVERY & EVIDENCE</div>
          <div>
            <h2>Map the implementation to the five project modules.</h2>
            <p>
              The course evaluates the project through static pages, user
              management, backend services, dynamic pages, and CI/containerization.
              The evidence should show what was implemented and tested in each area.
            </p>
            <ul className="scope-list">
              <li>Static pages and user management</li>
              <li>Django, Express, MongoDB, and sentiment-service behavior</li>
              <li>Dealer filtering, details, review submission, and newest-first ordering</li>
              <li>CI linting, Docker containers, local testing, and Kubernetes deployment</li>
            </ul>
          </div>
        </section>

        <section className="case-study-screens" aria-labelledby="project-screens-title">
          <div>
            <small>IMPLEMENTATION SCREENS</small>
            <h2 id="project-screens-title">Completed customer-facing pages.</h2>
          </div>
          <div className="screen-grid">
            {projectScreens.map((screen) => (
              <figure key={screen.title}>
                <img src={screen.image} alt={`${screen.title} in the car dealership portal`} />
                <figcaption>
                  <strong>{screen.title}</strong>
                  <span>{screen.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="case-study-evidence">
          <small>PROJECT EVIDENCE</small>
          <h2>Source code and interface evidence.</h2>
          <p>
            These screens document the completed static customer experience.
            The source repository provides the full implementation record for
            the capstone application.
          </p>
          <a
            className="action-control primary evidence-link"
            href="https://github.com/bmtonga/xrwvm-fullstack_developer_capstone"
            target="_blank"
            rel="noreferrer"
          >
            VIEW PROJECT REPOSITORY <span className="arrow">↗</span>
          </a>
        </section>
      </main>

      <footer className="case-study-footer">
        <span>© 2026 BERNARD K. MTONGA</span>
        <a href={import.meta.env.BASE_URL}>BACK TO PORTFOLIO ↑</a>
      </footer>
    </div>
  );
}
