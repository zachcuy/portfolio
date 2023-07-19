import styled from "styled-components";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Links from "./components/Links";
import Projects from "./components/Projects";

const Container = styled.div`
  --slate-50: rgb(248 250 252);
  --slate-100: rgb(241 245 249);
  --slate-200: rgb(226 232 240);
  --slate-300: rgb(203 213 225);
  --slate-400: rgb(148 163 184);
  --slate-500: rgb(100 116 139);
  --slate-600: rgb(71 85 105);
  --slate-700: rgb(51 65 85);
  --slate-800: rgb(30 41 59);
  --slate-900: rgb(15 23 42);

  --mint: rgb(99, 254, 218);

  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: rgb(15 23 42);
  color: var(--slate-50);

  @media only screen and (max-width: 768) {
    scroll-snap-type: none;
  }
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
