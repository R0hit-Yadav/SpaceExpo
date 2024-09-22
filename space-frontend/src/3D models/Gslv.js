import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './Gslv.css';

function Gslv() {
  const Description = "The Falcon 9 is a reusable two-stage-to-orbit launch vehicle designed and manufactured by SpaceX. The rocket is powered by nine Merlin 1D rocket engines, and is capable of lifting payloads of up to 50,265 pounds (22,800 kg) to low Earth orbit. The rocket is also capable of propelling payloads to geosynchronous orbit, the Moon, and even to Mars. The Falcon 9 is the first rocket to successfully land vertically after an orbital launch, and is also the first to re-fly an orbital-class rocket. The rocket is named after the Millennium Falcon, the fictional spaceship from the Star Wars franchise. The rocket is manufactured in Hawthorne, California, and is launched from both Cape Canaveral Air Force Station in Florida and Vandenberg Air Force Base in California.";
  const Model = () => {
    const { scene } = useGLTF('/gslv.glb');
    const modelRef = useRef();

    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.002;
      }
    });

    return <primitive ref={modelRef} object={scene} scale={0.006} position={[0, 1, 0]} />;
  };

  return (
    <div className="Gslv">
        <video autoPlay loop muted>
            <source src="/static/images/stars.mp4" type="video/mp4" />
            </video>
      <div className="model-container">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={6.0} />
          <directionalLight position={[10, 10, 5]} />
          <Model />
          <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
        </Canvas>
      </div>
      <div className="rocket-description">
        <h2>Sapcex falcon 9</h2>
        <p>{Description}</p>
      </div>
    </div>
  );
}
export default Gslv;

