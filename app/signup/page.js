"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, UserPlus } from "lucide-react";

import { auth } from "../firebase/firebase"; // adjust this if needed
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignupPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  // This line is removed as it is not needed here

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: fullname,
      });
      router.push("/"); // Redirect to home
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <Navbar />
      <div className="flex items-center justify-center min-h-[100vh]">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-center text-red-600">HomeHunt</h2>
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-semibold">Create an account</h3>
            <p className="text-sm text-gray-600">Join our community of property enthusiasts</p>
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <form onSubmit={handleSignup} className="mt-6 space-y-6">
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <UserPlus className="w-5 h-5" />
                  </span>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                    placeholder="name@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                Create Account
              </button>
            </div>
          </form>

          {/* Redirect to Login */}
          <div className="flex flex-col items-center mt-6 space-y-2">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <Link
              href="/login"
              className="w-full text-center py-2 border rounded-md font-medium text-red-600 hover:bg-red-100"
            >
              Sign in to your account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
