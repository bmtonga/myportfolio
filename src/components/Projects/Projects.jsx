import "./Projects.css";
import { Arrow, Heading } from "../Shared/Shared.jsx";
const projects = [
  [
    "Portflect",
    "A smart portfolio tool that helps developers understand why they are not getting interviews.",
    "Next.js • TypeScript • AI/ML",
  ],
  [
    "Bookit",
    "An AI-powered booking platform that streamlines reservations and enhances hospitality.",
    "Next.js • TypeScript • AI/ML",
  ],
  [
    "Mshel Homes",
    "Real estate website with property listings and lead capture.",
    "Vue.js • JavaScript • Supabase",
  ],
  [
    "Green Light Music",
    "Platform for African musicians to manage and monetize their catalogues.",
    "Vue.js • REST APIs • Tailwind CSS",
  ],
  [
    "Zummit Africa",
    "Tech community platform built with the frontend team.",
    "React • JavaScript • Material UI",
  ],
  [
    "Barka Umshelia",
    "Masterclass registration portal with a payment flow.",
    "Vue.js • JavaScript • Tailwind CSS",
  ],
];
export default function Projects() {
  return (
    <section id="work">
      <Heading eyebrow="02 / WORKS">Selected Work</Heading>
      <div className="projects">
        {projects.map((p, i) => (
          <article className="project" key={p[0]}>
            <div className={"visual v" + i}>{i < 2 ? "●" : ""}</div>
            <small>{i < 2 ? "CURRENTLY BUILDING" : "OTHER PROJECTS"}</small>
            <h3>{p[0]}</h3>
            <p>{p[1]}</p>
            <span className="tags">{p[2]}</span>
            <a href="#">
              VISIT PROJECT <Arrow />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
