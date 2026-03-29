# Sachinn P Portfolio

A React + Vite portfolio with a dark terminal aesthetic, centered around one shared theme and a cleaner `src/` structure. The live app keeps the Three.js hero scene, canvas effects, custom cursor, orbiting skills, and typed terminal section, but the content and motion logic now live in dedicated modules instead of being scattered across the section components.

## Stack

- Vite for local dev and static builds
- React for the UI structure
- Plain CSS for styling
- Three.js from CDN for the hero model
- Google Fonts for `Space Mono` and `Syne`

## Local Development

```bash
npm install
npm run dev
```

Build the production bundle with:

```bash
npm run build
```

Preview the production build with:

```bash
npm run preview
```

## Project Notes

- No environment variables are required for the current site.
- The portfolio is rendered through the React entrypoint in [`src/main.jsx`](/home/sachinn-p/Codes/MySite/src/main.jsx).
- Shared copy and project data live in [`src/content/siteContent.js`](/home/sachinn-p/Codes/MySite/src/content/siteContent.js).
- Shared animation logic lives in [`src/hooks`](/home/sachinn-p/Codes/MySite/src/hooks).
- Reusable UI primitives live in [`src/components/common`](/home/sachinn-p/Codes/MySite/src/components/common).
- Small shared utilities live in [`src/utils`](/home/sachinn-p/Codes/MySite/src/utils).
- Theme tokens live in [`src/theme/tokens.css`](/home/sachinn-p/Codes/MySite/src/theme/tokens.css).
- Styles are split by concern under [`src/styles`](/home/sachinn-p/Codes/MySite/src/styles).
- Project-owned icons for the live skills orbit live under [`src/assets/icons`](/home/sachinn-p/Codes/MySite/src/assets/icons).
- Legacy Bootstrap/template sections and vendor bundles were removed from the active `src/` tree.
