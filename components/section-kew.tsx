import { DotPattern } from "@/components/magicui/dot-pattern"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function SectionKew() {
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
          <Image
            src="/kew/1-kew.webp"
            alt="Kew Gardens Temperate House"
            loading="lazy"
            width={900}
            height={600}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex h-full flex-col items-start justify-between gap-4 border-t p-8 hover:bg-slate-50 sm:border-t-0 sm:border-l">
        <div className="flex flex-col gap-2">
          <small className="text-muted-foreground">Latest feature</small>
          <h2 className="text-3xl font-bold tracking-tight">Kew Gardens Redesign</h2>
          <p className="text-muted-foreground">
            A comprehensive redesign of the Kew Gardens digital experience, focusing on improving visitor engagement and
            showcasing the botanical collections in an immersive way.
          </p>
        </div>
        <div className="flex items-center gap-1">
          {/* <KeepReadingButton /> */}
          <button className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 underline-offset-4 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            Anytime soon
          </button>
        </div>
      </div>
    </section>
  )
}
