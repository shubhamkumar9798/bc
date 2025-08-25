"use client";

import React from "react";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen text-gray-900 font-sans relative">

      {/* 🔹 Logo at Top */}
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/lononobg.png"
          alt="Build Club Logo"
          width={220}
          height={220}
          priority
          className="drop-shadow-xl"
        />
      </motion.div>

      {/* 🔹 Fullscreen Spline Background */}
      <div className="relative w-full h-screen overflow-hidden">
        <Spline
          scene="https://prod.spline.design/T70Er-9XIEKWLhBv/scene.splinecode"
          className="absolute inset-0 w-full h-full top-[140px]" // push down below logo
        />

        {/* 🔹 Register/Login Buttons at Bottom Left */}
        <motion.div
          className="absolute bottom-10 left-10 flex flex-col sm:flex-row gap-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link href="/auth/register" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-xl shadow-lg border border-gray-700 hover:bg-gray-800 transition"
            >
              Register
            </motion.button>
          </Link>
          <Link href="/auth/login" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-xl shadow-lg border border-gray-700 hover:bg-gray-800 transition"
            >
              Login
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* 🔹 About Us Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-gray-200">
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/about.png"
            alt="About Build Club"
            width={1000}
            height={700}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* 🔹 Testimonial / Placeholder Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-gray-200">
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/test.png"
            alt="Testimonial Section"
            width={1000}
            height={700}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* 🔹 Footer */}
      <Footer />

      {/* 🔹 Hide Spline watermark and set global fonts */}
      <style jsx global>{`
        .spline-watermark {
          display: none !important;
        }

        body {
          font-family: 'Inter', 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
}
