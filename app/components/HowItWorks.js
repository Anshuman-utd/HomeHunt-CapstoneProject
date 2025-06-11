'use client';

import { FaSearch, FaClipboardCheck, FaKey } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch size={40} className="text-red-600" />,
    title: "Browse Listings",
    description: "Explore our extensive property listings with powerful filters to find homes that match your needs.",
  },
  {
    id: 2,
    icon: <FaClipboardCheck size={40} className="text-red-600" />,
    title: "Schedule a Visit",
    description: "Contact agents or property owners to schedule a visit and experience the property first-hand.",
  },
  {
    id: 3,
    icon: <FaKey size={40} className="text-red-600" />,
    title: "Seal the Deal",
    description: "Complete the process and move into your dream home with ease and transparency.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 text-center">


        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          How It Works
        </h2>

        <div className="w-24 h-1 bg-red-600 mx-auto mb-4 rounded"></div>

        
        <p className="text-gray-600 mb-12 text-base md:text-lg">
          Finding your dream home with HomeHunt is simple and straightforward.
        </p>

       
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
