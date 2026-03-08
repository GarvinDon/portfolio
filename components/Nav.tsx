'use client'

const links = [
  { href: '#hero', label: 'Hero' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#design-system', label: 'Design System' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' }
]

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-neutral-100">
      <nav className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-primary" />
          <span className="font-semibold tracking-tight">Adon</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <a href="#projects" className="px-3 py-1.5 rounded bg-primary text-white text-sm">
            View Projects
          </a>
        </div>
      </nav>
    </header>
  )
}
