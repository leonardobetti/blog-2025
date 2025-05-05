"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const FSBClientSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Use placeholder images since we don't have the actual client images
  const images = Array.from({ length: 11 }, (_, i) => `/placeholder.svg?height=500&width=1000&text=FSB+Client+${i + 1}`)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="overflow-hidden rounded-lg">
      <div className="relative aspect-[16/9] w-full">
        {images.map((image, index) => (
          <div
            key={`client-image-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`FSB Client ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FSBClientSlider
