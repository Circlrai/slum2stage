"use client"

import { Image } from "@heroui/image"
import { Calendar, User } from "lucide-react"
import { BlogPost } from "@/types"
import { ImagesPlacement } from "@/components/shared"

interface BlogPostPageProps {
  post: BlogPost
  // relatedPosts?: BlogPost[]
}

export function SingleNewsPage({ post }: BlogPostPageProps) {

  const showDoubleImage =
    (post.id === "1" && post.slug === "slum-to-stage-karu-orphanage") ||
    (post.id === "2" && post.slug === "unesco-happy-schools-program")


  return (
    <article className="bg-white py-40 w-full flex flex-col items-center justify-center space-y-8">

      <div className="text-center max-w-4xl mx-auto pt-10 space-y-4">
        <h1 className="text-center font-sf-display text-slum_gray_800 text-xl md:text-2xl lg:text-[40px] font-semibold mb-3 uppercase leading-snug">
          {post.title}
        </h1>
        <div className="px-4 lg:px-0 space-y-4">
          <p className="font-sf-display font-medium text-slum_gray_500 text-xs lg:text-sm">{post.excerpt}</p>
          <p className="font-sf-display font-medium text-slum_gray_500 text-xs lg:text-sm">Spreading Smiles Through the #Dance4Smile Program</p>
        </div>
      </div>

      {showDoubleImage && (
        <div className="flex justify-between gap-2">
          <div className="w-full h-[400px] overflow-hidden rounded-none">
            <Image
              loading="lazy"
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-full object-cover rounded-none"
            />
          </div>
          <div className="hidden lg:flex w-full h-[400px] overflow-hidden rounded-none">
            <Image
              loading="lazy"
              src="/assets/images/news-secondary.png"
              alt={`Additional image for ${post.title}`}
              width={800}
              height={400}
              className="w-full h-full object-cover rounded-none"
            />
          </div>
        </div>
      )}

      <div className="w-full mx-auto px-4 py-8 lg:max-w-4xl items-center justify-center space-y-6">
        {!showDoubleImage && (
          <div className="w-full h-full overflow-hidden">
            <Image
              loading="lazy"
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              width={868}
              height={431}
              className="w-full h-full object-cover rounded-[8px]"
            // style={{ maxWidth: "100%" }}
            />
          </div>
        )}
        <div className="flex items-center text-slate-500 mb-8 border-b border-slate-200 pb-4">
          <div className="flex items-center mr-6">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="font-sf-display font-normal">{post.date}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span className="font-sf-display font-normal">{post.author}</span>
          </div>
        </div>

        <div className="prose prose-slate max-w-none lg:prose-lg blog-content font-sans">
          {showDoubleImage ? (
            <ImagesPlacement content={post.content} />
          ) : (
            <div className="text-slum_gray_800 font-sf-display font-normal leading-[36px] text-sm md:text-base lg:text-lg"
              dangerouslySetInnerHTML={{ __html: (post.content) }} />

          )}

        </div>

        {post.id === "9" && post.slug === "dance-for-a-cause" &&
          <div className="w-full h-full overflow-hidden">
            <Image
              loading="lazy"
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              width={868}
              height={431}
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>
        }
        {/* {relatedPosts.length > 0 && (
          <div className="my-20">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        )} */}
      </div>
    </article>
  )
}

