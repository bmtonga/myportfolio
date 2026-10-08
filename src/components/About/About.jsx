import "./About.css";
import { Arrow, Heading } from "../Shared/Shared.jsx";

export default function About() {
  return (
    <section id="about" className="about">
      <Heading eyebrow="01 / ABOUT">
        I turn ideas into accessible, scalable digital solutions.
      </Heading>
      <div>
        <p>
          I’m an Economics & Mathematics enthusiast with a strong appreciation for systems
          thinking, problem-solving, and collaboration. I enjoy breaking complex
          challenges into clear, practical solutions and working with others to
          turn ideas into useful digital experiences.
        </p>
        <p>
          Outside software development, I enjoy teaching mathematics to
          high-school students who find the subject challenging and playing basketball. Curiosity
          drives how I learn, and I’m currently taking a course in principles of microeconomics.
        </p>
        <div className="links">
          <a className="action-control primary" href="#contact">
            BOOK A CALL <Arrow />
          </a>
          <a className="action-control secondary" href="#">
            CV COMING SOON <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
