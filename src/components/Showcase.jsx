import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const dataSetA = [
  { id: 1, title: 'Card A1', metric: 92, tag: 'Performance' },
  { id: 2, title: 'Card A2', metric: 78, tag: 'Accessibility' },
  { id: 3, title: 'Card A3', metric: 88, tag: 'UX' },
  { id: 4, title: 'Card A4', metric: 96, tag: 'Code' },
]

const dataSetB = [
  { id: 1, title: 'Card B1', metric: 1200, tag: 'Users' },
  { id: 2, title: 'Card B2', metric: 320, tag: 'Sessions' },
  { id: 3, title: 'Card B3', metric: 72, tag: 'NPS' },
  { id: 4, title: 'Card B4', metric: 12, tag: 'Releases' },
]

function Showcase() {
  const [active, setActive] = useState('A')
  const data = active === 'A' ? dataSetA : dataSetB

  return (
    <section className="relative bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Panels & Data Binding</h2>
          <div className="inline-flex rounded-lg border border-white/15 p-1">
            {['A', 'B'].map((k) => (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`rounded-md px-4 py-2 text-sm transition ${active === k ? 'bg-white text-black' : 'text-white/70 hover:bg-white/10'}`}
              >
                Set {k}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div layout className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
            <div className="border-b border-white/10 p-4 text-sm text-white/70">Grid Component</div>
            <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {data.map((item) => (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-lg border border-white/10 bg-black p-4"
                  >
                    <p className="text-xs uppercase tracking-wide text-white/40">{item.tag}</p>
                    <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-2xl font-bold text-white">{item.metric}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div layout className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
            <div className="border-b border-white/10 p-4 text-sm text-white/70">Panel Transition</div>
            <div className="relative h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute inset-0 p-6"
                >
                  <h3 className="text-xl font-bold text-white">Dataset {active}</h3>
                  <p className="mt-2 text-white/70">Switching between data sets with animated panel transitions.</p>
                  <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
                    {data.map((d) => (
                      <li key={d.title} className="flex items-center gap-2">
                        <span className="h-px w-6 bg-white/30" /> {d.title} — <span className="text-white/60">{d.metric}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
