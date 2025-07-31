"use client"

import React from 'react';
import { Section_Heading } from '../Section_Heading';
import { Image } from '@heroui/image';
import NextImage from 'next/image';
import Copy from '../navigation/Text_Reveal_Animation';


interface YearSectionProps {
  year: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
}

const YearSection: React.FC<YearSectionProps> = ({
  year,
  items,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start lg:bg-[#D9D9D9] lg:rounded-lg lg:p-10">
      {/* Text Column */}
      <div>
        <Copy>
          <h2 className="text-2xl lg:text-[56px] font-bold font-sf-display text-[#1E1E1E] pt-2 pb-6">
            {year}.
          </h2>
        </Copy>
        <div className="space-y-3">
          {items.map((item, index) => (
            <Copy delay={0.2} key={index}>
              <p className="flex items-start font-sf-display font-medium text-sm lg:text-[23px] leading-[36px] lg:leading-[32px]">
                {item}
              </p>
            </Copy>
          ))}
        </div>
      </div>

      {/* Image Column */}
      <div className="relative w-full self-stretch overflow-visible flex items-start justify-start pt-[2px] lg:pt-0">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          width={1000}
          height={700}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};



interface YearData {
  year: string;
  items: string[];
  imageSrc: string;
  imageAlt: string
}

const Our_Story: React.FC = () => {
  const yearData: YearData[] = [
    {
      year: "2022",
      items: [
        "The Maiden Event Launch.The initiative was kicked off through a fundraising event which held on the 24th of July, 2022 at the Transcorp Hilton.This event encompassed of performances from child and adult ballet dancers, including beneficiaries of the STS training program, and an art exhibition / charity auction with photo prints illustrating the beauty of ballet, in conjunction with professional beauty and dance photographers like Seun Oderinde and Habila Sani",
        "Arts Exhibition.Exhibited original artistic artworks at the African Creative Market Global, raising funds for children to have free dance trainings. ",
        "Dance Workshops.In collaboration with Adila Dance Acrobatics, Slum to Stage has successful trained over fifty children and young adults in Abuja.Furthermore, a special, free, intensive 3-month training program for more beneficiaries of the STS initiative will launch in January 2023"
      ],
      imageSrc: "/assets/images/about-us/2022.png",
      imageAlt: "2022 accomplishments",
    },
    {
      year: "2023",
      items: [
        "First School Tour.As part of the goal develop the key cognitive and social - emotional skills vital to success in school and work, Slum to Stage embarked on a dance tour, visiting schools across Abuja to create enlightenment and work hand in hand with management & guardians to provide dance training for the students.The School tour started in October 2022, and will continue all the way to the first quarter of 2023.",
        "We had our second Slum to Stage Event, themed Dance through the Eyes of Humanity ",
        "We partnered with the French Embassy and the French Institut in activism against SGBV, during the 16 days activism against SGBV.",
        "We lost our physical training space "
      ],
      imageSrc: "/assets/images/about-us/2023.png",
      imageAlt: "2023 accomplishments",
    },
    {
      year: "2024",
      items: [
        "We performed at TEDx Maitama",
        "We partnered with SHUSHI to provide a space for the children and young adults to train in.",
        "We hosted our third annual event at the congress hall of Transcop Hilton Abuja, opening our doors and giving 30 dancers the chance to perform at the reimagination of Chinua Achebe’s Things Fall Apart. ",
        "We performed to Ty Bello’s “Africa Awake” on invitation by the Olu of Warri to The Kings Banquet, a ceremony that marked the end of the grand opening of Elevate Africa.",
        "Our Executive Director taught dance through the Slum to Stage program to young adults from underserved areas in Benin Republic.",
        "We performed at the Transcorp Hilton Lighting Ceremony.",
        "We partnered with TDL Solutions.",
      ],
      imageSrc: "/assets/images/about-us/2024.png",
      imageAlt: "2024 accomplishments"
    }
  ];

  return (
    <section className='bg-white w-full py-20'>
      <div className='flex flex-col space-y-12 px-4 lg:px-0 items-center justify-center'>
        <Section_Heading lgSize='56px' title='Our Story' />
        <div className="max-w-7xl mx-auto py-8 space-y-20 px-4 md:px-8 lg:px-16">
          {yearData.map((data, index) => (
            <YearSection key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Our_Story;