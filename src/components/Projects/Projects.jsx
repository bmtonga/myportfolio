import "./Projects.css";
import { useEffect, useRef, useState } from "react";
import { Arrow, Heading } from "../Shared/Shared.jsx";
const projects = [
  { name: "Car Dealership Platform", description: "IBM capstone platform for discovering dealerships, managing vehicle inventory, and sharing sentiment-analyzed reviews.", tags: "Django • React • Express/MongoDB • Docker", layers: ["React interface", "Django and Express APIs", "MongoDB review service", "Docker and GitHub Actions"], status: "IBM CAPSTONE PROJECT", isCapstone: true },
  { name: "Portflect", description: "A smart portfolio tool that helps developers understand why they are not getting interviews.", tags: "Next.js • TypeScript • AI/ML", layers: ["Next.js interface", "AI recommendation API", "PostgreSQL data", "Vercel deployment"], status: "CURRENTLY BUILDING" },
  { name: "Bookit", description: "An AI-powered booking platform that streamlines reservations and enhances hospitality.", tags: "Next.js • TypeScript • AI/ML", layers: ["Next.js interface", "Booking API", "Supabase database", "Edge deployment"], status: "CURRENTLY BUILDING" },
  { name: "Mshel Homes", description: "Real estate website with property listings and lead capture.", tags: "Vue.js • JavaScript • Supabase", layers: ["Vue.js interface", "Lead capture API", "Supabase database", "Vercel deployment"], status: "OTHER PROJECTS" },
  { name: "Green Light Music", description: "Platform for African musicians to manage and monetize their catalogues.", tags: "Vue.js • REST APIs • Tailwind CSS", layers: ["Vue.js interface", "REST catalogue API", "Relational data", "Cloud deployment"], status: "OTHER PROJECTS" },
  { name: "Zummit Africa", description: "Tech community platform built with the frontend team.", tags: "React • JavaScript • Material UI", layers: ["React interface", "Community API", "Content data", "Continuous deployment"], status: "OTHER PROJECTS" },
  { name: "Barka Umshelia", description: "Masterclass registration portal with a payment flow.", tags: "Vue.js • JavaScript • Tailwind CSS", layers: ["Vue.js interface", "Registration API", "Payment records", "Cloud deployment"], status: "OTHER PROJECTS" },
];
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [inspectedProject, setInspectedProject] = useState(null);
  const stackInspectorRef = useRef(null);
  const filters = ["ALL", "REACT", "VUE", "NEXT.JS"];
  const visibleProjects = projects.filter((project) =>
    activeFilter === "ALL" || project.tags.toUpperCase().includes(activeFilter),
  );

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
      <Heading eyebrow="02 / WORKS">Selected Work</Heading>
      <div className="project-tools" aria-label="Project filters">
        <span>FILTER BY STACK</span>
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "active" : ""}
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="projects">
        {visibleProjects.map((project) => {
          const index = projects.indexOf(project);
          return (
          <article className="project" key={project.name}>
            <div className={"visual v" + index}>{index < 2 ? "●" : ""}</div>
            <small>{project.status}</small>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className="tags">{project.tags}</span>
            <button className="inspect-project" type="button" onClick={() => setInspectedProject(project)}>
              INSPECT STACK <Arrow />
            </button>
          </article>
          );
        })}
      </div>
      {inspectedProject && (
        <div className="stack-inspector" ref={stackInspectorRef} aria-live="polite">
          <div>
            <small>STACK TRACE / {inspectedProject.name.toUpperCase()}</small>
            <h3>From interface to infrastructure.</h3>
          </div>
          <div className="stack-layers">
            {inspectedProject.layers.map((layer, index) => (
              <span key={layer}><b>0{index + 1}</b>{layer}</span>
            ))}
          </div>
          <button className="close-inspector" type="button" onClick={() => setInspectedProject(null)} aria-label="Close stack trace">CLOSE ×</button>
        </div>
      )}
    </section>
  );
}
