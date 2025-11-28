'use client'

export default function Scene() {
  return (
    <group>
      {/* Road */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 40]} />
        <meshToonMaterial color="#4a5568" />
      </mesh>

      {/* Road Center Line */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.5, 40]} />
        <meshToonMaterial color="#ffd700" />
      </mesh>

      {/* Left Trees */}
      {[...Array(8)].map((_, i) => (
        <group key={`left-tree-${i}`} position={[-6, 0, i * 5 - 15]}>
          {/* Tree Trunk */}
          <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.4, 0.5, 3, 8]} />
            <meshToonMaterial color="#8b6914" />
          </mesh>

          {/* Tree Foliage - Sphere */}
          <mesh position={[0, 4, 0]}>
            <sphereGeometry args={[2.5, 8, 8]} />
            <meshToonMaterial color="#228b22" />
          </mesh>

          {/* Tree Foliage - Additional layers for anime style */}
          <mesh position={[0.5, 3.5, 0.5]}>
            <sphereGeometry args={[1.8, 8, 8]} />
            <meshToonMaterial color="#32cd32" />
          </mesh>
          <mesh position={[-0.5, 3.5, -0.5]}>
            <sphereGeometry args={[1.8, 8, 8]} />
            <meshToonMaterial color="#32cd32" />
          </mesh>
        </group>
      ))}

      {/* Right Trees */}
      {[...Array(8)].map((_, i) => (
        <group key={`right-tree-${i}`} position={[6, 0, i * 5 - 15]}>
          {/* Tree Trunk */}
          <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.4, 0.5, 3, 8]} />
            <meshToonMaterial color="#8b6914" />
          </mesh>

          {/* Tree Foliage - Sphere */}
          <mesh position={[0, 4, 0]}>
            <sphereGeometry args={[2.5, 8, 8]} />
            <meshToonMaterial color="#228b22" />
          </mesh>

          {/* Tree Foliage - Additional layers for anime style */}
          <mesh position={[0.5, 3.5, 0.5]}>
            <sphereGeometry args={[1.8, 8, 8]} />
            <meshToonMaterial color="#32cd32" />
          </mesh>
          <mesh position={[-0.5, 3.5, -0.5]}>
            <sphereGeometry args={[1.8, 8, 8]} />
            <meshToonMaterial color="#32cd32" />
          </mesh>
        </group>
      ))}

      {/* Ambient Light */}
      <ambientLight intensity={0.6} />

      {/* Directional Light for better shading */}
      <directionalLight position={[10, 20, 5]} intensity={0.8} color="#ffffff" />
    </group>
  )
}