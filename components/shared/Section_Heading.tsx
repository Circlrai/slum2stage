"use client";

import React from 'react';
import Copy from './navigation/Text_Reveal_Animation';

interface SectionHeadingProps {
  title: string;
  color?: string;
  lgSize?: '56px' | '64px';
}


export const Section_Heading = ({
  title,
  color = "slum_gray_800",
  lgSize = "64px",
}: SectionHeadingProps) => {

  const lgSizeClass = lgSize === "56px" ? "lg:text-[56px]" : "lg:text-[64px]";



  return (
    <div>
      <Copy>
        <h2
          className={`font-sf-display font-semibold text-${color} text-[28px] md:text-[32px] ${lgSizeClass}`}
        >
          {title}
        </h2>
      </Copy>
    </div>
  );
};
