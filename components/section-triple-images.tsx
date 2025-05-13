"use client"

import { DotPattern } from "@/components/magicui/dot-pattern"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function SectionTripleImages() {
  const clientImages = [
    {
      src: "/fsb/FSB_Client_1.png",
      alt: "Fitzdares Betting Platform - FSB Client",
      gradient: "from-[#FF4B2B] to-[#FF416C]",
      align: "object-left",
    },
    {
      src: "/fsb/FSB_Client_2.png",
      alt: "QuinnBet Betting Platform - FSB Client",
      gradient: "from-[#1D976C] to-[#93F9B9]",
      align: "object-left",
    },
    {
      src: "/fsb/FSB_Client_3.jpeg",
      alt: "SuperSportBET Betting Platform - FSB Client",
      gradient: "from-[#1E3C72] to-[#2A5298]",
      align: "object-right",
    },
  ]

  return (
    <section className="mx-auto mt-0 grid max-w-screen-xl grid-cols-1 divide-x divide-y border-t border-b sm:grid-cols-3 sm:divide-y-0 sm:border-x">
      {clientImages.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative flex items-center justify-center overflow-hidden bg-white p-4",
            index < 2 ? "border-r border-b sm:border-b-0" : "",
          )}
        >
          <DotPattern
            width={8}
            height={8}
            cx={1}
            cy={1}
            cr={1}
            className={cn("absolute inset-0 z-0 h-full w-full opacity-30")}
          />
          <div className="relative h-[294px] w-full overflow-hidden">
            <div className={cn("absolute inset-0 bg-gradient-to-b", item.gradient)}></div>
            <div className="relative h-full w-full">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                className={cn("object-cover transition-transform duration-300 group-hover:scale-105", item.align)}
                unoptimized
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
