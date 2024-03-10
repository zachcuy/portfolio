import React from "react";
import styled from "styled-components";
import experienceData from "./experienceData.json";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 1.5rem;

  @media only screen and (min-width: 1420px) {
    &:hover {
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(6.9px);
      -webkit-backdrop-filter: blur(6.9px);
      background: rgba(30, 41, 59, 0.5);
    }
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const Job = styled.div`
  display: flex;
  width: 100%;
`;

const Role = styled.p`
  flex: 3;
  font-size: 1rem;

  span {
    color: var(--mint);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media only screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const Range = styled.p`
  align-self: flex-end;
  font-size: 0.95rem;
  color: var(--slate-500);

  @media only screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media only screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const Bullets = styled.ul`
  list-style: none;
`;

const Bullet = styled.li`
  padding: 0.5rem 0px;
  font-size: 0.9rem;
  color: var(--slate-400);
  &::before {
    content: "▹ ";
    left: 0px;
    color: var(--mint);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media only screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const ExperienceCard = () => {
  return (
    <>
      {experienceData.map((experience, index) => (
        <Card key={index}>
          <Job>
            <Role>
              {experience.role}
              <span> @ {experience.company}</span>
            </Role>
            <Range>{experience.range}</Range>
          </Job>
          <Bullets>
            {experience.bullets.map((bullet, bulletIndex) => (
              <Bullet key={bulletIndex}>
                {bullet}
              </Bullet>
            ))}
          </Bullets>
        </Card>
      ))}
    </>
  );
};

export default ExperienceCard;
