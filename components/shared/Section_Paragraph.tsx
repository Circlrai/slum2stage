"use client";

import React from "react";
import Copy from "./navigation/Text_Reveal_Animation";


interface SectionParagraphProps {
  paragraph: string
  color?: string
  size?: string
}


export const Section_Paragraph = ({
  paragraph,
  color = "slum_gray_900",
  size = "base",
}: SectionParagraphProps) => {


  return (
    <div
      className={`w-full lg:max-w-[437px] text`}
    >
      <Copy>
        <p className={`font-sf-display font-normal text-${color} text-sm lg:text-${size} leading-[36px] lg:leading-[32px]`}>
          {paragraph.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </Copy>
    </div>
  );
};


