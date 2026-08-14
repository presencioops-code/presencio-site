import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, MapPin, Phone, ShieldCheck, Star, MessageSquare, CalendarCheck, Sparkles } from "lucide-react";

const data: Record<string, {
  type:string; name:string; city:string; phone:string; tagline:string; subhead:string; services:string[]; accent:string;
  promise:string; audience:string; heroLabel:string; proof:string[]; visualLabel:string; visualTitle:string; visualText:string;
}> = {
  "apexflow-plumbing": {
    type:"PLUMBING", name:"ApexFlow Plumbing", city:"Dallas, TX", phone:"(214) 555-0148",
    tagline:"Fast plumbing help. Right when you need it.",
    subhead:"From emergency leaks to water heaters and drains, get dependable plumbing service with a clear path to a quote.",
    promise:"Make it easy for a homeowner to find you, trust you and call.", audience:"Homeowners who need a plumber they can trust",
    services:["Emergency plumbing","Drain cleaning","Water heater repair","Leak detection","Fixture installation","Sewer services"], accent:"plumb",
    heroLabel:"DALLAS PLUMBING · 24/7 SERVICE", proof:["Clear service options","Fast response","Straightforward communication","Easy quote requests"],
    visualLabel:"EMERGENCY PLUMBING", visualTitle:"Leak? Drain? No hot water?", visualText:"Get the right service without searching through a complicated website."
  },
  "summit-ridge-roofing": {
    type:"ROOFING", name:"Summit Ridge Roofing", city:"Phoenix, AZ", phone:"(602) 555-0184",
    tagline:"A stronger roof starts with a better plan.",
    subhead:"Roof inspections, repairs and replacements for homeowners and property managers who want a clear recommendation before work begins.",
    promise:"Make a high-value roofing decision feel simple and trustworthy.", audience:"Homeowners and property managers",
    services:["Roof inspections","Roof replacement","Storm damage","Roof repairs","Commercial roofing","Financing options"], accent:"roof",
    heroLabel:"PHOENIX ROOFING · FREE ESTIMATES", proof:["Inspection-first approach","Clear recommendations","Project communication","Simple estimate requests"],
    visualLabel:"ROOF INSPECTION", visualTitle:"Know what your roof needs.", visualText:"Start with an inspection, understand your options and make the next decision with confidence."
  },
  "blackline-auto-detail": {
    type:"AUTO DETAILING", name:"Blackline Auto Detail", city:"Tampa, FL", phone:"(813) 555-0117",
    tagline:"Precision detailing. A finish worth showing off.",
    subhead:"Premium interior and exterior detailing, paint correction and ceramic protection for drivers who care about every detail.",
    promise:"Let the quality of the work sell before the customer ever calls.", audience:"Drivers who care about how their vehicle looks and feels",
    services:["Interior detailing","Exterior detail","Paint correction","Ceramic coating","Maintenance plans","Fleet detailing"], accent:"auto",
    heroLabel:"TAMPA AUTO DETAILING · PREMIUM FINISHES", proof:["Detail-focused service","Premium finish options","Easy booking enquiries","Maintenance plans"],
    visualLabel:"PAINT CORRECTION", visualTitle:"See the difference.", visualText:"A premium visual experience that makes the quality of the service impossible to miss."
  },
  "northstar-hvac": {
    type:"HVAC", name:"Northstar HVAC", city:"Charlotte, NC", phone:"(704) 555-0162",
    tagline:"Stay comfortable. All year long.",
    subhead:"Fast HVAC repair, installation and maintenance for homeowners who want dependable comfort without the runaround.",
    promise:"Turn urgent heating and cooling searches into confident calls.", audience:"Homeowners who need dependable heating and cooling",
    services:["AC repair","Heating service","HVAC installation","Maintenance plans","Indoor air quality","Emergency service"], accent:"hvac",
    heroLabel:"CHARLOTTE HVAC · FAST RESPONSE", proof:["Heating & cooling support","Clear service choices","Maintenance options","One-click calls"],
    visualLabel:"COMFORT CHECK", visualTitle:"Too hot? Too cold?", visualText:"Give customers a clear route from problem to professional help."
  }
};

export default async function PortfolioSite({ params }: { params: Promise<{ slug:string }> }) {
  const { slug } = await params;
  const site = data[slug] ?? data["apexflow-plumbing"];
  const phone = site.phone.replace(/[^0-9]/g, "");

  return <main className={`client-site ${site.accent}`}>
    <style>{`
      .client-site{--brand:#705cff;--brand-dark:#4d3fc5;--brand-soft:#f0eeff;--brand-glow:rgba(112,92,255,.18);--ink:#111217;--muted:#656b75;min-height:100vh;background:#fff;color:var(--ink);font-family:Arial,Helvetica,sans-serif}
      .plumb{--brand:#087f8c;--brand-dark:#075b65;--brand-soft:#e8f7f7;--brand-glow:rgba(8,127,140,.18);--surface:#f4fbfb}
      .roof{--brand:#d65a32;--brand-dark:#a83f20;--brand-soft:#fff0e9;--brand-glow:rgba(214,90,50,.18);--surface:#fffaf7}
      .auto{--brand:#c59a3d;--brand-dark:#8e6a20;--brand-soft:#f8f1df;--brand-glow:rgba(197,154,61,.16);--surface:#f8f7f4}
      .hvac{--brand:#2474d6;--brand-dark:#16519a;--brand-soft:#eaf3ff;--brand-glow:rgba(36,116,214,.18);--surface:#f6faff}
      .client-nav{height:76px;display:flex;align-items:center;justify-content:space-between;width:min(1180px,calc(100% - 40px));margin:auto}.client-brand{font-size:20px;font-weight:900;letter-spacing:-.05em;color:var(--ink)}.client-nav nav{display:flex;gap:26px;font-size:11px;font-weight:700;color:#707680}.client-nav nav a:hover{color:var(--brand)}
      .client-call,.client-primary,.client-secondary{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:11px;padding:13px 17px;font-size:11px;font-weight:900;transition:.2s}.client-call,.client-primary{background:var(--brand);color:#fff;box-shadow:0 10px 25px var(--brand-glow)}.client-call:hover,.client-primary:hover{background:var(--brand-dark);transform:translateY(-2px)}.client-secondary{border:1px solid #dedfe5;color:var(--ink);background:#fff}.client-secondary:hover{border-color:var(--brand);color:var(--brand);transform:translateY(-2px)}
      .client-hero{min-height:670px;padding:72px max(20px,calc((100% - 1180px)/2));display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;background:radial-gradient(circle at 80% 38%,var(--brand-glow),transparent 34%),linear-gradient(135deg,var(--surface),#fff 62%)}.client-kicker{display:flex;align-items:center;gap:7px;color:var(--brand);font-size:9px;font-weight:900;letter-spacing:.15em}.client-hero h1{font-size:clamp(48px,6vw,78px);line-height:.9;letter-spacing:-.075em;margin:20px 0}.client-hero-copy>p{max-width:570px;color:var(--muted);line-height:1.75;font-size:16px}.client-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.client-trust{display:flex;gap:18px;flex-wrap:wrap;margin-top:25px;color:#777d87;font-size:10px}.client-trust span{display:flex;align-items:center;gap:6px}.client-trust svg{color:var(--brand)}
      .client-visual{min-height:500px;border-radius:32px;position:relative;overflow:hidden;background:linear-gradient(145deg,#16181e,#30323b);box-shadow:0 35px 90px rgba(20,20,40,.18);padding:30px;display:flex;align-items:flex-end}.client-visual:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 25% 20%,var(--brand-glow),transparent 38%),linear-gradient(120deg,transparent 35%,rgba(255,255,255,.06));}.visual-card{position:relative;width:min(410px,100%);padding:28px;border-radius:20px;background:rgba(255,255,255,.96);box-shadow:0 25px 50px rgba(0,0,0,.22)}.visual-card>span{font-size:8px;letter-spacing:.15em;font-weight:900;color:var(--brand)}.visual-card strong{display:block;font-size:32px;line-height:.98;letter-spacing:-.055em;margin:14px 0 10px}.visual-card p{font-size:11px;line-height:1.6;color:#717782;margin:0}.visual-pill{display:inline-flex;align-items:center;gap:6px;margin-top:20px;padding:9px 11px;border-radius:999px;background:var(--brand-soft);color:var(--brand-dark);font-size:9px;font-weight:900}
      .client-strip{display:flex;justify-content:center;gap:55px;flex-wrap:wrap;padding:18px 20px;border-block:1px solid #e7e8ed;color:#858b94;font-size:8px;font-weight:900;letter-spacing:.13em}.client-container{width:min(1180px,calc(100% - 40px));margin:auto}.client-section{padding:105px 0}.client-heading{max-width:700px;margin-bottom:42px}.client-heading small,.client-proof small,.client-contact small,.growth-kicker{font-size:9px;letter-spacing:.16em;font-weight:900;color:var(--brand)}.client-heading h2,.client-proof h2,.client-contact h2{font-size:clamp(40px,4.5vw,60px);line-height:.95;letter-spacing:-.06em;margin:14px 0}.client-heading em,.client-proof em{font-style:normal;color:var(--brand)}.client-heading p,.client-contact p{color:#6c727d;line-height:1.7}.client-services{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.client-services article{padding:26px;border:1px solid #e1e2e8;border-radius:17px;min-height:200px;background:#fff;transition:.2s}.client-services article:hover{transform:translateY(-5px);border-color:var(--brand);box-shadow:0 20px 50px rgba(20,21,40,.08)}.client-services article>span{font-size:8px;color:#9a9ea8}.client-services h3{font-size:18px;letter-spacing:-.03em;margin:25px 0 8px}.client-services p{font-size:11px;color:#777d87;line-height:1.6}.client-services a{display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:900;color:var(--brand)}
      .journey{padding:95px 0;background:var(--brand-soft)}.journey-head{display:flex;justify-content:space-between;gap:30px;align-items:end;margin-bottom:35px}.journey-head h2{max-width:620px;font-size:clamp(36px,4vw,54px);line-height:.96;letter-spacing:-.06em;margin:12px 0 0}.journey-head p{max-width:360px;color:#6c727d;font-size:12px;line-height:1.6}.journey-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.journey-step{background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:18px;padding:22px;min-height:160px}.journey-step b{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:var(--brand);color:#fff;font-size:10px}.journey-step h3{font-size:15px;margin:18px 0 7px}.journey-step p{font-size:10px;line-height:1.55;color:#747a84}
      .client-proof{background:#111317;color:#fff;padding:105px 0}.client-proof-grid{display:grid;grid-template-columns:1fr 1fr;gap:90px;align-items:center}.client-proof h2{max-width:560px}.proof-list{display:grid;gap:11px}.proof-list>div{display:grid;grid-template-columns:32px 1fr;column-gap:10px;padding:18px;border:1px solid #292b35;border-radius:13px;background:#17191f}.proof-list svg{grid-row:span 2;width:24px;height:24px;padding:5px;border-radius:7px;background:var(--brand-soft);color:var(--brand)}.proof-list strong{font-size:12px}.proof-list span{font-size:10px;color:#9297a2;margin-top:4px}
      .reputation{padding:95px 0;background:#fff}.rep-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.rep-panel{border:1px solid #e2e3e8;border-radius:24px;padding:30px;background:linear-gradient(145deg,#fff,var(--surface));box-shadow:0 20px 55px rgba(20,21,35,.06)}.rep-score{display:flex;align-items:end;gap:16px}.rep-score strong{font-size:64px;line-height:.8;letter-spacing:-.07em}.rep-score span{font-size:12px;color:#707680}.stars{color:#e6a900;letter-spacing:2px;margin:18px 0}.rep-bars{display:grid;gap:9px}.rep-bars div{display:grid;grid-template-columns:70px 1fr 30px;align-items:center;gap:8px;font-size:9px;color:#777d87}.bar{height:7px;background:#eceef1;border-radius:99px;overflow:hidden}.bar i{display:block;height:100%;width:82%;background:var(--brand);border-radius:99px}.rep-note{font-size:10px;color:#858b94;line-height:1.6;margin-top:18px}.sample-badge{display:inline-block;padding:5px 8px;border-radius:99px;background:var(--brand-soft);color:var(--brand-dark);font-size:8px;font-weight:900;letter-spacing:.08em}
      .client-contact{padding:100px 0;background:#f5f5f8}.client-contact .client-container{display:grid;grid-template-columns:1fr 390px;gap:80px;align-items:center}.client-contact-card{background:#fff;border:1px solid #e0e1e7;border-radius:20px;padding:30px;display:flex;flex-direction:column;gap:13px;box-shadow:0 18px 55px rgba(20,21,35,.07)}.client-contact-card strong{font-size:17px}.client-contact-card>a:not(.client-primary){font-size:25px;font-weight:900;letter-spacing:-.04em}.contact-label{font-size:9px;color:#858b94;text-transform:uppercase;letter-spacing:.1em}.presencio-note{padding:14px 0;text-align:center;background:#111217;color:#aeb2bd;font-size:10px}.presencio-note a{color:#fff;font-weight:900}.client-footer{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:25px max(20px,calc((100% - 1180px)/2));background:#0b0c10;color:#fff;font-size:10px}.client-footer>div{font-weight:900;font-size:14px}.client-footer span{color:#858a95}.client-footer a{display:flex;align-items:center;gap:5px;color:#aaaeb8}
      @media(max-width:800px){.client-nav nav{display:none}.client-hero{grid-template-columns:1fr;padding-top:55px;padding-bottom:70px}.client-visual{min-height:360px}.client-services,.journey-grid,.rep-grid{grid-template-columns:1fr}.client-proof-grid,.client-contact .client-container{grid-template-columns:1fr;gap:45px}.client-footer{flex-direction:column;align-items:flex-start}.client-hero h1{font-size:50px}.client-strip{gap:20px}.journey-head{display:block}.journey-head p{margin-top:20px}}
    `}</style>

    <header className="client-nav">
      <Link href="/portfolio" className="client-brand">{site.name}</Link>
      <nav><a href="#services">Services</a><a href="#journey">How it works</a><a href="#reputation">Reputation</a><a href="#contact">Contact</a></nav>
      <a className="client-call" href={`tel:${phone}`}><Phone size={15}/> Call now</a>
    </header>

    <section className="client-hero">
      <div className="client-hero-copy">
        <div className="client-kicker"><MapPin size={13}/> {site.heroLabel}</div>
        <h1>{site.tagline}</h1>
        <p>{site.subhead}</p>
        <div className="client-actions"><a className="client-primary" href={`tel:${phone}`}>Call {site.phone} <Phone size={16}/></a><a className="client-secondary" href="#contact">Request a free quote <ArrowRight size={16}/></a></div>
        <div className="client-trust">{site.proof.slice(0,3).map(x=><span key={x}><ShieldCheck size={15}/>{x}</span>)}</div>
      </div>
      <div className="client-visual"><div className="visual-card"><span>{site.visualLabel}</span><strong>{site.visualTitle}</strong><p>{site.visualText}</p><div className="visual-pill"><Star size={12} fill="currentColor"/> Built around customer trust</div></div></div>
    </section>

    <section className="client-strip"><span>{site.city.toUpperCase()}</span><span>FREE ESTIMATES</span><span>CALL · QUOTE · BOOK</span><span>LOCAL SERVICE</span></section>

    <section className="client-section" id="services"><div className="client-container"><div className="client-heading"><small>WHAT WE DO</small><h2>Professional service. <em>Simple next step.</em></h2><p>Customers should never have to guess what you do or how to get started. Every service has a clear route to an enquiry.</p></div><div className="client-services">{site.services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>Clear service information, a professional first impression and an easy way to request help.</p><a href="#contact">Request this service <ArrowRight size={14}/></a></article>)}</div></div></section>

    <section className="journey" id="journey"><div className="client-container"><div className="journey-head"><div><small className="growth-kicker">THE CUSTOMER JOURNEY</small><h2>From local search to a confident enquiry.</h2></div><p>{site.promise} The experience is designed to remove friction at every step.</p></div><div className="journey-grid"><div className="journey-step"><b>01</b><h3>Get found</h3><p>Make the business easy to understand when a customer lands on the site.</p></div><div className="journey-step"><b>02</b><h3>Build trust</h3><p>Clear services, reputation cues and professional design reduce uncertainty.</p></div><div className="journey-step"><b>03</b><h3>Capture the lead</h3><p>Calls and quote requests stay visible and one click away.</p></div><div className="journey-step"><b>04</b><h3>Follow up</h3><p>Lead management and customer communication can continue after the enquiry.</p></div></div></div></section>

    <section className="reputation" id="reputation"><div className="client-container rep-grid"><div><span className="growth-kicker">REPUTATION BUILDS THE NEXT SALE</span><h2 className="client-heading" style={{marginTop:14,marginBottom:16,fontSize:'clamp(40px,4.5vw,60px)',lineHeight:.95,letterSpacing:'-.06em'}}>Great service should become visible trust.</h2><p style={{color:'#6c727d',lineHeight:1.7,maxWidth:520}}>A strong website gets the customer interested. A strong reputation helps them choose. The experience can continue after the job with review requests and reputation management.</p></div><div className="rep-panel"><span className="sample-badge">PORTFOLIO EXAMPLE</span><div className="rep-score" style={{marginTop:25}}><strong>4.9</strong><span>customer rating<br/>★★★★★</span></div><div className="stars">★★★★★</div><div className="rep-bars"><div><span>5 stars</span><span className="bar"><i/></span><b>82%</b></div><div><span>4 stars</span><span className="bar"><i style={{width:'12%'}}/></span><b>12%</b></div><div><span>3 stars</span><span className="bar"><i style={{width:'4%'}}/></span><b>4%</b></div></div><p className="rep-note">Sample reputation dashboard shown for portfolio purposes. Presencio can automate review requests, monitor reputation and help businesses turn happy customers into stronger social proof.</p></div></div></section>

    <section className="client-proof" id="why"><div className="client-container client-proof-grid"><div><small>WHY CUSTOMERS CHOOSE {site.name.toUpperCase()}</small><h2>Professional from the first click to the final check.</h2><p style={{color:'#9297a2',lineHeight:1.7,maxWidth:520}}>A good local-business website should do more than look good. It should answer questions, remove hesitation and make the next action obvious.</p></div><div className="proof-list">{site.proof.map(x=><div key={x}><Check/><strong>{x}</strong><span>Designed to make the customer experience easier.</span></div>)}</div></div></section>

    <section className="client-contact" id="contact"><div className="client-container"><div><small>READY TO GET STARTED?</small><h2>Let's take care of it.</h2><p>Tell us what you need and we'll help you figure out the next step.</p><div className="client-trust"><span><Clock3 size={15}/> Fast response</span><span><MessageSquare size={15}/> Clear communication</span></div></div><div className="client-contact-card"><span className="contact-label">Request a free quote</span><strong>{site.name}</strong><a href={`tel:${phone}`}>{site.phone}</a><span className="contact-label">Serving {site.city}</span><a className="client-primary" href={`tel:${phone}`}>Call now <Phone size={15}/></a><a className="client-secondary" href={`mailto:hello@${slug}.com?subject=Free quote request`}>Send an enquiry <ArrowRight size={15}/></a></div></div></section>

    <div className="presencio-note">Website experience by <Link href="/">Presencio</Link> · <Link href="/portfolio">View portfolio</Link></div>
    <footer className="client-footer"><div>{site.name}</div><span>Serving {site.city}</span><Link href="/portfolio"><ArrowLeft size={13}/> Back to portfolio</Link></footer>
  </main>;
}
