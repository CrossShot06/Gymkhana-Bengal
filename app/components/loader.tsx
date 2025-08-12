"use client"
import { useEffect, useState } from "react"

export function Loader({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  useEffect(() => {
    const texts = [
      "Initializing...",
      "Loading Candidates...",
      "Preparing Manifesto...",
      "Setting up Elections...",
      "Almost Ready...",
    ]

    const textInterval = setInterval(() => {
      setLoadingText(texts[Math.floor(Math.random() * texts.length)])
    }, 800)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(textInterval)
          if (onFinish) {
            setTimeout(onFinish, 500)
          }
          return 100
        }
        return prev + Math.random() * 3 + 0.5 // More realistic loading speed
      })
    }, 50)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-amber-300 rounded-full animate-ping"></div>
      </div>

      {/* Main Loader */}
      <div className="relative w-24 h-24 mb-8">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-yellow-500 border-r-yellow-400 rounded-full animate-spin"></div>

        {/* Middle rotating ring */}
        <div
          className="absolute inset-2 border-3 border-transparent border-t-amber-500 border-l-amber-400 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>

        {/* Inner pulsing core */}
        <div className="absolute inset-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
      </div>

      {/* Progress Text */}
      <div className="text-3xl font-bold text-yellow-400 mb-2 animate-pulse">{Math.floor(progress)}%</div>

      {/* Loading Text */}
      <div className="text-lg text-gray-300 mb-8 animate-fade-in-out">{loadingText}</div>

      {/* Gymkhana Branding */}
      <div className="absolute bottom-8 left-8 text-sm text-gray-400 animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          Gymkhana Elections 2025
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-sm text-gray-400 animate-fade-in">
        <div className="flex items-center gap-2">
          NIT Durgapur
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 transition-all duration-200 ease-out shadow-lg shadow-yellow-500/30"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animation: `float ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
