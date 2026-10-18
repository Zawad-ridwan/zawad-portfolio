import { existsSync } from "node:fs";
import path from "node:path";
import { links, site } from "@/lib/data";
import { btnGhost, btnSolid, iconLink } from "@/lib/styles";
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Hero() {
  // The Resume button only shows when public/resume.pdf exists. Checked on every
  // render in dev, so adding or replacing the file shows up without a restart.
  const hasResume = existsSync(path.join(process.cwd(), "public", links.resume));

  return (
    <section id="home" className="pb-26 pt-24">
      <div className="wrap">
        <p className="font-head text-[clamp(1.1rem,2.4vw,1.4rem)] font-semibold text-accent">
          Hi, I&apos;m
        </p>
        <h1 className="mb-2.5 mt-3.5 font-display text-[clamp(4.2rem,17vw,10.5rem)] uppercase leading-[0.95] tracking-[0.04em]">
          {site.name}
        </h1>
        <p className="font-head text-[clamp(1.4rem,3.6vw,2.2rem)] font-semibold leading-tight text-muted">
          A {site.role}.
        </p>
        <p className="mt-5 max-w-[56ch] text-[1.05rem] text-muted">{site.intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <a href="#projects" className={btnSolid}>
            See my projects
          </a>
          {hasResume && (
            <a href={links.resume} target="_blank" rel="noreferrer" className={btnGhost}>
              <FileIcon className="-mt-0.5 size-4.5" />
              Resume
            </a>
          )}
          <div className="ml-1.5 flex gap-1.5">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
              <GitHubIcon />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
              <LinkedInIcon />
            </a>
            <a href={`mailto:${links.email}`} aria-label="Email" className={iconLink}>
              <MailIcon />
            </a>
          </div>
        </div>

        {site.availability && (
          <p className="mt-7 inline-flex items-center gap-2.5 text-[0.9rem] text-muted">
            <span className="size-2 rounded-full bg-ok ring-4 ring-ok/25" aria-hidden />
            {site.availability}
          </p>
        )}
      </div>
    </section>
  );
}
