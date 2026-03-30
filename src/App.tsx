import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { Solution } from '@/components/Solution'
import { HowItWorks } from '@/components/HowItWorks'
import { VibePreview } from '@/components/VibePreview'
import { Club } from '@/components/Club'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <VibePreview />
        <Club />
      </main>
      <Footer />
    </div>
  )
}

export default App