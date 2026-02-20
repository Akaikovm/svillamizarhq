export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden"
    >
      <div
        className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-accent/15 dark:bg-accent/20 blur-3xl pointer-events-none select-none"
        aria-hidden
      />
      <div
        className="absolute bottom-1/3 -left-20 w-56 h-56 rounded-full bg-accent/10 dark:bg-accent/15 blur-3xl pointer-events-none select-none"
        aria-hidden
      />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <p
            className="text-accent dark:text-accent-light font-mono text-sm font-medium mb-4 animate-fade-in opacity-0"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Hi, I'm
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-slide-up opacity-0 text-surface-900 dark:text-white"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Sebastian Villamizar
          </h1>
          <p
            className="mt-4 text-xl sm:text-2xl font-medium animate-slide-up opacity-0 max-w-2xl text-slate-600 dark:text-slate-300"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            Software Engineer
          </p>
          <p
            className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl animate-slide-up opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            I build robust web applications with React and TypeScript. From Venezuela, passionate about music, gaming, and clean code.
          </p>
          <div
            className="relative mt-10 flex flex-wrap gap-4 animate-slide-up opacity-0"
            style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-accent text-white font-medium hover:bg-accent-dark dark:hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50 dark:ring-offset-surface-950 shadow-lg hover:shadow-glow"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:border-accent hover:text-accent dark:hover:border-accent-light dark:hover:text-accent-light transition-all duration-200 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50 dark:ring-offset-surface-950 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div
          className="relative order-1 lg:order-2 mt-0 mb-8 lg:mb-0 lg:mt-0 lg:flex-shrink-0 flex justify-center animate-slide-up opacity-0"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden ring-2 sm:ring-4 ring-accent/40 dark:ring-accent/50 shadow-xl shadow-accent/15 dark:shadow-glow/20 bg-surface-200 dark:bg-surface-800 flex-shrink-0 aspect-square max-w-[85vw] sm:max-w-none">
            <img
              src="/sebastian_villamizar_virtualmind.png"
              alt="Sebastian Villamizar"
              className="w-full h-full object-cover object-top"
              width={224}
              height={224}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
