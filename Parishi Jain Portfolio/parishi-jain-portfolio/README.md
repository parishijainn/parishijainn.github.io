## Parishi Jain — Portfolio

Sleek, modern portfolio built with **Next.js + Tailwind + Framer Motion**, with **dark mode** and content centralized for easy editing.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Editing content (the important part)

- **Main content file**: `src/content/site.ts`
  - Hero copy, About, Experience, Projects, Skills, Contact links live here.
  - Add your **GitHub** and **LinkedIn** URLs (currently blank placeholders).

## Resume

- Put your PDF at `public/resume.pdf`
- The Resume CTA routes to `/resume` and includes a download button pointing to `/resume.pdf`

## Tech stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **next-themes** for dark/light mode toggle

## Deploy

Vercel works great out of the box. Make sure to update metadata (title/description) in `src/app/layout.tsx` if desired.
