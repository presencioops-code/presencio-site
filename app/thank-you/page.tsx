import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ThankYou() {
  return <main className="thank-you-page"><div className="thank-you-card"><img src="/logo.svg" className="site-logo" alt="Presencio"/><div className="thank-icon"><CheckCircle2 size={30}/></div><div className="eyebrow">AUDIT REQUEST RECEIVED</div><h1>Thanks — we’ll be in touch.</h1><p>Your review audit request has been sent securely to the Presencio team. We’ll review the information and get back to you.</p><Link href="/" className="button button-primary">Back to Presencio <ArrowRight size={17}/></Link></div></main>;
}