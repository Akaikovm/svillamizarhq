const interests = [
  {
    title: 'Music',
    description: 'Music helps me keep rhythm and creativity; it often inspires solutions beyond the obvious.',
    icon: '🎸',
  },
  {
    title: 'Poker',
    description: 'I play poker tournaments and use it to sharpen decision-making under pressure and bankroll discipline.',
    icon: '♠',
  },
  {
    title: 'Gaming',
    description: 'Video games teach me about UX, immediate feedback, and designing immersive experiences.',
    icon: '🎮',
  },
  {
    title: 'Systems Engineering',
    description: 'End-to-end view: from code to infrastructure and processes that scale.',
    icon: '⚙️',
  },
]

export function BeyondCode() {
  return (
    <section id="beyond" className="py-20 sm:py-24 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          Beyond <span className="section-title-accent">code</span>
        </h2>
        <p className="section-subtitle">
          Musician, poker player, gamer, and systems engineer. These facets shape how I approach software.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-900/50 p-6 text-center sm:text-left shadow-sm hover:shadow-xl dark:hover:shadow-glow/20 hover:-translate-y-0.5 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300"
            >
              <span className="text-3xl" role="img" aria-hidden>
                {item.icon}
              </span>
              <h3 className="mt-3 font-semibold text-surface-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
