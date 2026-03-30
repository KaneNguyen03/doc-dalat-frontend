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
                Giai phap
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-headline font-serif text-foreground mb-6">
                Bo loc &ldquo;Gu&rdquo;<br />
                <span className="italic text-pine-light">doc ban cua DOC</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body-lg font-sans text-ink-soft mb-10 max-w-lg leading-relaxed">
                Ket hop tri tue nhan tao voi su giam tuyen tu cac chuyen gia ban dia uy tin,
                DOC tao ra mot bo loc thong minh loai bo moi tieng on —
                chi giu lai nhung trai nghiem Da Lat chan thuc va dang gia nhat.
              </p>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.3}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-pine-mist flex items-center justify-center">
                    <Shield size={18} className="text-pine" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">AI Loc phot</h3>
                    <p className="font-sans text-body text-ink-soft">
                      Tu dong phat hien va loai bo cac dia diem co review tieu cuc, bi to chat chem hoac mat ve sinh.
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
                    <h3 className="font-serif text-lg text-foreground mb-1">Vibe Tagging</h3>
                    <p className="font-sans text-body text-ink-soft">
                      Moi dia diem duoc gan nhan cam xuc — Lang man, Chill, Ban dia, Art — de ban tim dung &ldquo;gu&rdquo; cua minh.
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
                    <h3 className="font-serif text-lg text-foreground mb-1">Expert Curated</h3>
                    <p className="font-sans text-body text-ink-soft">
                      KOL va Local Experts tham dinh cuoi cung, dam bao moi goi y deu la trai nghiem that su.
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
                    <span className="font-sans text-overline uppercase text-ink-muted tracking-widest">Bo loc Gu dang hoat dong</span>
                  </div>

                  {/* Filter result items */}
                  {[
                    { name: 'The Married Beans', vibe: 'Lang man', score: 9.2, status: 'approved' },
                    { name: 'Nha hang XYZ Tourist', vibe: '—', score: 3.1, status: 'rejected' },
                    { name: 'An Nhien Homestay', vibe: 'Chill', score: 8.8, status: 'approved' },
                    { name: 'Quan Nuong Le Duong', vibe: '—', score: 2.5, status: 'rejected' },
                    { name: 'La Viet Coffee', vibe: 'Ban dia', score: 9.5, status: 'approved' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-center justify-between py-3 px-4 rounded-sm transition-all duration-300 ${
                        item.status === 'rejected'
                          ? 'bg-destructive/5 opacity-40 line-through'
                          : 'bg-pine/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          item.status === 'approved' ? 'bg-pine' : 'bg-destructive'
                        }`} />
                        <span className="font-sans text-body text-foreground">{item.name}</span>
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
                    <span className="text-caption font-sans text-ink-muted">5 dia diem da quet</span>
                    <span className="text-caption font-sans font-medium text-pine">3 dat chuan DOC</span>
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