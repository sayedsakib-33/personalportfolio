# Sayed Shadman Sakib — Portfolio

> **Technical Operations Analyst** focused on **FinTech operations, production support, automation, data quality, and internal systems**.

A recruiter-focused personal portfolio built to communicate both **operational impact** and **technical depth** through measurable outcomes, production systems, and practical case-study style storytelling.

## Overview

This portfolio is designed around a simple idea:

**Show how operational problems were investigated, improved, automated, and measured — not just what tools were used.**

The site combines:

- Technical Operations and Production Support experience
- FinTech / KYC / AML operational knowledge
- Automation and internal tooling
- Data quality and validation workflows
- SQL, Python, TypeScript, APIs, and dashboards
- Measurable business and operational outcomes
- A print-friendly web resume
- Responsive design for desktop, tablet, and mobile

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| UI | React 19 |
| Language | TypeScript |
| Icons | Lucide React |
| Fonts | Inter + Space Grotesk |
| Styling | Custom CSS design system |
| Deployment | Vercel |
| Source Control | GitHub |

## Project Structure

```
personalportfolio/
├── app/
│   ├── icon.svg
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── resume/
│       └── page.tsx
│
├── lib/
│   └── data.ts
│
├── public/
│   └── profile-standing.webp
│
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Main Routes

### `/`
The primary portfolio experience.

It includes:

- Hero / professional positioning
- Selected impact metrics
- Career experience timeline
- Technical systems and projects
- Impact and recognition
- Skills and tooling
- Education and certifications
- Contact section

### `/resume`
A web-based, print-friendly resume.

The page is intentionally structured so it can be printed or saved as a PDF directly from the browser.

## Featured Projects

### OpsCore

An internal operations platform designed to centralize operational information and workflows across systems such as:

- TypeScript
- Internal database
- Google Sheets
- Intercom API
- ClickUp

The portfolio presents it as a cross-system operational workspace rather than a generic software project.

### QC Platform

An AI-assisted conversation quality-control platform designed for recurring operational use.

The implementation described in the portfolio includes:

- TypeScript
- Vercel
- Intercom API
- AI-assisted quality checks
- Role-based access
- Recurring ingestion
- Scoring and review workflows
- Dashboard reporting

## Design Direction

The visual system follows a **dark technical / FinTech-professional** direction.

### Principles

- High visual contrast
- Strong typographic hierarchy
- Restrained blue accent system
- Metric-led storytelling
- Minimal decorative noise
- Accessible iconography
- Responsive layouts
- Clear interaction affordances
- Professional rather than template-like presentation

The project uses principles inspired by the **UI/UX Pro Max** design framework while implementing an original portfolio-specific interface instead of copying a template.

## Content Architecture

Portfolio content is intentionally centralized in:

```
lib/data.ts
```

This makes it possible to update the site's:

- Profile
- Positioning
- Metrics
- Experience
- Projects
- Impact
- Skills
- Education
- Certifications
- Contact information

without having to redesign the page structure.

## Local Development

### Prerequisites

Install:

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open:

```
http://localhost:3000
```

### Production build

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Deployment

The project is configured for a **GitHub → Vercel** workflow.

Recommended deployment flow:

1. Push changes to the repository.
2. Vercel detects the Next.js project.
3. Vercel installs dependencies and runs the production build.
4. The updated site is deployed automatically.

No custom server configuration is required for the current application.

## Updating the Portfolio

For normal content changes, start with:

```
lib/data.ts
```

For layout or visual changes:

```
app/page.tsx
app/globals.css
```

For resume-page changes:

```
app/resume/page.tsx
```

For SEO and site metadata:

```
app/layout.tsx
app/sitemap.ts
app/robots.ts
```

For the profile image:

```
public/profile-standing.webp
```

## Performance & UX Goals

The portfolio is designed with the following goals:

- Fast initial rendering
- Minimal client-side JavaScript
- Responsive layouts
- Accessible navigation and controls
- Clear typography at all breakpoints
- Reduced-motion support
- Optimized image rendering through Next.js
- SEO-friendly metadata and sitemap generation

## Personal Branding

Current positioning:

> **Production Support · FinTech · Automation · Data Quality**

GitHub bio:

> Technical Operations Analyst building fintech tools, AI-assisted QC systems, and automation with TypeScript, Python, SQL, APIs, and data workflows.

## Future Enhancements

Planned improvements can include:

- Interactive case-study pages
- Architecture diagrams for internal systems
- Project-specific technical deep dives
- Selected dashboard screenshots
- More refined motion / scroll interactions
- Structured project metadata
- Open Graph image generation
- Custom domain
- Analytics
- Additional accessibility and performance audits

## Author

**Sayed Shadman Sakib**

Technical Operations Analyst  
FinTech · Production Support · Automation · Data Quality

- LinkedIn: https://www.linkedin.com/in/sayed-shadman-sakib/
- GitHub: https://github.com/sayedsakib-33
- Email: sayed.sakib2025@gmail.com

## License

This repository contains a personal portfolio and professional materials.

The source code may be reviewed for learning and reference, but portfolio content, personal information, images, and professional materials should not be reused as another person's portfolio without permission.
