"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div
      className="relative bg-cover bg-center h-[100vh] flex items-center justify-center"
      style={{
        backgroundImage: `url('/assets/about-hero.jpg')`, 
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
      About HomeHunt
        </h1>
        <p className="text-lg md:text-2xl mb-6">
        We’re committed to making property hunting easier, smarter, and more
        personalized for everyone.
        </p>
      </div>
      </div>


      <div className="bg-red-50 py-16">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-red-600 mb-4"
          >
            Our Mission
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            At HomeHunt, our mission is to simplify the real estate journey for
            buyers, sellers, and renters alike. We believe finding the perfect
            home should be easy, transparent, and enjoyable. With a curated
            selection of properties, smart search tools, and a dedicated team,
            we aim to help every client feel confident in their property
            decisions.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-black mb-2"
          >
            Meet Our Team
          </motion.h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-3 rounded"></div>
          <p className="text-gray-600 mb-12 text-base md:text-lg text-center">
            The people behind HomeHunt’s vision and dedication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-lg shadow-md p-6 text-center">
              <Image
                src="/assets/team1.jpg"
                alt="Team Member 1"
                width={150}
                height={150}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-red-600">
                Anshuman Mehta
              </h3>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
              <p className="text-gray-500 text-sm mt-2">
                Passionate about simplifying real estate with tech innovation
                and user-first design.
              </p>
            </div>

            <div className="bg-red-50 rounded-lg shadow-md p-6 text-center">
              <Image
                src="/assets/team2.jpg"
                alt="Team Member 2"
                width={150}
                height={150}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-red-600">Karn Gupta</h3>
              <p className="text-gray-600 text-sm">Lead Developer</p>
              <p className="text-gray-500 text-sm mt-2">
                Building seamless frontend experiences and powerful backend
                solutions for HomeHunt.
              </p>
            </div>
            <div className="bg-red-50 rounded-lg shadow-md p-6 text-center">
              <Image
                src="/assets/team3.jpg"
                alt="Team Member 3"
                width={150}
                height={150}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-red-600">
                Priya Sharma
              </h3>
              <p className="text-gray-600 text-sm">Marketing Head</p>
              <p className="text-gray-500 text-sm mt-2">
                Spreading the HomeHunt story and connecting with property
                seekers everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
