'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <Link href="/" className="text-3xl font-extrabold text-red-600 tracking-wide">
          Home<span className="text-gray-800">Hunt</span>
        </Link>

        <div className="hidden md:flex space-x-12 items-center">
          <Link href="/" className=" font-medium  text-gray-950 hover:text-red-600">Home</Link>
          <Link href="/listings" className="font-medium  text-gray-950 hover:text-red-600">Properties</Link>
          <Link href="/favorites" className="font-medium  text-gray-950 hover:text-red-600">Favorites</Link>
          <Link href="/about" className="font-medium  text-gray-950 hover:text-red-600">About Us</Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">

            <Link href="/signup" className="text-red-600 font-medium hover:text-red-600">
                Sign Up
            </Link> 

          <Link href="/login" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Login 
          </Link>

         
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>

        
        <div className="flex flex-col p-6 space-y-6">
          <Link href="/" className="text-gray-950 hover:text-red-600" onClick={toggleMenu}>Home</Link>
          <Link href="/listings" className="text-gray-950 hover:text-red-600" onClick={toggleMenu}>Properties</Link>
          <Link href="/favorites" className="text-gray-950 hover:text-red-600" onClick={toggleMenu}>Favorites</Link>
          <Link href="/about" className="text-gray-950 hover:text-red-600" onClick={toggleMenu}>About Us</Link>
        </div>
      </div>

      
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden z-30"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
