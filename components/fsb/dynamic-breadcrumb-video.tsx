"use client"

import { useEffect, useRef } from "react"

export default function DynamicBreadcrumbVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Attempt to play the video when component mounts
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play()
        } catch (error) {
          console.error("Error playing video:", error)
        }
      }
    }

    playVideo()
  }, [])

  return (
    <div className="overflow-hidden rounded-lg">
      <video ref={videoRef} className="h-full w-full object-cover" autoPlay loop muted playsInline controls={false}>
        <source src="/fsb/FSB_DinamicBread.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
