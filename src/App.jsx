import { useReveal } from './hooks/useReveal'
import { ToastProvider } from './hooks/useToast'

import Divider from './components/Divider'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'

// Sections
import About from './sections/About'
import CTA from './sections/CTA'
import FAQ from './sections/FAQ'
import Features from './sections/Features'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import SecuritySection from './sections/SecuritySection'
import TrustVisualSection from './sections/TrustVisualSection'
import WhyChoose from './sections/WhyChoose'
import Workflow from './sections/Workflow'
import StatsStrip from './sections/StatsStrip'

function AppInner() {
  useReveal()

  // 🔥 All sections in order
  const sections = [
    Hero,
    StatsStrip,
    About,
    Features,
    Workflow,
    WhyChoose,
    HowItWorks,
    TrustVisualSection,
    SecuritySection,
    FAQ,
    CTA,
  ]

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <main className="flex flex-col">
        {sections.map((Section, index) => (
          <div key={index}>
            <Section />

            {/* 👉 Divider only between sections */}
            {index !== sections.length - 1 && <Divider />}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <AppInner />
    </ToastProvider>
  )
}