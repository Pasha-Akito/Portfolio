# Pascal Antonov's Portfolio

This repository contains the portfolio website planned for
<https://pashaantonov.tech>. It will be a public showcase of Pascal, his career,
his achievements, and selected software projects.

## Project Status

The initial five-route portfolio is implemented with the approved questionnaire
content and is undergoing pull-request review and deployment setup.

- Product requirements and acceptance criteria: [`SPEC.md`](SPEC.md)
- Approved content questionnaire: [`questionnaire.md`](questionnaire.md)
- Notable project changes: [`CHANGELOG.md`](CHANGELOG.md)
- Instructions for coding agents: [`AGENTS.md`](AGENTS.md)

The initial content questionnaire is complete. Its approved answers may be
refined during implementation and review. `CV.pdf` is sensitive local source
material and is intentionally excluded from Git.

## Stack

- Next.js App Router
- React and TypeScript
- Playwright for end-to-end testing and reproducible screenshots
- Vercel for preview and production deployment

## Development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The production and validation commands are:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

`npm run test:e2e` starts the production server, checks all five routes and
approved outbound links, and generates the ten desktop/mobile review images in
[`docs/screenshots`](docs/screenshots). Install Chromium once with
`npx playwright install chromium` if Playwright requests it.
