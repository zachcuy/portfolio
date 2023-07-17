import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

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
  flex: 3;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const CardHolder = styled.div`
  margin-bottom: 3rem;
`;

const Card = styled.div`
  background: rgba(99, 249, 255, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.9px);
  -webkit-backdrop-filter: blur(6.9px);
  border: 1px solid rgba(99, 249, 255, 0.15);
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

const Subtitle = styled.h2`
  font-size: 24px;
  /* color: #da4ea2; */
  color: rgb(170, 240, 209);

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

const Work = () => {
  return (
    <Section>
      <Container>
        <Left>IMAGE</Left>

        <Right>
          <Title>EXPERIENCES</Title>
          <JobRole>Engineering Intern</JobRole>
          <Subtitle> - 1</Subtitle>
          <JobRole>Systems Engineering Intern</JobRole>
          <Subtitle> - 2</Subtitle>
          <JobRole>Engineering Intern</JobRole>
          <Subtitle> - 3</Subtitle>
          <JobRole>Engineering Intern</JobRole>
          <Subtitle> - 4</Subtitle>

          <Title>EDUCATION</Title>
          <JobRole>Engineering Intern</JobRole>
          <Subtitle> - 1</Subtitle>
          <JobRole>Systems Engineering Intern</JobRole>
          <Subtitle> - 2</Subtitle>
          <JobRole>Engineering Intern</JobRole>
          <Subtitle> - 3</Subtitle>
          <JobRole>Engineering Intern</JobRole>
          <Subtitle> - 4</Subtitle>
        </Right>
      </Container>
    </Section>
  );
};

export default Work;
