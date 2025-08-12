"use client"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef, useMemo, Suspense, useEffect, useState, useCallback } from "react"
import * as THREE from "three"

function InteractiveParticles(props: any) {
  const ref = useRef<THREE.Points>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const { viewport } = useThree()

  const [sphere] = useMemo(() => {
    const positions = new Float32Array(3000 * 3)
    const colors = new Float32Array(3000 * 3)

    for (let i = 0; i < 3000; i++) {
      const radius = Math.random() * 1.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      colors[i * 3] = 0.08 + Math.random() * 0.4 // R
      colors[i * 3 + 1] = 0.72 + Math.random() * 0.2 // G
      colors[i * 3 + 2] = 0.65 + Math.random() * 0.3 // B
    }

    return [positions, colors]
  }, [])

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    })
  }, [])

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  useFrame((state, delta) => {
    if (ref.current) {
      const targetRotationX = mousePosition.y * 0.1
      const targetRotationY = mousePosition.x * 0.1

      ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.05
      ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 0.05

      ref.current.rotation.x -= delta / (isHovered ? 20 : 10)
      ref.current.rotation.y -= delta / (isHovered ? 25 : 15)

      const targetScale = isHovered ? 1.2 : 1.0
      ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere[0]} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent vertexColors size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function ParticleScene() {
  return (
    <>
      <InteractiveParticles />
    </>
  )
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <ParticleScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
