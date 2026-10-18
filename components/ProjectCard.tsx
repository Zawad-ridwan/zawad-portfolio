import type { Project } from "@/lib/data";
import { ExternalIcon, FolderIcon, GitHubIcon } from "./Icons";

const linkStyle =
  "inline-grid size-9 place-items-center rounded-md text-muted transition-colors hover:text-accent";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, repo, live, inProgress } = project;

  return (
    <article className="group flex h-full flex-col rounded-xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1.5 hover:border-accent/60">
      <div className="mb-6.5 flex items-center justify-between text-accent">
        <FolderIcon className="size-9 [stroke-width:1.5]" />
        <div className="flex gap-1">
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" aria-label={`${title} source code`} className={linkStyle}>
              <GitHubIcon />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" aria-label={`${title} live site`} className={linkStyle}>
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-2.5 flex flex-wrap items-center gap-2.5 font-head text-[1.35rem] font-bold leading-tight transition-colors group-hover:text-accent">
        {title}
        {inProgress && (
          <span className="rounded-full border border-accent px-2.5 pb-1 pt-1.5 text-[0.7rem] uppercase leading-none tracking-[0.08em] text-accent">
            In progress
          </span>
        )}
      </h3>

      <p className="mb-5.5 text-muted">{description}</p>

      <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.82rem] text-muted">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
