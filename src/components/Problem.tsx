import { FadeIn, StaggerContainer, staggerChild } from './animations'
import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, MessageSquareWarning, Search } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Ẩm thực mất chất',
    description: 'Nhiều quán ăn du lịch phục vụ cẩu thả, giá cao và mất chất địa phương.',
  },
  {
    icon: DollarSign,
    title: 'Chặt chém giá cả',
    description: 'Giá phòng, giá ăn, giá dịch vụ bị đẩy lên gấp 3-5 lần vào mùa cao điểm, không minh bạch.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Rác thông tin & quảng cáo trá hình',
    description: 'Hàng ngàn bài review giả và seeding quảng cáo tràn lan trên mạng khiến bạn không biết đâu là thật.',
  },
  {
    icon: Search,
    title: 'Quá tải lựa chọn',
    description: 'Mặt hàng gió cuốn trên mạng, khó lọc địa điểm thực sự có chất lượng giữa biển thông tin nhiễu loạn.',
  },
]

export function Problem() {
  return (
    <section id="about" className="relative py-24 lg:py-34 bg-background overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-22">
          <FadeIn>
            <p className="text-overline uppercase font-sans text-terra tracking-widest mb-4">
              Van de
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-headline font-serif text-foreground mb-6">
              Du lịch Đà Lạt đang<br />
              <span className="italic text-terra">mất dần bản sắc</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-lg font-sans text-ink-soft max-w-xl mx-auto">
              Đà Lạt có sương mù, hồ và rừng thông, nhưng quá tải du lịch và thương mại hoá đang xói mòn giá trị thật sự.
              Những người yêu Đà Lạt xứng đáng được tiếp cận những trải nghiệm chân thực hơn.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={staggerChild}
              className="group p-8 rounded-lg border border-border bg-card hover:border-terra/30 transition-all duration-500"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <div className="w-10 h-10 rounded-sm bg-terra-muted flex items-center justify-center mb-5">
                <problem.icon size={18} className="text-terra" />
              </div>
              <h3 className="font-serif text-title text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="font-sans text-body text-ink-soft leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}