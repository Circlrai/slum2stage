"use client"

import {
  Chidinma_Story,
  Offerings,
  Our_programs,
  Register_Form,
  Timeline,
  Testimonial_Carousel,
  Who_We_Are,
  Partners,
  HeroSlider,
  News_Section
} from '@/components/shared'
import React from 'react'
import ReactLenis from 'lenis/react'





const HomeView = () => {


  return (
    <>
      <ReactLenis root>
        <HeroSlider />
        <Who_We_Are />
        <Chidinma_Story />
        <News_Section />
        <Offerings />
        <Our_programs />
        <Timeline />
        <Testimonial_Carousel />
        <Partners />
        <Register_Form />
      </ReactLenis>
    </>
  )
}

export default HomeView