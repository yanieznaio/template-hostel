import Image from "next/image";
import Hero from "./_components/hero/Hero";
import Information from "./_components/informations/Information";
import Slider from "./_components/slider/Slider";

export default function Home() {
  return (

    <>
      <Hero />
      <Information />
      <Slider />
    </>

  );
}
