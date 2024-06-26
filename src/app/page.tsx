import Image from "next/image";
import Hero from "./_components/hero/Hero";
import Information from "./_components/informations/Information";
import Slider from "./_components/slider/Slider";
import Overview from "./_components/overview/Overview";
import Stay from "./_components/stay/Stay";
import Experience from "./_components/experience/Experience";
import Acess from "./_components/acess/Acess";

export default function Home() {
  return (

    <>
      <Hero />
      <Information />
      <Slider />
      <Overview />
      <Stay />
      <Experience />
      <Acess />
    </>

  );
}
