import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Beyond Code', href: '#beyond' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 dark:border-slate-800 bg-surface-50/90 dark:bg-surface-950/90 backdrop-blur-md transition-colors duration-300 pt-[env(safe-area-inset-top)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <a
            href="#hero"
            className="font-semibold font-mono text-lg tracking-tight text-surface-900 dark:text-white hover:text-accent dark:hover:text-accent-light transition-colors duration-200"
          >
            <span className="sm:hidden">SVillamizarHq</span>
            <span className="hidden sm:inline">SVillamizarHq</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50 dark:ring-offset-surface-950"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              className="md:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-surface-900 dark:hover:text-white -mr-1 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-surface-50 dark:bg-surface-950 px-4 py-3 flex flex-col gap-1 transition-colors duration-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light py-3 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
