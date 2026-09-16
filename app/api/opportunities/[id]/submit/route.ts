import { NextResponse } from 'next/server';
import { requireUser } from '../../../../../lib/problemsolved/auth';
import { requestApproval, transitionOpportunity } from '../../../../../lib/problemsolved/orchestrator';
export async function POST(_req:Request,{params}:{params:Promise<{id:string}>}){try{const actor=await requireUser();const {id}=await params;const moved=await transitionOpportunity(id,'AWAITING_APPROVAL',actor,'Submitted to mandatory Gate 1');const approval=await requestApproval('OPPORTUNITY','opportunity',id,actor);return NextResponse.json({moved,approval},{status:202});}catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Unknown error'},{status:e instanceof Error&&e.message==='UNAUTHORIZED'?401:500});}}
