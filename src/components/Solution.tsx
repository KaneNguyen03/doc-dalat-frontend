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
                Đi du lịch không nên là cuộc chơi may rủi. DỐC mang đến sự an tâm tuyệt đối — 
                AI quét sạch mọi địa điểm bẩn, chặt chém, và xô bồ khỏi hành trình của bạn. 
                Chỉ những trải nghiệm tinh hoa, được giám tuyển kỹ càng, mới xứng đáng với thờii gian quý báu của bạn tại Đà Lạt.
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
                      Thuật toán đa tầng quét qua hàng nghìn review thô, nhận diện ngay lập tức các dấu hiệu cảnh báo — từ vệ sinh kém, giá cắt cổ, đến những nơi đã mất đi linh hồn vì thương mại hóa.
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
                      Mỗi địa điểm được phân loại theo hệ thống cảm xúc độc quyền — Lãng mạn, Chill, Bản địa — để mỗi lựa chọn đều đồng điệu với trạng thái của bạn, không phải của đám đông.
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
                      Mạng lưới chuyên gia bản địa và nhà phê bình ẩm thực thẩm định từng chi tiết — không tài trợ, không quảng cáo, chỉ có sự trung thực tuyệt đối.
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
                    <div className="w-2 h-2 rounded-full bg-terra animate-pulse" />
                    <span className="font-sans text-overline uppercase text-ink-muted tracking-widest">Bộ lọc Gu đang hoạt động</span>
                  </div>

                  {/* Filter result items */}
                  {[
                    { name: 'The Married Beans', vibe: 'Lãng mạn', score: 9.4, status: 'approved', reason: 'Di sản rang xay thủ công' },
                    { name: 'Chợ Đêm Đà Lạt', vibe: '—', score: 2.1, status: 'rejected', reason: 'Chặt chém, hàng kém chất lượng' },
                    { name: 'Émai Dalat', vibe: 'Lãng mạn', score: 9.6, status: 'approved', reason: 'Tinh tế, kiến trúc Pháp cổ' },
                    { name: 'Buffet rau đại trà', vibe: '—', score: 1.8, status: 'rejected', reason: 'Vệ sinh cảnh báo đỏ' },
                    { name: 'K\'Ho Coffee', vibe: 'Bản địa', score: 9.7, status: 'approved', reason: 'Bản địa nguyên bản, cà phê đặc sản' },
                    { name: 'Quán nướng xô bồ khu Hòa Bình', vibe: '—', score: 2.4, status: 'rejected', reason: 'Ồn ào, khói, thiếu vệ sinh' },
                    { name: 'La Viet Coffee', vibe: 'Chill', score: 9.5, status: 'approved', reason: 'Specialty coffee chuẩn quốc tế' },
                    { name: 'Cafe check-in Đồi Cù', vibe: '—', score: 2.6, status: 'rejected', reason: 'Thương mại hóa quá mức' },
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
                            <span className={`block text-caption font-sans ${
                              item.status === 'approved' ? 'text-pine/70' : 'text-destructive/70'
                            }`}>
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
                    <span className="text-caption font-sans text-ink-muted">8 địa điểm đã quét</span>
                    <span className="text-caption font-sans font-medium text-pine">4 đạt chuẩn DỐC</span>
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
