import React from "react";
import styled from "styled-components";
import Shiba from "./Shiba";
import Town from "./Town";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  /* background-color: #b67b34; */
  scroll-snap-align: center;
`;
const Work = () => {
  return (
    <Section>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Town />
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
    </Section>
  );
};

export default Work;
