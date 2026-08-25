import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";
import CaseStudy from "./components/CaseStudy/CaseStudy.jsx";

function App() {
  const isIbmCaseStudy =
    window.location.pathname.replace(/\/+$/, "") ===
    "/case-studies/ibm-car-dealership";

  useEffect(() => {
    if (isIbmCaseStudy) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const sections = document.querySelectorAll(
      "main > section:not(.hero), .contact",
    );
    if (reducedMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  if (isIbmCaseStudy) {
    return (
      <ThemeProvider>
        <CaseStudy />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <Testimonials />
      </main>
      <Contact />
    </ThemeProvider>
  );
}
export default App;
