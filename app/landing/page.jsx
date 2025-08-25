"use client";

import Spline from "@splinetool/react-spline";
import Footer from "@/components/foot";
import Navbar from "@/components/nav";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Spline */}
      <section className="relative w-full h-screen">
        <Spline scene="https://prod.spline.design/xTOrbEBmxfO1PwBx/scene.splinecode" className="w-full h-full" />

        {/* Overlayed Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl"
          >
            SSN BUILD CLUB
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-lg md:text-2xl font-semibold text-gray-900 drop-shadow-lg mt-4"
          >
            SSN IFOUND
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-md md:text-xl text-gray-800 italic tracking-wide mt-2"
          >
            Innovate. Build. Collaborate.
          </motion.p>
        </div>
      </section>

      {/* Footer BELOW spline (scroll to see) */}
      <Footer />
    </div>
  );
}
