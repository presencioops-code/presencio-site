# ProblemSolved OS — Architecture

## Phase 1 control plane

ProblemSolved is being built as a modular, approval-gated workflow platform rather than a monolithic agent prompt.

**Web:** Next.js App Router on Vercel-compatible serverless infrastructure.

**State:** PostgreSQL. The schema is in `database/schema.sql`. Production requires `DATABASE_URL`; there is no fake persistence fallback.

**Orchestration:** typed workflow state transitions in `lib/problemsolved/orchestrator.ts`. Transitions are explicit and transaction-safe.

**Agents:** specialist modules will be added behind typed contracts. The orchestrator owns workflow state; agents own domain work.

**Integrations:** adapters will live under `integrations/`. Current discovery confirms Composio can expose Canva, Whop, Vercel, OpenAI and browser tooling, but those toolkits are not currently connected except Browser Tool. The application therefore treats those integrations as configuration-dependent and never reports a successful external action without a configured adapter.

## Workflow

`OPPORTUNITY_DISCOVERED → VALIDATING → VALIDATED → RESEARCHING → RESEARCH_COMPLETE → COMPETITOR_ANALYSIS → PRODUCT_PROPOSED → AWAITING_APPROVAL → APPROVED → BUILDING → QC → QC_PASSED → DESIGNING → READY_TO_PUBLISH → AWAITING_PUBLISH_APPROVAL → PUBLISHED → MARKETING → ANALYTICS → IMPROVEMENT`

Failure paths are explicit and persisted.

## Human gates

1. Opportunity approval.
2. Product approval.
3. Publishing approval.

Default autonomy is **SUPERVISED** and publishing remains human-approved.

## Evidence

Opportunity evidence, sources, claims, confidence and evidence class (`OBSERVED`, `INFERRED`, `ESTIMATED`, `UNKNOWN`) are persisted. Product/research agents must consume this evidence layer instead of turning unsupported assumptions into facts.

## Security

Dashboard authentication uses an HTTP-only signed session cookie backed by `AUTH_SECRET`. Admin credentials are environment variables. Secrets are excluded from logs and `.env` is not part of the repository.

## Extension points

- Model provider interface: OpenAI / Claude adapters.
- Integration adapters: Canva / Whop / social / storage / research.
- Agent contracts: typed `OpportunityResult`, `ResearchResult`, `ProductResult`, `QCResult`.
- Queue/job layer: persisted `jobs` table, ready for Vercel-compatible background execution.
