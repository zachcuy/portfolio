import styled from "styled-components";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Links from "./components/Links";
import Projects from "./components/Projects";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: rgb(15 23 42);
  color: rgb(203 213 225);
`;

const App = () => {
  return (
    <>
      <Container>
        <Hero />
        <Experience />
        {/* <Projects /> */}
        <Links />
      </Container>
    </>
  );
};

export default App;
