"use client";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import propertiesData from "../data/properties.json";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const [user] = useAuthState(auth);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(savedFavorites);
    }
  }, [user]);

  const favoritedProperties = propertiesData.filter((property) =>
    favorites.includes(property.id)
  );

  return (
    <>
      <Navbar />
      <div className=" min-h-screen py-25 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold  text-center">
            View your Favorite Properties here.
          </h1>

          {!user ? (
            <p className="text-center text-gray-600 text-lg">
              Please log in to view your favorite properties.
            </p>
          ) : favoritedProperties.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">
              You have no favorite properties yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoritedProperties.map((property) => (
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
                    <button className="absolute top-3 right-3 bg-white text-red-600 shadow-lg p-2 rounded-full">
                      <Heart fill="currentColor" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
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
                    <p className="text-red-600 font-bold text-lg">
                      ₹ {property.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
