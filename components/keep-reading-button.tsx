"use client"
import { useState } from "react"
import { IconChevronRight, IconArrowRight } from "@tabler/icons-react"

export default function KeepReadingButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group inline-flex h-9 w-36 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-sm border border-input bg-background px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative ${
        hovered ? "border-gray-300 bg-stone-50 shadow-sm" : "shadow-sm"
      }`}
    >
      <span className="inline-flex items-center transition-colors duration-300">
        Keep Reading
        <span className="ml-1 relative inline-block size-4">
          <IconChevronRight
            className={`absolute left-0 top-0 size-4 transition-transform duration-300 ${
              hovered ? "-translate-x-4 opacity-0" : "translate-x-0 opacity-100"
            }`}
            size={16}
            stroke={1.5}
          />
          <IconArrowRight
            className={`absolute left-0 top-0 size-4 transition-transform duration-300 ${
              hovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            }`}
            size={16}
            stroke={1.5}
          />
        </span>
      </span>
    </button>
  )
}
