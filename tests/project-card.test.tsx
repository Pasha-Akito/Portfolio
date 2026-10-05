import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

describe("ProjectCard", () => {
  it("presents repository metadata and a safe outbound link", () => {
    const project = projects.find(({ name }) => name === "Arla")!;
    render(<ProjectCard project={project} index={0} />);

    const link = screen.getByRole("link", { name: /Arla/i });
    expect(link).toHaveAttribute("href", project.href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Neo4j")).toBeInTheDocument();
  });

  it("features Quartertrace as a website-linked SaaS product", () => {
    const project = projects[0];
    render(<ProjectCard project={project} index={0} />);

    const link = screen.getByRole("link", { name: /Quartertrace/i });
    expect(link).toHaveAttribute("href", "https://www.quartertrace.com");
    expect(link).toHaveClass("project-card-featured");
    expect(screen.getByText("Agentic SaaS")).toBeInTheDocument();
    expect(screen.getByText("OpenAPI 3.1")).toBeInTheDocument();
  });
});
