
'use client'

import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Sky } from '@react-three/drei'
import { Suspense } from 'react'
import WalkingMan from '@/components/walking-man'
import Scene from '@/components/scene'

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <PerspectiveCamera position={[0, 5, 15]} fov={50} makeDefault />
        <Suspense fallback={null}>
          <Sky sunPosition={[100, 20, 100]} />
          <Scene />
          <WalkingMan />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}