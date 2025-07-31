import React from 'react'
import { Section_Heading, Section_Paragraph } from '@/components/shared'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { PhoneCall, Mail as Email } from 'lucide-react'
import Image from 'next/image'
import Copy from '@/components/shared/navigation/Text_Reveal_Animation'

const lists = [
  {
    icon: <PhoneCall className='text-white w-6 h-6' />,
    heading: "Call Us",
    description: "If you would like to talk to our team about business inquiries, please reach us at ",
    boldText: "08176231834",
    iconBg: "#44B5D0",
    cardBg: "#F7FCFD"
  },
  {
    icon: <Email className='text-black w-6 h-6' />,
    heading: "Email",
    description: "If you would like to talk to our team about business inquiries, please reach us at ",
    boldText: "info@slum2stage.org",
    iconBg: "#FFBB99",
    cardBg: "#FFF8F5"
  }
]

export const ContactView = () => {
  return (
    <section className='w-full bg-white pt-28 pb-40 lg:pb-0 flex lg:flex-row justify-between'>
      <div className='lg:w-3/5 space-y-10 px-6 py-16 lg:px-14 lg:ps-[12%]'>
        <div className='space-y-4'>
          <Section_Heading title='Contact Us' />
          <Copy>
            <p className={`w-full lg:max-w-md font-sf-display font-normal text-slum_gray_600 text-sm lg:text-[32px] leading-[36px] lg:leading-[32px] `}>
              We intend to keep up with the rapidly changing world and will love to hear from you!
            </p>
          </Copy>
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {lists.map((item, index) => (
            <Card
              key={index}
              className={`border-none p-6 space-y-8 w-full shadow-none`}
              style={{ backgroundColor: item.cardBg }}>
              <CardHeader
                className='flex items-center justify-center w-12 h-12 p-2 rounded-full'
                style={{ backgroundColor: item.iconBg }}
              >
                {item.icon}
              </CardHeader>
              <CardContent className='p-0'>
                <h2 className='font-sf-display font-semibold text-[32px] mb-4'>{item.heading}</h2>
                <p className='font-sans text-sm md:text-base lg:text-lg text-slum_gray_700 leading-7'>
                  {item.description}
                  <strong className='ml-1'>{item.boldText}</strong>
                </p>
              </CardContent>
            </Card>

          ))}
        </div>
      </div>

      <div className='lg:w-2/5 overflow-hidden lg:flex hidden'>
        <div className='w-full h-full aspect-[10/12]'>
          <Image
            src='/assets/images/contact-us.png'
            alt='Contact illustration'
            width={1000}
            height={1000}
            className='w-full h-full object-contain object-right'
            style={{
              marginLeft: 'auto',
              display: 'block',
              maxWidth: 'none'
            }}
          />
        </div>
      </div>

    </section>
  )
}

