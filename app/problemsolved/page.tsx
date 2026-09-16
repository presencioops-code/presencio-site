import { redirect } from 'next/navigation';
import { currentUser } from '../../lib/problemsolved/auth';
import { db } from '../../lib/problemsolved/db';
import DashboardClient from './DashboardClient';
export const dynamic='force-dynamic';
export default async function Dashboard(){const user=await currentUser();if(!user)redirect('/problemsolved/login');let data={opportunities:[],approvals:[],jobs:[],errors:[]};try{const sql=db();const [opportunities,approvals,jobs,errors]=await Promise.all([sql`SELECT id,problem,target_customer,commercial_score,status,confidence FROM opportunities ORDER BY commercial_score DESC LIMIT 12`,sql`SELECT id,gate,entity_type,entity_id,status,created_at FROM approvals WHERE status='PENDING' ORDER BY created_at LIMIT 12`,sql`SELECT id,agent,status,attempt,retry_count,error,created_at FROM jobs ORDER BY created_at DESC LIMIT 12`,sql`SELECT id,agent,message,severity,created_at FROM errors WHERE resolved_at IS NULL ORDER BY created_at DESC LIMIT 8`]);data={opportunities:opportunities as never[],approvals:approvals as never[],jobs:jobs as never[],errors:errors as never[]};}catch{}return <DashboardClient user={user} data={data}/>}
