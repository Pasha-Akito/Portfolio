# Portfolio Agent Instructions

## Sources of Truth

- Read `SPEC.md` before planning or implementing product changes. Its acceptance
  criteria define completion.
- Read `README.md` for the repository's current status and supported commands.
- Read `CHANGELOG.md` before assessing feature status, and update its
  `Unreleased` section for user-visible changes.
- Do not create `questionnaire.md` until Pascal explicitly asks to begin the
  questionnaire process. Once created, treat it as an approved content source
  alongside the locally available `CV.pdf` and selected public repositories.
- Never invent personal claims, achievements, dates, project details, or
  technologies. Ask Pascal when an approved source is missing, ambiguous, or
  contradictory.
- Treat `CV.pdf` as sensitive local input. Do not commit it or reproduce private
  information in code, logs, screenshots, build output, or pull requests.

## Delivery Workflow

- Implement changes on a dedicated Git branch.
- Add or update tests appropriate to changed behaviour and run functional
  end-to-end tests against affected acceptance criteria.
- For documentation-only changes, run formatting and consistency validation.
- Run all relevant validation before opening or updating a pull request. Do not
  deliver changes while required validation is failing.
- After validation passes, commit and push the branch and open or update the
  application pull request without waiting for routine conversational approval.
- Include validation results in the pull request. For rendered website changes,
  also include the preview deployment and visual evidence required by `SPEC.md`.
- Treat the pull request as the sole human approval gate. Never merge it or
  manually trigger a production deployment. The approved Vercel integration may
  deploy automatically after Pascal merges to `main`, as required by `SPEC.md`.
- Keep documentation aligned with implementation: update `README.md` when setup
  or commands change, `CHANGELOG.md` when user-visible behaviour changes, and
  `SPEC.md` only when Pascal approves a product requirement change.

## Implementation Principles

- Prefer the simplest implementation that satisfies `SPEC.md` and preserves a
  clear path to deployment on Vercel.
- Reuse shared components and avoid adding services, dependencies, or runtime
  infrastructure without a demonstrated need.
- Preserve responsive behaviour, accessibility, factual accuracy, and privacy
  as part of every affected change.
- Ask Pascal about unclear product intent, subjective design direction,
  meaningful tradeoffs, missing authority, sensitive information, or unresolved
  user-visible risk. Choose routine implementation mechanics autonomously.

## Global Harness Improvements

- Treat this repository as a workload that may reveal reusable improvements to
  Pascal's global Codex harness, but do not promote one-off application
  preferences into global policy.
- Route evidence-backed global improvements through the `harness-improvement`
  skill. Do not implement, merge, activate, or install them from this repository.
