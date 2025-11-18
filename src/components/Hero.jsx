import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vwPe8k3Yw7HcN4yu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Senior Frontend Engineer</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            Crafting Bold, Minimal Interfaces
          </h1>
          <p className="mt-6 max-w-xl text-white/70">
            I design and build fast, accessible web experiences with a focus on clean geometry, precise motion, and uncompromising clarity.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
