"use client"
import { useEffect, useState } from "react"

export function Loader({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          if (onFinish) {
            setTimeout(onFinish, 300)
          }
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
      <div className="loader-wrapper">
        <span className="loader-letter">G</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">n</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">r</span>
        <span className="loader-letter">a</span>
        <span className="loader-letter">t</span>
        <span className="loader-letter">i</span>
        <span className="loader-letter">n</span>
        <span className="loader-letter">g</span>
        <div className="loader"></div>
      </div>

      {/* Progress */}
      <div className="text-2xl font-bold text-yellow-400 mb-4 mt-8">{Math.floor(progress)}%</div>

      {/* Loading Text */}
      <div className="text-lg text-gray-300 mb-8">Loading Gymkhana Elections...</div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-sm text-gray-400">NIT Durgapur • Students' Gymkhana</div>
    </div>
  )
}
