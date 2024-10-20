import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import astronaut from "../assets/img/astronaut.svg";
import BlobCanvas from "./Blob/BlobCanvas";

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
  @media only screen and (max-width: 450px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 100%;
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
  font-size: 3rem;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
  @media only screen and (max-width: 450px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const JobRole = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: var(--mint);

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 1.2rem;
  color: var(--slate-400);
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 10px;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 1420px) {
    display: none;
  }
`;

const Img = styled.img`
  max-height: 650px;
  max-width: 650px;
  height: 650px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  pointer-events: none;

  @media only screen and (max-width: 1024px) {
    display: none;
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
          <Title>Hi, I'm Zach Uy!</Title>
          <JobRole>
            <Subtitle>Software Engineer</Subtitle>
          </JobRole>
          <Desc>
            I enjoy working on projects where the hardware and software worlds
            collide!
          </Desc>
          <Desc>
            Currently working as a Software Engineer.
          </Desc>
          <Navbar />
        </Left>

        <Right>
          <BlobCanvas />
          <Img
            src={astronaut}
            alt="floating astronaut holding balloons"
          />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
