import "./Header.css";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import profilePicture from "../../../Assets/Images/Jr. Bernard Portrait_1.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [portraitOpen, setPortraitOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const portraitTriggerRef = useRef(null);
  const portraitCloseRef = useRef(null);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setPortraitOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (open || portraitOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, portraitOpen]);

  useEffect(() => {
    if (portraitOpen) {
      portraitCloseRef.current?.focus();
    }
  }, [portraitOpen]);

  const closePortrait = () => {
    setPortraitOpen(false);
    portraitTriggerRef.current?.focus();
  };

  // Track active section as user scrolls
  useEffect(() => {
    const sectionIds = ["about", "work", "certificates", "contact"];

    const handleScroll = () => {
      if (window.scrollY < 150) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= 150) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Work", href: "#work", id: "work" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="brand-group">
        <button
          className="profile-trigger"
          type="button"
          aria-label="View portrait of Bernard K. Mtonga"
          onClick={(event) => {
            portraitTriggerRef.current = event.currentTarget;
            setPortraitOpen(true);
          }}
        >
          <img src={profilePicture} alt="" aria-hidden="true" />
        </button>
        <a className="logo" href="#top" onClick={() => setActiveSection("")}>
          Bernard K. Mtonga
        </a>
      </div>

      {/* Right-side controls: theme toggle + hamburger */}
      <div className="header-controls">
        <ThemeToggle />

        {/* Hamburger Toggle Button for Mobile */}
        <button
          className={`hamburger-btn ${open ? "is-active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      {/* Backdrop for closing mobile menu on click outside */}
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}

      {/* Mobile / Desktop Navigation Links */}
      <nav id="mobile-navigation" className={`nav-menu ${open ? "is-open" : ""}`}>
        {navLinks.map((link, index) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.id)}
              className={`nav-link ${isActive ? "active" : ""}`}
              aria-current={isActive ? "location" : undefined}
              style={{ "--i": index }}
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      {portraitOpen && (
        <div
          className="portrait-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portrait-modal-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) closePortrait();
          }}
        >
          <div className="portrait-modal-content">
            <div className="portrait-modal-heading">
              <small id="portrait-modal-title">BERNARD K. MTONGA</small>
              <button
                ref={portraitCloseRef}
                className="portrait-modal-close"
                type="button"
                onClick={closePortrait}
                aria-label="Close portrait viewer"
              >
                CLOSE ×
              </button>
            </div>
            <img
              src={profilePicture}
              alt="Portrait of Bernard K. Mtonga"
            />
          </div>
        </div>
      )}
    </header>
  );
}
