import React from "react";
import styled from "styled-components";

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
      <Card>
        <Job>
          <Role>
            Software Engineering Intern
            <span> @ Paramount Resources</span>
          </Role>
          <Range>May 2022 - Sep 2023</Range>
        </Job>

        <Bullets>
          <Bullet>
            Increased realized profits by $1.8 million USD per month for blending operations by developing a
            mathematical optimization tool using Python and C++
          </Bullet>
          <Bullet>
            Decreased profit losses by $750,000 USD per month across all assets with a web application that
            delivered daily updates on asset production requirements using React, Flask, and AWS Amplify
          </Bullet>
          <Bullet>
            Reduced Production Engineering response time from 1-2 weeks to 2 days by integrating Python data
            wrangling scripts into Spotfire and Power BI dashboards
          </Bullet>
        </Bullets>
      </Card>

      <Card>
        <Job>
          <Role>
            Systems Engineering Intern
            <span> @ Kingsman</span>
          </Role>
          <Range>May 2021 - May 2022</Range>
        </Job>

        <Bullets>
          <Bullet>
            Reduced operational costs by up to 36% by building an energy analytics web application with sensor
            integrations providing key metrics to clients using React, Express, and MongoDB
          </Bullet>
          <Bullet>
            Decreased monitoring costs by 8% by designing and prototyping an airflow sensor that allowed the team
            to control endpoints through the web app using STM32 and Azure IoT
          </Bullet>
          <Bullet>
            Lowered incident response times by 20% by developing a backend service to automate feature ranking
            for sensor data anomalies using AWS Lambda, S3, Step Functions, Glue, and SageMaker
          </Bullet>
          <Bullet>
            Improved bug-fix turnaround time by writing automated test scripts and detailed bug reports with
            replication steps
          </Bullet>
        </Bullets>
      </Card>

      <Card>
        <Job>
          <Role>
            Software Developer
            <span> @ R3</span>
          </Role>
          <Range>Feb 2017 - Jul 2019</Range>
        </Job>

        <Bullets>
          <Bullet>
            Built real-time gaming analytics software providing users valuable performance metrics leading to 50+
            clients
          </Bullet>

          <Bullet>
            Wrote a C++ memory hooking library for third-party gaming applications to gather data used in
            visualizations and gameplay optimization algorithms
          </Bullet>

          <Bullet>
            Improved overlay responsiveness by implementing a fast, bloat-free external window using ImGui
          </Bullet>
        </Bullets>
      </Card>

      {/* <Card>
        <Job>
          <Role>
            IT Engineering Student
            <span> @ Essential Energy</span>
          </Role>
          <Range>May 2016 - Aug 2018</Range>
        </Job>

        <Bullets>
          <Bullet>
            Implemented mobile security protocol to improve data safety.
          </Bullet>
        </Bullets>
      </Card> */}
    </>
  );
};

export default ExperienceCard;
