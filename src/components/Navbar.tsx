import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Ve DOC', href: '#about' },
  { label: 'Cach hoat dong', href: '#how-it-works' },
  { label: 'Kham pha', href: '#explore' },
  { label: 'DOC Club', href: '#club' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-border/50" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-serif text-title tracking-tight text-foreground">
              DOC
            </span>
            <span className="hidden sm:inline text-overline uppercase text-ink-muted font-sans tracking-widest mt-1">
              Da Lat Original Curated
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-caption uppercase font-sans font-medium text-ink-soft hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="ml-4 px-5 py-2.5 bg-primary text-primary-foreground text-caption uppercase font-sans font-medium rounded-sm hover:bg-pine-light transition-colors duration-300"
            >
              Tham gia Waitlist
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden relative bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-body font-sans text-ink-soft hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-4 px-5 py-3 bg-primary text-primary-foreground text-caption uppercase font-sans font-medium rounded-sm"
            >
              Tham gia Waitlist
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}