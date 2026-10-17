# Tahir Hussain — Portfolio

A responsive dark portfolio built with Next.js App Router, React, TypeScript, plain CSS, and Lucide icons. No database, API keys, or account setup required.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys automatically when `main` is pushed. In GitHub repository Settings → Pages, set the source to **GitHub Actions**. The repository must be eligible for Pages on your GitHub plan.

Production URL: https://tahirh-10113330.github.io/my-portfolio/

To build the Pages version locally in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/my-portfolio'
npm.cmd run build
```

The static website is generated in `out/`. The portrait and resume links use the same base path, so they work under the repository URL. Local `npm run dev` continues using `/` when the environment variable is unset. Static exports must be served by a static web server; `next start` is not supported.

## Static production build

```sh
npm run build
```

## Where to edit

- `src/data/portfolio.ts`: profile, projects, skills, and work experience.
- `src/app/page.tsx`: page structure and introductory copy.
- `src/app/globals.css`: theme tokens, section styles, and responsive breakpoints.
- `src/components/experience-timeline.tsx`: expandable, sortable timeline.
- `src/components/projects.tsx`: project cards and visual diagrams.
- `src/components/navigation.tsx`: mobile navigation.
- `src/components/contact.tsx`: contact actions and clipboard feedback.
- `public/tahir-latest-cutout.png` and `public/resume.pdf`: current transparent portrait and downloadable resume. Previous portrait assets are preserved.

The portrait cutout was edited with the built-in image generation tool. Prompt: remove only the gray background with genuine alpha transparency; preserve the person, face, glasses, hair, clothing, pose, colors, and framing; no retouching or added elements.

## Update the timeline

Add an object to `experiences` in `src/data/portfolio.ts`, using a unique `id`, `YYYY-MM` dates, and `end: null` for a current position. The component sorts entries by date and generates cards automatically. Roles expand independently; the ordering control switches between newest and oldest first. Content is source-controlled rather than stored in a CMS.

## Design and accessibility

Responsive layouts cover phones, tablets, and laptops. Navigation collapses on phones; project cards adapt between three columns, horizontal cards, and a single column. Interactive controls use native buttons, visible keyboard focus, accessible expansion state, and reduced-motion support. All fonts are system fonts, so the app builds without downloading fonts.

Resume claims and work examples come from the supplied resume. Project diagrams illustrate engineering work; they are not screenshots of proprietary Justdial products.

## Validation

`npm run typecheck` checks TypeScript. `npm run build` creates an optimized production build.

Next.js reference: https://nextjs.org/docs/app/getting-started/installation
