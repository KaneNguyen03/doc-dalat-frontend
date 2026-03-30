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
    tagline: 'Ngôi nhà gỗ cổ kính từ năm 1954, mùi cà phê rang thủ công len lỏi trong từng kẽ gỗ — nơi hai con ngườii gìn giữ tình yêu qua hàng nghìn mẻ rang, mỗi tách cà phê là một lờii tỏ tình thầm lặng với cao nguyên.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    score: 9.5,
  },
  {
    name: 'K\'Ho Coffee',
    vibe: 'Bản địa',
    tagline: 'Dưới chân núi LangBiang, bàn tay ngưởi K\'Ho chọn từng hạt cà phê chín đỏ — specialty coffee từ vùng đất bazan thiêng liêng, kể câu chuyện về lòng kiên nhẫn và tâm huyết của những ngưởi nông dân bản địa.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    score: 9.7,
  },
  {
    name: 'Émai Dalat',
    vibe: 'Lãng mạn',
    tagline: 'Biệt thự Pháp cổ từ những năm 1930 được phục dựng tỉ mỉ, mỗi góc nhà là một câu chuyện — nơi ánh sáng chiều len lỏi qua ô cửa sổ kính màu, hương vị Đà Lạt xưa được gìn giữ qua từng món ăn và ly trà chiều.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    score: 9.6,
  },
  {
    name: 'An Nhiên Homestay',
    vibe: 'Chill',
    tagline: 'Ngôi nhà gỗ nguyên bản ẩn mình giữa rừng thông, không wifi, không ti vi — chỉ có tiếng chim hót buổi sớm, hơi sương mù mờ ảo qua ô cửa sổ gỗ, và khoảng lặng đủ để bạn nghe lại chính mình.',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80',
    score: 9.4,
  },
  {
    name: 'Tiệm cà phê Ba Quả Đồi',
    vibe: 'Chill',
    tagline: 'Ba ngôi nhà gỗ nằm lặng lẽ trên đồi, nhìn ra biển mây bồng bềnh — nơi nhạc Trịnh Công Sơn vang vọng trong không gian tĩnh lặng, mờii bạn ngồi lại để cảm nhận Đà Lạt chậm rãi.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    score: 9.3,
  },
  {
    name: 'Lẩu bò Quán Gỗ',
    vibe: 'Bản địa',
    tagline: 'Ba thế hệ gìn giữ ngọn lửa cho nồi nước dùng hầm xương mườii hai tiếng — hương vị lẩu bò trứ danh Ba Toa mà ngườii Đà Lạt gốc trao truyền, không menu sang trọng, chỉ có tình nghĩa chân thành.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
    score: 9.2,
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
              Mỗi ngườii có một &ldquo;gu&rdquo; riêng. DỐC giúp bạn tìm đúng không gian đồng điệu với trạng thái cảm xúc hiện tại.
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
