import {
  Braces,
  Code2,
  Layers3,
  Palette,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const emailAddress = 'jharavi737@gmail.com'

export const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export const skills: {
  title: string
  icon: LucideIcon
  items: string[]
}[] = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js'],
  },
  {
    title: 'Styling',
    icon: Palette,
    items: ['Tailwind CSS', 'CSS Modules', 'Responsive Design'],
  },
  {
    title: 'State & data',
    icon: Layers3,
    items: ['Redux', 'Redux Toolkit', 'REST APIs'],
  },
  {
    title: 'Tools & craft',
    icon: Braces,
    items: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools'],
  },
  {
    title: 'CMS & quality',
    icon: Zap,
    items: ['Adobe Experience Manager', 'Lighthouse', 'Core Web Vitals'],
  },
]

export type Project = {
  number: string
  name: string
  type: string
  description: string
  tags: string[]
  visual: string
  mark: string
  liveDemo?: string
  image?: string
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'PureBuy',
    type: 'E-commerce application',
    description:
      'Built a responsive e-commerce app with reusable components, product listings, pagination, authentication, and cart functionality.',
    tags: ['React', 'Redux', 'Firebase', 'Stripe Payments'],
    visual: 'velora',
    mark: 'P.',
    liveDemo: 'https://purebuy.onrender.com/',
    image: '/purebuy-storefront.webp',
  },
  {
    number: '02',
    name: 'Signal / 01',
    type: 'Analytics dashboard',
    description:
      'A clear-eyed dashboard concept turning a dense set of KPIs into something teams can read at a glance.',
    tags: ['React', 'Data viz', 'Responsive UI'],
    visual: 'signal',
    mark: 'S.',
  },
  {
    number: '03',
    name: 'Forma',
    type: 'AI resume builder',
    description:
      'A calm, structured editing experience for shaping work history into a sharper professional story.',
    tags: ['React', 'TypeScript', 'Product UI'],
    visual: 'forma',
    mark: 'F.',
  },
  {
    number: '04',
    name: 'UIverse Portfolio',
    type: 'Portfolio website',
    description:
      'Developed a responsive portfolio with reusable sections for projects, skills, education, and profile information.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    visual: 'folio',
    mark: 'UI.',
    liveDemo: 'https://ui-verse-ravikumar-s-portfolio.vercel.app/',
    image: '/uiverse-portfolio.webp',
  },
]

export const strengths = [
  {
    icon: Layers3,
    title: 'Responsive by nature',
    description:
      'Layouts that feel intentional on every screen, not just scaled down to fit.',
  },
  {
    icon: Braces,
    title: 'Thoughtful code',
    description:
      'Readable, maintainable interfaces with the small details handled properly.',
  },
  {
    icon: Zap,
    title: 'Performance minded',
    description:
      'Fast, accessible experiences built with a focus on what people actually need.',
  },
]
