import React from 'react'
import Navbar from './compontents/Navbar'
import HeroSEction from './section/HeroSEction'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MessageSection from './section/MessageSection'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <Navbar />
      <HeroSEction />
      <MessageSection/>
    </main>
  )
}

export default App
