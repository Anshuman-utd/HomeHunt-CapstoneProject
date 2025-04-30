import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import AboutPreview from "./components/AboutPreview";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhyChooseUs/>
      <AboutPreview/>
      <HowItWorks/>
      <Testimonials/>
    </div>
  );
}
