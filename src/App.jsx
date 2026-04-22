import { useReveal } from './hooks/useReveal'
import Divider from './components/Divider'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// Sections
import Hero from './sections/Hero'
import StatsStrip from './sections/StatsStrip'
import About from './sections/About'
import Features from './sections/Features'
import Workflow from './sections/Workflow'
import WhyChoose from './sections/WhyChoose'
import HowItWorks from './sections/HowItWorks'
import TrustVisualSection from './sections/TrustVisualSection'
import SecuritySection from './sections/SecuritySection'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import CustomerSupport from './sections/CustomerSupport'

export default function App() {
  useReveal()

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
    CustomerSupport,
  ]

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="flex flex-col">
        {sections.map((Section, index) => (
          <div key={index}>
            <Section />
            {index !== sections.length - 1 && <Divider />}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  )
}