import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import AboutPreview from "./components/AboutPreview";
import PropertiesPreview from "./components/PropertyPreview";
import FeaturedProperties from "./components/FeaturedProperties";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <AboutPreview/>
      <FeaturedProperties/>
      <PropertiesPreview/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
