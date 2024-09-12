import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './Saturn.css';

function Saturn() {
  const Model = () => {
    const { scene } = useGLTF('/Saturn.glb');
    const modelRef = useRef();
    scene.rotation.set(0.3, 0.3,0);
    scene.position.set(0, 1, 0);

    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.002; 
      }
    });

    return <primitive ref={modelRef} object={scene} scale={0.005} />;
  };
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={2.0} />
        <directionalLight position={[10, 10, 5]} />
        <Model />
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
      </Canvas>
    </div>
  );
}
export default Saturn;
