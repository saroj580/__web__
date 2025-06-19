import React from 'react'
import Navbar from './compontents/Navbar'
import HeroSEction from './section/HeroSEction'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MessageSection from './section/MessageSection'
import FlavorSection from './section/FlavorSection'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <Navbar />
      <HeroSEction />
      <MessageSection />
      <FlavorSection />
      <div className=' h-dvh border border-red-500'></div>
    </main>
  )
}

export default App
