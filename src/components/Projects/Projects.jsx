import "./Projects.css";
import { useState } from "react";
import { Arrow, Heading } from "../Shared/Shared.jsx";
const projects = [
  { name: "Portflect", description: "A smart portfolio tool that helps developers understand why they are not getting interviews.", tags: "Next.js • TypeScript • AI/ML", layers: ["Next.js interface", "AI recommendation API", "PostgreSQL data", "Vercel deployment"] },
  { name: "Bookit", description: "An AI-powered booking platform that streamlines reservations and enhances hospitality.", tags: "Next.js • TypeScript • AI/ML", layers: ["Next.js interface", "Booking API", "Supabase database", "Edge deployment"] },
  { name: "Mshel Homes", description: "Real estate website with property listings and lead capture.", tags: "Vue.js • JavaScript • Supabase", layers: ["Vue.js interface", "Lead capture API", "Supabase database", "Vercel deployment"] },
  { name: "Green Light Music", description: "Platform for African musicians to manage and monetize their catalogues.", tags: "Vue.js • REST APIs • Tailwind CSS", layers: ["Vue.js interface", "REST catalogue API", "Relational data", "Cloud deployment"] },
  { name: "Zummit Africa", description: "Tech community platform built with the frontend team.", tags: "React • JavaScript • Material UI", layers: ["React interface", "Community API", "Content data", "Continuous deployment"] },
  { name: "Barka Umshelia", description: "Masterclass registration portal with a payment flow.", tags: "Vue.js • JavaScript • Tailwind CSS", layers: ["Vue.js interface", "Registration API", "Payment records", "Cloud deployment"] },
];
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [inspectedProject, setInspectedProject] = useState(null);
  const filters = ["ALL", "REACT", "VUE", "NEXT.JS"];
  const visibleProjects = projects.filter((project) =>
    activeFilter === "ALL" || project.tags.toUpperCase().includes(activeFilter),
  );

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
            <small>{index < 2 ? "CURRENTLY BUILDING" : "OTHER PROJECTS"}</small>
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
        <div className="stack-inspector" aria-live="polite">
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
