# VÉLOCÉRA — Luxury Automotive Digital Showroom

A fictional, portfolio-ready luxury automotive website built with React, Vite, React Router, Framer Motion and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
npm run preview
```

Vite outputs the production build to `dist`.

## Deploy to Vercel

Push the project to GitHub, import the repository into Vercel, and deploy. Vercel detects Vite automatically. The included `vercel.json` rewrites routes to `index.html` so React Router URLs such as `/cars/v12` work on direct visits.

## Images

The prototype uses automotive photography referenced in `src/data/cars.js`. Replace those URLs with images you are licensed to use before commercial publication.

The fictional VÉLOCÉRA logo is stored at `src/assets/velocera-logo.png` and is already wired into the navbar and footer.

## Add a car

Add another object to `src/data/cars.js`. The Cars page, detail route, featured cards and comparison system use the shared car data.

## Portfolio note

VÉLOCÉRA and its vehicle models/specifications are fictional. This project is an original automotive UI concept.
