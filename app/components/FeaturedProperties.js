"use client";

import React, { useState, useEffect } from "react";
import propertiesData from "../data/properties";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";
import { Heart } from "lucide-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { auth } from "../firebase/firebase"; // Import Firebase auth

const FeaturedProperties = () => {
  const featured = propertiesData.filter((property) => property.featured);
  const [selectedType, setSelectedType] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  // Check Firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
  
      // If user logs out, reset favorites
      if (!currentUser) {
        setFavorites([]);
      } else {
        // On login, try loading favorites from localStorage
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      }
    });
  
    return () => unsubscribe();
  }, []);
  

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleFavoriteToggle = (propertyId) => {
    if (!user) {
      alert("Please log in to add properties to favorites.");
      return;
    }

    const updatedFavorites = favorites.includes(propertyId)
      ? favorites.filter((id) => id !== propertyId)
      : [...favorites, propertyId];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filteredProperties =
    selectedType === "All"
      ? featured
      : featured.filter((property) => property.type === selectedType);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-8 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-black-600 mb-2">
          Featured Properties
        </h2>
        <div className="w-28 h-1 bg-red-600 mx-auto mb-4 rounded"></div>
        <p className="text-gray-600 mb-12 text-base md:text-lg">
          Discover our handpicked selection of premium properties designed to
          match your lifestyle needs
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {["All", "Apartment", "Villa", "House"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full border font-medium ${
              selectedType === type
                ? "bg-red-600 text-white"
                : "bg-white text-gray-600 border-white shadow-md"
            } transition duration-300`}
          >
            {type}s
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden relative"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-60 object-cover"
              />
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                {property.type}
              </span>
              <span className="absolute top-10 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
                {property.status}
              </span>
              <button
                className={`absolute top-3 right-3 bg-white text-black shadow-lg p-2 rounded-full hover:bg-red-600 hover:text-white transition ${
                  favorites.includes(property.id) ? "text-red-600" : ""
                }`}
                onClick={() => handleFavoriteToggle(property.id)}
              >
                <Heart fill={favorites.includes(property.id) ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 text-gray-900">
                {property.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                <FaMapMarkerAlt /> {property.location}
              </p>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  <FaBed /> {property.bedrooms} Beds
                </span>
                <span className="flex items-center gap-1">
                  <FaBath /> {property.bathrooms} Baths
                </span>
                <span className="flex items-center gap-1">
                  <FaRulerCombined /> {property.area} sqft
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-red-600 font-bold text-lg">
                  ₹ {property.price.toLocaleString()}
                </p>
                <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700 transition">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10 text-center">
        <Link
          href="/listings"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-xl transition-all"
        >
          Browse Properties
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProperties;
