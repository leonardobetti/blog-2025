import { DotPattern } from "@/components/magicui/dot-pattern"
import { cn } from "@/lib/utils"
import KeepReadingButton from "@/components/keep-reading-button"
import Link from "next/link"
import Image from "next/image"

export default function SectionSpears() {
  return (
    <section className="mx-auto mt-0 grid max-w-screen-xl divide-x divide-y border-t border-b sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x">
      <div className="group relative flex items-center justify-center overflow-hidden border-r border-b bg-white p-4 sm:col-span-2 sm:border-b-0">
        <DotPattern
          width={8}
          height={8}
          cx={1}
          cy={1}
          cr={1}
          className={cn("absolute inset-0 z-0 h-full w-full opacity-30")}
        />
        <div className="relative h-[294px] w-full overflow-hidden sm:h-[368px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#EF4141] via-[#A71512] to-[#8F1E1E]"></div>
          <Image
            src="/spears/spears_section_image.png"
            alt="Spears 500 Wealth Management Platform"
            loading="lazy"
            width={900}
            height={600}
            className="absolute inset-0 h-full w-full scale-115 object-contain object-bottom transition-transform duration-300 group-hover:scale-125"
          />
        </div>
      </div>
      <div className="flex h-full flex-col items-start justify-between gap-4 border-t p-8 hover:bg-slate-50 sm:border-t-0 sm:border-l">
        <div className="flex flex-col gap-2">
          <small className="text-muted-foreground">Media Industry</small>
          <h2 className="text-3xl font-bold tracking-tight">Digital Directory for Wealth Advisors</h2>
          <p className="text-muted-foreground">
            Creating a comprehensive platform for ultra-high-net-worth clients to find advisers based on expertise and
            location, while providing advisers exposure to potential clients.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Link href="/spears" scroll={true}>
            <KeepReadingButton />
          </Link>
        </div>
      </div>
    </section>
  )
}
