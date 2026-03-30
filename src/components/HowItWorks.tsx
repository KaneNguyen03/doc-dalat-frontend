import { FadeIn, StaggerContainer, staggerChild } from './animations'
import { motion } from 'framer-motion'
import { Bot, Users, Compass } from 'lucide-react'

const steps = [
  {
    icon: Bot,
    number: '01',
    title: 'AI Phân tích đa tầng',
    description: 'Hệ thống phân tích đa tầng, quét sạch lớp vỏ quảng cáo để chạm đến những giá trị cốt lõi nhất của từng địa điểm.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Giám tuyển chuyên gia',
    description: 'Mạng lưới chuyên gia bản địa và nhà phê bình độc lập thẩm định từng chi tiết — từ nguồn gốc nguyên liệu đến câu chuyện đằng sau mỗi không gian. Chỉ những địa điểm vượt qua quy trình giám tuyển nghiêm ngặt mới xuất hiện trên DỐC.',
  },
  {
    icon: Compass,
    number: '03',
    title: 'Trải nghiệm độc bản',
    description: 'Khám phá Đà Lạt theo cách riêng của bạn — lộ trình được thiết kế dựa trên cảm xúc, nhịp sống và gu thẩm mỹ cá nhân. Mỗi hành trình là một bản độc bản, không lặp lại.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-34 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-22">
          <FadeIn>
            <p className="text-overline uppercase font-sans text-terra tracking-widest mb-4">
              Cách hoạt động
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-headline font-serif text-foreground mb-6">
              Từ dữ liệu thô đến<br />
              <span className="italic text-pine-light">trải nghiệm tinh hoa</span>
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerChild}
              className="relative text-center lg:text-left"
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+0.5rem)] w-[calc(100%-3rem)] h-px bg-border" />
              )}

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-pine/5 border border-pine/10 mb-6">
                <step.icon size={24} className="text-pine" />
              </div>

              <div className="mb-2">
                <span className="text-overline font-sans text-terra/60 tracking-widest">{step.number}</span>
              </div>

              <h3 className="font-serif text-title text-foreground mb-3">
                {step.title}
              </h3>

              <p className="font-sans text-body text-ink-soft leading-relaxed max-w-xs mx-auto lg:mx-0">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}