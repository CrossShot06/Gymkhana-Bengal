"use client"
import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Enhanced floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rotate-45 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-amber-400/20 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-yellow-600/20 rotate-12 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-yellow-500/30 to-amber-500/30 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Enhanced gradient orbs */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-amber-600/10 rounded-full blur-xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-2xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      {/* Animated lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent animate-pulse" />
      <div
        className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
