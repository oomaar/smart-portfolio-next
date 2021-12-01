import { About, Header, Hero, Skill } from "../Components";
import { NextHead } from "../Global/NextHead";

export default function Home() {
  return (
    <div>
      <NextHead />

      <Header />
      <Hero />
      <About />
      <Skill />
    </div>
  );
};