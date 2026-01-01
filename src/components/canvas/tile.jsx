import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

const DeformableTile = ({ icon }) => {
  const meshRef = useRef(null);
  const [texture, setTexture] = useState(null);
  const originalPositions = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Load texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(icon, (loadedTexture) => {
      setTexture(loadedTexture);
    });
  }, [icon]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const geometry = meshRef.current.geometry;
    if (!geometry) return;

    const posAttribute = geometry.getAttribute("position");
    if (!posAttribute) return;

    // Store original positions on first frame
    if (!originalPositions.current) {
      originalPositions.current = new Float32Array(posAttribute.array);
    }

    const positions = posAttribute.array;
    const canvas = state.gl.domElement;

    // Get mouse position in world space
    const mouseX = state.mouse.x * 2;
    const mouseY = state.mouse.y * 2;

    const deformRadius = 0.8;
    const deformStrength = 0.2;

    // Update vertex positions
    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions.current[i];
      const y = originalPositions.current[i + 1];
      const z = originalPositions.current[i + 2];

      const dx = x - mouseX;
      const dy = y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < deformRadius) {
        const influence = (1 - distance / deformRadius) * deformStrength;
        const wave = Math.sin(state.clock.elapsedTime * 2) * influence;

        positions[i] = x + dx * wave * 0.05;
        positions[i + 1] = y + dy * wave * 0.05;
        positions[i + 2] = z + wave * 0.15;
      } else {
        // Smoothly return to original position
        positions[i] += (originalPositions.current[i] - positions[i]) * 0.08;
        positions[i + 1] += (originalPositions.current[i + 1] - positions[i + 1]) * 0.08;
        positions[i + 2] += (originalPositions.current[i + 2] - positions[i + 2]) * 0.08;
      }
    }

    posAttribute.needsUpdate = true;
    geometry.computeVertexNormals();

    // Gentle rotation
    meshRef.current.rotation.x += 0.0001;
    meshRef.current.rotation.y += 0.0002;
  });

  return (
    <mesh ref={meshRef} rotation={[-0.2, 0.2, 0]}>
      <planeGeometry args={[2.2, 2.2, 64, 64]} />
      <meshPhysicalMaterial
        map={texture}
        transparent={true}
        transmission={0.6}
        thickness={0.4}
        roughness={0.25}
        metalness={0.05}
        clearcoat={0.7}
        clearcoatRoughness={0.2}
        ior={1.4}
      />
    </mesh>
  );
};

const TechTileCanvas = ({ icon }) => {
  return (
    <div className="tech-tile" style={{ width: "100%", height: "100%" }}>
      <Canvas
        frameloop="always"
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Environment preset="studio" intensity={1} />

        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 4, 4]} intensity={0.8} />
        <directionalLight position={[-4, -2, 2]} intensity={0.4} />
        <pointLight position={[0, 0, 3]} intensity={0.6} color="#00d4ff" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />

        <Suspense fallback={null}>
          <DeformableTile icon={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default TechTileCanvas;


