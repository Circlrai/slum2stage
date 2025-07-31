"use client"

import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Copy from './navigation/Text_Reveal_Animation'

interface ProgrmProps {
  heading: string
  spanText: string
  description1: string
  description2: string
  description3?: string
  description4?: string
  description5?: string
  image: string
  quote: string
  quoteColor?: string
  author?: string
  bgColor: string
  borderColor?: string
}

export const Our_Program: React.FC<ProgrmProps> = ({
  heading,
  spanText,
  description1,
  description2,
  description3,
  description4,
  description5,
  image,
  quote,
  author,
  quoteColor = "#662200",
  bgColor,
  borderColor

}) => {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <div
        className={`max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:space-x-28 pb-8 lg:py-24`}>

        <div className='pt-6 lg:-mt-4 w-full lg:w-1/2 order-2 lg:order-1'>
          <div>
            <Copy>
              <h2 className={`font-sf-display font-bold text-slum_gray_800 text-xl md:text-[32px] lg:text-72 uppercase mb-6`}>
                {heading}&nbsp;<span className='font-thin text-gray-400'>{spanText}</span>
              </h2>
            </Copy>
          </div>

          <Copy delay={0.2}>
            <p className={`text-justify font-sf-display font-normal text-slum_gray_800 text-sm md:text-base lg:text-[24px] leading-[36px] lg:leading-[32px]`}>
              {description1}
            </p>
          </Copy>
          <br />
          <Copy delay={0.4}>
            <p className={`text-justify font-sf-display font-normal text-slum_gray_800 text-sm md:text-base lg:text-[24px] leading-[36px] lg:leading-[32px]`}>
              {description2}
            </p>
          </Copy>
          <br />
          <Copy delay={0.6}>
            <p className={`text-justify font-sf-display font-normal text-slum_gray_800 text-sm md:text-base lg:text-[24px] leading-[36px] lg:leading-[32px]`}>
              {description3}
            </p>
          </Copy>
          <br />
          <Copy delay={0.8}>
            <p className={`text-justify font-sf-display font-normal text-slum_gray_800 text-sm md:text-base lg:text-[24px] leading-[36px] lg:leading-[32px]`}>
              {description4}
            </p>
          </Copy>
          <br />
          <Copy delay={0.10}>
            <p className={`text-justify font-sf-display font-normal text-slum_gray_800 text-sm md:text-base lg:text-[24px] leading-[36px] lg:leading-[32px]`}>
              {description5}
            </p>
          </Copy>
        </div>

        {/* Image and Quote */}
        <div className='w-full lg:w-1/2 flex flex-col space-y-6 order-1 lg:order-2'>
          {/* Image */}
          <div className='mb-6'>
            <Image
              loading='lazy'
              src={image}
              alt={heading}
              className={`object-cover z-0 w-full`}
              width={1000}
              height={1000}
            />
          </div>

          {/* Quote */}
          <div
            className="relative flex flex-col space-y-2 mx-auto text-start"
            style={{ color: quoteColor }}
          >

            <div className="flex relative text-lg font-sf-display italic leading-relaxed">
              {/* <FaQuoteLeft className="w-4 h-4 opacity-70 flex-shrink-0 mt-1 mr-2" /> */}

              <q >
                {quote.split("\n").map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}

                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </q>

            </div>
            {/* <FaQuoteRight className="w-4 h-4 opacity-70 ml-auto mt-2" /> */}


            {author && (
              <p className='font-sf-display font-semibold pl-6'>&mdash;{author}</p>
            )}


          </div>
        </div>
      </div>
    </div>

  )
}