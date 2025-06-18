import React from 'react'
import Navbar from './compontents/Navbar'
import HeroSEction from './section/HeroSEction'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <Navbar />
      <HeroSEction />
      <div className="h-dvh border border-red-500"></div>
    </main>
  )
}

export default App
