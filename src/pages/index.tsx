import About from "@/components/about";
import Hero from "@/components/hero";
import LineAnimation from "@/components/lineanimation";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Accordion from "@/components/section5";

export default function Home() {
  return (
    <div className="mb-20">
      <div className="container mx-auto max-w-[1290px] px-5 mt-16">
        <Hero />
        <Section2 />
        <div className="hidden md:block">
          <About />
        </div>
      </div>
      <LineAnimation />
      <div className="container mx-auto max-w-6xl px-5">
        <Section3 />
        <Section4 />
      </div>
      <Accordion />
    </div>
  );
}
