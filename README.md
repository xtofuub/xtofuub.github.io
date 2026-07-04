# Edwin Chen Portfolio

Personal GitHub Pages site for Edwin Chen, focused on malware analysis, cyber threat intelligence, reverse engineering, and practical security tooling.

Live site: [xtofuub.github.io](https://xtofuub.github.io/)

## What The Site Covers

- Current profile as a cybersecurity student and junior malware analyst / CTI candidate.
- Curated repository showcase, with stronger defensive and research projects shown first.
- Work history updated from the latest CV, including Fitsec Ltd, public-service IT support, and Business College Helsinki IT support.
- Skills across reverse engineering, malware analysis, CTI, iOS dynamic analysis, security testing, and full-stack tooling.
- Public contact paths through GitHub, LinkedIn, and TryHackMe.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- GSAP
- Lucide React

## Local Development

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

The site deploys to GitHub Pages from `main` through `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the Vite app, uploads `dist`, and publishes it with GitHub Pages.

## Content Notes

The portfolio intentionally highlights analysis, CTI, reverse engineering, and tooling work over older demo repos. Security research is framed around authorized testing, defensive analysis, and learning value.
