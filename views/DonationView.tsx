import React from 'react'
import { Section_Paragraph } from '@/components/shared/Section_Paragraph'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { Section_Heading } from '@/components/shared'
import Copy from '@/components/shared/navigation/Text_Reveal_Animation'

const lists = [
  {
    label: 'Account Number',
    value: '1026629149',
  },
  {
    label: 'Bank Name',
    value: 'United Bank for Africa',
  },
  {
    label: 'Account Name',
    value: 'Slum to Stage Africa',
  },
]

export const DonationView = () => {
  return (
    <section className="w-full">
      {/* Hero Image */}
      <div className="relative h-auto lg:h-[60vh] w-full">
        <Image
          loading="lazy"
          src="/assets/images/slide-4.jpg"
          alt="Slum to Stage donation banner"
          className="w-full h-full object-cover"
          fill
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Donation Section */}
      <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto px-6 bg-white pt-40 lg:pt-20 pb-40 gap-20">
        <div className="space-y-4 lg:w-1/2 ps-0 lg:ps-[3.5%] ">
          <Section_Heading lgSize='56px' title='Make a donation' />
          <Copy>
            <p className={`w-full lg:max-w-md font-sf-display font-normal text-slum_gray_600 text-sm lg:text-[32px] leading-[36px] lg:leading-[32px] `}>
              Slum to Stage uses dance to retain the interest of 290 children in schools.
            </p>
          </Copy>
        </div>

        <div className="flex items-center justify-center lg:w-1/2">
          <Card className="shadow-md p-4 space-y-6 bg-snow_white border-b-2 border-b-secondary max-w-md">
            <CardHeader className="text-start text-xl lg:text-[32px] font-semibold text-slum_gray_800 font-serif">
              Donation (₦)
            </CardHeader>

            <CardContent className="space-y-6">
              {lists.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-x-4 text-sm lg:text-xl text-gray-700 font-sf-display "
                >
                  <div className=" font-normal">{item.label}</div>
                  <div className='font-semibold'>{item.value}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
