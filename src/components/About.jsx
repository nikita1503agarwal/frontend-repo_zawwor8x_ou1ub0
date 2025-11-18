function About() {
  return (
    <section id="about" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Principles</h2>
            <p className="mt-6 text-white/70">
              Minimal surface, maximal signal. I translate complex product needs into calm, precise interfaces—fast, accessible, and resilient.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-white/70">
              <li className="flex items-center gap-3"><span className="h-px w-6 bg-white/30" />Geometry over ornament</li>
              <li className="flex items-center gap-3"><span className="h-px w-6 bg-white/30" />Motion that serves meaning</li>
              <li className="flex items-center gap-3"><span className="h-px w-6 bg-white/30" />Accessible by default</li>
              <li className="flex items-center gap-3"><span className="h-px w-6 bg-white/30" />Systems, not screens</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black">
              <div className="grid h-full w-full place-items-center">
                <div className="grid grid-cols-3 gap-3 opacity-80">
                  <div className="h-24 w-24 bg-white" />
                  <div className="h-24 w-24 bg-black border border-white/20" />
                  <div className="h-24 w-24 bg-white" />
                  <div className="h-24 w-24 bg-black border border-white/20" />
                  <div className="h-24 w-24 bg-white" />
                  <div className="h-24 w-24 bg-black border border-white/20" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-white/40">Minimal, geometric, contrast-first</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
