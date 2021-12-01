import { About, Header, Hero, Qualification, Services, Skill } from "../Components";
import { NextHead } from "../Global/NextHead";

export default function Home() {
  return (
    <div>
      <NextHead />

      <Header />
      <Hero />
      <About />
      <Skill />
      <Qualification />
      <Services />
    </div>
  );
};