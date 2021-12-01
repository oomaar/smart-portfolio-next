import { About, Header, Hero, Qualification, Skill } from "../Components";
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
    </div>
  );
};