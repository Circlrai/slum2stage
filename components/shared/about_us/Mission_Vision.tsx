'use client';

import React from 'react';
import { CloudinaryImage } from '@/utils';
import { Image } from '@heroui/image';
import Copy from '../navigation/Text_Reveal_Animation';

interface MissionProps {
  cloudinaryPublicId: string;
  fallbackImage: string;
  imagePosition: 'top' | 'bottom';
  title: string;
  description: string;
  position: 'left' | 'right';
}

const content: MissionProps[] = [
  {
    cloudinaryPublicId: 'Slum2Stage_Website/bottom_xkg8oc',
    fallbackImage: '/assets/images/about-us/bottom.png',
    imagePosition: 'bottom',
    title: 'mission',
    description:
      'The mission for Slum to Stage is to build safe communities and capacities of children and young adults, equipping them with the artistic, social, behavioral and emotional skills needed to make them better creative and holistic individuals in their communities.',
    position: 'right',
  },
  {
    cloudinaryPublicId: 'Slum2Stage_Website/top_bzrobq',
    fallbackImage: '/assets/images/about-us/top.png',
    imagePosition: 'top',
    title: 'vision',
    description:
      'We envision a society in which children and young adults are mentally safe, treated with respect and dignity, and have equal opportunities to activate, develop and pursue their talents and artistic abilities, while excelling in their academics.',
    position: 'left',
  },
];

export const Mission_Vision: React.FC = () => {
  return (
    <section className="hidden lg:flex w-full bg-smoke_white min-h-screen py-20 flex-col space-y-16">
      <div className="max-w-7xl mx-auto py-12 gap-8 md:gap-16 mb-8 px-4 md:px-8 lg:px-8 flex flex-col items-center justify-center">
        {content.map((item, index) => (
          <div
            key={index}
            className={`flex w-full items-center justify-between gap-10 mb-10 ${item.position === 'right' ? 'flex-row' : 'flex-row-reverse'
              }`}
          >
            <div className="w-1/2">
              <Image
                loading="lazy"
                src={item.fallbackImage}
                alt={`${item.title} image`}
                className={`w-full h-auto object-cover rounded-lg ${item.imagePosition === 'top' ? 'mb-0' : 'mt-4'
                  }`}
              />
            </div>

            <div className="w-1/2 text-start pt-10">
              <Copy>
                <h2 className="text-5xl lg:text-[64px] font-sf-display font-semibold capitalize mb-6 font-sf-display text-slum_gray_800">
                  {item.title}
                </h2>
              </Copy>

              <Copy>
                <p className="text-lg lg:text-[25px] leading-[32px] text-slum_gray_600 font-sf-display font-normal w-[80%]">
                  {item.description}
                </p>
              </Copy>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
