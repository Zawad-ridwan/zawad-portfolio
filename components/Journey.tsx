"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { journey } from "@/lib/data";
import Section from "./Section";

export default function Journey() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = journey[selected];

  // Arrow keys move between tabs, as screen-reader users expect.
  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const step =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? -1
          : 0;
    if (!step) return;
    e.preventDefault();
    const next = (index + step + journey.length) % journey.length;
    setSelected(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <Section id="journey" title="My Journey">
      <div className="grid gap-6 md:grid-cols-[190px_1fr] md:gap-9">
        <div
          role="tablist"
          aria-label="Journey"
          className="flex overflow-x-auto border-b-2 border-line md:flex-col md:border-b-0 md:border-l-2"
        >
          {journey.map((entry, i) => {
            const isSelected = i === selected;
            return (
              <button
                key={entry.tab}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`journey-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={isSelected}
                aria-controls="journey-panel"
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`-mb-0.5 whitespace-nowrap border-b-2 px-4.5 pb-3.5 pt-4 text-left font-head text-[0.95rem] font-semibold leading-none transition-colors md:mb-0 md:-ml-0.5 md:border-b-0 md:border-l-2 ${
                  isSelected
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-transparent text-muted hover:bg-accent/5 hover:text-fg"
                }`}
              >
                {entry.tab}
              </button>
            );
          })}
        </div>

        <div id="journey-panel" role="tabpanel" aria-labelledby={`journey-tab-${selected}`} className="min-w-0">
          <h3 className="font-head text-[1.35rem] font-bold leading-snug">
            {item.title} <span className="text-accent">@ {item.org}</span>
          </h3>
          <p className="mb-4.5 mt-1.5 text-[0.88rem] tabular-nums text-muted">{item.period}</p>
          <ul className="grid max-w-[62ch] gap-3">
            {item.points.map((point) => (
              <li key={point} className="relative pl-6 text-muted">
                <span aria-hidden className="absolute left-0 text-accent">
                  ▸
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
