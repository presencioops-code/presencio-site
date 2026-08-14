import { ArrowRight, Check, ChevronDown, Globe2, MessageSquareText, Play, ShieldCheck, Star, TrendingUp, Zap } from "lucide-react";

const industries = ["Plumbing", "Roofing", "HVAC", "Electrical", "Auto Services", "Landscaping", "Cleaning", "Contractors", "Pest Control", "Towing"];

const services = [
  {
    icon: Globe2,
    label: "01 — WEBSITES",
    title: "A website that turns visitors into customers.",
    text: "Professional, mobile-first websites built for local businesses that need more calls, quote requests and booked jobs.",
    points: ["Custom design", "Mobile optimized", "Quote & contact forms", "Call & WhatsApp buttons", "Google Maps + basic SEO", "Lead capture & CRM ready"],
    price: "From $399",
    note: "One-time setup"
  },
  {
    icon: Star,
    label: "02 — REPUTATION",
    title: "Turn great customer experiences into stronger Google reputation.",
    text: "Automate the repetitive parts of asking for reviews while keeping your team in control when a customer needs a human response.",
    points: ["Automated review requests", "Follow-up reminders", "Review monitoring", "Response assistance", "Reputation reporting", "Human-in-the-loop workflows"],
    price: "$250/mo",
    note: "Managed reputation"
  }
];

const steps = [
  { number: "01", title: "Get found", text: "A professional website gives local customers a clear place to learn about you and take action." },
  { number: "02", title: "Look trustworthy", text: "Strong design, real reviews and clear information help prospects feel confident choosing you." },
  { number: "03", title: "Capture the lead", text: "Calls, quote forms and contact options make it easy for interested customers to reach you." },
  { number: "04", title: "Build the reputation", text: "Automated review workflows help you consistently turn completed jobs into customer feedback." }
];

const faqs = [
  { q: "What does Presencio do?", a: "Presencio helps local businesses improve the two parts of their online presence that directly affect growth: getting a professional website that captures demand and building a stronger customer reputation." },
  { q: "How much does a website cost?", a: "Our local-business websites start at $399 for a one-time setup. The exact price depends on the pages, content and functionality your business needs." },
  { q: "What is Website Care?", a: "Website Care & Lead Management is an optional monthly service from $59/month covering platform care, SSL, minor updates, forms, lead notifications and basic automation support." },
  { q: "How much is reputation management?", a: "Managed reputation starts at $250/month. We tailor the workflow around your business and existing systems rather than forcing you into a complicated setup." },
  { q: "Do I need to use a new CRM?", a: "Not necessarily. We can work around the tools you already use where appropriate, including CRM, forms and automation systems." },
  { q: "Can I see an example before buying?", a: "Yes. We build interactive demo websites for local-business industries so you can see what a stronger online presence could look like before making a decision." }
];

export default function Home() {
  return <main>
    <nav className="nav"><a href="#" className="brand"><img src="/logo.svg" className="site-logo" alt="Presencio" /></a><div className="nav-links"><a href="#services">Services</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div><a href="#audit" className="nav-cta">Free business audit <ArrowRight size={16} /></a></nav>

    <section className="hero">
      <div className="hero-glow" />
      <div className="container hero-grid"><div className="hero-copy">
        <div className="eyebrow"><span className="pulse" /> Websites + reputation management for local businesses</div>
        <h1>Get found. <span>Look trustworthy.</span> Capture more customers.</h1>
        <p className="hero-sub">Presencio builds professional websites and reputation systems that help local businesses turn online attention into calls, quote requests and real customers.</p>
        <div className="hero-actions"><a href="#audit" className="button button-primary">Get a free business audit <ArrowRight size={18} /></a><a href="#services" className="button button-secondary"><Play size={17} fill="currentColor" /> See what we build</a></div>
        <div className="trust-row"><div><ShieldCheck size={17} /> Built for local businesses</div><div><Zap size={17} /> Fast, practical implementation</div></div>
      </div>
      <div className="growth-card"><div className="growth-card-top"><span>THE PRESENCIO GROWTH SYSTEM</span><span className="status"><span className="status-dot" /> Live</span></div><div className="growth-flow"><div className="flow-item active"><Globe2 size={21} /><div><strong>Website</strong><small>Get found & capture demand</small></div></div><div className="flow-line" /><div className="flow-item"><MessageSquareText size={21} /><div><strong>Leads</strong><small>Calls, forms & enquiries</small></div></div><div className="flow-line" /><div className="flow-item"><Star size={21} /><div><strong>Reputation</strong><small>More customer feedback</small></div></div></div><div className="growth-result"><div><span>THE GOAL</span><strong>More calls.</strong></div><div><span>THE GOAL</span><strong>More trust.</strong></div><div><span>THE GOAL</span><strong>Less chasing.</strong></div></div></div>
      </div><div className="scroll-cue">Explore the Presencio system <span>↓</span></div>
    </section>

    <section className="logo-strip"><div className="container"><span>BUILT FOR LOCAL BUSINESSES</span><div className="industry-list">{industries.map(x => <span key={x}>{x}</span>)}</div></div></section>

    <section className="section" id="services"><div className="container"><div className="section-heading"><div className="eyebrow">WHAT WE DO</div><h2>Two services. <span>One growth system.</span></h2><p>Start with the thing your business needs most. Then add the next layer when it makes sense.</p></div><div className="service-grid">{services.map(({ icon: Icon, label, title, text, points, price, note }) => <article className="service-card" key={label}><div className="service-icon"><Icon size={23} /></div><div className="eyebrow">{label}</div><h3>{title}</h3><p>{text}</p><div className="service-points">{points.map(point => <span key={point}><Check size={14} /> {point}</span>)}</div><div className="service-price"><strong>{price}</strong><span>{note}</span></div><a href="#audit" className="text-link">Talk to Presencio <ArrowRight size={15} /></a></article>)}</div></div></section>

    <section className="section care-section"><div className="container care-card"><div><div className="eyebrow">OPTIONAL MONTHLY CARE</div><h2>Website Care & <span>Lead Management.</span></h2><p>Keep your site running while Presencio helps you stay on top of the leads it generates.</p></div><div className="care-features"><div><Check size={16} /> Hosting & SSL</div><div><Check size={16} /> Minor website updates</div><div><Check size={16} /> Forms & lead notifications</div><div><Check size={16} /> CRM & basic automation support</div><strong>$59/month <small>starting price</small></strong></div></div></section>

    <section className="section dark-section" id="how-it-works"><div className="container"><div className="section-heading dark-heading"><div className="eyebrow light">THE CUSTOMER JOURNEY</div><h2>Get found. Look trustworthy. <span>Capture more.</span></h2><p>Presencio connects the pieces of your online presence instead of treating your website and reputation as separate projects.</p></div><div className="steps">{steps.map(step => <article className="step-card dark-step" key={step.number}><div className="step-number">{step.number}</div><div className="step-icon"><Check size={20} /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

    <section className="section demo-section"><div className="container demo-grid"><div><div className="eyebrow">INTERACTIVE DEMOS</div><h2>See what a better online presence could look like.</h2><p>We build realistic demo websites for local businesses so you can judge the work before committing. No fake clients. No fake results. Just a working example.</p><a href="#audit" className="button button-primary">Request a demo <ArrowRight size={17} /></a></div><div className="demo-window"><div className="demo-browser"><span /><span /><span /><strong>apexflowplumbing.com — Demo</strong></div><div className="demo-content"><div className="demo-tag">INTERACTIVE DEMO — NOT A REAL CLIENT</div><h3>ApexFlow<br /><span>Plumbing</span></h3><p>Fast, reliable plumbing for Dallas homeowners.</p><div className="demo-buttons"><span>Get a Free Quote</span><span>Call Now</span></div><div className="demo-review"><Star size={14} fill="currentColor" /> 4.9 Google rating · 148 reviews</div></div></div></div></section>

    <section className="section dark-section" id="pricing"><div className="container pricing-inner"><div><div className="eyebrow light">SIMPLE PRICING</div><h2>Start small. <span>Build from there.</span></h2><p className="dark-copy">The website gets you a stronger digital storefront. Care keeps it running. Reputation management builds the trust that helps turn prospects into customers.</p></div><div className="pricing-stack"><div><span>WEBSITE</span><strong>$399+</strong><small>one-time setup</small></div><div><span>WEBSITE CARE</span><strong>$59/mo</strong><small>starting price</small></div><div><span>REPUTATION</span><strong>$250/mo</strong><small>managed service</small></div></div></div></section>

    <section className="section audit-section" id="audit"><div className="container audit-card"><div className="audit-copy"><div className="eyebrow">FREE BUSINESS AUDIT</div><h2>Let's find the easiest growth opportunities in your online presence.</h2><p>We'll look at your website, Google presence and customer journey, then show you what we'd improve first.</p><div className="audit-points"><span><Check size={15} /> Website & online-presence check</span><span><Check size={15} /> Reputation opportunity check</span><span><Check size={15} /> Practical growth recommendations</span><span><Check size={15} /> No obligation</span></div></div><form className="audit-form" action="https://formspree.io/f/mwlelzqz" method="POST"><input type="hidden" name="_subject" value="New Presencio Free Business Audit Request" /><label>Business name<input name="business" placeholder="Your business" required /></label><label>Your name<input name="name" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@business.com" required /></label><label>Website<input name="website_url" placeholder="https://yourbusiness.com" /></label><label>Google Business Profile<input name="google" placeholder="Paste your Google profile link" /></label><input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} /><button className="button button-primary" type="submit">Request my free audit <ArrowRight size={17} /></button><small>Your information is sent securely.</small></form></div></section>

    <section className="section faq-section" id="faq"><div className="container faq-grid"><div><div className="eyebrow">FAQ</div><h2>Questions, answered.</h2><p>Still unsure? Start with the free business audit and we'll make the recommendation specific to your business.</p></div><div className="faq-list">{faqs.map(f => <details key={f.q}><summary>{f.q}<ChevronDown size={18} /></summary><p>{f.a}</p></details>)}</div></div></section>

    <section className="final-cta"><div className="container"><div className="eyebrow light">READY TO GROW?</div><h2>Your business deserves an online presence that works as hard as you do.</h2><p>Get a professional website, build customer trust and make it easier for the next customer to choose you.</p><a href="#audit" className="button button-light">Get your free business audit <ArrowRight size={18} /></a></div></section>
    <footer><div className="container footer-inner"><div className="brand"><img src="/logo.svg" className="site-logo footer-logo" alt="Presencio" /></div><p>Websites + reputation management for local businesses.</p><span>© 2026 Presencio</span></div></footer>
  </main>;
}
