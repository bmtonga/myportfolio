import "./TechStack.css";

const tools = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "OpenShift",
];
export default function TechStack() {
  return (
    <section className="tech">
      <small>TECH STACK</small>
      <h2>Tools &amp; Technologies</h2>
      <div className="ticker">
        <div>
          {[...tools, ...tools].map((tool, index) => (
            <span key={index}>
              {tool} <b>✦</b>
            </span>
          ))}
        </div>
      </div>
      <div className="groups">
        <p>
          <b>FRONTEND</b>React · JavaScript · HTML5 · CSS3 · Material UI ·
          Accessible Web Design
        </p>
        <p>
          <b>BACKEND &amp; DATA</b>Node.js · Express.js · PostgreSQL ·
          Microservices · Serverless
        </p>
        <p>
          <b>DEVOPS &amp; TOOLS</b>Docker · Kubernetes · OpenShift · Git ·
          GitHub
        </p>
      </div>
    </section>
  );
}
