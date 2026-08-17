import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="section-wrap page-stack">
      <PageIntro
        eyebrow="Selected work"
        title="Projects built from curiosity—and finished with intent."
      >
        <p>
          From a full social network to AI research and local tooling, these are
          the projects that best chart how I build.
        </p>
      </PageIntro>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
