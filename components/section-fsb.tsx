import { DotPattern } from "@/components/magicui/dot-pattern"
import { cn } from "@/lib/utils"
import KeepReadingButton from "@/components/keep-reading-button"
import Link from "next/link"
import Image from "next/image"

export default function SectionFSB() {
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
            src="https://images.unsplash.com/photo-1599202889720-cd3c0833efa1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="FSB Nest Design System"
            loading="lazy"
            width={900}
            height={600}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex h-full flex-col items-start justify-between gap-4 border-t p-8 hover:bg-slate-50 sm:border-t-0 sm:border-l">
        <div className="flex flex-col gap-2">
          <small className="text-muted-foreground">B2B Betting Provider</small>
          <h2 className="text-3xl font-bold tracking-tight">Maintaining FSB Nest Design System</h2>
          <p className="text-muted-foreground">
            Enhancing the visual and interactive elements of the user experience, while maintaining consistency and
            scalability across our product range and platforms.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Link href="/fsb">
            <KeepReadingButton />
          </Link>
        </div>
      </div>
    </section>
  )
}
