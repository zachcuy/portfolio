import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import astronaut from "../assets/img/astronaut.svg";
import Blob from "./Blob";
import { Canvas } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
  Wireframe,
} from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 70%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;

const JobRole = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #da4ea2;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Img = styled.img`
  height: 550px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  pointer-events: none;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Hi, I'm Zachary Uy!</Title>
          <JobRole>
            <Subtitle>Mechanical and Mechatronics Engineer</Subtitle>
          </JobRole>
          <Desc>
            I enjoy working on projects where the hardware and software worlds
            collide!
          </Desc>
          <Desc>
            Currently looking for opportunities to grow as an Engineer.
          </Desc>
          <Navbar />
        </Left>

        <Right>
          <Canvas camera={{ fov: 60, position: [5, 5, 5] }}>
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
          <Img src={astronaut} />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
