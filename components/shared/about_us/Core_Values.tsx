"use client";

import { Flag, Droplet, Diamond, CircleUser, Heart } from "lucide-react"
import { PiUsersThree } from "react-icons/pi";
import { TbBrush } from "react-icons/tb";
import { Section_Heading } from "../Section_Heading"
import Copy from "../navigation/Text_Reveal_Animation";



export function CoreValues() {
  const values = [
    { name: "Teamwork", icon: <PiUsersThree className="text-primary w-6 h-6 lg:w-8 lg:h-8" /> },
    { name: "Creativity", icon: <TbBrush className="text-primary w-6 h-6 lg:w-8 lg:h-8" /> },
    { name: "Perseverance", icon: <Flag className="text-primary w-6 h-6 lg:w-8 lg:h-8" /> },
    { name: "Discipline", icon: <Heart className="text-primary w-6 h-6 lg:w-8 lg:h-8" /> },
    { name: "Self-esteem", icon: <Droplet className="text-primary w-6 h-6 lg:w-8 lg:h-8" /> },
    { name: "Integrity", icon: <Diamond className="text-primary w-6 h-6 lg:w-8 lg:h-8" /> },
    { name: "Love", icon: <CircleUser className="text-primary w-6 h-6 lg:w-8 lg:h-8" /> }
  ]

  // Split values into two groups for desktop layout
  const topRowValues = values.slice(0, 4);
  const bottomRowValues = values.slice(4);

  return (
    <section className="bg-[#FFF8F5] w-full py-20 flex flex-col items-center justify-center space-y-8">
      <Section_Heading lgSize="56px" title='Our Values' />
      <div className="max-w-5xl mx-auto p-4 w-full">
        {/* Mobile view - 2 column grid with centered last item */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {values.map((value) => (
              <div
                key={value.name}
                className={`flex items-start gap-6 p-2 
                  ${values.length % 2 !== 0 && value === values[values.length - 1] ? 'col-span-2' : ''}`}
              >
                <Copy>
                  {value.icon}
                  <span className="text-gray-800 font-medium font-sans text-[28px]">{value.name}</span>
                </Copy>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view - original layout with two rows */}
        <div className="hidden md:flex flex-col w-full items-center">
          <div className="flex flex-col justify-center items-center w-full space-y-4">
            <div className="grid grid-cols-2 gap-8 mx-auto px-8 justify-items-center">
              {topRowValues.map((value) => (
                <div key={value.name} className="flex items-center gap-2">
                  {value.icon}
                  <span className="text-gray-800 font-normal font-sf-display text-[46px]">{value.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center w-full gap-6">
              {bottomRowValues.map((value) => (
                <div key={value.name} className="flex items-center justify-center gap-2">
                  {value.icon}
                  <span className="text-gray-800 font-normal font-sf-display text-[46px]">{value.name}</span>
                </div>
              ))}
            </div>
          </div>


        </div>

      </div>
    </section>
  )
}