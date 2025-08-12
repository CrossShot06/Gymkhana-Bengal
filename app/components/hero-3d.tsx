"use client"

import { useMemo, useState, useCallback, useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Float } from "@react-three/drei"
import { useRef, Suspense } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function InteractiveSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation with mouse influence
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + mousePosition.y * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + mousePosition.x * 0.5

      // Pulsing effect when clicked
      if (isClicked) {
        const pulse = Math.sin(state.clock.elapsedTime * 10) * 0.1 + 1
        meshRef.current.scale.setScalar(2.5 * pulse)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(2.5, 2.5, 2.5), 0.1)
      }
    }
  })

  const handlePointerMove = useCallback((event: any) => {
    const x = (event.point.x / 5) * 0.5
    const y = (event.point.y / 5) * 0.5
    setMousePosition({ x, y })
  }, [])

  const handleClick = useCallback(() => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 1000)
  }, [])

  return (
    <Sphere
      ref={meshRef}
      args={[1, 100, 200]}
      scale={2.5}
      onPointerEnter={() => {
        setIsHovered(true)
        document.body.style.cursor = "pointer"
      }}
      onPointerLeave={() => {
        setIsHovered(false)
        document.body.style.cursor = "default"
      }}
      onPointerMove={handlePointerMove}
      onClick={handleClick}
    >
      <MeshDistortMaterial
        color={isHovered ? "#fbbf24" : "#f59e0b"}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  )
}

function InteractiveCubes() {
  const cubesRef = useRef<THREE.Group>(null)
  const [hoveredCube, setHoveredCube] = useState<number | null>(null)
  const [clickedCubes, setClickedCubes] = useState<Set<number>>(new Set())

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const cubes = useMemo(() => {
    const gymkhanaColors = ["#14b8a6", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63", "#0f766e", "#134e4a"]
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2
      const radius = 5
      return {
        position: [Math.cos(angle) * radius, Math.sin(i * 0.5) * 2, Math.sin(angle) * radius] as [
          number,
          number,
          number,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
        color: gymkhanaColors[i],
      }
    })
  }, [])

  const handleCubeClick = useCallback((index: number) => {
    setClickedCubes((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }, [])

  return (
    <group ref={cubesRef}>
      {cubes.map((cube, i) => (
        <Float key={i} speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <mesh
            position={cube.position}
            rotation={cube.rotation}
            onPointerEnter={() => {
              setHoveredCube(i)
              document.body.style.cursor = "pointer"
            }}
            onPointerLeave={() => {
              setHoveredCube(null)
              document.body.style.cursor = "default"
            }}
            onClick={() => handleCubeClick(i)}
          >
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial
              color={cube.color}
              emissive={hoveredCube === i ? cube.color : "#000000"}
              emissiveIntensity={hoveredCube === i ? 0.2 : 0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function InteractiveStudentSymbols() {
  const [hoveredSymbol, setHoveredSymbol] = useState<number | null>(null)
  const [rotatingSymbols, setRotatingSymbols] = useState<Set<number>>(new Set())

  const symbols = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (i / 6) * Math.PI * 2
      return {
        position: [Math.cos(angle) * 7, Math.sin(angle) * 2, Math.cos(angle) * 2] as [number, number, number],
        type: i % 3, // Different symbol types
      }
    })
  }, [])

  const handleSymbolClick = useCallback((index: number) => {
    setRotatingSymbols((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }, [])

  return (
    <group>
      {symbols.map((symbol, i) => (
        <Float key={i} speed={2} rotationIntensity={rotatingSymbols.has(i) ? 5 : 1} floatIntensity={3}>
          <mesh
            position={symbol.position}
            onPointerEnter={() => {
              setHoveredSymbol(i)
              document.body.style.cursor = "pointer"
            }}
            onPointerLeave={() => {
              setHoveredSymbol(null)
              document.body.style.cursor = "default"
            }}
            onClick={() => handleSymbolClick(i)}
          >
            {symbol.type === 0 && <octahedronGeometry args={[0.3]} />}
            {symbol.type === 1 && <tetrahedronGeometry args={[0.4]} />}
            {symbol.type === 2 && <icosahedronGeometry args={[0.35]} />}
            <meshStandardMaterial
              color={hoveredSymbol === i ? "#fbbf24" : "#f59e0b"}
              emissive={hoveredSymbol === i ? "#fbbf24" : "#000000"}
              emissiveIntensity={hoveredSymbol === i ? 0.3 : 0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function InteractiveParticles() {
  const particlesRef = useRef<THREE.Group>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { viewport } = useThree()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      // Particles follow mouse slightly
      particlesRef.current.rotation.x = mousePosition.y * 0.1
      particlesRef.current.rotation.z = mousePosition.x * 0.05
    }
  })

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1
    const y = -(event.clientY / window.innerHeight) * 2 + 1
    setMousePosition({ x, y })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function Hero3DScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <InteractiveSphere />
      <InteractiveCubes />
      <InteractiveStudentSymbols />
      <InteractiveParticles />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Environment preset="night" />
    </>
  )
}

export function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <Hero3DScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
