"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { useRef, useEffect, useState } from "react"
import { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/effect-coverflow"

import { EffectCoverflow } from "swiper/modules"
import { Section_Heading } from "../Section_Heading"
import { Avatar } from "@heroui/react"


export const Testimonial_Carousel = () => {
  const swiperRef = useRef<{ swiper: SwiperType } | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper

      const handleSlideChange = () => {
        setActiveIndex(swiper.realIndex)
      }

      swiper.on("slideChange", handleSlideChange)
      swiper.on("init", handleSlideChange)

      return () => {
        swiper.off("slideChange", handleSlideChange)
        swiper.off("init", handleSlideChange)
      }
    }
  }, [])

  // Function to determine slide position
  const getSlidePosition = (index: any) => {
    if (index === activeIndex) {
      return "center"
    } else if (index === (activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)) {
      return "left"
    } else if (index === (activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)) {
      return "right"
    } else {
      return "hidden"
    }
  }

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-8 lg:space-y-12">
        <Section_Heading lgSize="56px" title="Testimonials" />

        <Swiper
          ref={swiperRef}
          loop={true}
          speed={800}
          effect="coverflow"
          grabCursor={true}
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          coverflowEffect={{
            rotate: -20,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => {
            const position = getSlidePosition(index)

            return (
              <SwiperSlide key={index} className="testimonial-slide">
                <div className="p-4 h-full">
                  <div className={`testimonial-card ${position}-position shadow-md h-[300px] md:h-[320px] lg:h-[380px] flex flex-col justify-between`}>
                    <div className="testimonial-content">
                      {testimonial.content.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4 font-sans font-normal text-sm lg:text-base text-slum_gray_600 leading-[32px]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="testimonial-author flex space-x-4 mt-4">
                      <Avatar
                        size="sm"
                        isBordered
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        name={testimonial.author.slice(0, 4)}
                      />
                      <span>{testimonial.author}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

// Testimonial data with paragraphs separated by double line breaks
const testimonials = [
  {
    content:
      "A huge thank you for the incredible impact you’ve had on my daughter, Alice. Over the past year, I’ve watched her grow in confidence, grace, determination, and strength. Her transformation extends beyond ballet—even her academics have improved. She came 1st in her class! \nI’m so proud of her, especially seeing how much joy she finds in dancing and how far she’s come.Alice holds you in such high regard.Your professional and caring approach has earned you deep respect from your students—and from parents like me.",
    author: "Ada's Mum",
  },
  {
    content:
      "The Slum to Stage program helps children connect with their creative and artistic essence. It gives them the opportunity to transcend limitations—and the freedom to become.",
    author: "Dr Kaffy Shafau (DANCE BOSS)",
  },
  {
    content: "Slum to Stage is bridging the gap between aspiring dancers and the captivating world of ballet. They deserve commendation for their inclusive approach to training. Unlike many traditional ballet schools, Slum to Stage actively encourages participation from all backgrounds regardless of gender, socio-economic status, or previous dance experience making ballet accessible to a much wider audience",
    author: "Temitayo Ogunsusi",
  },
  {
    content: "Thank you for bringing out the best in Ada.",
    author: "Ada's Mum",
  },
  {
    content:
      "Ballet is rarely accessible in this part of the world. It’s truly commendable that Slum to Stage is giving children the opportunity to experience and learn this captivating dance style",
    author: "Anonymous",
  },
]
