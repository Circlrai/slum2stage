"use client"

import Link from "next/link"
import { BlogPost } from "@/types"
import { Card, Image } from "@heroui/react"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="bg-white overflow-hidden border-none shadow-none">
      <Link href={`/news/${post.slug}`} className="group block">
        <div className="overflow-hidden">
          <Image
            loading="lazy"
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            width={400}
            height={300}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h2 className="text-sm md:text-base lg:text-xl font-sf-display font-normal text-slum_gray_800 font-sans line-clamp-2 hover:text-primary">{post.title}</h2>
          {/* <p className="text-slum_gray_400 line-clamp-3 mb-3">{post.excerpt}</p> */}
          {/*  <div className="flex justify-between items-center text-sm text-slate-500">
            <span>{post.date}</span>
            <span className="text-teal-600 font-medium">Read more</span>
          </div> */}
        </div>

      </Link>
    </Card>

  )
}
