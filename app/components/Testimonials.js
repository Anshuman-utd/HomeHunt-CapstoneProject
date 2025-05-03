"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Shourya Pratap",
    role: "Home Buyer",
    testimonial:
      "HomeHunt made my property search effortless. I found my dream home within just a few days. The listings were detailed and accurate, and the support team was fantastic!",
    image: "assets/shourya.jpeg",
  },
  {
    id: 2,
    name: "Parthraj Singh",
    role: "Seller",
    testimonial:
      "Selling my house was smooth and stress-free thanks to HomeHunt. The platform gave my property great exposure, and I received multiple offers within a week!",
    image: "assets/parth.jpeg",
  },
  {
    id: 3,
    name: "Piyush Sharma",
    role: "Investor",
    testimonial:
      "Great selection of investment properties! HomeHunt’s filters made it so easy to narrow down exactly what I was looking for. A must-use for serious investors.",
    image: "assets/piyush.jpeg",
  },
  {
    id: 4,
    name: "Bineet Keshari",
    role: "Tenant",
    testimonial:
      "Finding the perfect rental was hassle-free with HomeHunt. The platform is so intuitive, and the properties are always up-to-date. Highly recommended!",
    image: "assets/bineet.jpeg",
  },
  {
    id: 5,
    name: "Shaurya Sharma",
    role: "Agent",
    testimonial:
      "As a real estate agent, HomeHunt connected me with amazing clients. The user-friendly dashboard and lead management features saved me so much time!",
    image: "assets/shaurya.jpeg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black-600 mb-2">
          What Our Clients Say
        </h2>
        {/* Small Red Underline */}
        <div className="w-29 h-1 bg-red-600 mx-auto mb-4 rounded"></div>
        <p className="text-gray-600 mb-12 text-base md:text-lg">
          Discover why homeowners trust HomeHunt to find their perfect property.
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between h-[450px]">
                <FaQuoteLeft className="text-red-600 text-3xl mb-4" />

                <p className="text-gray-600 flex-grow text-xl font-light">
                  {item.testimonial}
                </p>

                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-23 h-23 rounded-full mb-6 object-cover"
                  />
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-10">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white  py-3 px-6 rounded-xl transition-all"
          >
            Share Your Experience
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
