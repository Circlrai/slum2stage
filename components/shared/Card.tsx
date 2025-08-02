'use client'

import { Card, CardFooter, CardHeader, Image } from '@heroui/react'

export const Program_Card = ({
  title,
  image,
  bgColor = '#000',
  description,
}: {
  title: string
  image?: string
  bgColor?: string
  description?: string
}) => {
  return (
    <Card className="relative h-[400px] overflow-hidden cursor-pointer group">

      {/* Background Image */}
      {image && (
        <Image
          removeWrapper
          loading="lazy"
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
      )}

      {/* Hover Blue Layer */}
      <div className="absolute inset-0 z-10 bg-transparent group-hover:bg-[#44B5D0] transition-colors duration-300"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-20"></div>

      {/* Header */}
      <CardHeader className="absolute z-30 top-1 flex-col !items-start p-4">
        <p className="text-base lg:text-[42px] text-white uppercase font-bold font-sans rounded-md leading-snug lg:leading-[36px]">
          {title}
        </p>
      </CardHeader>

      {/* Footer (Reveal on Hover) */}
      <CardFooter className="absolute bottom-0 z-30 text-white p-4
       opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm lg:text-[24px] font-sans font-normal">
        {description}
      </CardFooter>
    </Card>
  )
}
