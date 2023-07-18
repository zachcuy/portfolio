import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 1.5rem;

  &:hover {
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.9px);
    -webkit-backdrop-filter: blur(6.9px);
    background: rgba(30, 41, 59, 0.5);
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
`;

const Range = styled.p`
  align-self: flex-end;
  font-size: 0.95rem;
  color: var(--slate-500);

  @media only screen and (max-width: 768px) {
    font-size: 0.85rem;
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
`;

const ExperienceCard = () => {
  return (
    <>
      <Card>
        <Job>
          <Role>
            Engineering Intern
            <span> @ Paramount Resources</span>
          </Role>
          <Range>May 2022 - Sep 2023</Range>
        </Job>

        <Bullets>
          <Bullet>
            Increased realized profits by 1.5 million CAD per month for blending
            operations by developing a software-based analytics tool to
            determine the optimal volume allocation for each sales pipeline,
            product, and source.
          </Bullet>
          <Bullet>
            Decreased profit losses by 150,000 CAD per month across all Grande
            Prairie assets by determining well shut-in priorities during
            constrained gas or liquids flow.
          </Bullet>
          <Bullet>
            Identified profitable opportunities in the Kaybob and Grande Prairie
            regions by conducting an Operations Research study on wells and
            facilities with the Reservoir & Development Team.
          </Bullet>
        </Bullets>
      </Card>

      <Card>
        <Job>
          <Role>
            Systems Engineering Intern
            <span> @ Kingsman</span>
          </Role>
          <Range>Jan 2022 - May 2022</Range>
        </Job>

        <Bullets>
          <Bullet>
            Built an energy analytics web application providing clients key
            metrics resulting in up to 36% operational cost reductions.
          </Bullet>
          <Bullet>
            Decreased bug-fix turnaround time by 25% by writing automated test
            scripts and detailed bug reports with replication steps.
          </Bullet>
          <Bullet>
            Decreased operational monitoring costs by 42% by designing and
            prototyping an airflow sensor using Raspberry Pi, Azure IoT, and
            Azure RTOS.
          </Bullet>
          <Bullet>
            Designed analytics environment based on Docker and Azure.
            Standardized the Python and JavaScript dependencies.
          </Bullet>
        </Bullets>
      </Card>

      <Card>
        <Job>
          <Role>
            Software Engineering Intern
            <span> @ Tesla</span>
          </Role>
          <Range>May 2021 - Jan 2022</Range>
        </Job>

        <Bullets>
          <Bullet>
            Improved incident response times by 20% by developing a backend
            service to automate feature ranking for sensor data anomalies using
            AWS Lambda, S3, Step Functions, Glue, and SageMaker.
          </Bullet>
          <Bullet>
            Automated and optimized business logic for experimental
            manufacturing processes using A/B, auto-targeting, and multivariate
            testing.
          </Bullet>
          <Bullet>
            Enriched system metrics by integrating linked telemetry across
            siloed subsystems and facilitated in-depth sensor data logging.
          </Bullet>
          {/* <Bullet>
            Led the development of several products E2E, from identifying system
            requirements and internal dependencies to workload balancing,
            implementation, testing, and configuring metrics, alarms, and
            monitors.
          </Bullet> */}
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
            Built real-time gaming analytics software providing users valuable
            performance metrics leading to 100+ clients.
          </Bullet>
          <Bullet>
            Improved user experience with a DX11 overlay by allowing dynamic
            feature customizations.
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
