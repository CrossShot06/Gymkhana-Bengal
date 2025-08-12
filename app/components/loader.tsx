"use client"
import { useEffect, useState } from "react"

export function Loader({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100 && onFinish) {
      // Use setTimeout to defer the callback execution to avoid state update during render
      const timer = setTimeout(() => {
        onFinish()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [progress, onFinish])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: "1s",
                transform: `scale(${1 + i * 0.1})`,
                opacity: 1 - i * 0.15,
              }}
            />
          ))}
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-black">G</span>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-4">
          <div className="text-2xl font-bold text-yellow-400">{progress}%</div>
          <div className="flex items-center space-x-2 text-gray-400">
            <span>•</span>
            <span>Elections</span>
            <span>•</span>
            <span className="text-yellow-400 font-semibold">Students' Gymkhana</span>
            <span>•</span>
          </div>
        </div>
      </div>
    </div>
  )
}
