"use client"; 

import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <Navbar />
    <div className="flex flex-1 items-center justify-center min-h-[100vh] ">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-center text-red-600">
            HomeHunt
          </h2>
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-semibold">Welcome back</h3>
            <p className="text-sm text-gray-600">
              Please sign in to your account
            </p>
          </div>

          <form className="mt-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </span>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 hover:shadow-lg"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center mt-6 space-y-2">
            <p className="text-sm text-gray-600">Don't have an account?</p>
            <Link
              href="/signup"
              className="w-full text-center py-2 border rounded-md font-medium text-red-600 hover:bg-red-100"
            >
              Create an account
            </Link>
          </div>
        </div>
    </div>
    <Footer/>
  </div>
  );
}
