"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase"; // adjust path if needed
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-black/20 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link
          href="/"
          className="text-3xl font-extrabold text-red-600 tracking-wide"
        >
          Home<span className="text-white">Hunt</span>
        </Link>

        <div className="hidden md:flex space-x-12 items-center">
          <Link href="/" className="font-medium text-white hover:text-red-600">
            Home
          </Link>
          <Link
            href="/listings"
            className="font-medium text-white hover:text-red-600"
          >
            Properties
          </Link>
          <Link
            href="/favorites"
            className="font-medium text-white hover:text-red-600"
          >
            Favorites
          </Link>
          <Link
            href="/about"
            className="font-medium text-white hover:text-red-600"
          >
            About Us
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          {!user ? (
            <>
              <Link
                href="/signup"
                className="text-white font-medium hover:text-red-600"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Login
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="text-white w-6 h-6" />
                <span className="text-white text-md font-medium">
                  {user.displayName || user.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white  px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          )}

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <Menu size={28} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6">
          <Link
            href="/"
            className="text-gray-950 hover:text-red-600"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/listings"
            className="text-gray-950 hover:text-red-600"
            onClick={toggleMenu}
          >
            Properties
          </Link>
          <Link
            href="/favorites"
            className="text-gray-950 hover:text-red-600"
            onClick={toggleMenu}
          >
            Favorites
          </Link>
          <Link
            href="/about"
            className="text-gray-950 hover:text-red-600"
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden z-30"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
