import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Starts'
import Testimonials from './components/Testmonial'
import CTA from './components/Cta'
import Footer from './components/Footer'
import Secodary from './components/Secondary'
import Logo from './components/Logo'
import Counter from './components/Counter'
import Comparison from './components/ComparisonSection'
import CaseStudySection from './components/CaseStudySection'
import FAQ from './components/Faq'
import FinalSection from './components/Final'
export default function App() {
  return (
    <div className="overflow-hidden bg-white text-[#0F1B3D]">
      <Navbar />
      <Secodary/>
      <Hero />
      <Logo/>
      <Features />
      <Stats />
      <Testimonials />
      <Counter/>
  
      <Comparison />
      <CaseStudySection/>
      <CTA />
      <FAQ/>
      <FinalSection/>
      <Footer />
    </div>
  )
}
