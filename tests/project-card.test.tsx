import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

describe("ProjectCard", () => {
  it("presents repository metadata and a safe outbound link", () => {
    const project = projects[0];
    render(<ProjectCard project={project} index={0} />);

    const link = screen.getByRole("link", { name: /Arla/i });
    expect(link).toHaveAttribute("href", project.href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Neo4j")).toBeInTheDocument();
  });
});
