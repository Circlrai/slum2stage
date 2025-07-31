'use client'

import Link from "next/link"
import { TeamType } from "@/types"
import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CloudinaryImage, generateOgImageUrl, getCldImageUrl } from "@/utils"
import { useState } from "react"

interface TeamCardProps {
  team: TeamType
}

export function TeamCard({ team }: TeamCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const cleanPublicId = team.image_public_id.replace('Slum2Stage_Website/', '');

  const placeholderUrl = getCldImageUrl({
    src: cleanPublicId,
    width: 200,
    quality: 10,
    blur: 1000,
    effect: 'colorize:50'
  })

  const ogImageUrl = generateOgImageUrl({
    src: cleanPublicId,
    width: 1200,
    height: 630,
    textOverlays: [
      {
        content: team.name,
        fontSize: 72,
        fontWeight: 'bold',
        offsetY: -100,
      },
      {
        content: team.position,
        fontSize: 42,
        offsetY: 0,
      },
    ],
    effects: [{
      background: 'rgb:1a1a2e'
    }]
  });

  return (
    <Card className="relative border-none max-w-[313px] h-full overflow-hidden cursor-pointer group">

      <Link href={`/team/${team.slug}?from=${team.role}`}
        className="block"
        data-og-image={ogImageUrl}
      >
        <div className="overflow-hidden">
          <CloudinaryImage
            public_id={cleanPublicId}
            width={313}
            height={420}
            className={`w-full h-[420px] object-cover transition-transform duration-300 rounded-xl
            group-hover:scale-105 filter grayscale group-hover:grayscale-0 group-hover:filter-none`}
          />
        </div>
      </Link>

      <CardFooter className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute rounded-lg bottom-1 w-full z-10">
        <Button className="font-sans bg-primary text-white flex flex-col w-full p-3 py-8">
          <span className="font-semibold text-lg">{team.name}</span>
          <span className="font-normal text-xs">{team.position}</span>
        </Button>
      </CardFooter>
    </Card>
  )
}