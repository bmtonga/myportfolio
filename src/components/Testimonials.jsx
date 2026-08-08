import { Heading } from "./Shared.jsx";
export default function Testimonials() {
  return (
    <section className="testimonials">
      <Heading eyebrow="04 / TESTIMONIALS">Kind words coming soon.</Heading>
      <div>
        <blockquote>
          “I’m building a portfolio of meaningful work and collaborations.”
          <footer>
            <span>Testimonials will be added here.</span>
          </footer>
        </blockquote>
        <blockquote>
          “Let’s build useful, accessible technology together.”
          <footer>
            <span>Your next collaboration could be featured here.</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
