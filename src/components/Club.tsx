import { FadeIn } from './animations'
import { Crown, MapPin, Gift } from 'lucide-react'

const perks = [
  {
    icon: Crown,
    title: 'Ưu tiên truy cập',
    description: 'Xem trước địa điểm mới nhất trước tất cả, được giảm tuyển riêng bởi chuyên gia hàng đầu.',
  },
  {
    icon: MapPin,
    title: 'Lộ trình cá nhân',
    description: 'AI tạo lộ trình tối ưu theo gu, thời gian và ngân sách của riêng bạn.',
  },
  {
    icon: Gift,
    title: 'Ưu đãi độc quyền',
    description: 'Giá đặc biệt tại các đối tác premium — homestay, nhà hàng, tour bản địa.',
  },
]

export function Club() {
  return (
    <section id="club" className="relative py-24 lg:py-34 bg-primary overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--terra) / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--pine-light) / 0.2) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-22">
          <FadeIn>
            <p className="text-overline uppercase font-sans text-terra-light tracking-widest mb-4">
              Sắp ra mắt
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-headline font-serif text-primary-foreground mb-6">
              DOC Club
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-lg font-sans text-cream-deep/70 max-w-lg mx-auto leading-relaxed">
              Hội thành viên dành cho những người thật sự yêu Đà Lạt.
              Trải nghiệm được cá nhân hóa, ưu đãi độc quyền, và một cộng đồng có gu.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {perks.map((perk, index) => (
            <FadeIn key={perk.title} delay={0.2 + index * 0.1}>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-cream/10 border border-cream/10 mb-5">
                  <perk.icon size={22} className="text-terra-light" />
                </div>
                <h3 className="font-serif text-lg text-primary-foreground mb-3">
                  {perk.title}
                </h3>
                <p className="font-sans text-body text-cream-deep/60 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center mt-14">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 bg-terra text-cream font-sans text-caption uppercase font-medium tracking-wide rounded-sm hover:bg-terra-light transition-colors duration-300"
            >
              <Crown size={14} />
              Đăng ký sớm để nhận ưu đãi đặc biệt
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}