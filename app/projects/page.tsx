import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="section-wrap page-stack projects-page">
      <PageIntro
        eyebrow="My favourite projects"
        title="Projects that challenged my skills and deepened my understanding of technology."
      >
        <p>
          These are the projects I am proud of, and each shows you a little of
          who I am.
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
