export type Project = {
  id: string
  title: string
  category: string
  description: string
  image: string
  tone: 'sand' | 'peach' | 'lime' | 'sky'
}

export const services = [
  ['01', 'Web Design', 'Focused websites with a sharp point of view, clear journeys, and an editorial sense of pace.'],
  ['02', 'UI/UX Design', 'Digital interfaces made to feel immediate and intuitive, from first wireframe to final interaction.'],
  ['03', 'Visual Identity', 'A visual language that gives the work a recognisable rhythm across every important touchpoint.'],
  ['04', 'Design Systems', 'Reusable building blocks that let a growing team make cohesive work without losing the details.'],
] as const

export const projects: Project[] = [
  { id: 'minimal-studio', title: 'MINIMAL STUDIO', category: 'Web design', description: 'Original visual study. Replace with approved project work.', image: '/images/projects/gallery-study.png', tone: 'sand' },
  { id: 'creative2studio', title: 'Creative2studio', category: 'Web design · Development', description: 'Original visual study. Replace with approved project work.', image: '/images/projects/culture-study.png', tone: 'peach' },
  { id: 'chloe-agency', title: 'Chloe Agency', category: 'Digital experience', description: 'Original visual study. Replace with approved project work.', image: '/images/projects/studio-study.png', tone: 'lime' },
  { id: 'hairstylist', title: 'The Hairstylist', category: 'Identity · Website', description: 'Original visual study. Replace with approved project work.', image: '/images/projects/hair-study.png', tone: 'sky' },
]

export const testimonials = [
  { type: 'quote', quote: '“A concise placeholder for a future client quote. Replace before publishing.”', author: 'Client name', role: 'Role / company' },
  { type: 'metric', value: '00%', label: 'Placeholder metric — replace with verified result.' },
  { type: 'metric', value: '0×', label: 'Placeholder metric — replace with verified result.' },
  { type: 'quote', quote: '“A clear placeholder for an editable testimonial, not a statement of client work.”', author: 'Client name', role: 'Role / company' },
  { type: 'quote', quote: '“Use this card for a real, approved testimonial when one is available.”', author: 'Client name', role: 'Role / company' },
] as const

export const faqs = [
  { question: 'What can I expect when working with you?', answer: 'A clear, collaborative process shaped around your goals. This placeholder answer is ready to be replaced with your own working process.' },
  { question: 'How do we get started?', answer: 'Start with a short introduction and a shared brief. Replace this placeholder with your preferred enquiry and discovery process.' },
  { question: 'Do you work with existing brands?', answer: 'Yes — this placeholder can explain how you adapt to established brand systems, project constraints, and internal teams.' },
  { question: 'What does a typical timeline look like?', answer: 'Timelines depend on scope. Replace this with your own availability and the stages you normally include.' },
] as const

export const navLinks = [
  ['ABOUT', '#about'],
  ['WORKS', '#portfolio'],
  ['SERVICES', '#services'],
  ['CONTACT', '#contact'],
] as const
