import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import rabiaPortrait from "../../rabia-ramzan.webp";
import airDotsCampaign from "@/assets/work/air-dots-campaign.jpg";
import hafizBilalRealEstate from "@/assets/work/hafiz-bilal-real-estate.jpg";
import pizzaHouseSocial from "@/assets/work/pizza-house-social.jpg";
import rabiRoastCafe from "@/assets/work/rabi-roast-cafe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rabia Ramzan — Graphic & UI/UX Designer" },
      { name: "description", content: "Portfolio of Rabia Ramzan, a graphic and UI/UX designer creating visual identities and intuitive digital experiences." },
      { property: "og:title", content: "Rabia Ramzan — Graphic & UI/UX Designer" },
      { property: "og:description", content: "Logo, branding, social media, print and UI/UX design by Rabia Ramzan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["Contact", "#contact"],
] as const;

const SERVICES = [
  { t: "Logo Design", d: "Distinctive logo concepts that translate a brand story into a memorable visual mark.", bg: "bg-lavender", g: "◉" },
  { t: "Social Media Design", d: "Clean, cohesive social visuals designed to make a business easy to recognise at a glance.", bg: "bg-lime", g: "#" },
  { t: "Branding & Print", d: "Identity-led brand assets and visiting cards that make a strong first impression.", bg: "bg-blush", g: "✦" },
  { t: "UI/UX & Website Design", d: "Intentional interfaces and high-contrast website concepts built around clarity and usability.", bg: "bg-sky", g: "▭" },
];

const EXPERIENCE = [
  { role: "Graphic Designer", org: "Codrithm Team", date: "Current", d: "Creating graphic design work as part of the Codrithm team." },
  { role: "Graphic Design Mentor & Instructor", org: "Brandu / Brandu Online", date: "Current", d: "Mentoring graphic design students and teaching graphic design online." },
  { role: "Design Intern", org: "Learning with Earning & Sofwire", date: "Internships", d: "Completed a two-year internship with Learning with Earning and a three-month UI/UX design internship at Sofwire." },
];

const TESTIMONIALS = [
  {
    quote: "She is a very talented designer, and her work is outstanding. She pays close attention to every detail, ensuring each design feels thoughtful and complete.",
    source: "Client feedback",
    approved: true,
  },
  {
    quote: "Rabia understood the direction we wanted right away and turned it into a design that felt polished, considered and true to our brand.",
    source: "Testimonial draft",
    approved: false,
  },
  {
    quote: "The process felt smooth from start to finish. Every detail and revision was handled thoughtfully, and the final design felt complete.",
    source: "Testimonial draft",
    approved: false,
  },
];

const WORK = [
  {
    t: "Rabi Roast Cafe",
    c: "Logo Design",
    d: "A warm, minimal logo mark created for a cafe identity.",
    image: rabiRoastCafe,
    alt: "Rabi Roast Cafe logo design",
    width: 4000,
    height: 4000,
  },
  {
    t: "Hafiz Bilal Real Estate",
    c: "Brand Identity",
    d: "A refined monogram concept for a real-estate brand.",
    image: hafizBilalRealEstate,
    alt: "Hafiz Bilal Real Estate monogram logo",
    width: 4000,
    height: 4000,
  },
  {
    t: "Pizza House",
    c: "Social Media Design",
    d: "A bold product-focused social creative for Pizza House.",
    image: pizzaHouseSocial,
    alt: "Pizza House social media post",
    width: 1080,
    height: 1350,
  },
  {
    t: "Air Dots Pro",
    c: "Campaign Mockup",
    d: "A product campaign visual presented in an outdoor advertising mockup.",
    image: airDotsCampaign,
    alt: "Air Dots Pro outdoor advertising campaign mockup",
    width: 736,
    height: 736,
  },
];

const CONTACT = {
  email: "rabiya.ramzan2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/rabia-ramzan1/",
};

const CONTACT_FIELDS = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "subject", label: "Project type", type: "text", required: false },
] as const;

function Chip({ children }: { children: string }) {
  return (
      <span className="inline-flex items-center gap-1.5 rounded-full border-2 bg-butter px-4 py-1.5 text-xs font-extrabold uppercase">
      ✳ {children}
    </span>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonial = TESTIMONIALS[testimonialIndex] ?? TESTIMONIALS[0];
  if (!testimonial) return null;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="site-header sticky top-0 z-50 border-b-2 bg-background">
        <div className="page-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:flex md:justify-between">
          <a href="#top" className="font-display text-3xl font-bold">Rabia</a>
          <nav className="hidden items-center gap-5 lg:gap-8 md:flex" aria-label="Main">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="font-semibold transition-colors hover:text-accent">{l}</a>
            ))}
          </nav>
          <Button asChild variant="portfolioOutline" className="hidden md:inline-flex"><a href="#contact">Let&apos;s Talk</a></Button>
          <Button
            variant="portfolioOutline" size="icon"
            className="h-11 w-11 shrink-0 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mnav"
            onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav id="mnav" aria-label="Mobile" className="border-t-2 px-5 py-3 md:hidden" onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}>
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="block py-2 text-lg font-semibold">{l}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="hero-section border-b-2 bg-lavender">
        <div className="page-container hero-grid grid items-center">
          <div className="hero-copy-block">
            <Chip>Graphic &amp; UI/UX Designer</Chip>
            <h1 className="hero-title mt-5 font-bold">
              <span className="block">Rabia Ramzan,</span>
              a <span className="hero-emphasis">creative designer.</span>
            </h1>
            <p className="hero-copy mt-6 max-w-lg leading-relaxed text-muted-foreground">
              I create impactful visual identities and intuitive digital experiences through graphic design and UI/UX design.
            </p>
            <div className="hero-actions mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Button asChild variant="portfolio" size="portfolio"><a href="#work">See My Work <ArrowRight /></a></Button>
              <Button asChild variant="portfolioOutline" size="portfolio"><a href="#contact">Let's Work Together</a></Button>
            </div>
          </div>
          <div className="hero-portrait relative mx-auto w-full">
            <div className="overflow-hidden rounded-t-full border-2 bg-lavender-deep shadow-hard-sm">
              <img src={rabiaPortrait} alt="Rabia Ramzan" width={640} height={640} fetchPriority="high" decoding="async" className="aspect-[4/5] w-full object-cover object-top" />
            </div>
            <div className="hero-badge portrait-badge absolute grid place-items-center rounded-full border-2 bg-butter text-center text-[11px] font-extrabold uppercase leading-tight shadow-hard-sm">
              Design with<br />purpose
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="page-container section-space">
        <div className="reveal text-center">
          <Chip>My Services</Chip>
          <h2 className="section-title mx-auto mt-5 max-w-3xl font-bold">
            Visual design services that help brands look consistent, distinctive and ready to grow.
          </h2>
        </div>
        <div className="section-content grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article key={s.t} className={`reveal service-card grid grid-cols-[auto_minmax(0,1fr)] gap-5 rounded-lg border-2 shadow-hard-sm ${s.bg}`}>
              <div className="service-icon grid shrink-0 place-items-center rounded-full border-2 bg-card text-2xl" aria-hidden="true">{s.g}</div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
                <h3 className="card-title font-bold">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t-2 bg-lavender">
        <div className="page-container section-space grid items-center gap-12 md:grid-cols-2">
          <div className="reveal relative">
            <img src={rabiaPortrait} alt="Rabia Ramzan, graphic and UI/UX designer" loading="lazy" decoding="async" width={640} height={640} className="about-portrait aspect-square w-full rounded-lg border-2 object-cover object-top shadow-hard-sm" />
            <div className="absolute -bottom-4 right-4 rounded-lg border-2 bg-card px-5 py-3 shadow-hard-sm">
              <div className="font-display text-4xl font-bold">2026</div>
              <div className="text-sm font-semibold text-muted-foreground">Portfolio</div>
            </div>
          </div>
          <div className="reveal">
            <Chip>About</Chip>
            <h2 className="section-title mt-5 font-bold">More About Me</h2>
            <p className="mt-6 text-lg leading-relaxed">
              I&apos;m Rabia, a creative designer focused on graphic design and UI/UX design. I help brands build impactful visual identities and intuitive digital experiences.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Strong branding and a smooth, user-friendly interface can make a meaningful difference in a competitive market.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[["2 years", "Learning with Earning"], ["3 months", "UI/UX internship"], ["2021–25", "Education"]].map(([n, l]) => (
                <div key={l} className="rounded-lg border-2 bg-card p-4 text-center">
                  <div className="font-display text-2xl font-bold">{n}</div>
                  <div className="text-xs font-semibold text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-lavender">
        <div className="page-container section-space grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="reveal md:sticky md:top-28 md:self-start">
            <Chip>Experience</Chip>
            <h2 className="section-title mt-5 font-bold">My Experience</h2>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
              Building practical experience across graphic design, UI/UX design, mentoring and creative instruction.
            </p>
            <Button asChild variant="portfolio" size="portfolio" className="mt-8">
              <a href="#contact">Discuss a project <ArrowRight /></a>
            </Button>
          </div>
          <ol className="relative border-l-2 pl-8">
            {EXPERIENCE.map((x) => (
              <li key={x.role} className="reveal relative pb-12 last:pb-0">
                <span className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-2 bg-lavender" />
                <span className="inline-block rounded-full border-2 bg-lime px-3 py-0.5 text-xs font-bold">{x.date}</span>
                <h3 className="mt-3 text-2xl font-bold">{x.role}</h3>
                <p className="font-semibold text-accent">{x.org}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{x.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonial-section border-b-2" aria-roledescription="carousel" aria-label="Testimonials">
        <div className="page-container section-space max-w-[900px] text-center">
          <Chip>Testimonials</Chip>
          <h2 className="sr-only">Testimonials</h2>
          <article className="reveal testimonial-quote mt-8 rounded-lg border-2 bg-card" aria-live="polite">
            <blockquote>
              <p className="quote-text font-display font-medium leading-snug">“{testimonial.quote}”</p>
            </blockquote>
            <footer className="mt-8 flex items-center justify-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full border-2 bg-butter font-bold" aria-hidden="true">
                {testimonial.approved ? "CF" : "TD"}
              </span>
              <div className="text-left">
                <p className="font-bold">{testimonial.source}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.approved ? "Shared client feedback" : "Replace with approved client feedback"}
                </p>
              </div>
            </footer>
          </article>
          <div className="mt-10 flex justify-center gap-3">
            <Button aria-label="Previous testimonial" title="Previous testimonial" variant="portfolioOutline" size="icon" className="h-11 w-11" onClick={() => setTestimonialIndex((testimonialIndex + TESTIMONIALS.length - 1) % TESTIMONIALS.length)}><ArrowLeft /></Button>
            <Button aria-label="Next testimonial" title="Next testimonial" variant="portfolioOutline" size="icon" className="h-11 w-11" onClick={() => setTestimonialIndex((testimonialIndex + 1) % TESTIMONIALS.length)}><ArrowRight /></Button>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="page-container section-space">
        <div className="reveal grid justify-items-center gap-5 text-center">
          <div className="min-w-0">
            <Chip>Portfolio</Chip>
            <h2 className="section-title mt-5 font-bold">Selected Work</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">A focused selection from Rabia&apos;s identity, social media and campaign design work.</p>
        </div>
        <div className="section-content grid items-start gap-x-8 gap-y-12 md:grid-cols-2">
          {WORK.map((w) => (
            <article key={w.t} className="work-card reveal group min-w-0">
              <div className="project-image aspect-[4/3] overflow-hidden rounded-lg border-2 bg-muted shadow-hard-sm">
                <img
                  src={w.image}
                  alt={w.alt}
                  width={w.width}
                  height={w.height}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-5 text-xs font-bold uppercase text-muted-foreground">{w.c}</p>
              <h3 className="work-card-title card-title mt-2 font-bold">{w.t}</h3>
              <p className="mt-2 text-muted-foreground">{w.d}</p>
            </article>
          ))}
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="border-t-2">
        <div className="page-container site-footer grid items-center gap-5 py-8 lg:flex lg:justify-between">
          <a href="#top" className="font-display text-2xl font-bold">Rabia</a>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Rabia Ramzan. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3 text-sm font-semibold">
            <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">Email</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
            <a href="#top" className="hover:text-accent">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const nextErrors: Record<string, string> = {};

    if (!values.name?.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email ?? "")) nextErrors.email = "Please enter a valid email.";
    if (!values.message?.trim() || values.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("idle");
      form.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }

    setStatus("success");
    form.reset();
  }

  const fieldClassName = "mt-2 w-full border-2 border-x-0 border-t-0 border-b-2 bg-card px-0 py-3 outline-none focus:shadow-hard-sm";

  return (
    <section id="contact" className="border-t-2 bg-lime">
      <div className="page-container section-space contact-layout grid gap-10">
        <div className="reveal">
          <Chip>Contact</Chip>
          <h2 className="section-title contact-title mt-5 font-bold">Have a Project in Mind? Let&apos;s Connect.</h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Whether you need a visual identity, social media design, print design or a UI/UX concept, I&apos;d love to hear about it.
          </p>
          <div className="mt-8 font-bold">
            <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">{CONTACT.email}</a>
          </div>
        </div>
        <form onSubmit={onSubmit} noValidate className="reveal contact-form" aria-label="Project enquiry form">
          {CONTACT_FIELDS.map((field) => (
            <div key={field.name} className="mb-5">
              <label htmlFor={field.name} className="text-sm font-bold">{field.label} {field.required && <span className="text-destructive" aria-hidden="true">*</span>}</label>
              <input id={field.name} name={field.name} type={field.type} required={field.required} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} className={fieldClassName} />
              {errors[field.name] && <p id={`${field.name}-error`} className="mt-1 text-sm text-destructive">{errors[field.name]}</p>}
            </div>
          ))}
          <div className="mb-6">
            <label htmlFor="message" className="text-sm font-bold">Message <span className="text-destructive" aria-hidden="true">*</span></label>
            <textarea id="message" name="message" rows={5} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className={fieldClassName} />
            {errors.message && <p id="message-error" className="mt-1 text-sm text-destructive">{errors.message}</p>}
          </div>
          <Button variant="portfolio" size="portfolio" type="submit">Send Message</Button>
          {status === "success" && <p role="status" className="mt-4 text-sm">Thanks for reaching out. Form delivery will be enabled when a secure endpoint is connected.</p>}
        </form>
      </div>
    </section>
  );
}
