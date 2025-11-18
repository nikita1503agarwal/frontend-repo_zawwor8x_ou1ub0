import { Menu, Github, Linkedin, Mail } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md">
          <a href="#" className="font-bold tracking-tight text-white text-lg">DEV.PORTFOLIO</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <span className="mx-2 h-4 w-px bg-white/15" />
            <a href="#" aria-label="GitHub" className="hover:text-white transition"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition"><Linkedin size={18} /></a>
            <a href="#contact" aria-label="Email" className="hover:text-white transition"><Mail size={18} /></a>
          </nav>
          <button className="md:hidden text-white/80" aria-label="Menu">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
