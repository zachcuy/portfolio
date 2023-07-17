import React from "react";
import styled from "styled-components";
import Shiba from "./Shiba";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const ShibaCanvas = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Shiba />
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2.5}
          />
        </Stage>
      </Canvas>
    </>
  );
};
const Work = () => {
  return <Section></Section>;
};

export default Work;
