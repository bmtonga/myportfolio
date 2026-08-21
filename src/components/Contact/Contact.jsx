import "./Contact.css";
import { Arrow } from "../Shared/Shared.jsx";
export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <small>05 / GET IN TOUCH</small>
      <h2>
        I'd love to hear from you.
        <br />
        <em>
          Whether you have a question or want to collaborate, shoot me a
          message.
        </em>
      </h2>
      <a className="mail" href="mailto:bernard.mtonga@zwacha.co.zm">
        bernard.mtonga@zwacha.co.zm <Arrow />
      </a>
      <div className="bottom">
        <span>© 2026 BERNARD K. MTONGA</span>
        <span>
          <a
            href="https://www.linkedin.com/in/bernard-k-mtonga-3760292b1"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>{" "}
          ·{" "}
          <a href="https://github.com/bmtonga" target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </span>
      </div>
    </footer>
  );
}
