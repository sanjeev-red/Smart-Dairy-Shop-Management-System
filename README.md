# Fresh Dairy — Smart Dairy Shop Management System

A responsive dairy, fruit and vegetable storefront with customer accounts, a persistent SQLite database, order tracking, supplier and milk collection tools, and an admin dashboard. UPI is a simulated academic demo only; no real payment is processed.

## Stack
React, Vite, TypeScript, React Router, Lucide, React Hot Toast, Express, Prisma ORM, SQLite, bcrypt.

## Requirements
Node.js 20.19+ or 22.12+ and npm.

## First run
1. Copy `.env.example` to `.env` and set a private `JWT_SECRET`.
2. Install dependencies: `npm install`
3. Create/update the local database: `npm run db:push`
4. Load the demonstration catalog and accounts: `npm run db:seed`
5. Start frontend and API together: `npm run dev`
6. Open http://localhost:5173

The API runs at http://localhost:4000. For production frontend assets, run `npm run build`; run the API with `npm run server:dev` or `npm start`.

## Demo accounts
- Admin: `admin@freshdairy.local` / `Admin@123`
- Customer: `customer@freshdairy.local` / `Customer@123`

Change these passwords before using any non-local deployment. Configure `DATABASE_URL` and `JWT_SECRET` in `.env`.

## Included
- Product catalog with search, category and price filters, sort, product details, availability and freshness labels.
- Guest basket stored in the browser and signed-in basket stored in SQLite; stock-checked order creation and inventory movement records.
- Customer registration/login, order history, delivery progress, quick reorder, wishlist, account and reviews after delivery.
- Recommendations based on previous order categories with best-rated catalog fallback for new customers.
- Admin summary, product/stock management, order status management, supplier records, milk collection, low stock watch and CSV sales export.
- Responsive design, accessible controls, optional dark theme, coupon `FRESH10` (10% off subtotal above ₹299), free delivery over ₹499.

## Notes
Product photographs are loaded from Unsplash image URLs and require an internet connection in the browser. The supplied brief referenced two design screenshots, but no image attachments were available in the provided attachment folder; the interface follows the brief's green and cream palette. This academic application uses signed bearer tokens and local SQLite; use HTTPS, a managed secrets store, and a production session strategy before deployment. Passwords are bcrypt-hashed. UPI is simulated.

## Screenshots
Add project screenshots here after launching the app.

## Future enhancements
PostgreSQL deployment, production-grade session rotation, real delivery partner integration, image upload storage, editable user profiles and addresses, richer sales charts, seasonal deal scheduling, and automated expiry alerts.

