import styled from "styled-components";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Volunteer from "./components/Volunteer";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: rgb(15 23 42);
  /* background: url("./img/bg.jpeg"); */
  /* background: linear-gradient(
    to right top,
    #2e142d,
    #30112d,
    #310e2d,
    #330a2d,
    #35062d,
    #33072e,
    #300730,
    #2d0831,
    #260d33,
    #1e1134,
    #161333,
    #0f1532
  ); */
  color: #26d198;
`;

const App = () => {
  return (
    <>
      <Container>
        <Hero />
        <Work />
        <Projects />
        <Volunteer />
      </Container>
    </>
  );
};

export default App;
