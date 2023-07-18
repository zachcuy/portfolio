import React from "react";
import styled from "styled-components";
import ExperienceCard from "./Experience/ExperienceCard";
import astroWork from "../assets/img/astro_work.svg";

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
  display: flex;
  height: 100%;
  width: 70%;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const ImgWork = styled.img`
  height: 60%;
  width: 100%;
  object-fit: contain;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animateWork 7s infinite ease-in-out alternate;
  pointer-events: none;

  @media only screen and (max-width: 1024px) {
    display: none;
  }

  @keyframes animateWork {
    from {
      transform: rotate(-5deg);
    }
    to {
      transform: rotate(5deg);
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  justify-content: center;
  gap: 1rem;

  @media only screen and (max-width: 1024px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 1.3rem;

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
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
        <Left>
          <ImgWork
            src={astroWork}
            alt="astronaut working on a starry desk"
          />
        </Left>

        <Right>
          <Title>EXPERIENCES</Title>
          <CardHolder>
            <ExperienceCard />
          </CardHolder>
        </Right>
      </Container>
    </Section>
  );
};

export default Experience;
