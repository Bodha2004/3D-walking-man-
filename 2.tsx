'use client'

import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

export default function WalkingMan() {
  const groupRef = useRef<Group>(null)
  const timeRef = useRef(0)

  useFrame(() => {
    if (groupRef.current) {
      timeRef.current += 0.016
      
      // Walking animation - move back and forth
      const walkAmount = Math.sin(timeRef.current * 1.5) * 8
      groupRef.current.position.x = walkAmount
      groupRef.current.position.z = 0
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Head */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshToonMaterial color="#fdbcb4" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.12, 2.35, 0.3]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshToonMaterial color="#000000" />
      </mesh>
      <mesh position={[0.12, 2.35, 0.3]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshToonMaterial color="#000000" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.4, 0]}>
        <boxGeometry args={[0.4, 0.8, 0.3]} />
        <meshToonMaterial color="#1e40af" />
      </mesh>

      {/* Left Arm */}
      <mesh
        position={[-0.3, 1.6, 0]}
        rotation={[Math.sin(timeRef.current * 2.5) * 0.8, 0, 0]}
      >
        <boxGeometry args={[0.15, 0.7, 0.15]} />
        <meshToonMaterial color="#fdbcb4" />
      </mesh>

      {/* Right Arm */}
      <mesh
        position={[0.3, 1.6, 0]}
        rotation={[Math.sin(timeRef.current * 2.5 + Math.PI) * 0.8, 0, 0]}
      >
        <boxGeometry args={[0.15, 0.7, 0.15]} />
        <meshToonMaterial color="#fdbcb4" />
      </mesh>

      {/* Left Leg */}
      <mesh
        position={[-0.15, 0.6, 0]}
        rotation={[Math.sin(timeRef.current * 2.5) * 0.6, 0, 0]}
      >
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshToonMaterial color="#2d3748" />
      </mesh>

      {/* Right Leg */}
      <mesh
        position={[0.15, 0.6, 0]}
        rotation={[Math.sin(timeRef.current * 2.5 + Math.PI) * 0.6, 0, 0]}
      >
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshToonMaterial color="#2d3748" />
      </mesh>

      {/* Left Foot */}
      <mesh position={[-0.15, 0, 0.15]}>
        <boxGeometry args={[0.18, 0.15, 0.4]} />
        <meshToonMaterial color="#000000" />
      </mesh>

      {/* Right Foot */}
      <mesh position={[0.15, 0, 0.15]}>
        <boxGeometry args={[0.18, 0.15, 0.4]} />
        <meshToonMaterial color="#000000" />
      </mesh>
    </group>
  )
}