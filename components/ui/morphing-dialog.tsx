"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MorphingDialogProps {
  children: React.ReactNode
  transition?: {
    duration?: number
    ease?: string | number[]
  }
}

interface MorphingDialogContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  triggerRef: React.RefObject<HTMLDivElement>
  transition: {
    duration: number
    ease: string | number[]
  }
}

const MorphingDialogContext = React.createContext<MorphingDialogContextProps | null>(null)

export function MorphingDialog({ children, transition }: MorphingDialogProps) {
  const [open, setOpen] = React.useState(false)
  const triggerRef = React.useRef<HTMLDivElement>(null)

  return (
    <MorphingDialogContext.Provider
      value={{
        open,
        setOpen,
        triggerRef,
        transition: {
          duration: transition?.duration || 0.5,
          ease: transition?.ease || "easeInOut",
        },
      }}
    >
      {children}
    </MorphingDialogContext.Provider>
  )
}

export function MorphingDialogTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const context = React.useContext(MorphingDialogContext)

  if (!context) {
    throw new Error("MorphingDialogTrigger must be used within a MorphingDialog")
  }

  return (
    <div ref={context.triggerRef} className={cn("cursor-pointer", className)} onClick={() => context.setOpen(true)}>
      {children}
    </div>
  )
}

export function MorphingDialogContainer({ children }: { children: React.ReactNode }) {
  const context = React.useContext(MorphingDialogContext)

  if (!context) {
    throw new Error("MorphingDialogContainer must be used within a MorphingDialog")
  }

  return (
    <AnimatePresence>
      {context.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => context.setOpen(false)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function MorphingDialogContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const context = React.useContext(MorphingDialogContext)

  if (!context) {
    throw new Error("MorphingDialogContent must be used within a MorphingDialog")
  }

  const [triggerRect, setTriggerRect] = React.useState<DOMRect | null>(null)

  React.useEffect(() => {
    if (context.triggerRef.current) {
      setTriggerRect(context.triggerRef.current.getBoundingClientRect())
    }
  }, [context.open, context.triggerRef])

  if (!triggerRect) {
    return null
  }

  // Get the initial position and size from the trigger element
  const initialX = triggerRect.left
  const initialY = triggerRect.top
  const initialWidth = triggerRect.width
  const initialHeight = triggerRect.height

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      onClick={(e) => e.stopPropagation()}
      initial={{
        x: initialX,
        y: initialY,
        width: initialWidth,
        height: initialHeight,
      }}
      animate={{
        x: 0,
        y: 0,
        width: "auto",
        height: "auto",
        position: "relative",
        transition: {
          duration: context.transition.duration,
          ease: context.transition.ease,
        },
      }}
      exit={{
        x: initialX,
        y: initialY,
        width: initialWidth,
        height: initialHeight,
        transition: {
          duration: context.transition.duration,
          ease: context.transition.ease,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogImage({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={src || "/placeholder.svg"} alt={alt} className={cn("object-cover", className)} {...props} />
}

export function MorphingDialogClose({
  children,
  className,
  variants,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variants?: {
    initial?: any
    animate?: any
    exit?: any
  }
}) {
  const context = React.useContext(MorphingDialogContext)

  if (!context) {
    throw new Error("MorphingDialogClose must be used within a MorphingDialog")
  }

  return (
    <motion.button
      className={cn("cursor-pointer", className)}
      onClick={() => context.setOpen(false)}
      initial={variants?.initial || { opacity: 0 }}
      animate={variants?.animate || { opacity: 1, transition: { delay: 0.3, duration: 0.2 } }}
      exit={variants?.exit || { opacity: 0, transition: { duration: 0.1 } }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
