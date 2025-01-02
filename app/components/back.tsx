'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ChevronLeft, ArrowLeft } from 'lucide-react'

const ChevronIcon = ({ isHovered }: { isHovered: boolean }) => (
  <div className="relative w-4 h-4 me-2">
    <div
      className={`absolute transition-all duration-300 ${
        isHovered ? '-translate-x-1 opacity-0' : 'opacity-100'
      }`}
    >
      <ChevronLeft className="w-4 h-4" />
    </div>
    <div
      className={`absolute transition-all duration-300 ${
        isHovered ? 'opacity-100' : 'translate-x-1 opacity-0'
      }`}
    >
      <ArrowLeft className="w-4 h-4" />
    </div>
  </div>
)

export function BackButton() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      type="button"
      onClick={() => router.back()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center mb-8 text-sm font-medium text-gray-700 transition-colors duration-200 cursor-pointer hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
    >
      <ChevronIcon isHovered={isHovered} />
      Back
    </button>
  )
}
