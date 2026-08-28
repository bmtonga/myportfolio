import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

/**
 * Reads the user's saved preference from localStorage, falling back to the
 * system preference, then falling back to "dark".
 */
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("portfolio-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply the data-theme attribute to <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === "portfolio-theme") {
        setTheme(event.newValue === "light" ? "light" : "dark");
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Listen for OS-level theme changes and update if the user hasn't manually
  // overridden via the toggle
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e) => {
      const saved = localStorage.getItem("portfolio-theme");
      if (!saved) {
        setTheme(e.matches ? "light" : "dark");
      }
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/** Convenience hook */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
