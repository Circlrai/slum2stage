"use client"

import { Image } from "@heroui/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Chidinma_Paragraph } from "./Chidinma_Paragraph"
import Copy from "../navigation/Text_Reveal_Animation"

const Chidinma_Story = () => {
  const router = useRouter()

  const handleFullStory = () => {
    router.push("/news")
  }

  return (
    <section className="w-full bg-secondary py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="space-y-2 mb-8 lg:mb-12 lg:ps-[4%]">
          <p className="text-[#FFFCFB] text-sm lg:text-base font-medium font-sf-display">Why we do what we do</p>
          <h2 className="text-[#FFFCFB] text-3xl lg:text-5xl font-bold font-sf-display">Chidinma&apos;s Story</h2>
          <p className="text-[#FFFCFB] text-sm lg:text-base font-sf-display">A Student in the program</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-start">
          {/* Left Column - Image */}
          <div className="hidden lg:flex w-full lg:w-1/2 h-full lg:-ml-[4%]">
            <div className="overflow-hidden h-full w-full">
              <Image
                src="/assets/images/chidinma.png"
                alt="Chidinma and other students"
                width={800}
                height={800}
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="block lg:hidden relative w-full aspect-square -top-2">
            <Image
              loading="lazy"
              src="/assets/images/chidinma-mobile.png"
              className="object-cover"
              alt="chidinma-mobile"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 space-y-4 text-[#FFFCFB] lg:-ml-[5%] lg:max-w-xl -mt-8 lg:-mt-0">
            <Copy delay={0.3}>
              <p className="font-sf-text font-normal text-sm lg:text-base leading-[32px] lg:leading-[38px] text-[#FFFCFB]">
                Chidimma is a seven-year-old girl living in a small community in Abuja. She attends an affordable government school in Gwarimpa. Before Chidimma leaves for school on most days, her parents are usually engaged in heated arguments. Although she is seated in class.
              </p>
            </Copy>
            <Copy delay={0.4}>
              <p className="font-sf-text font-normal text-sm lg:text-base leading-[32px] lg:leading-[38px] text-[#FFFCFB]">
                Chidimma&apos;s mind wanders off reliving her experiences at home and dreaming of a life under different circumstances. Several times, she imagines herself on a stage, dancing to a crowd or, to her own shadow, twirling and taking giant leaps with the aim of reaching for the stars. On these days, she is snapped back to reality by her teacher&apos;s sudden yell.
              </p>
            </Copy>
            <Copy delay={0.5}>
              <p className="font-sf-text font-normal text-sm lg:text-base leading-[32px] lg:leading-[38px] text-[#FFFCFB]">

                {`This is often followed by a question asked for the sole purpose of humiliating her for 'lack of attention' in class.`}

              </p>
            </Copy>

            <Copy delay={0.6}>
              <p className="font-sf-text font-normal text-sm lg:text-base leading-[32px] lg:leading-[38px] text-[#FFFCFB]">
                Chidimma is corrected with compassion by her dance instructor and teammates, further emphasizing the importance of team work. Chidmma is also encouraged to create dance routines of her own which she teaches to the other dancers. This has brought about a significant shift and increase in her confidence and self-esteem.
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chidinma_Story