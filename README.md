# Torii — Premium SaaS Landing Page Astro Theme

Torii is a premium SaaS landing page theme built with [Astro](https://astro.build). It features an editorial electric-blue design, Inter typography, and GSAP scroll animations.

**Live Demo:** [https://oberonlai.github.io/torii-demo/](https://oberonlai.github.io/torii-demo/)

## Features

- 7 landing page variants (Startup, Developer, Enterprise, Education, Partner, Pricing)
- GSAP scroll animations
- Dark/light mode toggle
- Responsive layout with mobile navigation
- SEO-ready with sitemap integration
- Inter font via CSS variables

## Quick Start

```bash
npm create astro@latest -- --template m615926/torii
# or clone directly:
git clone https://github.com/oberonlai/torii-demo my-site
cd my-site
npm install
npm run dev
```

## Configuration

Edit `src/data/site.ts` to update your site name, tagline, navigation links, and footer content.

```ts
// src/data/site.ts
export const siteConfig = {
  name: 'Your SaaS',
  tagline: 'Your compelling tagline here',
  // ...
}
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main SaaS landing page |
| `/startup` | Startup variant |
| `/developer` | Developer-focused variant |
| `/enterprise` | Enterprise variant |
| `/education` | Education sector variant |
| `/partner` | Partner/reseller variant |
| `/pricing` | Pricing page |

## Customization

### Colors

Torii uses CSS custom properties for theming. Override in `src/styles/base.css`:

```css
:root {
  --color-accent: #2563eb;   /* Electric blue */
  --color-bg: #0f172a;       /* Dark background */
  --color-text: #f8fafc;     /* Light text */
}
```

### Fonts

The theme uses Inter by default (loaded via CDN). To change the font, update the `@import` in `src/styles/base.css` and the `--font-sans` variable.

### Animations

GSAP animations are configured in `src/utils/animations.ts`. You can adjust duration, easing, and scroll trigger thresholds there.

## Deployment

### GitHub Pages

The repo includes a pre-configured GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push to the `main` branch.
2. Enable GitHub Pages in repo settings → Pages → Source: GitHub Actions.
3. Your site deploys automatically on every push.

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

### Cloudflare Pages

Connect your repo in the Cloudflare dashboard:
- Build command: `npm run build`
- Build output: `dist`

## License

MIT © [Codotx](https://codotx.com)
