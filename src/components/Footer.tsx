import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from './animations'
import { ArrowRight } from 'lucide-react'

export function Footer() {
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
    <footer id="waitlist" className="relative bg-background border-t border-border">
      {/* CTA Section */}
      <div className="py-24 lg:py-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <div className="divider-editorial mx-auto mb-8" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-headline font-serif text-foreground mb-4">
                Sẵn sàng chạm vào<br />
                <span className="italic text-pine-light">Đà Lạt nguyên bản</span>?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body-lg font-sans text-ink-soft mb-10">
                Đăng ký nhận truy cập sớm để là những người đầu tiên trải nghiệm DOC.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email của bạn"
                    required
                    className="flex-1 px-5 py-3.5 bg-card border border-border rounded-sm font-sans text-body text-foreground placeholder:text-ink-muted focus:outline-none focus:border-pine/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-primary text-primary-foreground font-sans text-caption uppercase font-medium tracking-wide rounded-sm hover:bg-pine-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Đăng ký
                    <ArrowRight size={14} />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-6 py-4 bg-pine/5 border border-pine/20 rounded-sm max-w-md mx-auto"
                >
                  <p className="font-sans text-body text-pine">
                    Tuyệt vời! Chúng tôi sẽ gửi thông tin cho bạn sớm nhất.
                  </p>
                </motion.div>
              )}
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg text-foreground">DOC</span>
              <span className="text-caption font-sans text-ink-muted">
                Đà Lạt Original Curated
              </span>
            </div>

            <p className="text-caption font-sans text-ink-muted">
              2025 DOC. Được tạo với tình yêu dành cho Đà Lạt.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}