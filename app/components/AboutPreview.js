"use client";
import { motion } from "framer-motion";
import Link from 'next/link';

const AboutPreview = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 rounded-xl overflow-hidden"
        >
          <img src="assets/about.jpg" alt="Living room" className="w-130 h-150 object-cover rounded-lg" />

        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <p className="text-red-500 text-sm font-semibold uppercase mb-2">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            We help clients buy and sell houses
          </h2>
          <p className="text-gray-600 mb-6">
            HomeHunt is your trusted partner in discovering the perfect home. With a user-friendly platform,
            verified listings, and insightful tools, we make the process of buying, browsing, or renting properties 
            as smooth and transparent as possible.
          </p>
          <Link
            href="/about"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
          >
            View More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
