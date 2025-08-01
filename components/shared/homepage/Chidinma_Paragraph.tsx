import React from "react";

interface ChidinmaParagraphProps {
  paragraph: string;
  className?: string;
}

export const Chidinma_Paragraph = ({ paragraph, className = "" }: ChidinmaParagraphProps) => {
  return (
    <div className={`w-full flex ${className}`}>
      <p className="font-sans font-normal text-white text-sm lg:text-2xl leading-[36px] lg:leading-[32px] lg:max-w-lg">
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