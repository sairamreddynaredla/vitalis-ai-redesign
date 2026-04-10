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

// ✅ Stats Section
import StatsStrip from './sections/StatsStrip'

function AppInner() {
  useReveal()

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <main className="flex flex-col">

        <Hero />

        <StatsStrip />

        <About />
        <Divider />

        <Features />
        <Divider />

        <Workflow />
        <Divider />

        <WhyChoose />
        <Divider />

        <HowItWorks />
        <Divider />

        <TrustVisualSection />
        <Divider />

        <SecuritySection />
        <Divider />

        <FAQ />
        <Divider />

        <CTA />

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