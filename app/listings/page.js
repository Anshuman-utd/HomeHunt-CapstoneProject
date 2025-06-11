"use client";

import { useState, useEffect } from "react";
import propertiesData from "../data/properties.json";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ListingsPage() {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 9;
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  useEffect(() => {
    let filtered = propertiesData.filter((property) =>
      property.location.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOption === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProperties(filtered);
    setCurrentPage(1); // Reset to first page when search or sort changes
  }, [search, sortOption]);

  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-25 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-5xl font-bold mb-12 text-center">
            Search For Properties here
          </h1>

          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <input
              type="text"
              placeholder="Search by location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">Sort by</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          {/* Property Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {currentProperties.map((property) => (
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
                  <button className="absolute top-3 right-3 bg-white text-black shadow-lg p-2 rounded-full hover:bg-red-600 hover:text-white transition">
                    <Heart />
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

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
