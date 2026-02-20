const projects = [
  {
    title: 'Expressable',
    description: '1-on-1 online speech therapy platform. Live sessions from home, practice activities, and progress tracking. My current role.',
    href: 'https://www.expressable.com/es',
    external: true,
  },
  {
    title: 'ChipsFlow',
    description: 'Bankroll and performance tracker for poker tournaments. Manage stats and results as a tournament player.',
    href: 'https://chipsflow-f5729.web.app/',
    external: true,
  },
  {
    title: "PGG's 2026 FIFA World Cup Pool",
    description: 'World Cup pool app for FIFA 2026. Pick and track predictions with friends.',
    href: 'https://pggs26worldcup.web.app/',
    external: true,
  },
  {
    title: 'FV Realtor',
    description: 'Real estate website for a Florida realtor. Property listings and contact.',
    href: 'https://fv-realtor.web.app/',
    external: true,
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-24 px-4 sm:px-6 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-900/50 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          Projects <span className="section-title-accent">I've shipped</span>
        </h2>
        <p className="section-subtitle">
          A selection of recent work and side projects I've built.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target={project.external ? '_blank' : undefined}
              rel={project.external ? 'noopener noreferrer' : undefined}
              className="group block rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-surface-50 dark:bg-surface-800/50 p-6 hover:border-accent/60 dark:hover:border-accent/60 hover:shadow-xl dark:hover:shadow-glow/20 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50 dark:ring-offset-surface-950"
            >
              <h3 className="font-semibold text-surface-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-200">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                {project.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent dark:text-accent-light opacity-0 group-hover:opacity-100 transition-opacity">
                View project
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
