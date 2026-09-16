# Security

- Never commit `.env`, tokens, OAuth credentials, cookies or passwords.
- Dashboard sessions are HTTP-only and signed with `AUTH_SECRET`.
- Admin credentials are environment variables.
- Validate all API inputs with Zod.
- Publishing is approval-gated.
- External integrations are adapter-isolated.
- Job errors are persisted without secrets.
- Database writes use parameterized queries through the `postgres` client.
- Production should add platform-level rate limiting/WAF controls and, when multi-user access is introduced, role-based authorization beyond the current owner login.
