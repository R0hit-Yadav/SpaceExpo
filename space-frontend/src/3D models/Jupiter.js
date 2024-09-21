import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './Jupiter.css';
import api from '../api';

function Jupiter() {

  const [Description, setDescription] = useState('');
  useEffect(() => {
    api.get('/planets')
      .then(res => {
        const earth = res.data.find(planet => planet.name === 'Jupiter'); 
        if (earth) {
          setDescription(earth.description); 
        }
      })
      .catch(err => console.error(err));
  }, []);

  const Model = () => {
    const { scene } = useGLTF('/Jupiter.glb');
    const modelRef = useRef();

    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.002; 
      }
    });

    return <primitive ref={modelRef} object={scene} scale={0.007} />;
  };
  return (
    <div className="jupiter">
    <video autoPlay loop muted onLoadedData={() => console.log("Video loaded")}>
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
    <div className="planet-description">
      <h2>Jupiter Description</h2>
      <p>{Description}</p>
    </div>
  </div>
  );
}
export default Jupiter;
