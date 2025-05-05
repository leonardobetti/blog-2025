"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { useEffect, useState } from "react"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: RootLayoutProps) {
  // Add state to handle hydration
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#f5f5f5] font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {isClient ? children : null}
        </ThemeProvider>
      </body>
    </html>
  )
}
