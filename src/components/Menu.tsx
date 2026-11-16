import { useEffect, useState } from 'react'
import { navLinks } from '../data/site'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <button
        className={`menu-control${isOpen ? ' is-open' : ''}`}
        type="button"
        aria-controls="site-menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <div className={`menu-scrim${isOpen ? ' is-visible' : ''}`} aria-hidden="true" onClick={closeMenu} />
      <aside className={`site-menu${isOpen ? ' is-open' : ''}`} id="site-menu" aria-hidden={!isOpen}>
        <p className="menu-kicker">Independent practice</p>
        <nav aria-label="Site navigation">
          {navLinks.map(([label, href]) => <a href={href} key={label} onClick={closeMenu}>{label}</a>)}
        </nav>
        <a className="menu-email" href="mailto:hello@example.com" onClick={closeMenu}>EMAIL THE STUDIO ↗</a>
      </aside>
    </>
  )
}
