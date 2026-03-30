import { FadeIn } from './animations'
import { Shield, Sparkles, Eye } from 'lucide-react'

export function Solution() {
  return (
    <section className="relative py-24 lg:py-34 bg-cream-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-22 items-center">
          {/* Left: Text */}
          <div>
            <FadeIn>
              <p className="text-overline uppercase font-sans text-terra tracking-widest mb-4">
                Giải pháp
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-headline font-serif text-foreground mb-6">
                Bộ lọc &ldquo;Gu&rdquo;<br />
                <span className="italic text-pine-light">độc bản của DỐC</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body-lg font-sans text-ink-soft mb-10 max-w-lg leading-relaxed">
                Kết hợp trí tuệ nhân tạo với sự giám tuyển từ các chuyên gia bản địa uy tín,
                DỐC tạo ra một bộ lọc thông minh loại bỏ mọi tiếng ồn —
                chỉ giữ lại những trải nghiệm Đà Lạt chân thực và đáng giá nhất.
              </p>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.3}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-pine-mist flex items-center justify-center">
                    <Shield size={18} className="text-pine" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Phân tích & Thanh lọc</h3>
                    <p className="font-sans text-body text-ink-soft">
                      Thuật toán đa tầng tự động nhận diện các tín hiệu tiêu cực — từ review giả, seeding ảo đến phản hồi thực tế về vệ sinh và chất lượng dịch vụ.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-pine-mist flex items-center justify-center">
                    <Sparkles size={18} className="text-pine" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Bản đồ cảm xúc</h3>
                    <p className="font-sans text-body text-ink-soft">
                      Mỗi địa điểm được phân loại theo hệ thống cảm xúc độc quyền — Lãng mạn, Tĩnh lặng, Bản địa, Nghệ thuật — để mỗi lựa chọn đều đồng điệu với trạng thái của bạn.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-pine-mist flex items-center justify-center">
                    <Eye size={18} className="text-pine" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Giám tuyển độc lập</h3>
                    <p className="font-sans text-body text-ink-soft">
                      Mạng lưới chuyên gia bản địa và nhà phê bình ẩm thực thẩm định lần cuối — không tài trợ, không quảng cáo, chỉ có sự trung thực.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right: Visual */}
          <FadeIn delay={0.3} direction="right">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-pine/5 rounded-lg -rotate-2" />
              <div className="relative bg-card rounded-lg border border-border p-8" style={{ boxShadow: 'var(--shadow-elevated)' }}>
                {/* Simulated filter UI */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3 pb-5 border-b border-border">
                    <div className="w-2 h-2 rounded-full bg-terra" />
                    <span className="font-sans text-overline uppercase text-ink-muted tracking-widest">Bộ lọc Gu đang hoạt động</span>
                  </div>

                  {/* Filter result items */}
                  {[
                    { name: 'The Married Beans', vibe: 'Lãng mạn', score: 9.2, status: 'approved', reason: '' },
                    { name: 'Quán lẩu khu Hòa Bình', vibe: '—', score: 3.1, status: 'rejected', reason: 'Vệ sinh kém' },
                    { name: 'K\'Ho Coffee', vibe: 'Bản địa', score: 9.6, status: 'approved', reason: '' },
                    { name: 'Cafe Checkin Đồi Cù', vibe: '—', score: 2.8, status: 'rejected', reason: 'Thương mại hóa quá mức' },
                    { name: 'La Viet Coffee', vibe: 'Chill', score: 9.5, status: 'approved', reason: '' },
                    { name: 'Nhà hàng Phố Tourist', vibe: '—', score: 2.3, status: 'rejected', reason: 'Phản hồi tiêu cực từ người bản địa' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-center justify-between py-3 px-4 rounded-sm transition-all duration-300 ${
                        item.status === 'rejected'
                          ? 'bg-destructive/5 opacity-40'
                          : 'bg-pine/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          item.status === 'approved' ? 'bg-pine' : 'bg-destructive'
                        }`} />
                        <div>
                          <span className={`font-sans text-body text-foreground ${item.status === 'rejected' ? 'line-through' : ''}`}>
                            {item.name}
                          </span>
                          {item.reason && (
                            <span className="block text-caption font-sans text-destructive/70">
                              {item.reason}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {item.vibe !== '—' && (
                          <span className="text-caption font-sans text-terra px-2 py-0.5 bg-terra/10 rounded-sm">
                            {item.vibe}
                          </span>
                        )}
                        <span className={`text-caption font-sans font-medium ${
                          item.status === 'approved' ? 'text-pine' : 'text-destructive'
                        }`}>
                          {item.score}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-caption font-sans text-ink-muted">6 địa điểm đã quét</span>
                    <span className="text-caption font-sans font-medium text-pine">3 đạt chuẩn DỐC</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
