// Shared Tailwind class strings for elements used in several components.

const btn =
  "inline-flex items-center gap-2 rounded-lg border-[1.5px] border-accent px-5.5 pb-2.5 pt-3 font-head text-[0.95rem] font-bold leading-none transition-colors";

export const btnSolid = `${btn} bg-accent text-on-accent hover:bg-transparent hover:text-accent disabled:opacity-60`;
export const btnGhost = `${btn} text-accent hover:bg-accent/10`;

export const iconLink =
  "inline-grid size-10.5 place-items-center rounded-lg text-muted transition-colors hover:bg-accent/10 hover:text-accent";

export const iconButton =
  "inline-grid size-10 place-items-center rounded-lg border border-line text-fg transition-colors hover:border-accent hover:text-accent";
