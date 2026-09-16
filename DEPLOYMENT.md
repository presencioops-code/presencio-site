# Deployment

## Vercel

Deploy the existing Next.js repository normally. ProblemSolved requires these environment variables:

- `DATABASE_URL`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `AUTH_SECRET`

Do not add provider credentials until the corresponding adapter is implemented and authenticated.

## Database

Run `database/schema.sql` against the production PostgreSQL database before opening `/problemsolved`.

## Runtime model

The dashboard and APIs are serverless-friendly. Long-running agent work is intentionally not executed inside a request. The persisted `jobs` table is the Phase 1 queue boundary; later phases will connect it to a Vercel-compatible background workflow/queue adapter.

## Verification

After deployment, verify:

1. `/problemsolved/login` loads.
2. Valid credentials create an HTTP-only session.
3. Invalid credentials are rejected.
4. Dashboard reads PostgreSQL state.
5. `Find new opportunities` creates a persisted queued job.
6. Approval actions update the approval record and audit log.
