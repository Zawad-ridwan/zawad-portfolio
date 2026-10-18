"use client";

import { iconButton } from "@/lib/styles";
import { MoonIcon, SunIcon } from "./Icons";

// Switches between dark and light. With no saved choice the site follows the
// visitor's system setting; a click saves an explicit choice.
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = current === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage blocked (private mode etc.): the switch still works for this visit
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className={iconButton}
    >
      <span className="when-dark">
        <SunIcon />
      </span>
      <span className="when-light">
        <MoonIcon />
      </span>
    </button>
  );
}
