import { getAge, BIRTHDAY } from '../utils/age'

export function About() {
  const age = getAge(BIRTHDAY.month, BIRTHDAY.day, BIRTHDAY.year)

  return (
    <section
      id="about"
      className="py-20 sm:py-24 px-4 sm:px-6 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-900/50 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          About <span className="section-title-accent">me</span>
        </h2>
        <p className="section-subtitle">
          Software Engineer focused on frontend and user experience.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-8 sm:gap-12">
          <div className="rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 bg-surface-50/50 dark:bg-surface-800/50 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-lg dark:hover:shadow-glow/20 transition-all duration-300">
            <h3 className="font-semibold text-surface-900 dark:text-white mb-2">Profile</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm <strong className="text-surface-900 dark:text-white">Sebastian Villamizar</strong>, {age}, from Venezuela. I specialize in React and TypeScript
              and enjoy designing clear, maintainable interfaces. Beyond code, I play drums and love gaming,
              which helps me think about user flows and memorable experiences.
            </p>
          </div>
          <div className="rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 bg-surface-50/50 dark:bg-surface-800/50 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-lg dark:hover:shadow-glow/20 transition-all duration-300">
            <h3 className="font-semibold text-surface-900 dark:text-white mb-2">Background</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Systems Engineer with experience in modern web development (React, Vite, Tailwind),
              APIs, and testing and deployment best practices. Always learning and keeping up with 2026 trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
