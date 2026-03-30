import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from './animations'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-dalat.png"
          alt="Rung thong Da Lat trong suong som"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
        {/* Bottom fade for readability */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-pine/90 via-pine/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-0 pt-32 w-full">
        <div className="max-w-2xl">
          <FadeIn delay={0.2}>
            <p className="text-overline uppercase font-sans text-terra-light tracking-widest mb-6">
              Mot cach moi de kham pha Da Lat
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-display font-serif text-cream mb-6">
              Cham vao<br />
              <span className="italic text-terra-light">Da Lat</span>
              <br />nguyen ban
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-body-lg font-sans text-cream-deep/90 max-w-lg mb-10 leading-relaxed">
              Nen tang du lich giam tuyen duy nhat danh cho Da Lat.
              AI + chuyen gia dia phuong giup ban loc bo bay du lich,
              chi giu lai nhung trai nghiem dang gia nhat.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email cua ban"
                  required
                  className="flex-1 px-5 py-3.5 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-sm text-cream placeholder:text-cream-deep/50 font-sans text-body focus:outline-none focus:border-terra-light/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-terra text-cream font-sans text-caption uppercase font-medium tracking-wide rounded-sm hover:bg-terra-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Early Access
                  <ArrowRight size={14} />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-6 py-4 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-sm max-w-md"
              >
                <p className="text-cream font-sans text-body">
                  Cam on ban! Chung toi se lien he som nhat.
                </p>
              </motion.div>
            )}
          </FadeIn>

          <FadeIn delay={1.0}>
            <p className="text-caption font-sans text-cream-deep/50 mt-4">
              Mien phi. Khong spam. Huy bat ky luc nao.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <FadeIn delay={1.4} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-cream/0 via-cream/40 to-cream/0"
        />
      </FadeIn>
    </section>
  )
}