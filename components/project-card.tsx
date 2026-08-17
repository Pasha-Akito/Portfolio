import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <a
      className="project-card"
      href={project.href}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={`project-visual visual-${project.visual}`}
        aria-hidden="true"
      >
        <span className="project-number">0{index + 1}</span>
        {project.visual === "aia" && <code>$ aia how do I solve this?</code>}
        {project.visual === "blackjack" && (
          <span className="playing-cards">A♠ J♦</span>
        )}
        {project.visual === "arla" && (
          <span className="network-mark">
            arla<span>●—●—●</span>
          </span>
        )}
        {project.visual === "bongard" && (
          <span className="bongard-mark">○ △ │ ● ▲</span>
        )}
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h2>
          {project.name}
          <span aria-hidden="true"> ↗</span>
        </h2>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}
