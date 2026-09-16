# ProblemSolved OS — Local Setup

## Requirements

- Node.js 20+
- PostgreSQL 15+
- Git

## Install

```bash
npm install
cp .env.example .env.local
```

Set `DATABASE_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and a random `AUTH_SECRET` of at least 32 characters.

## Database

Create a PostgreSQL database, then apply:

```bash
psql "$DATABASE_URL" -f database/schema.sql
```

## Run

```bash
npm run dev
```

Open `/problemsolved/login`.

## Checks

```bash
npm test
npm run typecheck
npm run build
```

## Vercel

Configure the same environment variables in the Vercel project. Apply `database/schema.sql` to the production PostgreSQL database before using the dashboard. The current repository does not have an active Vercel connector in this ChatGPT session, so deployment status and environment values have not been claimed as verified.

## Integrations

Composio capability discovery on 2026-09-16 found Canva, Whop, Vercel, OpenAI and browser tooling. Only Browser Tool reported an active connection. Canva, Whop, Vercel, GitHub, OpenAI and Ollama reported no active Composio connection. Do not place credentials in GitHub; connect/configure integrations before enabling their production adapters.
