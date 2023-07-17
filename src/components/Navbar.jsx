import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  /* scroll-snap-align: center; */
`;

const Links = styled.div`
  display: flex;
`;
const List = styled.ul`
  display: flex;
  gap: 5%;
  list-style: none;
`;
const ListItem = styled.li``;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
