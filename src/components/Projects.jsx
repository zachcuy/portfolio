import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . . . . . ."
    ". area1 area1 area1 . area2 area2 area2 ."
    ". area1 area1 area1 . area2 area2 area2 ."
    ". . . . . . . . ."
    ". area3 area3 area3 . area4 area4 area4 ."
    ". area3 area3 area3 . area4 area4 area4 ."
    ". . . . . . . . .";
`;

const Area1 = styled.div`
  grid-area: area1;
  border: 2px solid red;
`;

const Area2 = styled.div`
  grid-area: area2;
  border: 2px solid red;
`;

const Area3 = styled.div`
  grid-area: area3;
  border: 2px solid red;
`;

const Area4 = styled.div`
  grid-area: area4;
  border: 2px solid red;
`;

const Projects = () => {
  return (
    <Section>
      <Container>
        <Area1>Racing FPV Drone</Area1>
        <Area2>Autonomous UAV Surveillance Robot</Area2>
        <Area3>Financial Market Data Analytics</Area3>
        <Area4>MMORPG Performance Analytics</Area4>
      </Container>
    </Section>
  );
};

export default Projects;
