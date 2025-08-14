# TrioPixel — Futuristic 3D Software Studio

A modern, neon, 3D-themed website built with Next.js App Router, TypeScript, Tailwind, Three.js (react-three-fiber), and an embedded SQLite backend for lead capture.

## Tech
- Next.js (App Router) + TypeScript
- Tailwind (next@canary built-in)
- Three.js via @react-three/fiber and @react-three/drei
- Animations: framer-motion
- Forms + validation: react-hook-form + zod
- Backend storage: SQLite (better-sqlite3)

## Scripts
- dev: `npm run dev`
- build: `npm run build`
- start: `npm run start`

## Data
- SQLite file at `data/triopixel.db`
- APIs:
  - POST `/api/contact` { name, email, phone?, country?, message }
  - POST `/api/hire` { name, email, phone?, country?, company?, budget?, timeline?, description }
  - GET `/api/admin/clients` → { contacts, hires }

## Export ZIP
From the repo root:
```
cd /workspace/triopixel
zip -r triopixel.zip . -x "node_modules/*" -x ".next/*"
```
