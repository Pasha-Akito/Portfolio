# Portfolio Website Specification

## Purpose

Build a polished personal website that Pascal can share publicly at
`pashaantonov.tech`. The website is a general showcase rather than a product
aimed at a single audience. It should let anyone who encounters Pascal learn
about him, his career, his achievements, and his projects, and give them clear
ways to contact him.

## Content Sources and Accuracy

Website content must be grounded in these approved sources:

- `CV.pdf`, which exists locally but is intentionally excluded from Git because
  it currently contains sensitive information
- Pascal's public repositories at
  <https://github.com/Pasha-Akito?tab=repositories>
- `questionnaire.md`, which Pascal and Codex will create and complete together

The questionnaire will identify achievements omitted from the concise CV,
select the repositories to feature, and capture any other approved personal or
professional information needed by the website.

Codex may edit and reorganize approved material for clarity and presentation,
but must not invent achievements, project details, technologies, dates, or
other factual claims. If the sources are incomplete or contradictory, Codex
must ask Pascal rather than infer the missing facts.

## Initial Scope

The first release has five distinct routes, all available from a persistent top
navigation bar:

- `/` — **Welcome!**: an introduction to Pascal and the main visual entry point
- `/projects` — **Projects**: selected public projects
- `/career` — **Career**: professional experience and approved achievements
- `/about` — **About Me**: personal information Pascal chooses to share
- `/contact` — **Contact**: links to GitHub and LinkedIn and a clickable email
  address

A blog or **Thoughts** section may be added later, but is not part of the first
release. The first release does not include a contact form, database, content
management system, or other backend service.

## Project Presentation

The Projects page presents selected repositories in a responsive grid. Each
project card contains:

- an image or other approved visual
- the project name
- relevant metadata supported by the repository or questionnaire
- a concise, factually grounded description

Selecting a project card opens that project's public GitHub repository. Project
selection and any missing content will first be resolved through
`questionnaire.md`; Codex may recommend a shortlist afterward if useful.

## Visual Direction

- Use a dark navy palette.
- Feature `profilePicture.jpeg` prominently on the Welcome page.
- Use a tasteful coding-inspired background, with restrained accent colours
  commonly seen in source code editors.
- The result should feel personal, polished, and visually coherent rather than
  like a generic template.
- Apply the visual system consistently across all five routes.
- Support desktop and mobile layouts without clipped, overlapping, or
  inaccessible content.

Pascal retains final judgment over subjective design and content choices
through pull-request review and iterative feedback.

## Technology and Architecture

- Use Next.js with the App Router, React, and TypeScript.
- Keep content in version-controlled files and components for the first release;
  do not introduce a database or runtime backend without a demonstrated need.
- Prefer server-rendered or prerendered components and add client-side
  JavaScript only where interaction requires it.
- Keep the architecture simple enough to build, test, preview, and deploy using
  standard project commands.
- Structure shared navigation, layout, visual styles, and project cards as
  reusable components.

This choice provides real routes and a familiar React development model while
keeping the initial website operationally simple. It also leaves room for a
future Thoughts section without requiring that feature now.

## Testing and Pull-Request Review

Every application change must receive automated validation proportionate to the
changed behaviour. The implemented website must include:

- formatting, linting, and TypeScript checks
- automated component or unit tests for meaningful presentation logic
- Playwright end-to-end tests covering navigation and the essential content and
  outbound links on all five routes
- a production build check

Every application pull request that changes the rendered website must also
include visual-review evidence for all five routes at representative desktop
and mobile viewport sizes. This is a minimum of ten current screenshots. The
screenshots must be directly visible from, or clearly linked in, the pull
request so Pascal can review the result without running the website locally.
Screenshot capture should be automated and reproducible with Playwright.

Visual evidence supplements automated tests; it does not replace them. A pull
request must not be opened when required validation fails.

## Hosting and Deployment

- Host the website on Vercel and connect it to the GitHub repository.
- Vercel should create an isolated preview deployment for each application pull
  request so Pascal can inspect the live website before approval.
- Treat `main` as the production branch. After the initial deployment setup,
  merging an approved pull request into `main` should deploy the production
  website automatically.
- Configure Pascal's existing `pashaantonov.tech` domain, currently registered
  through Namify, as the production custom domain.
- Initial Vercel project and domain configuration may be performed manually with
  Pascal. Any future agent-managed deployment access must be designed and
  authorized separately; this specification does not grant credentials or
  deployment authority.
- Never expose private CV information, credentials, or other secrets in the
  repository, generated website, build output, screenshots, or deployment
  configuration.

## Acceptance Criteria

The first release is complete when:

1. All five routes exist, are linked by the top navigation, and work when opened
   directly or reached through client-side navigation.
2. The Welcome page prominently uses `profilePicture.jpeg` and the approved dark
   navy, coding-inspired visual direction is consistent across the website.
3. The Projects page uses the specified responsive card grid, and every project
   card opens the correct public GitHub repository.
4. Career and About Me contain only content supported by the approved sources.
5. Contact provides working GitHub and LinkedIn links and a clickable email
   address, with no contact form.
6. All routes remain usable at the tested desktop and mobile viewport sizes,
   with readable content, keyboard-accessible navigation and links, meaningful
   image alternative text, and no unintended horizontal scrolling.
7. Formatting, linting, type checks, automated tests, end-to-end tests, and the
   production build all pass.
8. The pull request provides the required ten or more current screenshots and a
   working Vercel preview deployment.
9. The approved production build is available at `pashaantonov.tech` without
   exposing sensitive or unapproved information.
