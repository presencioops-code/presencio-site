import { assertTransition, type WorkflowState } from './types';
import { db, logAudit } from './db';

export async function transitionOpportunity(id:string,to:WorkflowState,actor:string,reason?:string){
  const rows=await db()`SELECT status FROM opportunities WHERE id=${id} FOR UPDATE`;
  if(!rows[0]) throw new Error('OPPORTUNITY_NOT_FOUND');
  const from=rows[0].status as WorkflowState; assertTransition(from,to);
  await db()`UPDATE opportunities SET status=${to},updated_at=now() WHERE id=${id}`;
  await logAudit(actor,'WORKFLOW_TRANSITION','opportunity',id,{from,to,reason:reason??null});
  return {id,from,to};
}

export async function requestApproval(gate:'OPPORTUNITY'|'PRODUCT'|'PUBLISHING',entityType:string,entityId:string,actor:string){
  const rows=await db()`INSERT INTO approvals (gate,entity_type,entity_id,requested_by) VALUES (${gate},${entityType},${entityId},${actor}) RETURNING id,status,gate,entity_type,entity_id`;
  await logAudit(actor,'APPROVAL_REQUESTED',entityType,entityId,{gate});
  return rows[0];
}
