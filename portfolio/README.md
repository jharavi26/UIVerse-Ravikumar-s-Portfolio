# Ravikumar Jha — Frontend Developer Portfolio

A responsive personal portfolio for **Ravikumar Jha**, built with React, TypeScript, and Vite. The site presents his frontend experience, skills, selected projects, and contact options in a polished dark interface with subtle motion.

## Features

- Responsive layouts with mobile navigation
- Sections for About, Skills, Projects, Experience, What I Bring, and Contact
- Scroll-triggered reveals, animated hero details, and interactive hover states
- Reduced-motion support for visitors who prefer less animation
- Custom project preview artwork and social sharing card
- Downloadable resume
- Contact form that opens a pre-filled email draft; the site does not send or store messages
- GitHub and LinkedIn profile links
- Semantic page structure, keyboard focus styling, and SEO metadata

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4 via the Vite plugin, with custom CSS for the portfolio design
- Framer Motion
- Lucide React

## Getting started

### Requirements

- Node.js 20.19+ (or 22.12+)
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal, usually `http://localhost:5173`.

### Build and preview

```bash
npm run build
npm run preview
```

The production build is written to `dist/`. The preview command serves that built output locally.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check the app and create a production build |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
.
├── public/
│   ├── og-card.svg                    # Social sharing image
│   ├── Ravikumar_Jha_Resume.pdf      # Downloadable PDF resume
│   ├── purebuy-storefront.png         # PureBuy project screenshot
│   └── uiverse-portfolio.png          # UIverse portfolio screenshot
├── src/
│   ├── components/                    # Shared UI: navbar, hero, footer, visuals, social links
│   ├── data/portfolio.ts              # Skills, projects, contact, and navigation data
│   ├── sections/                      # About, skills, projects, experience, approach, contact
│   ├── App.tsx                        # Page composition, active section, scroll progress
│   ├── index.css                      # Design system, layout, and responsive styles
│   └── main.tsx                       # React entry point
├── index.html                         # Document metadata and app mount point
├── vite.config.ts                     # Vite, React, and Tailwind configuration
└── package.json
```

## Portfolio content and links

- GitHub: [github.com/jharavi26](https://github.com/jharavi26)
- LinkedIn: [linkedin.com/in/ravikumar-jha](https://www.linkedin.com/in/ravikumar-jha)
- Email: [jharavi737@gmail.com](mailto:jharavi737@gmail.com)

### Featured projects

- **PureBuy** — responsive e-commerce app with reusable components, product listings, pagination, authentication, and cart functionality. Stack: React, Redux, Firebase, and Stripe Payments. [Live demo](https://purebuy.onrender.com/).
- **UIverse Portfolio** — responsive portfolio with reusable sections for projects, skills, education, and profile information. Stack: React, Tailwind CSS, and Framer Motion. [Live demo](https://ui-verse-ravikumar-s-portfolio.vercel.app/).
- **Signal / 01** and **Forma** are portfolio concepts and do not currently have published demos.

Project GitHub actions link to the developer profile, not project-specific repositories.

The contact form opens a pre-filled Gmail compose window addressed to `jharavi737@gmail.com`, including the visitor’s name, reply address, and message. Fallback links are also provided for Gmail and the visitor’s default email app. The visitor must send the draft to deliver the message; this website does not submit it to a backend or send it automatically. The contact email can be updated in `src/App.tsx`.

## Customization

- Update project, skill, navigation, and contact details in `src/data/portfolio.ts`.
- Edit individual page sections in `src/sections/` and shared UI in `src/components/`.
- Adjust colors, spacing, responsive breakpoints, and motion styling in `src/index.css`.
- Edit title, description, and Open Graph metadata in `index.html`.
- Replace the downloadable PDF at `public/Ravikumar_Jha_Resume.pdf` to update the resume.
- Replace or edit the social sharing artwork in `public/og-card.svg`.
- Replace `public/purebuy-storefront.png` or `public/uiverse-portfolio.png` to update the corresponding project preview images.

## Accessibility and motion

The interface includes keyboard-visible focus styles and honors the operating system’s `prefers-reduced-motion` setting. Animations are intended to remain decorative and do not carry essential content.
