"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";

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
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold  mb-2">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 mb-12 text-base md:text-lg">
            The passionate individuals behind HomeHunt’s success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="shadow-md rounded-xl  p-6 text-center">
              <img
                src="/assets/anshuMANN.jpg"
                alt="Anshuman Mehta"
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-4 border-white shadow"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Anshuman Mehta
              </h3>
              <p className="text-red-600 font-medium">Founder & CEO</p>
              <p className="text-gray-600 mt-2 text-sm">
                Passionate about simplifying real estate with tech innovation
                and user-first design.
              </p>
              <div className="flex justify-center gap-4 mt-4 text-red-600 text-xl">
                <i className="ri-linkedin-box-fill"></i>
                <i className="ri-twitter-fill"></i>
                <i className="ri-instagram-fill"></i>
              </div>
            </div>

            {/* Card 2 */}
            <div className="shadow-md rounded-xl  p-6 text-center">
              <img
                src="/assets/tanishk.jpeg"
                alt="Karn Gupta"
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-4 border-white shadow"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Tanishk Agrawal
              </h3>
              <p className="text-red-600 font-medium">Lead Developer</p>
              <p className="text-gray-600 mt-2 text-sm">
                Building seamless frontend experiences and powerful backend
                solutions for HomeHunt.
              </p>
              <div className="flex justify-center gap-4 mt-4 text-red-600 text-xl">
                <i className="ri-linkedin-box-fill"></i>
                <i className="ri-twitter-fill"></i>
              </div>
            </div>

            {/* Card 3 */}
            <div className="shadow-md rounded-xl  p-6 text-center">
              <img
                src="/assets/aman.jpeg"
                alt="Priya Sharma"
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-4 border-white shadow"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Aman Soni
              </h3>
              <p className="text-red-600 font-medium">Marketing Head</p>
              <p className="text-gray-600 mt-2 text-sm">
                Spreading the HomeHunt story and connecting with property
                seekers everywhere.
              </p>
              <div className="flex justify-center gap-4 mt-4 text-red-600 text-xl">
                <i className="ri-instagram-fill"></i>
                <i className="ri-twitter-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs/>

      <div className="py-16 ">
        <div className="container mx-auto px-2 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Our Achievements
          </motion.h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 mb-12 text-base md:text-lg">
            At HomeHunt, we’ve made significant strides in redefining real
            estate discovery. Here are some milestones we're proud of:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-red-600">10K+ Users</h3>
              <p className="text-gray-600 mt-2">
                Trusted by thousands of property seekers across India.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-red-600">500+ Listings</h3>
              <p className="text-gray-600 mt-2">
                Curated and verified properties updated regularly.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-red-600">Top Rated UX</h3>
              <p className="text-gray-600 mt-2">
                Praised for intuitive design and user-friendliness.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
