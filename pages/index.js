import { Header, Hero } from "../Components";
import { NextHead } from "../Global/NextHead";

export default function Home() {
  return (
    <div>
      <NextHead />

      <Header />
      <Hero />
    </div>
  );
};