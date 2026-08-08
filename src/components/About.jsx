import { Arrow, Heading } from "./Shared.jsx";

export default function About() {
  return (
    <section id="about" className="about">
      <Heading eyebrow="01 / ABOUT">
        I turn ideas into accessible, scalable digital solutions.
      </Heading>
      <div>
        <p>
          I’m a mathematics enthusiast with a strong appreciation for systems
          thinking, problem-solving, and collaboration. I enjoy breaking complex
          challenges into clear, practical solutions and working with others to
          turn ideas into useful digital experiences.
        </p>
        <p>
          Outside software development, I enjoy teaching mathematics to
          high-school students who find the subject challenging. Curiosity
          drives how I learn, and I’m currently expanding my skills in Docker,
          Kubernetes, and OpenShift.
        </p>
        <div className="links">
          <a href="#contact">
            BOOK A CALL <Arrow />
          </a>
          <a href="#">
            CV COMING SOON <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
