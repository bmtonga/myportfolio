import "./Projects.css";
import { useEffect, useRef, useState } from "react";
import { Arrow, Heading } from "../Shared/Shared.jsx";

const featuredProject = {
  name: "Car Dealership Review Portal",
  description:
    "The final practical assessment for the IBM Full Stack Software Developer Professional Certificate: a cloud-native portal where customers find local dealerships, read and submit reviews, and see AI-powered sentiment analysis on feedback.",
  tags: "Django • React • Node.js • Express • MongoDB • Docker • Kubernetes",
  layers: [
    "Django, React, Bootstrap, and authentication",
    "Express and MongoDB dealership/review microservice",
    "IBM Code Engine sentiment analysis service",
    "Docker, Kubernetes, and CI/CD pipeline",
  ],
};

const inProgressProject = {
  name: "This Portfolio",
  description:
    "I am evolving this site from a personal showcase into a real full-stack project hub. Each feature will be built, tested, and documented here as it is ready.",
  tags: "React • Vite • In progress",
  layers: [
    "Detailed case-study pages",
    "A secure contact workflow",
    "Data-backed project publishing",
    "AI portfolio concierge — planned",
  ],
};

export default function Projects() {
  const [inspectedProject, setInspectedProject] = useState(null);
  const stackInspectorRef = useRef(null);

  useEffect(() => {
    if (!inspectedProject || !stackInspectorRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    stackInspectorRef.current.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });
  }, [inspectedProject]);

  return (
    <section id="work">
      <Heading eyebrow="02 / WORKS">Featured Work</Heading>
      <div className="project-intro">
        <span>01 FEATURED PROJECT</span>
        <p>Built work first. New work in progress, clearly labelled.</p>
      </div>

      <div className="projects">
        <article className="project featured-project">
          <div className="visual capstone-visual" aria-hidden="true">
            <span>IBM</span>
            <i>01</i>
          </div>
          <div className="project-copy">
            <small>FEATURED / IBM CAPSTONE</small>
            <h3>{featuredProject.name}</h3>
            <p>{featuredProject.description}</p>
            <ul className="project-highlights" aria-label="Project capabilities">
              <li>Search dealerships by US state</li>
              <li>Authenticated customer review submission</li>
              <li>Positive, neutral, and negative sentiment results</li>
            </ul>
            <span className="tags">{featuredProject.tags}</span>
            <a
              className="case-study-link"
              href="/case-studies/ibm-car-dealership"
            >
              VIEW CASE STUDY <Arrow />
            </a>
            <button
              className="inspect-project"
              type="button"
              onClick={() => setInspectedProject(featuredProject)}
            >
              EXPLORE THE STACK <Arrow />
            </button>
          </div>
        </article>
      </div>

      <div className="building-section">
        <div>
          <small className="building-status">CURRENTLY BUILDING</small>
          <h3>{inProgressProject.name}</h3>
          <p>{inProgressProject.description}</p>
        </div>
        <div className="building-actions">
          <span className="tags">{inProgressProject.tags}</span>
          <button
            className="inspect-project"
            type="button"
            onClick={() => setInspectedProject(inProgressProject)}
          >
            VIEW THE ROADMAP <Arrow />
          </button>
        </div>
      </div>

      {inspectedProject && (
        <div
          className="stack-inspector"
          ref={stackInspectorRef}
          aria-live="polite"
        >
          <div>
            <small>PROJECT TRACE / {inspectedProject.name.toUpperCase()}</small>
            <h3>
              {inspectedProject === featuredProject
                ? "From customer experience to cloud deployment."
                : "A focused build plan."}
            </h3>
          </div>
          <div className="stack-layers">
            {inspectedProject.layers.map((layer, index) => (
              <span key={layer}>
                <b>0{index + 1}</b>
                {layer}
              </span>
            ))}
          </div>
          <button
            className="close-inspector"
            type="button"
            onClick={() => setInspectedProject(null)}
            aria-label="Close project trace"
          >
            CLOSE ×
          </button>
        </div>
      )}
    </section>
  );
}
