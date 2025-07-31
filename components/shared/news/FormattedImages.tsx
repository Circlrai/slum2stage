"use client"

import { Image } from "@heroui/image"
import React from "react"

interface ImagesPlacementProps {
  content: string
}

export function ImagesPlacement({ content }: ImagesPlacementProps) {
  const paragraphs = content.split("</p>").filter(Boolean)

  const imageBlocks = [
    "/assets/images/news/side-1.png",
    "/assets/images/news/side-2.png",
    "/assets/images/news/side-3.png",
    "/assets/images/news/side-4.png"
  ]

  return (
    <div className="relative space-y-6">
      {/* Absolute image overlays */}
      {imageBlocks.map((src, i) => (
        <Image
          loading="lazy"
          key={i}
          src={src}
          alt={`News visual ${i + 1}`}
          className={`
            hidden md:block absolute w-40 h-auto rounded-md z-0
            ${i % 2 === 0 ? "-left-44" : "-right-44"}
            ${i === 0 ? "top-40" : i === 1 ? "top-20" : i === 2 ? "bottom-0" : "bottom-20"}
            `}

        />
      ))}

      {/* Actual text content */}
      {paragraphs.map((para, index) => (
        <div
          key={index}
          className="relative z-10 text-slum_gray_800 font-sf-display font-normal leading-[36px] text-sm md:text-base lg:text-lg"
          dangerouslySetInnerHTML={{ __html: `${para}</p>` }}
        />
      ))}
    </div>
  )
}
