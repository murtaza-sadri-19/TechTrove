import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Create a component to hold the Earth model
const Earth = () => {
  // Load the Earth model using the useGLTF hook
  const earth = useGLTF("./planet/scene.gltf");
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0002;
    }
  });

  // Return the model as a primitive with a set scale and position
  return (
    <group ref={earthRef}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <primitive object={earth.scene} scale={2.5} position-y={0} position-x={0} />
    </group>
  );
};

// Create a component to hold the canvas
const EarthCanvas = () => {
  // Return the canvas with shadows, frameloop, camera, and OrbitControls
  return (
    <Canvas
      shadows
      frameloop="auto"
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{ background: 'transparent' }}
    >
      {/* Add a loading spinner while the Earth model is being loaded */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Add the Earth model */}
        <Earth />
        {/* Preload all assets */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;