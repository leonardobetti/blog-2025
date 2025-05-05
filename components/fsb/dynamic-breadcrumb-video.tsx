"use client"

import { useEffect, useRef, useState } from "react"

export default function DynamicBreadcrumbVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener("loadeddata", () => {
        setIsLoaded(true)
      })

      // Force load the video
      video.load()
    }

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => {
          setIsLoaded(true)
        })
      }
    }
  }, [])

  return (
    <div className="overflow-hidden rounded-lg relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-sm text-gray-500">Loading video...</p>
        </div>
      )}
      <video
        ref={videoRef}
        className={`h-full w-full object-cover ${isLoaded ? "opacity-100" : "opacity-0"}`}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        preload="auto"
      >
        <source src="/fsb/FSB_DinamicBread.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
