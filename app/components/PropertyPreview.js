'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const PropertiesPreview = () => {
  return (
    <section className="bg-[#f6f6f6] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-red-600 font-semibold text-sm mb-2 uppercase">
            Explore Properties
          </h2>
          <h3 className="text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Find your dream home today
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Discover a wide range of properties tailored to your needs.
            Whether it’s a cozy apartment or a luxurious family home,
            we have something for everyone.
          </p>
          <Link href="/listings">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
              View Properties
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/property-preview.jpg"
            alt="Modern home"
            width={700}
            height={500}
            className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default PropertiesPreview
