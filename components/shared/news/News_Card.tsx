"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Copy from "../navigation/Text_Reveal_Animation"

interface NewsCardProps {
  slug: string
  description: string
  image: string
  linkText?: string
}

export function NewsCard({ description, image, slug, linkText = "View more" }: NewsCardProps) {
  const router = useRouter();

  return (
    <Card className="w-full max-w-sm bg-white h-full shadow-none border-none flex flex-col">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative overflow-hidden rounded-lg aspect-[10/12]">

          <Image
            src={image || "/placeholder.svg"}
            alt={slug}
            fill
            className="object-cover"
          />
        </div>

        <div className="py-4 flex flex-col flex-grow">
          <div className="flex-grow">

            <p className="font-sf-text text-sm font-semibold lg:text-base leading-[32px] lg:leading-[32px] text-slum_gray_800 text-start">
              {description}
            </p>

          </div>
          <div className="mt-auto pt-3">
            <Button
              variant="link"
              className="p-0 h-auto text-base text-secondary font-semibold font-sf-display"
              onClick={() => router.push(`/news/${slug}`)}
            >
              {linkText}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card >
  )
}