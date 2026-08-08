import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <a className="logo" href="#top">
        Bernard K. Mtonga <span>_</span>
      </a>
      <button onClick={() => setOpen(!open)}>{open ? "CLOSE" : "MENU"}</button>
      <nav className={open ? "show" : ""}>
        {["About", "Work", "Certificates", "Contact"].map((x) => (
          <a
            onClick={() => setOpen(false)}
            href={"#" + x.toLowerCase()}
            key={x}
          >
            {x}
          </a>
        ))}
      </nav>
    </header>
  );
}
