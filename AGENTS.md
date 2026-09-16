# Agent Contracts

Each specialist agent must be a module with one responsibility and a typed input/output contract. Agents do not mutate unrelated domains and do not bypass approvals.

## Required contracts

- Opportunity Hunter → `OpportunityResult`
- Validation → `PASS | REVIEW | REJECT` with evidence references
- Competitor Intelligence → competitor records + gap report
- Research → `ResearchResult`
- Product Builder → `ProductResult`
- QC → `QCResult`
- Canva → asset records; external success only after adapter confirmation
- Whop → listing preparation; publish only through the publishing approval gate
- Social / Repurposing → campaign and post records
- Analytics → normalized metric records and weekly intelligence report
- Feedback → categorized feedback records
- Improvement → immutable proposed product version

All agents must record an `agent_runs` entry through a job. Errors become `errors` records and jobs remain recoverable.
