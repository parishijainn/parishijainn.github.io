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

## Deployment (GitHub Pages)

This project is configured for **static export** and deployment to **GitHub Pages** via **GitHub Actions**.

### 1) Enable Pages in GitHub repo settings

- Go to your repo on GitHub → **Settings** → **Pages**
- Under **Build and deployment**:
  - **Source**: select **GitHub Actions**

### 2) How deploys work

- Every push to the **`main`** branch triggers the workflow: `.github/workflows/deploy.yml`
- The workflow:
  - installs dependencies
  - runs a static export build
  - uploads the `out/` folder
  - deploys it to GitHub Pages

### 3) Your public URL

Your site will be available at:

- `https://parishijainn.github.io/`

### 4) Local commands (unchanged)

```bash
npm run dev
```

### 5) Troubleshooting

- **404 on refresh / deep links**: this site uses `trailingSlash: true` and static export so routes resolve to `.../route/` folders with `index.html`. If you changed routing, rebuild and redeploy.
- **Missing images/CSS/JS on GitHub Pages**: make sure GitHub Pages is set to **GitHub Actions** (not “Deploy from a branch”). This repo is a **user site**, so it is served from the root and uses an empty `basePath`.
- **`/profile.jpg` not showing after deploy**: make sure the file exists at `public/profile.jpg`.
- **Workflow didn’t run**: confirm you pushed to `main`, then check the **Actions** tab for logs.
