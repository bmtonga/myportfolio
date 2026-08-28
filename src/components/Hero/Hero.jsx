import "./Hero.css";
import { Arrow } from "../Shared/Shared.jsx";
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <h1>
          JUNIOR
          <br />
          FULLSTACK
          <br />
          <b>DEVELOPER.</b>
        </h1>
        <p className="lead">
          Building scalable,
          data-driven software for real-world impact.
          Focused on global challenges at the intersection of tech,
          education, and development.
        </p>
        <div className="links">
          <a className="action-control primary" href="#work">
            VIEW MY WORK <Arrow />
          </a>
          <a className="action-control secondary" href="#contact">
            LET'S TALK <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
