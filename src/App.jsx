
import Navbar from './compontents/Navbar'
import HeroSEction from './section/HeroSEction'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MessageSection from './section/MessageSection'
import FlavorSection from './section/FlavorSection'
import { useGSAP } from '@gsap/react'
import NutritionSection from './section/NutritionSection'
import BenefitSection from './section/BenefitSection'
import TestimonialSection from './section/TestimonialSection'
import FooterSection from './section/FooterSection'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    })
  });


  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSEction />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <FooterSection />
        </div>
      </div>
      
    </main>
  )
}

export default App
