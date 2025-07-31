"use client";

import React from 'react'
import { Section_Heading } from '../Section_Heading'
import Image from 'next/image'
import Copy from '../navigation/Text_Reveal_Animation'


const lists = [
  "We opened the 2025 performance season with a performance at the World Bank Nigeria HQ, in artvocacy that northern girls be given improved access to education.",
  "We landed our second partnership with Create my Future Foundation to provide training spaces for children living in Garki axis of Abuja.",
  "We performed at the Int’l Women’s Day event organized by TEDx Maitama Opened for the World Autism Day"
]

const Presently = () => {
  return (
    <section className='w-full flex flex-col'>
      <div className='w-full  px-0'>
        <Image
          loading='lazy'
          src="/assets/images/about-us/illimi-danc-education.png"
          alt='presntly'
          className='w-full rounded-none h-full object-cover'
          width={1000}
          height={800}
        />
      </div>
      <div className='max-w-7xl flex flex-col lg:flex-row items-start justify-between 
       mx-auto py-12 px-4 md:px-8 lg:px-16 pt-12'>
        <div className='mb-4 lg:mb-0'>
          <Section_Heading lgSize='56px' title='Presently' />
        </div>

        <div className='ps-4 lg:ps-[33.3%]'>
          <ol className='space-y-6 list-decimal'>
            {lists.map((list, index) => (
              <li key={index} className='font-sf-display font-normal text-sm lg:text-[25px] leading-[32px]'>
                {list}
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  )
}

export default Presently
