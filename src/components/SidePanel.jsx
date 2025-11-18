import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

function SidePanel() {
  return (
    <motion.aside
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 p-6 text-white backdrop-blur md:sticky md:top-6 md:max-w-none md:p-8 lg:h-[calc(100vh-3rem)]"
    >
      <div className="flex flex-col h-full">
        <div className="relative aspect-[5/3] overflow-hidden rounded-xl border border-white/10">
          {/* Use a high-contrast B/W portrait */}
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
            alt="Portrait"
            className="h-full w-full object-cover grayscale"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">Senior Frontend Developer</p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight">Your Name</h1>
          <p className="mt-2 text-sm text-white/70">Specialization: React, Design Systems, Motion, Accessibility</p>
        </div>

        <div className="mt-6 space-y-3 text-sm text-white/80">
          <div className="flex items-center gap-3"><Mail size={16} className="text-white/50" /><a href="mailto:hello@example.com" className="hover:underline">hello@example.com</a></div>
          <div className="flex items-center gap-3"><Phone size={16} className="text-white/50" /><a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></div>
          <div className="flex items-center gap-3"><MapPin size={16} className="text-white/50" /><span>Remote • Anywhere</span></div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a href="#" aria-label="GitHub" className="rounded-md border border-white/10 p-2 text-white/70 transition hover:border-white/20 hover:text-white"><Github size={18} /></a>
          <a href="#" aria-label="LinkedIn" className="rounded-md border border-white/10 p-2 text-white/70 transition hover:border-white/20 hover:text-white"><Linkedin size={18} /></a>
          <a href="#" aria-label="Twitter" className="rounded-md border border-white/10 p-2 text-white/70 transition hover:border-white/20 hover:text-white"><Twitter size={18} /></a>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="h-16 rounded-lg border border-white/10 bg-white" />
          <div className="h-16 rounded-lg border border-white/10 bg-black" />
          <div className="h-16 rounded-lg border border-white/10 bg-white" />
          <div className="h-16 rounded-lg border border-white/10 bg-black" />
          <div className="h-16 rounded-lg border border-white/10 bg-white" />
          <div className="h-16 rounded-lg border border-white/10 bg-black" />
        </div>

        <div className="mt-auto pt-6 text-xs uppercase tracking-widest text-white/40">Available for roles & select projects</div>
      </div>
    </motion.aside>
  )
}

export default SidePanel
