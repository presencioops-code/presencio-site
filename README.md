# ProblemSolved

ProblemSolved is an evidence-first digital-product operating system. It discovers narrow painful problems, validates them, researches them, turns approved opportunities into structured PDF products, runs quality control, prepares creative/commerce assets, distributes content and learns from customer behavior.

## Current status

**Phase 1 implemented:** PostgreSQL schema, signed operator authentication, opportunity API, persistent job queue foundation, workflow state machine, approval queue, dashboard, audit logging, tests and deployment documentation.

The existing Presencio marketing site remains intact on the same Next.js application. ProblemSolved operations live under `/problemsolved`.

## Start here

1. Read `ARCHITECTURE.md`.
2. Copy `.env.example` to `.env.local`.
3. Provision PostgreSQL and apply `database/schema.sql`.
4. Run `npm install` and `npm run dev`.
5. Open `/problemsolved/login`.

## Principle

No fake automation. No silent failures. No automatic publishing by default. External integrations must be discovered, authenticated and exercised through adapters before production workflows depend on them.
