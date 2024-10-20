import React from "react";
import styled from "styled-components";
import Projects from "./Projects/ProjectsCard";

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 70%;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 1.3rem;

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    text-align: center;
  }
  @media only screen and (max-width: 450px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

const CardHolder = styled.div`
  width: 100%;
`;

const Experience = () => {
  return (
    <Section>
      <Container>
        <Title>PROJECTS</Title>
        <CardHolder>
          <Projects />
        </CardHolder>
      </Container>
    </Section>
  );
};

export default Experience;
