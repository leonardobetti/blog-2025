"use client"

import { DotPattern } from "@/components/magicui/dot-pattern"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import Image from "next/image"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog"

export default function SectionTripleImages() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Design Project 1",
      gradient: "from-[#2D2D2D] to-[#1A1A1A]",
    },
    {
      src: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Design Project 2",
      gradient: "from-[#3D1D35] to-[#2A0F24]",
    },
    {
      src: "https://images.unsplash.com/photo-1618556658017-fd9c732d1360?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Design Project 3",
      gradient: "from-[#1D3A3D] to-[#0F2A2D]",
    },
  ]

  return (
    <section className="mx-auto mt-0 grid max-w-screen-xl grid-cols-1 divide-x divide-y border-t border-b sm:grid-cols-3 sm:divide-y-0 sm:border-x">
      {images.map((image, index) => (
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
            <div className={cn("absolute inset-0 bg-gradient-to-b", image.gradient)}></div>

            <MorphingDialog
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <MorphingDialogTrigger>
                <div className="relative h-full w-full cursor-pointer">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </MorphingDialogTrigger>

              <MorphingDialogContainer>
                <MorphingDialogContent className="relative">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-auto w-full max-w-[90vw] rounded-md object-contain lg:h-[90vh]"
                  />
                </MorphingDialogContent>

                <MorphingDialogClose
                  className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-2 shadow-md"
                  variants={{
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { delay: 0.3, duration: 0.1 },
                    },
                    exit: { opacity: 0, transition: { duration: 0 } },
                  }}
                >
                  <X className="h-5 w-5 text-gray-700" />
                </MorphingDialogClose>
              </MorphingDialogContainer>
            </MorphingDialog>
          </div>
        </div>
      ))}
    </section>
  )
}
