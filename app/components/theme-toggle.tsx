"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored === "dark") {
      document.documentElement.dataset.theme = "dark";
      setDark(true);
    } else {
      document.documentElement.dataset.theme = "light";
      setDark(false);
    }
  }, []);

  function toggle() {
    const next = !dark;

    document.documentElement.dataset.theme = next
      ? "dark"
      : "light";

    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      <span className={!dark ? "active" : ""}>
        <Sun size={14} />
      </span>

      <span className={dark ? "active" : ""}>
        <Moon size={14} />
      </span>
    </button>
  );
}
