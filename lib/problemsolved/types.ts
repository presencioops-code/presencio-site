export const WORKFLOW_STATES = [
  'OPPORTUNITY_DISCOVERED','VALIDATING','VALIDATED','RESEARCHING','RESEARCH_COMPLETE','COMPETITOR_ANALYSIS','PRODUCT_PROPOSED','AWAITING_APPROVAL','APPROVED','BUILDING','QC','QC_PASSED','DESIGNING','READY_TO_PUBLISH','AWAITING_PUBLISH_APPROVAL','PUBLISHED','MARKETING','ANALYTICS','IMPROVEMENT','VALIDATION_FAILED','RESEARCH_FAILED','QC_FAILED','INTEGRATION_FAILED','PUBLISH_FAILED','NEEDS_ATTENTION'
] as const;
export type WorkflowState = typeof WORKFLOW_STATES[number];
export type ApprovalGate = 'OPPORTUNITY' | 'PRODUCT' | 'PUBLISHING';
export type ApprovalStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'CHANGES_REQUESTED';
export interface ScoreBreakdown { pain:number; financialConsequence:number; researchBurden:number; demandEvidence:number; existingSpending:number; informationFragmentation:number; pdfSuitability:number; reachability:number; }
export interface OpportunityInput { problem:string; targetCustomer:string; evidenceCount?:number; }
export interface OpportunityResult { opportunity_id:string; problem:string; customer:string; score:ScoreBreakdown & {total:number}; evidence:unknown[]; confidence:number; status:WorkflowState; }
export interface ResearchResult { research_id:string; sources:unknown[]; claims:unknown[]; conflicts:unknown[]; uncertainties:unknown[]; status:string; }
export interface ProductResult { product_id:string; version:string; files:string[]; sections:string[]; status:string; }
export interface QCResult { product_id:string; passed:boolean; issues:{severity:string;message:string}[]; required_changes:string[]; }
export const SCORE_MAX={pain:20,financialConsequence:15,researchBurden:15,demandEvidence:15,existingSpending:10,informationFragmentation:10,pdfSuitability:10,reachability:5} as const;
export function totalScore(s:ScoreBreakdown):number{return Object.values(s).reduce((a,b)=>a+b,0);}
export function validateScore(s:ScoreBreakdown):void{(Object.keys(SCORE_MAX) as (keyof ScoreBreakdown)[]).forEach(k=>{if(s[k]<0||s[k]>SCORE_MAX[k])throw new Error(`Invalid score for ${k}`);});}
const transitions:Record<string,WorkflowState[]>={OPPORTUNITY_DISCOVERED:['AWAITING_APPROVAL'],AWAITING_APPROVAL:['VALIDATING','OPPORTUNITY_DISCOVERED'],VALIDATING:['VALIDATED','VALIDATION_FAILED'],VALIDATED:['RESEARCHING'],RESEARCHING:['RESEARCH_COMPLETE','RESEARCH_FAILED'],RESEARCH_COMPLETE:['COMPETITOR_ANALYSIS'],COMPETITOR_ANALYSIS:['PRODUCT_PROPOSED'],PRODUCT_PROPOSED:['AWAITING_APPROVAL'],APPROVED:['BUILDING'],BUILDING:['QC'],QC:['QC_PASSED','QC_FAILED'],QC_FAILED:['BUILDING'],QC_PASSED:['DESIGNING'],DESIGNING:['READY_TO_PUBLISH','INTEGRATION_FAILED'],READY_TO_PUBLISH:['AWAITING_PUBLISH_APPROVAL'],AWAITING_PUBLISH_APPROVAL:['PUBLISHED','READY_TO_PUBLISH'],PUBLISHED:['MARKETING'],MARKETING:['ANALYTICS'],ANALYTICS:['IMPROVEMENT'],IMPROVEMENT:['OPPORTUNITY_DISCOVERED'],INTEGRATION_FAILED:['DESIGNING'],PUBLISH_FAILED:['AWAITING_PUBLISH_APPROVAL'],RESEARCH_FAILED:['RESEARCHING'],VALIDATION_FAILED:['OPPORTUNITY_DISCOVERED'],NEEDS_ATTENTION:['NEEDS_ATTENTION']};
export function canTransition(from:WorkflowState,to:WorkflowState):boolean{return transitions[from]?.includes(to)??false;}
export function assertTransition(from:WorkflowState,to:WorkflowState):void{if(!canTransition(from,to))throw new Error(`Invalid workflow transition: ${from} -> ${to}`);}
