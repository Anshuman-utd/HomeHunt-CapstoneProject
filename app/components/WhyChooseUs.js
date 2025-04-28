'use client';

import { FaSearchLocation, FaHandshake, FaHome, FaUserShield, FaStar, FaDollarSign } from "react-icons/fa";

const features = [
    {
        id: 1,
        icon: <FaSearchLocation size={40} className="text-red-600" />,
        title: "Extensive Listings",
        description: "Access a wide range of properties tailored to your preferences and budget.",
    },
    {
        id: 2,
        icon: <FaHandshake size={40} className="text-red-600" />,
        title: "Trusted Agents",
        description: "Work with professional agents committed to helping you find your dream home.",
    },
    {
        id: 3,
        icon: <FaHome size={40} className="text-red-600" />,
        title: "Seamless Experience",
        description: "Enjoy a smooth, hassle-free process from property search to final purchase.",
    },
    {
        id: 4,
        icon: <FaUserShield size={40} className="text-red-600" />,
        title: "Secure & Transparent",
        description: "Your data and transactions are fully secure with complete transparency.",
    },
    {
        id: 5,
        icon: <FaStar size={40} className="text-red-600" />,
        title: "Exceptional Customer Service",
        description: "Receive personalized support and assistance throughout your real estate journey.",
    },
    {
        id: 6,
        icon: <FaDollarSign size={40} className="text-red-600" />,
        title: "Competitive Pricing",
        description: "Find affordable properties and get the best value for your money.",
    },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black-600 mb-2">
          Why Choose Us
        </h2>
        
        {/* Small Red Underline */}
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4 rounded"></div>
        
        {/* Subtitle */}
        <p className="text-gray-600 mb-12 text-base md:text-lg">
          Discover the HomeHunt advantage and why so many trust us with their real estate journey.
        </p>

        {/* Feature Cards */}
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-balance  font-light ">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
