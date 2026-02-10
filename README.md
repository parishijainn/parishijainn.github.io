## Parishi Jain — Portfolio

This repo deploys Parishi Jain’s portfolio to **GitHub Pages** at:

- `https://parishijainn.github.io/`

The site is a **Next.js static export** in:

- `Parishi Jain Portfolio/parishi-jain-portfolio`

## Deployment (GitHub Pages)

Deployment is automatic via GitHub Actions.

### One-time setup

1. Go to the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**
   - **Source**: select **GitHub Actions**

### How it deploys

- Pushes to **`main`** trigger `.github/workflows/deploy.yml`
- The workflow builds a static export and deploys the generated `out/` folder

### Local development

```bash
cd "Parishi Jain Portfolio/parishi-jain-portfolio"
npm install
npm run dev
```

### Troubleshooting

- **Refresh gives 404**: this site uses `trailingSlash: true` with static export so routes map to `.../route/index.html`.
- **Missing assets**: ensure GitHub Pages is set to **GitHub Actions**, not “Deploy from a branch”.
- **Actions didn’t run**: check the **Actions** tab for logs.
