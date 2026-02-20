import { SkillIcon } from './SkillIcon'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML/CSS', 'Redux', 'Zustand', 'React Query', 'Figma', 'ESLint', 'Storybook', 'React Testing Library', 'Cypress', 'Responsive Design'],
  },
  {
    title: 'Tools & more',
    items: ['Node.js', 'MongoDB', 'Docker', 'WordPress', 'npm', 'pnpm', 'Yarn', 'Git', 'REST APIs', 'GraphQL', 'Firebase', 'Vercel', 'Netlify', 'GitHub Actions', 'Cloudflare', 'Slack', 'Teams', 'Linear', 'Postman', 'Chrome DevTools', 'Cursor', 'Contentful', 'Mixpanel', 'Testing', 'CI/CD', 'Systems'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          Skills <span className="section-title-accent">+ stack</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with every day.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-6 sm:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-900/50 p-6 shadow-sm hover:shadow-xl dark:hover:shadow-glow/20 hover:-translate-y-0.5 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="font-semibold text-surface-900 dark:text-white mb-4 font-mono text-sm uppercase tracking-wider text-accent dark:text-accent-light">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-transparent hover:border-accent/30 dark:hover:border-accent/30 transition-colors duration-200"
                  >
                    <SkillIcon name={skill} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
