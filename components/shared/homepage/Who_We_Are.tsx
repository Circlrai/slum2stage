"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Section_Heading } from "../Section_Heading"
import Button from "../Slum_Button"
import Copy from "../navigation/Text_Reveal_Animation"



export const Who_We_Are = () => {
  const router = useRouter()

  return (
    <section className="min-h-screen bg-white w-full">
      <div className="flex flex-col lg:flex-row relative w-full mx-auto">
        {/* LEFT Content */}
        <div className="w-full lg:w-1/2 lg:ps-[12%] py-12 px-4 lg:px-0">
          {/* Section 1 - Who Are we */}
          <div className="mb-16 lg:mb-24">
            <Copy>
              <h2
                className={`font-sf-display font-semibold text-[#1E1E1E] text-[32px] lg:text-[72px] mb-4 lg:mb-0`}
              >
                Who we are
              </h2>
            </Copy>

            <div className="mb-6 w-full lg:max-w-md lg:ps-[2%]">
              <Copy>
                <p className="text-gray-700 text-base md:text-lg lg:text-[25px] leading-[32px] mb-2 font-normal font-sf-display w-full">
                  <strong>Slum to Stage </strong> is a <span className="text-cyan-400 font-medium">creative arts initiative</span> that
                  provides foundational and intermediate dance training to children and young adults in under-resourced
                  communities across Abuja.
                </p>
              </Copy>
            </div>
            <div className="mb-8 w-full lg:max-w-md lg:ps-[2%]">
              <Copy delay={0.2}>
                <p className="text-gray-700 text-base md:text-lg lg:text-[25px] leading-[32px] font-normal font-sf-display w-full">
                  Through dynamic performing and creative arts programs, we empower participants to grow both artistically
                  and academically, unlocking their potential and building confidence for a brighter future.
                </p>
              </Copy>
            </div>
            <div className="">
              <Copy>
                <Button variant="pill-outlined" text="Learn More" onClick={() => router.push("/about-us")} />
              </Copy>
            </div>
          </div>

          {/* Section 2 - What we do */}
          <div className="mb-16">
            <Copy delay={0.3}>
              <h2
                className={`font-sf-display font-semibold text-[#1E1E1E] text-[28px] md:text-[32px] lg:text-[72px] mb-4 lg:mb-0`}
              >
                What we do
              </h2>
            </Copy>

            <div className=" mb-6 w-full lg:max-w-md lg:ps-[2%]">
              <Copy delay={0.4}>
                <p className="text-gray-700 text-base md:text-lg lg:text-[25px] leading-[32px] font-normal font-sf-display">
                  <strong> At Slum to Stage,</strong> we offer preliminary and intermediate dance training to children and young adults in{" "}
                  <span className="text-cyan-400 font-medium">underserved communities across Abuja</span>.
                </p>
              </Copy>
            </div>
            <div className="mb-8 w-full lg:max-w-md lg:ps-[2%]">
              <Copy delay={0.5}>
                <p className="text-gray-700 text-base md:text-lg lg:text-[25px] leading-[32px] font-normal font-sf-display">
                  Our programs use the power of performing and creative arts to inspire growth, boosting both academic
                  performance and artistic expression. We create safe spaces where young people can discover their
                  talents, build discipline, and develop confidence through dance and movement.
                </p>
              </Copy>
            </div>
            <div className="">
              <Button variant="pill-outlined" text="Learn More" onClick={() => router.push("/about-us")} />
            </div>
          </div>
        </div>

        {/* RIGHT Sticky Image */}
        <div
          className="hidden w-full lg:w-1/2 h-screen sticky top-0 -bottom-4 lg:flex items-center justify-center bg-gray-50"
        >
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/who-we-are.png"
              alt="Children and young adults in colorful traditional attire performing dance moves"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
