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
      <a className="action-control primary mail" href="mailto:bernard.mtonga@zwacha.co.zm">
        bernard.mtonga@zwacha.co.zm <Arrow />
      </a>
      <div className="bottom">
        <span className="copyright">© 2026 BERNARD K. MTONGA</span>
        <nav className="footer-links" aria-label="Social profiles">
          <a
            href="https://www.linkedin.com/in/bernard-k-mtonga-3760292b1"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://github.com/bmtonga" target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </nav>
      </div>
    </footer>
  );
}
