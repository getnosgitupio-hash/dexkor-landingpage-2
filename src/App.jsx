import React, { lazy, Suspense } from 'react'

// Normal Load (Above the Fold)
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Secodary from './components/Secondary'

// Lazy Loaded Components
const Features = lazy(() => import('./components/Features'))
const Stats = lazy(() => import('./components/Starts'))
const Testimonials = lazy(() => import('./components/Testmonial'))
const CTA = lazy(() => import('./components/Cta'))
const Footer = lazy(() => import('./components/Footer'))
const Logo = lazy(() => import('./components/Logo'))
const Counter = lazy(() => import('./components/Counter'))
const Comparison = lazy(() =>
  import('./components/ComparisonSection')
)
const CaseStudySection = lazy(() =>
  import('./components/CaseStudySection')
)
const FAQ = lazy(() => import('./components/Faq'))
const FinalSection = lazy(() =>
  import('./components/Final')
)

export default function App() {
  return (
    <div className="overflow-hidden bg-white text-[#0F1B3D]">

      {/* Instant Load */}
      <Navbar />
      <Secodary />
      <Hero />

      {/* Lazy Loaded Sections */}
      <Suspense fallback={null}>

        <Logo />
        <Features />
        <Stats />
        <Testimonials />
        <Counter />
        <Comparison />
        <CaseStudySection />
        <CTA />
        <FAQ />
        <FinalSection />
        <Footer />

      </Suspense>

    </div>
  )
}