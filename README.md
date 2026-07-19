# Yast Mobile Smoke Test

A tiny, responsive mobile QA landing page for Yast Agency. It presents a clear
release status and verifies three fixture requirements:

- Mobile upload verified
- Convex dev connected
- WorkOS authenticated

The page is frontend-only and uses static local data. It does not include a
backend or connect to live Convex or WorkOS services.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide icons

## Production

[View the live smoke test](https://yast-mobile-smoke-test.vercel.app)
