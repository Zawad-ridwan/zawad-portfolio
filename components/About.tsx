import { about } from "@/lib/data";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="space-y-4.5 text-[1.05rem]">
        {about.paragraphs.map((p) => (
          <p key={p} className="max-w-[62ch]">
            {p}
          </p>
        ))}
      </div>
      <ul className="mt-6.5 flex flex-wrap gap-2.5">
        {about.likes.map((like) => (
          <li
            key={like}
            className="rounded-full border border-line px-3.5 pb-1.5 pt-2 font-head text-[0.88rem] font-semibold leading-tight text-muted"
          >
            {like}
          </li>
        ))}
      </ul>
    </Section>
  );
}
