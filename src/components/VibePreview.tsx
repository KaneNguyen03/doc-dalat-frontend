import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, StaggerContainer, staggerChild } from './animations'

const vibes = ['Tất cả', 'Lãng mạn', 'Chill', 'Bản địa'] as const

type Vibe = typeof vibes[number]

interface Spot {
  name: string
  vibe: Exclude<Vibe, 'Tất cả'>
  tagline: string
  image: string
  score: number
}

const spots: Spot[] = [
  {
    name: 'The Married Beans',
    vibe: 'Lãng mạn',
    tagline: 'Hai con người, một tình yêu, và hàng nghìn mẻ rang thủ công — nơi mỗi tách cà phê là lời tỏ tình thầm lặng với cao nguyên.',
    image: '/images/vibe-romantic.png',
    score: 9.2,
  },
  {
    name: 'Ana Mandara Villas Dalat',
    vibe: 'Lãng mạn',
    tagline: 'Mười bảy biệt thự Pháp cổ từ thập niên 1920, được phục dựng tỉ mỉ giữa rừng thông — giữ nguyên hơi thở của một Đà Lạt đã khuất sau lớp sương mù thời gian.',
    image: '/images/vibe-romantic.png',
    score: 9.5,
  },
  {
    name: 'La Viet Coffee',
    vibe: 'Chill',
    tagline: 'Từ nông trại đến tách cà phê, La Viet viết lại định nghĩa specialty coffee Việt Nam bằng sự kiên nhẫn và tiêu chuẩn không thỏa hiệp.',
    image: '/images/vibe-chill.png',
    score: 9.5,
  },
  {
    name: 'Chênh Café',
    vibe: 'Chill',
    tagline: 'Ẩn mình cuối con dốc vắng, không biển hiệu lớn — chỉ tiếng gió thông reo và một khoảng lặng đủ để nghe lại chính mình.',
    image: '/images/vibe-chill.png',
    score: 9.0,
  },
  {
    name: 'K\'Ho Coffee',
    vibe: 'Bản địa',
    tagline: 'Nơi những hạt Arabica kể câu chuyện về vùng đất bazan và tâm huyết của người nông dân K\'Ho — specialty coffee ở dạng nguyên bản nhất.',
    image: '/images/vibe-local.png',
    score: 9.6,
  },
  {
    name: 'Lẩu bò Quán Gỗ',
    vibe: 'Bản địa',
    tagline: 'Ba thế hệ giữ lửa cho nồi nước dùng hầm xương mười hai tiếng — hương vị lẩu bò trứ danh mà người Đà Lạt gốc trao truyền.',
    image: '/images/vibe-local.png',
    score: 9.4,
  },
]

export function VibePreview() {
  const [activeVibe, setActiveVibe] = useState<Vibe>('Tất cả')

  const filtered = activeVibe === 'Tất cả'
    ? spots
    : spots.filter((s) => s.vibe === activeVibe)

  return (
    <section id="explore" className="relative py-24 lg:py-34 bg-cream-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <FadeIn>
            <p className="text-overline uppercase font-sans text-terra tracking-widest mb-4">
              Khám phá
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-headline font-serif text-foreground mb-6">
              Tìm theo <span className="italic text-pine-light">cảm xúc</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-lg font-sans text-ink-soft max-w-lg mx-auto">
              Mỗi người có một &ldquo;gu&rdquo; riêng. DỐC giúp bạn tìm đúng không gian đồng điệu với trạng thái cảm xúc hiện tại.
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
