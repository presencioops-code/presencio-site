import { assertTransition, type WorkflowState } from './types';
import { db, logAudit } from './db';

export async function transitionOpportunity(id:string,to:WorkflowState,actor:string,reason?:string){
  const sql=db();
  return sql.begin(async tx=>{
    const rows=await tx`SELECT status FROM opportunities WHERE id=${id} FOR UPDATE`;
    if(!rows[0]) throw new Error('OPPORTUNITY_NOT_FOUND');
    const from=rows[0].status as WorkflowState; assertTransition(from,to);
    const updated=await tx`UPDATE opportunities SET status=${to},updated_at=now() WHERE id=${id} AND status=${from} RETURNING id,status`;
    if(!updated[0]) throw new Error('WORKFLOW_CONFLICT');
    await tx`INSERT INTO audit_logs (actor,action,entity_type,entity_id,metadata) VALUES (${actor},'WORKFLOW_TRANSITION','opportunity',${id},${sql.json({from,to,reason:reason??null})})`;
    return {id,from,to};
  });
}

export async function requestApproval(gate:'OPPORTUNITY'|'PRODUCT'|'PUBLISHING',entityType:string,entityId:string,actor:string){
  const rows=await db()`INSERT INTO approvals (gate,entity_type,entity_id,requested_by) VALUES (${gate},${entityType},${entityId},${actor}) RETURNING id,status,gate,entity_type,entity_id`;
  await logAudit(actor,'APPROVAL_REQUESTED',entityType,entityId,{gate});
  return rows[0];
}
