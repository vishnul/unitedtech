import Link from 'next/link';

const services = [
  { n: '01', title: 'Staffing', copy: 'Contract and direct-hire talent support shaped around your role, timeline, and team.' },
  { n: '02', title: 'Independent talent', copy: 'Specialized freelance professionals for defined projects and flexible capacity.' },
  { n: '03', title: 'Software development', copy: 'Practical web, application, automation, and integration work from discovery through delivery.' },
  { n: '04', title: 'Tools & products', copy: 'Purpose-built software tools for individuals and business teams, scoped with transparent terms.' },
];

export default function Home() {
  return <>
    <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">U</span><span>United Technologies<small>Frisco, Texas</small></span></Link><nav aria-label="Primary"><Link href="/#services">Services</Link><Link href="/about">About</Link><Link href="/policies">Policies</Link><Link href="/contact">Contact</Link></nav><Link className="button button-small" href="/contact">Start a conversation</Link></header>
    <main>
      <section className="hero"><div className="eyebrow"><span />People, software, forward motion</div><h1>Build the team.<br/><em>Ship the idea.</em></h1><p className="hero-copy">United Technologies helps businesses and individuals move important work forward through staffing, independent talent, custom software, and purpose-built digital tools.</p><div className="hero-actions"><Link className="button" href="/contact">Discuss your project <span>↗</span></Link><Link className="text-link" href="#services">Explore services <span>↓</span></Link></div><div className="location-note"><span className="pin">●</span><div><strong>Based in Frisco, Texas</strong><p>Serving clients through clearly scoped, agreement-based engagements.</p></div></div></section>
      <section className="services" id="services"><div className="section-intro"><p className="kicker">What we do</p><h2>One partner for the talent and technology behind your next move.</h2></div><div className="service-grid">{services.map((s)=><article className="service-card" key={s.n}><span className="service-number">{s.n}</span><h3>{s.title}</h3><p>{s.copy}</p><Link href="/services">Learn more <span>↗</span></Link></article>)}</div></section>
      <section className="process"><div><p className="kicker light">How engagements work</p><h2>Clear before work begins.</h2></div><ol><li><span>01</span><div><strong>Tell us what you need</strong><p>Share the role, project, product, or business outcome.</p></div></li><li><span>02</span><div><strong>Receive a written scope</strong><p>We document deliverables, pricing, timing, and acceptance terms.</p></div></li><li><span>03</span><div><strong>Approve and begin</strong><p>Work starts only after both parties accept the agreement.</p></div></li></ol></section>
    </main>
    <footer><div className="brand footer-brand"><span className="brand-mark">U</span><span>United Technologies<small>People + Software</small></span></div><p>Professional staffing and software services from Frisco, Texas.</p><div><Link href="/contact">Contact</Link><Link href="/policies">Policies</Link></div></footer>
  </>;
}
