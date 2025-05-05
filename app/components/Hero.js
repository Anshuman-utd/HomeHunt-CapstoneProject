import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[100vh] flex items-center justify-center"
      style={{
        backgroundImage: `url('/assets/hero-img.avif')`, 
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Dream Home Today
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Explore the best properties handpicked for you.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/listings">
            <button className="px-5 py-2 md:px-6 md:py-3 bg-red-600 hover:bg-red-700 hover:cursor-pointer rounded-md shadow-md text-white ">
              Properties
            </button>
          </Link>

          <Link href="mailto:support@homehunt.com" passHref>
            <button className="px-5 py-2 md:px-6 md:py-3 border border-white hover:cursor-pointer rounded-md shadow-md text-white">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
