import { FadeIn, StaggerContainer, staggerChild } from './animations'
import { motion } from 'framer-motion'
import { Bot, Users, Compass } from 'lucide-react'

const steps = [
  {
    icon: Bot,
    number: '01',
    title: 'AI Phân tích đa tầng',
    description: 'Hệ thống AI của DỐC quét qua hàng triệu dữ liệu thô — từ review, hình ảnh đến phản hồi thực tế — để nhận diện các tín hiệu cảnh báo: vệ sinh kém, giá cắt cổ, seeding ảo. Chỉ những địa điểm sạch sẽ, chân thực mới được chuyển sang vòng thẩm định tiếp theo.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Giám tuyển chuyên gia',
    description: 'Mạng lưới chuyên gia bản địa và nhà phê bình ẩm thực độc lập thẩm định từng chi tiết — từ nguồn gốc nguyên liệu, quy trình phục vụ đến câu chuyện đằng sau mỗi không gian. Không tài trợ, không quảng cáo, chỉ có sự trung thực tuyệt đối.',
  },
  {
    icon: Compass,
    number: '03',
    title: 'Trải nghiệm tinh hoa',
    description: 'Mỗi lộ trình được thiết kế riêng biệt dựa trên cảm xúc, nhịp sống và gu thẩm mỹ cá nhân của bạn. Không phải đám đông, không phải checklist — mà là những khoảnh khắc đồng điệu với chính bạn tại Đà Lạt.',
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
