'use client'

import { Image } from '@heroui/image';
import React from 'react'
import Marquee from "react-fast-marquee"

const partners: { image: string }[] = [
  { image: "/assets/images/partners/twirl-africa.svg" },
  { image: "/assets/images/partners/cmf.svg" },
  { image: "/assets/images/partners/transcorp-hilton.svg" },
  { image: "/assets/images/partners/institute-francias.svg" },
  { image: "/assets/images/partners/shushi.svg" },
  { image: "/assets/images/partners/asvol.svg" },
  { image: "/assets/images/partners/ambassador-de-france.svg" },
  { image: "/assets/images/partners/the-brooks-africa.svg" },
  { image: "/assets/images/partners/monoliza.svg" },
]

export const Partners = () => {
  const firstFour = partners.slice(0, 4)
  const lastFive = partners.slice(4)

  return (
    <section className='w-full py-20'>
      <div className='max-w-7xl mx-auto flex flex-col items-center justify-center px-4 lg:px-16 space-y-8 lg:space-y-12'>
        <h1 className='font-sf-display font-semibold text-center text-slum_gray_800 text-[28px] md:text-[32px] lg:text-[56px] mb-8 leading-snug'>
          Made possible by <br />
          those who believe in us.
        </h1>

        {/* Grid with consistent 5 columns */}
        <div className='hidden sm:flex flex-wrap mb-20 items-center justify-center mx-auto max-w-5xl'>
          <div className='col-span-4 col-start-2 grid grid-cols-4 gap-12'>
            {firstFour.map((partner, index) => (
              <Image
                loading='lazy'
                key={`partner-first-${index}`}
                src={partner.image}
                alt='partner-logo'
                width={180}
                height={140}
                className='object-contain max-w-[200px] w-auto h-auto'
              />
            ))}
          </div>
        </div>

        <div className='hidden sm:flex flex-wrap gap-16 items-center justify-center mx-auto'>
          {lastFive.map((partner, index) => (
            <Image
              loading='lazy'
              key={`partner-last-${index}`}
              src={partner.image}
              alt='partner-logo'
              className='object-contain w-full h-full'
            />
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className="flex lg:hidden mt-8 group relative mx-auto w-full sm:w-[1220px] overflow-hidden overflow-y-visible bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <Marquee
            autoFill
            pauseOnHover
            loop={0}
            speed={50}
            direction="left"
            delay={5}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="slide flex max-w-[140px] w-auto h-[70px] overflow-y-hidden lg:h-auto lg:max-w-full lg:w-[180px] px-5 items-center justify-center hover:opacity-100 transition-all duration-200 ease-in-out cursor-grab hover:scale-95"
              >
                <Image
                  loading="lazy"
                  src={partner.image}
                  alt={`partner logo`}
                  width={160}
                  height={50}
                  className="pointer-events-none"
                  style={{ color: "transparent", objectFit: "contain" }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
