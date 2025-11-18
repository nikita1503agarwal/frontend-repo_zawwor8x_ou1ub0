import Layout from './components/Layout'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Work from './components/Work'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <Showcase />
      <Work />
      <Skills />
      <About />
      <Contact />
      <footer className="border-t border-white/10 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs uppercase tracking-widest text-white/40">© {new Date().getFullYear()} — Built with clarity</p>
          <p className="text-xs text-white/40">Black & White. Geometric. Fast.</p>
        </div>
      </footer>
    </Layout>
  )
}

export default App
