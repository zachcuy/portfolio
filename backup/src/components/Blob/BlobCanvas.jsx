import React from "react";
import Blob from "./Blob";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const BlobCanvas = () => {
  return (
    <Canvas camera={{ fov: 65, position: [5, 5, 5] }}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
      />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Blob />
    </Canvas>
  );
};

export default BlobCanvas;
