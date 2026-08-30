import "./Contact.css";
import { Arrow } from "../Shared/Shared.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact-columns">
        <div className="contact-intro">
          <small className="contact-eyebrow">05 / GET IN TOUCH</small>
          <h2>
            I'd love to hear from you.
            <br />
            <em>
              Whether you have a question or want to collaborate, shoot me a
              message.
            </em>
          </h2>
          <p className="contact-alt">
            Prefer email?{" "}
            <a className="mail" href="mailto:bernard.mtonga@zwacha.co.zm">
              bernard.mtonga@zwacha.co.zm <Arrow />
            </a>
          </p>
        </div>
        <ContactForm />
      </div>
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
