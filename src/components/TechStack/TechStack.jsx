import "./TechStack.css";

const tools = [
  "React.js",
  "JavaScript (ES6+)",
  "Python",
  "Node.js",
  "Django",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "Git & GitHub",
];

const toolGroups = [
  {
    label: "FRONTEND",
    skills: "React.js • JavaScript (ES6+) • HTML5/CSS3 • Asynchronous JavaScript",
  },
  {
    label: "BACKEND",
    skills: "Python • Node.js • Django • Flask • Express.js • RESTful APIs",
  },
  {
    label: "CLOUD & DEVOPS",
    skills: "Docker • Kubernetes • IBM Cloud • Serverless",
  },
  {
    label: "DATA & DATABASES",
    skills: "PostgreSQL • SQL • MongoDB (NoSQL) • Django ORM",
  },
  {
    label: "ENGINEERING PRACTICES",
    skills: "Git & GitHub • Microservices Architecture • CI/CD • Generative AI Tools",
  },
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
        {toolGroups.map((group) => (
          <p key={group.label}>
            <b>{group.label}</b>
            {group.skills}
          </p>
        ))}
      </div>
    </section>
  );
}
