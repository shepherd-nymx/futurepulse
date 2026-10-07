# Future Pulse Corporate Website

The official corporate website for **Future Pulse** — a Zimbabwean technology company building software, electronics, IoT, and automation solutions.

## Vercel Deployment Guide

This project is pre-configured for one-click deployment on [Vercel](https://vercel.com).

### Automatic Deployment (via GitHub)
1. Push this repository to GitHub.
2. In the Vercel Dashboard, click **Add New Project** and select your GitHub repository.
3. Vercel automatically detects the Vite framework and applies the settings from `vercel.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

### CLI Deployment (via Vercel CLI)
```bash
npm install -g vercel
vercel
```
For production release:
```bash
vercel --prod
```

### Configuration Notes
- `vercel.json` contains SPA routing rewrites (`/(.*) -> /index.html`) to ensure all client-side paths resolve cleanly without 404 errors on page refresh.
- Static assets are located in the `public/` directory and will automatically bundle into `dist/assets/` during the production build.
