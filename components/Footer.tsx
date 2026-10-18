import { links, site } from "@/lib/data";

const headingStyle = "mb-4 pt-1 font-head text-[0.95rem] font-bold";
const listStyle = "grid gap-2.5 text-[0.92rem] text-muted";
const linkStyle = "transition-colors hover:text-accent";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface pb-10 pt-14">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <p className="mb-2.5 font-display text-[2rem] leading-none">{site.name}</p>
            <p className="max-w-[30ch] text-[0.92rem] text-muted">
              {site.role} in {site.location}.
            </p>
          </div>
          <div>
            <h4 className={headingStyle}>Links</h4>
            <ul className={listStyle}>
              <li><a href="#home" className={linkStyle}>Home</a></li>
              <li><a href="#projects" className={linkStyle}>Projects</a></li>
              <li><a href="#journey" className={linkStyle}>Journey</a></li>
            </ul>
          </div>
          <div>
            <h4 className={headingStyle}>My Contacts</h4>
            <ul className={listStyle}>
              <li className="break-all">
                <a href={`mailto:${links.email}`} className={linkStyle}>{links.email}</a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
          <div>
            <h4 className={headingStyle}>Follow Me On</h4>
            <ul className={listStyle}>
              <li><a href={links.github} target="_blank" rel="noreferrer" className={linkStyle}>GitHub</a></li>
              <li><a href={links.linkedin} target="_blank" rel="noreferrer" className={linkStyle}>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        {/* Year is written in, not computed: Next.js 16 won't prerender new Date(). Update each January. */}
        <p className="mt-11 border-t border-line pt-5.5 text-[0.85rem] text-muted">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
