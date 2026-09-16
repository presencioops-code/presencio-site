import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

const COOKIE = 'ps_session';
function sign(value: string) { return createHmac('sha256', process.env.AUTH_SECRET || 'development-only-secret').update(value).digest('hex'); }
export function issueSession(email: string) { return `${email}.${sign(email)}`; }
export function verifySession(token: string | undefined) {
  if (!token) return null;
  const [email, sig] = token.split('.');
  if (!email || !sig) return null;
  const expected = sign(email);
  try { if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null; } catch { return null; }
  return email;
}
export async function currentUser() { return verifySession((await cookies()).get(COOKIE)?.value); }
export async function requireUser() { const user = await currentUser(); if (!user) throw new Error('UNAUTHORIZED'); return user; }
export const sessionCookie = COOKIE;
