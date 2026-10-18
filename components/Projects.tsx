import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="My Projects">
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
