import styled from 'styled-components';
import {
  About,
  Contact,
  Header,
  Hero,
  Portfolio,
  Project,
  Qualification,
  ScrollUp,
  Services,
  Skill
} from "../Components";
import { NextHead } from "../Global/NextHead";

const Application = styled.main`
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 0 1rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

export default function Home() {
  return (
    <Application>
      <NextHead />

      <Header />
      <Hero />
      <About />
      <Skill />
      <Qualification />
      <Services />
      <Portfolio />
      <Project />
      <Contact />
      <ScrollUp />
    </Application>
  );
};