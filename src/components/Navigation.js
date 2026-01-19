'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home','About', 'Work', 'Skills', 'Contact']

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`ml-40 md:ml-0 fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/60 backdrop-blur-2xl border border-white/10'
            : 'bg-slate-900/40 backdrop-blur-xl border border-white/5'
        }`}
      >
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-blue-400 transition-colors font-medium hoverable"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hoverable"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition-colors font-semibold hoverable"
              style={{
                animation: isOpen
                  ? `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
                  : 'none',
                opacity: 0,
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
