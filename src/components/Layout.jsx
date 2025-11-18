import Navbar from './Navbar'
import SidePanel from './SidePanel'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pt-28">
        <div className="grid gap-8 lg:grid-cols-[360px,1fr]">
          <SidePanel />
          <div className="min-h-[60vh]">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
