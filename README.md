# The Tented Stay

A direct-booking micro‑SaaS proof of concept (POC) for Pacha Waterfront Nothi in Chuka. The Tented Stay consolidates fragmented DM-based booking conversations into a single, mobile‑first “Digital Concierge” that captures requests and presents them in a unified admin feed.

> Important: This is a demo‑friendly POC. All data is stored in browser `localStorage` for zero‑latency presentations and offline reliability. No real backend or authentication is included.

## Overview

- **Mission:** Bridge the gap between social DMs and high‑commission platforms by enabling direct booking requests.
- **Primary User:** Pacha Waterfront Management (Admin).
- **Secondary User:** Eco‑tourists and getaway seekers (Guests).
- **Core Value:** Centralized, low‑friction request intake with rapid admin response and WhatsApp confirmation.

## Features

### Guest Experience (Front Office)
- Hero section with high‑impact Pacha Waterfront branding.
- Availability request form: Name, WhatsApp‑ready Phone, Dates, Guest Count, Stay Type (Camping/Cottage).
- Prominent "Book via Booking.com" fallback button.
- Instant feedback "Thank You" screen explaining WhatsApp confirmation next steps.

### Admin Experience (Back Office)
- Simulated login for demos (mock auth only).
- Unified booking feed (reads persistent array from `localStorage`).
- Status management: Pending → Confirmed → Rejected.
- "Confirm via WhatsApp" button generates a pre‑filled message to the guest.
- Quick‑view cards of stay details.

## Tech Stack

- **Framework:** Next.js (App Router) — currently using 16.x in this repo.
- **Package Manager:** pnpm.
- **Styling:** Tailwind CSS (mobile‑first) — Tailwind v4 tooling present.
- **State/Persistence:** Browser `localStorage` (mock DB).
- **Deployment:** Vercel (planned).
- **Icons:** lucide‑react (planned).
- **Toasts:** sonner (planned).

## Installation

Prerequisites: Node.js 18+ recommended and pnpm installed.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000 to view the app.

Additional scripts:

```bash
pnpm build
pnpm start
pnpm lint
```

## Project Structure

High‑level structure (App Router):

```
.
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── public/
└── src/
		└── app/
				├── globals.css
				├── layout.tsx
				└── page.tsx
```

- `src/app/layout.tsx`: Root layout and metadata.
- `src/app/page.tsx`: Guest landing page (form / hero).
- `src/app/globals.css`: Tailwind and global styles.

## User Flow

### Guest Flow
1. Guest opens landing page and sees hero branding.
2. Fills availability form (Name, Phone/WhatsApp, Dates, Count, Stay Type).
3. Submits request → persisted via `localStorage` (e.g., key `thetentedstay:bookings`).
4. Sees "Thank You" screen with next steps and an optional Booking.com button.

### Admin Flow
1. Admin uses mock login to access dashboard.
2. Dashboard loads all requests from `localStorage` as a unified feed.
3. Admin reviews details and sets status (Pending/Confirmed/Rejected).
4. On "Confirm via WhatsApp", The Tented Stay opens WhatsApp with a pre‑filled message template targeting the guest’s number.

## System Architecture (Demo)

- **Input:** Form submission persisted via `JSON.stringify` into `localStorage`.
- **Notification:** Optional toast (sonner) simulates a new booking alert (planned).
- **Processing:** Admin fetches array from `localStorage` and views/sorts in dashboard.
- **Action:** Status change updates the record in `localStorage`; UI reflects immediately.

Suggested `localStorage` keys:
- `thetentedstay:bookings` — array of booking objects
- `thetentedstay:session` — mock admin session token/flag

Booking object shape (example):

```ts
type Booking = {
	id: string;
	name: string;
	phone: string; // E.164 recommended for WhatsApp
	startDate: string; // ISO
	endDate: string;   // ISO
	guests: number;
	stayType: 'Camping' | 'Cottage';
	status: 'Pending' | 'Confirmed' | 'Rejected';
	createdAt: string; // ISO
};
```

WhatsApp template idea (example):

```
Hello {name}! This is Pacha Waterfront. Your request for {stayType}
from {startDate} to {endDate} for {guests} guests is {status}.
Reply here to confirm any details. 🌿💧
```

## Future Roadmap

- Day 1: Initialize project with pnpm and Next.js. Tailwind theme (earthy/waterfront colors).
- Day 2: Build guest landing page and booking form.
- Day 3: Build admin dashboard and `localStorage` hooks/utilities.
- Day 4: Polish responsiveness, add "fake" email triggers, and high‑res imagery.

Beyond POC:
- Replace `localStorage` with a real backend (Supabase/Prisma/Postgres).
- Add real auth and role‑based access.
- Integrate payments and availability engine.
- Add lucide‑react icons and sonner toasts formally.
- Deploy to Vercel with environment configuration.

## Deployment

When ready to demo publicly:

```bash
pnpm build
```

Deploy the output on Vercel. Configure preview domains and disable indexing if desired for private demos.

## Notes

- This repository is intentionally lightweight to prioritize demo speed and clarity.
- Data persistence is intentionally client‑side (`localStorage`) and not suitable for production.

