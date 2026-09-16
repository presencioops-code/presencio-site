import postgres from 'postgres';

let sqlClient: ReturnType<typeof postgres> | undefined;
export function db() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not configured');
  sqlClient ??= postgres(process.env.DATABASE_URL, { max: 5, idle_timeout: 20, connect_timeout: 10, prepare: false });
  return sqlClient;
}

export async function healthcheck() { await db()`select 1 as ok`; return true; }

export async function logAudit(actor: string, action: string, entityType?: string, entityId?: string, metadata: Record<string, unknown> = {}) {
  await db()`INSERT INTO audit_logs (actor, action, entity_type, entity_id, metadata) VALUES (${actor}, ${action}, ${entityType ?? null}, ${entityId ?? null}, ${db().json(metadata)})`;
}

export async function createJob(agent: string, workflow: string, entityType: string | null, entityId: string | null, input: Record<string, unknown> = {}) {
  const rows = await db()`INSERT INTO jobs (agent, workflow, entity_type, entity_id, input) VALUES (${agent}, ${workflow}, ${entityType}, ${entityId}, ${db().json(input)}) RETURNING id, status, retry_count`;
  return rows[0];
}
