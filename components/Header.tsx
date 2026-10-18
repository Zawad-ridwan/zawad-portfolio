"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/data";
import { iconButton } from "@/lib/styles";
import { CloseIcon, MenuIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the nav link for the section in the middle of the screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-page/80 backdrop-blur-md">
      <nav className="wrap relative flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <a href="#home" className="pt-1 font-head text-xl font-bold">
          It&apos;s <span className="text-accent">{site.name}</span>
        </a>

        <div className="flex items-center gap-2">
          <ul
            id="nav-links"
            className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col rounded-b-xl border border-line bg-surface p-2 md:static md:flex md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0`}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 pb-2.5 pt-3 font-head text-[0.9rem] font-semibold transition-colors hover:text-accent md:pb-2 md:pt-2.5 ${
                    active === item.id ? "text-accent" : "text-muted"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-links"
            className={`${iconButton} md:hidden`}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
