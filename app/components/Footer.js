"use client"; 
import {  MapPin, Phone, Mail, Send } from "lucide-react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-3xl font-bold text-red-600">HomeHunt</h1>
          </div>
          <p className="text-gray-600">
            Your trusted partner in finding the perfect home. We make property hunting simple, efficient, and tailored to your unique needs.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-[#1DA1F2] hover:opacity-80 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-[#1877F2] hover:opacity-80 text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-[#E4405F] hover:opacity-80 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-black hover:opacity-80 text-2xl"><FaGithub /></a>
          </div>
        </div>


        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-600">Home</a></li>
            <li><a href="#" className="hover:text-red-600">Properties</a></li>
            <li><a href="#" className="hover:text-red-600">About Us</a></li>
            <li><a href="#" className="hover:text-red-600">Contact</a></li>
            <li><a href="#" className="hover:text-red-600">AI Property Hub</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-600">Customer Support</a></li>
            <li><a href="#" className="hover:text-red-600">FAQs</a></li>
            <li><a href="#" className="hover:text-red-600">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-red-600">Privacy Policy</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2"><MapPin size={16} /> 123 Home Street, Mumbai, India</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 12345 67890</li>
            <li className="flex items-center gap-2 "><Mail size={16} />support@homehunt.com</li>
          </ul>
        </div>


        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3 text-gray-800">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for the latest property listings and real estate insights.</p>
          <form className="flex">
            <input type="email" placeholder="Your email address" className="p-2 flex-1 border border-gray-300 rounded-l-md focus:outline-none focus:border-red-600" />
            <button type="submit" className="bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700 transition flex items-center gap-1">
              <Send size={16} /> Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">By subscribing, you agree to our <a href="#" className="underline hover:text-red-600">Privacy Policy</a>.</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200">
        © 2025 HomeHunt. All Rights Reserved.
      </div>
    </footer>
  );
}
