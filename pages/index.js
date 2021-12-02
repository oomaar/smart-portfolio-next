import resumeData from "../Global/resumeData.json";
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
  Skill,
  Footer
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
    <>
      <NextHead />

      <Application>
        <Header data={resumeData.header} name={resumeData.main.name} />
        <Hero data={resumeData.main} />
        <About data={resumeData.about} />
        <Skill data={resumeData.skill} />
        <Qualification data={resumeData.qualification} />
        <Services data={resumeData.services} />
        <Portfolio data={resumeData.portfolio} />
        <Project />
        <Contact data={resumeData.contact} />
        <ScrollUp />
      </Application>
      <Footer data={resumeData.main} />
    </>
  );
};