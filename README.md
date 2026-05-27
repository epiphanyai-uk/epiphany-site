# Epiphany AI website with resend email API 📮

## 🎨 Tech Stack

- React + Vite
- TypeScript
- Vercel Serverless Functions
- Resend API
- Upstash Redis

## 🚀 Getting Started

Install pnpm

`npm install -g pnpm`

Install dependencies

`pnpm install`

## 🌐 Frontend

Run Frontend Vite dev server for UI updates:

`pnpm dev`

Frontend runs at:

<http://localhost:5173>

## 🤖 Backend

A serverless function handles contact form submissions.

- File: `api/contact.ts`
- Route: `/api/contact`

This function runs on Vercel’s serverless runtime and handles:
- sending emails via Resend
- rate limiting via Upstash

Run full stack server with:

`pnpm dev:full`

Create an .env file in the project root:

```
RESEND_API_KEY=your_key_here
UPSTASH_REDIS_REST_URL=upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=upstash_redis_rest_token
