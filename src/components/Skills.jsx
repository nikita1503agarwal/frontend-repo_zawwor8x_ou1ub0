const skills = {
  Core: ['React', 'TypeScript', 'JavaScript (ESNext)', 'HTML5', 'CSS3', 'Accessibility'],
  UI: ['Tailwind', 'Radix', 'Framer Motion', 'Design Systems', 'Theming'],
  Tooling: ['Vite', 'Webpack', 'Babel', 'ESLint', 'Prettier'],
  Testing: ['Jest', 'Testing Library', 'Playwright'],
  Backend: ['Node', 'Express', 'REST', 'GraphQL (basic)'],
}

function Skills() {
  return (
    <section className="relative bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="rounded-xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="text-sm uppercase tracking-widest text-white/50">{group}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {list.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-white/30" /> {s}
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

export default Skills
