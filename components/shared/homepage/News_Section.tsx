"use client";

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { NewsData } from '@/json';
import { NewsCard } from '../news/News_Card';
import { Section_Heading } from '../Section_Heading';
import { Section_Paragraph } from '../Section_Paragraph';
import Copy from '../navigation/Text_Reveal_Animation';
import { Chidinma_Paragraph } from './Chidinma_Paragraph';




export const News_Section = () => {
  return (
    <section className="w-full bg-white pt-12">
      <div className="max-w-7xl mx-auto items-start justify-start lg:pb-20 lg:px-16 px-4">
        <div className="mb-8 ps-[2%]">

          <Copy>
            <p className="font-sf-display font-semibold text-base lg:text-xl leading-[32px] lg:leading-[38px] text-[#1E1E1E]">
              News
            </p>
            <h2
              className={`font-sf-display font-semibold text-[#1E1E1E] text-[28px] md:text-[32px] leading-snug`}
            >
              A quick recap of what <br /> we have been working on
            </h2>
          </Copy>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {NewsData.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-8 basis-10/12 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <NewsCard
                  description={item.excerpt}
                  image={item.imageUrl}
                  slug={item.slug}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}


