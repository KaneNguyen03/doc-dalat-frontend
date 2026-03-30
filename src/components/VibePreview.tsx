import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, StaggerContainer, staggerChild } from './animations'

const vibes = ['Tat ca', 'Lang man', 'Chill', 'Ban dia'] as const

type Vibe = typeof vibes[number]

interface Spot {
  name: string
  vibe: Exclude<Vibe, 'Tat ca'>
  tagline: string
  image: string
  score: number
}

const spots: Spot[] = [
  {
    name: 'The Married Beans',
    vibe: 'Lang man',
    tagline: 'Ca phe an minh giua vuon hong, noi thoi gian cham lai.',
    image: '/images/vibe-romantic.png',
    score: 9.2,
  },
  {
    name: 'An Nhien Homestay',
    vibe: 'Chill',
    tagline: 'Thuc day voi may mu va tieng chim, giua rung thong bat ngan.',
    image: '/images/vibe-chill.png',
    score: 8.8,
  },
  {
    name: 'Cho Da Lat buoi som',
    vibe: 'Ban dia',
    tagline: 'Noi tinh hoa nong san cao nguyen hoi tu, tu 4 gio sang.',
    image: '/images/vibe-local.png',
    score: 9.5,
  },
]

export function VibePreview() {
  const [activeVibe, setActiveVibe] = useState<Vibe>('Tat ca')

  const filtered = activeVibe === 'Tat ca'
    ? spots
    : spots.filter((s) => s.vibe === activeVibe)

  return (
    <section id="explore" className="relative py-24 lg:py-34 bg-cream-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <FadeIn>
            <p className="text-overline uppercase font-sans text-terra tracking-widest mb-4">
              Kham pha
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-headline font-serif text-foreground mb-6">
              Tim theo <span className="italic text-pine-light">cam xuc</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-lg font-sans text-ink-soft max-w-lg mx-auto">
              Moi nguoi co mot &ldquo;gu&rdquo; rieng. DOC giup ban tim dung khong gian phu hop voi cam xuc hien tai.
            </p>
          </FadeIn>
        </div>

        {/* Vibe Filter Tabs */}
        <FadeIn delay={0.3}>
          <div className="flex justify-center gap-2 mb-12">
            {vibes.map((vibe) => (
              <button
                key={vibe}
                onClick={() => setActiveVibe(vibe)}
                className={`px-5 py-2.5 rounded-sm font-sans text-caption uppercase tracking-wide transition-all duration-300 ${
                  activeVibe === vibe
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-ink-soft hover:text-foreground hover:border-pine/30'
                }`}
              >
                {vibe}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Spots Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVibe}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((spot) => (
                <motion.article
                  key={spot.name}
                  variants={staggerChild}
                  className="group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-5">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-pine/0 group-hover:bg-pine/10 transition-colors duration-500" />

                    {/* Vibe tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-sm text-caption font-sans uppercase tracking-wide text-foreground">
                        {spot.vibe}
                      </span>
                    </div>

                    {/* Score */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1.5 bg-pine/80 backdrop-blur-sm rounded-sm text-caption font-sans font-medium text-cream">
                        {spot.score}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="font-serif text-title text-foreground mb-2 group-hover:text-pine transition-colors duration-300">
                    {spot.name}
                  </h3>
                  <p className="font-sans text-body text-ink-soft leading-relaxed">
                    {spot.tagline}
                  </p>
                </motion.article>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}