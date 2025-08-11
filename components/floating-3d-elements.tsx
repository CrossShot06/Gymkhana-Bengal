"use client"

import { Canvas } from "@react-three/fiber"
import { Float, Sphere, Box, Torus } from "@react-three/drei"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function FloatingShape({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <Sphere args={[0.5, 16, 16]}>
          <meshStandardMaterial color={color} transparent opacity={0.6} />
        </Sphere>
      </mesh>
    </Float>
  )
}

function FloatingBox({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <mesh position={position} rotation={[0.5, 0.5, 0]}>
        <Box args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial color={color} transparent opacity={0.4} />
        </Box>
      </mesh>
    </Float>
  )
}

function FloatingTorus({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={3}>
      <mesh position={position}>
        <Torus args={[0.6, 0.2, 8, 16]}>
          <meshStandardMaterial color={color} transparent opacity={0.5} />
        </Torus>
      </mesh>
    </Float>
  )
}

export function Floating3DElements() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={isDark ? 0.3 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 0.5 : 1} />

        {/* Floating shapes */}
        <FloatingShape position={[-8, 4, -5]} color={isDark ? "#3b82f6" : "#6366f1"} />
        <FloatingBox position={[8, -3, -3]} color={isDark ? "#10b981" : "#059669"} />
        <FloatingTorus position={[-6, -4, -4]} color={isDark ? "#f59e0b" : "#d97706"} />
        <FloatingShape position={[7, 5, -6]} color={isDark ? "#ef4444" : "#dc2626"} />
        <FloatingBox position={[-9, -1, -2]} color={isDark ? "#8b5cf6" : "#7c3aed"} />
        <FloatingTorus position={[5, -6, -5]} color={isDark ? "#06b6d4" : "#0891b2"} />
      </Canvas>
    </div>
  )
}
