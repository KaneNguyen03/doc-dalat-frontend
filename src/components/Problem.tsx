import { FadeIn, StaggerContainer, staggerChild } from './animations'
import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, MessageSquareWarning, Search } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Thuc pham kem chat luong',
    description: 'Quan an dai tra phuc vu do an oi thiu, che bien mat ve sinh tai cac khu du lich dong duc.',
  },
  {
    icon: DollarSign,
    title: 'Chat chem gia ca',
    description: 'Gia phong, gia an, gia dich vu bi day len gap 3-5 lan vao mua cao diem, khong minh bach.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Rac thong tin & Seeding',
    description: 'Hang ngan bai review gia, seeding quang cao tran lan tren TikTok va Facebook khien ban khong biet dau la that.',
  },
  {
    icon: Search,
    title: 'Qua tai lua chon',
    description: 'Mat hang gio cuon tren mang de loc dia diem that su co chat luong giua bien thong tin nhieu loan.',
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
              Du lich Da Lat dang<br />
              <span className="italic text-terra">bi pha vo</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-lg font-sans text-ink-soft max-w-xl mx-auto">
              Da Lat tuyet dep nhung dang bi thuong mai hoa qua muc.
              Nhung nguoi yeu Da Lat that su xung dang co mot cach tiep can tot hon.
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