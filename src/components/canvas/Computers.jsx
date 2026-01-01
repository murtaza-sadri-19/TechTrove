import React, { Suspense , useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const groupRef = useRef();
  const position = isMobile ? [0, -3.3, -2.8] : [0, -3.25, -1.8];
  const scale = isMobile ? 0.7 : 0.75;
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
      groupRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.5) * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      <hemisphereLight intensity={0.25} groundColor="#1a1a2e" />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, 10]} intensity={0.4} color="#00d4ff" />
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.12} 
        penumbra={1} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={1024} 
      />
      <primitive 
        object={computer.scene} 
        scale={scale} 
        position={position} 
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  )
}

const ComputersCanvas = () => {
  const [isMobile , setIsMobile ] = useState(false);

  useEffect(() => {
    
    // Add a listerner for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    // set the initial value of the "ismobile" state variable
    setIsMobile(mediaQuery.matches);
    
    // define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }
    
    //add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return () => {
      //remove the listener when the component is unmounted
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])

  

  return (
    <Canvas 
      frameloop='auto' 
      shadows  
      camera={{position: [20, 3, 8], fov: 25}} 
      gl={{ 
        antialias: true,
        alpha: true
      }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;