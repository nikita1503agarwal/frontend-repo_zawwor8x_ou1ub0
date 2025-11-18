function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let’s build something sharp</h2>
              <p className="mt-4 text-white/70">Available for senior frontend roles and selective client work.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
              >
                Email me
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
