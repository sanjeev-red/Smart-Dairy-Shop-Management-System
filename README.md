# Smart Dairy Shop Management System

A responsive dairy, fruit and vegetable storefront with a React/Vite frontend, Express API, Prisma ORM, and Neon PostgreSQL database. UPI is a simulated academic demo only; no real payment is processed.

## Stack

React, Vite, TypeScript, React Router, Lucide, React Hot Toast, Express, Prisma ORM 6, Prisma PostgreSQL adapter (`pg`), and Neon PostgreSQL.

## Configure Neon

The app uses the pooled Neon URL for Express queries and the direct Neon URL for Prisma schema operations:

- `DATABASE_URL`: Neon pooled connection URL (`-pooler` host), used by the API and seed script.
- `DATABASE_URL_UNPOOLED`: Neon direct connection URL, used by Prisma CLI through `directUrl`.
- `JWT_SECRET`: a private, long random secret.
- `CORS_ORIGINS`: comma-separated exact origins allowed to call the API in production.
- `VITE_API_BASE_URL`: deployed API origin, without a trailing slash. Leave empty for the local Vite proxy.

Copy `.env.example` to `.env` only if needed, then use the Neon-provided values. Do not commit `.env` or other environment files. The repository ignores them.

## Run locally

```powershell
npm install
npm run db:push
npm run db:seed
npm run dev
```

Open http://localhost:5173. The API runs at http://localhost:4000. `npm run db:push` uses the direct URL and does not force-accept destructive changes. Review any Prisma warning before proceeding.

`npm run db:seed` is safe to repeat: it creates missing categories and products without updating matching existing rows. It also creates the local demonstration accounts, suppliers, milk collection example, and coupon only when those records do not already exist.

## Production build and deployment

```powershell
npm run build
npm start
```

Set `NODE_ENV=production`, `JWT_SECRET`, `PORT`, and `CORS_ORIGINS` in the API host. Build the frontend with `VITE_API_BASE_URL` set to the API origin (or serve `/api` from the same origin). Add the production frontend origin to `CORS_ORIGINS`. The Neon CLI config in `neon.ts` manages Neon branch policy; it does not deploy this Express API or frontend.

## Demo accounts

- Admin: `admin@freshdairy.local` / `Admin@123`
- Customer: `customer@freshdairy.local` / `Customer@123`

Change demo passwords before any public deployment.

## Existing SQLite file

`prisma/dev.db` is preserved as-is and ignored by Git. Changing Prisma to PostgreSQL does not copy that SQLite data into Neon. The Neon schema and seed setup operate on the database identified by the root `.env` URLs; any SQLite data import should be a separate, reviewed migration.

## Included

- Product catalog with search, category and price filters, sorting, product details, availability and freshness labels.
- Guest basket in browser storage and signed-in basket in PostgreSQL; stock-checked order creation and inventory movement records.
- Customer registration/login, order history, delivery progress, quick reorder, wishlist, and account pages.
- Category-based recommendations with a best-rated fallback for new customers.
- Admin summary, product/stock management, order status management, suppliers, milk collection, low-stock watch, and CSV sales export.
- Responsive design, optional dark theme, coupon `FRESH10` (10% off subtotal above ₹299), and free delivery over ₹499.

## Notes

Product photographs load from Unsplash URLs and require an internet connection in the browser. Passwords are bcrypt-hashed. API authentication uses signed bearer tokens. UPI is simulated.
