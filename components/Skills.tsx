import { skills } from "@/lib/data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="I'm skilled at">
      <div className="grid gap-8">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="mb-3.5 font-head text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-muted">
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2.5 rounded-[10px] border border-line bg-surface py-2 pl-2 pr-4 font-medium transition hover:-translate-y-0.5 hover:border-accent"
                >
                  <span
                    aria-hidden
                    className="grid size-8 place-items-center rounded-[7px] bg-accent/15 pt-0.5 font-head text-[0.72rem] font-bold text-accent"
                  >
                    {skill.short}
                  </span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
