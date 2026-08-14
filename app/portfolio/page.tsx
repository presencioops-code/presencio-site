import Link from "next/link";
import { ArrowRight, Check, Globe2, Star } from "lucide-react";

const sites = [
  { slug: "apexflow-plumbing", type: "PLUMBING", name: "ApexFlow Plumbing", location: "Dallas, TX", text: "Emergency plumbing website focused on calls, quote requests and service-area coverage." },
  { slug: "summit-ridge-roofing", type: "ROOFING", name: "Summit Ridge Roofing", location: "Phoenix, AZ", text: "Trust-first roofing experience built around inspections, financing and project enquiries." },
  { slug: "blackline-auto-detail", type: "AUTO DETAILING", name: "Blackline Auto Detail", location: "Tampa, FL", text: "Premium detailing site designed to showcase packages and drive bookings." },
  { slug: "northstar-hvac", type: "HVAC", name: "Northstar HVAC", location: "Charlotte, NC", text: "Conversion-focused HVAC website with service coverage and rapid-contact CTAs." },
];

export default function Portfolio() {
  return <main className="portfolio-page">
    <nav className="portfolio-nav"><Link href="/" className="brand"><img src="/logo.svg" className="site-logo" alt="Presencio" /></Link><Link href="/" className="button button-primary">Back to Presencio <ArrowRight size={16}/></Link></nav>
    <section className="portfolio-hero"><div className="container"><div className="eyebrow">PRESENCIO PORTFOLIO</div><h1>Websites designed to <span>win the local customer.</span></h1><p>Explore complete examples of the websites Presencio builds for service businesses. Each concept is structured around trust, clarity and conversion.</p></div></section>
    <section className="section"><div className="container"><div className="portfolio-detail-grid">{sites.map((site, i) => <Link href={`/portfolio/${site.slug}`} className="portfolio-showcase" key={site.slug}><div className={`showcase-screen showcase-${i+1}`}><div className="showcase-top"><i/><i/><i/><span>{site.name.toLowerCase().replaceAll(" ", "")}.com</span></div><div className="showcase-copy"><small>{site.type}</small><strong>{site.name.split(" ")[0]}<br/><em>{site.name.split(" ").slice(1).join(" ")}</em></strong><span>Get a Free Quote →</span></div></div><div className="showcase-info"><div><b>{site.type}</b><small>{site.location}</small></div><h2>{site.name}</h2><p>{site.text}</p><span className="text-link">View full website <ArrowRight size={15}/></span></div></Link>)}</div></div></section>
    <section className="final-cta"><div className="container"><div className="eyebrow light">YOUR BUSINESS NEXT</div><h2>Want a site like these?</h2><p>We'll build around your services, service area and the action you want customers to take.</p><Link href="/#audit" className="button button-light">Get a free business audit <ArrowRight size={17}/></Link></div></section>
  </main>;
}
