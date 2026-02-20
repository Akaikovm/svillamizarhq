export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800 pb-[max(2rem,env(safe-area-inset-bottom))] transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          © {year} Sebastian Villamizar · Built with React, Vite & Tailwind
        </p>
        <a
          href="#hero"
          className="text-sm text-slate-500 dark:text-slate-500 hover:text-accent dark:hover:text-accent-light transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50 dark:ring-offset-surface-950 rounded px-2 py-1"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
