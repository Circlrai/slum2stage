import React from "react";
import Copy from "../navigation/Text_Reveal_Animation";

interface ChidinmaParagraphProps {
  paragraph: string;
  className?: string;
}

export const Chidinma_Paragraph = ({ paragraph, className = "" }: ChidinmaParagraphProps) => {
  return (
    <div className={`w-full flex ${className}`}>
      <p className="font-sans font-normal text-sm lg:text-base leading-[32px] lg:leading-[38px] text-white">
        {paragraph.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};