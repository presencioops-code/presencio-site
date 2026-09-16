import { NextResponse } from 'next/server';
import { issueSession, sessionCookie } from '../../../../lib/problemsolved/auth';
import { z } from 'zod';
const input = z.object({ email: z.string().email(), password: z.string().min(1) });
export async function POST(req: Request) {
  const body = input.safeParse(await req.json().catch(() => null));
  if (!body.success || body.data.email !== process.env.ADMIN_EMAIL || body.data.password !== process.env.ADMIN_PASSWORD) return NextResponse.json({ error:'Invalid credentials' }, { status:401 });
  if (!process.env.AUTH_SECRET || process.env.AUTH_SECRET.length < 32) return NextResponse.json({ error:'AUTH_SECRET must be configured with at least 32 characters' }, { status:500 });
  const response = NextResponse.json({ ok:true });
  response.cookies.set(sessionCookie, issueSession(body.data.email), { httpOnly:true, secure:process.env.NODE_ENV === 'production', sameSite:'lax', path:'/', maxAge:60*60*24*7 });
  return response;
}
