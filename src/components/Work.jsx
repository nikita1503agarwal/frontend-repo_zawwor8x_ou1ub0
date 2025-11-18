import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Monochrome Commerce',
    desc: 'Headless storefront with ultra-fast transitions, crisp typographic scale, and pixel-perfect product grids.',
    role: 'Lead Frontend · React, Tailwind, Framer',
  },
  {
    title: 'Gridfolio',
    desc: 'Portfolio generator using modular geometric layouts and micro-interactions tuned for clarity and impact.',
    role: 'Design + Build · Next.js, Radix, Spline',
  },
  {
    title: 'Data Canvas',
    desc: 'Analytical dashboard with motion-driven state changes and high-contrast visual language.',
    role: 'Frontend · React, D3, Motion',
  },
]

function Work() {
  return (
    <section id="work" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected Work</h2>
          <a href="#" className="text-sm text-white/60 hover:text-white transition">View all</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                </div>
                <span className="rounded-md border border-white/10 p-2 text-white/70 group-hover:text-white group-hover:border-white/20 transition">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <p className="mt-6 text-xs uppercase tracking-wide text-white/40">{p.role}</p>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ originX: 0 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
