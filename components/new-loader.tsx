"use client"

import { useEffect, useState } from "react"

export default function NewLoader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          onFinish()
          return 100
        }
        return prev + 1
      })
    }, 30)
    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      {/* Cube container with 45° tilt */}
      <div className="relative w-[80px] h-[80px] perspective-[800px]">
        <div className="relative w-full h-full transform rotate-x-45 rotate-y-45 preserve-3d">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-[13px] h-full transform-style-preserve animate-rotate-slice`}
              style={{
                left: `${i * 13.3}px`,
                animationDelay: `${i * 0.1}s`,
                backgroundColor: i === 2 ? "#FF4500" : "#1f1f1f",
                transform: `translateZ(0px) rotateY(0deg)`,
                border: "1px solid #333",
              }}
            >
              <div className="face front" />
              <div className="face back" />
              <div className="face left" />
              <div className="face right" />
              <div className="face top" />
              <div className="face bottom" />
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="mt-6 text-2xl font-medium">{progress}%</div>

      {/* Footer */}
      <div className="absolute bottom-5 left-5 text-sm">• Home</div>
      <div className="absolute bottom-5 right-5 text-sm">Sayan® Studio</div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-14 left-0 h-[2px] bg-yellow-500 transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
