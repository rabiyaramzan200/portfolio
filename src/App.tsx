import { ArrowDownRight, ArrowUpRight, Dribbble, Instagram, Linkedin } from 'lucide-react'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from './components/Badge'
import { Faq } from './components/Faq'
import { Menu } from './components/Menu'
import { Portrait } from './components/Portrait'
import { ProjectPreview } from './components/ProjectPreview'
import { navLinks, projects, services, testimonials } from './data/site'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

function usePageMotion(root: React.RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !root.current) return
    const ctx = gsap.context(() => {
      gsap.timeline().from('.hero-badge', { y: -46, rotate: -3, opacity: 0, duration: 1.05, ease: 'power3.out' })
        .from('.hero-title span', { yPercent: 115, stagger: 0.07, duration: 0.85, ease: 'power4.out' }, '-=0.64')
        .from('.hero-support > *', { opacity: 0, y: 10, stagger: 0.12, duration: 0.45 }, '-=0.38')

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.from(element, { y: 32, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } })
      })
      gsap.from('.service-row', { opacity: 0, y: 24, stagger: 0.09, duration: 0.65, ease: 'power3.out', scrollTrigger: { trigger: '#services', start: 'top 72%', once: true } })
      gsap.from('.project-card', { opacity: 0, y: 50, stagger: 0.14, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '#portfolio', start: 'top 72%', once: true } })
      gsap.from('.testimonial-card', { opacity: 0, y: 28, stagger: 0.1, duration: 0.65, ease: 'power3.out', scrollTrigger: { trigger: '#testimonials', start: 'top 72%', once: true } })
    }, root)
    return () => ctx.revert()
  }, [root])
}

export default function App() {
  const root = useRef<HTMLElement>(null)
  usePageMotion(root)

  return (
    <main ref={root}>
      <Menu />
      <section className="hero" aria-labelledby="hero-title">
        <a className="hero-mark" href="#about" aria-label="Jump to about section">B/</a>
        <div className="hero-radiance" aria-hidden="true" />
        <Badge className="hero-badge" />
        <h1 className="hero-title" id="hero-title"><span>DESIGNER</span></h1>
        <div className="hero-support"><p>INDEPENDENT<br />DESIGN PRACTICE</p><p>AVAILABLE FOR<br />SELECT COLLABORATIONS</p></div>
        <a href="#about" className="scroll-cue">SCROLL <ArrowDownRight size={16} /></a>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="section-heading-row reveal"><h2 id="about-title">About me</h2><p>A small, adaptable portfolio template for an independent creative.</p></div>
        <div className="about-content reveal"><Portrait /><p>I design expressive digital places for ideas worth lingering with. This is intentionally replaceable placeholder copy — add your own practice, values, and story before publishing.</p><a className="text-link" href="#contact">LET’S CONNECT <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="section services" id="services" aria-labelledby="services-title">
        <h2 className="reveal" id="services-title">Services</h2>
        <div className="service-list">
          {services.map(([number, name, description]) => <article className="service-row" key={name}><span>{number}</span><h3>{name}</h3><p>{description}</p><ArrowUpRight aria-hidden="true" /></article>)}
        </div>
      </section>

      <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-inner"><div className="portfolio-heading reveal"><h2 id="portfolio-title">Portfolio</h2><p>Selected visual studies. Replace these original assets with approved project work.</p></div><div className="project-grid">{projects.map((project) => <ProjectPreview key={project.id} project={project} />)}</div></div>
      </section>

      <section className="section testimonials" id="testimonials" aria-labelledby="testimonials-title">
        <h2 className="reveal" id="testimonials-title">What My<br />Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => item.type === 'metric' ? <article className="testimonial-card metric-card" key={`${item.value}-${index}`}><strong>{item.value}</strong><p>{item.label}</p></article> : <article className="testimonial-card quote-card" key={`${item.author}-${index}`}><div className="stars" aria-label="Example five star rating">★★★★★</div><blockquote>{item.quote}</blockquote><div className="author"><span aria-hidden="true">{item.author.charAt(0)}</span><p><b>{item.author}</b>{item.role}</p></div></article>)}
        </div>
      </section>

      <section className="section faq" id="faq" aria-labelledby="faq-title"><h2 className="reveal" id="faq-title">Frequently Asked<br />Questions</h2><Faq /></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="contact-panel reveal"><div><h2 id="contact-title">Work with<br />me<span>.</span></h2><a className="contact-link" href="mailto:hello@example.com">HELLO@EXAMPLE.COM <ArrowUpRight size={18} /></a></div><div className="contact-image"><Portrait label="Replace with an approved contact image" /><p>AVAILABLE FOR SELECTED<br />COLLABORATIONS</p></div></div></section>

      <footer className="footer"><div className="footer-top"><div className="footer-nav">{navLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div><div className="footer-meta"><p>THIS IS AN EDITABLE<br />PORTFOLIO TEMPLATE.</p><div><a href="#contact" aria-label="Instagram placeholder"><Instagram /></a><a href="#contact" aria-label="LinkedIn placeholder"><Linkedin /></a><a href="#contact" aria-label="Dribbble placeholder"><Dribbble /></a></div></div></div><div className="footer-talk"><span>Let’s</span><Badge className="footer-badge" /><span>talk.</span></div><div className="footer-bottom"><span>© 2026 YOUR NAME</span><span>MADE AS A REPLACEABLE DEMO</span></div></footer>
    </main>
  )
}
