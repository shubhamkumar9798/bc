"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/nav";
import Footer from "@/components/foot";
import CoreMembersPage from "@/components/team"
import { TextScroll } from "@/components/ui/text-scroll";


export default function AboutPage() {
  return (
    <div className="bg-neutral-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-neutral-50 text-black h-screen flex flex-col items-center justify-center ">
        {/* "EST" first */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[18vw] font-extrabold tracking-[1vw] leading-none mt-20"
        >
          EST.
        </motion.h1>

        {/* "2022" second */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[18vw] font-extrabold tracking-[1vw] leading-none"
        >
          2022
        </motion.h1>

        {/* Optional tagline third */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-6 text-2xl md:text-3xl text-gray-700 font-light tracking-wide"
        >
          Innovate • Build • Collaborate
        </motion.p>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto bg-neutral-50 text-black">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/lononobg.png"
            alt="Build Club"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-4xl font-bold text-indigo-700 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SSN Build Club is a community of passionate innovators, engineers,
              and creators who believe in learning by doing. We aim to bridge
              the gap between imagination and reality through projects,
              workshops, and events that spark creativity and collaboration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is to empower students with hands-on experience,
              industry exposure, and teamwork skills that prepare them for the
              future.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Innovation",
              desc: "We encourage creative thinking and experimentation to bring new ideas to life.",
            },
            {
              title: "Collaboration",
              desc: "Teamwork is at the heart of what we do. Together, we achieve greater impact.",
            },
            {
              title: "Growth",
              desc: "We focus on personal and professional growth through continuous learning.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    <TextScroll
        text="✨ Core Members ✨"
        default_velocity={5}
        className="text-3xl font-bold uppercase tracking-widest"
      />
      <CoreMembersPage/>
      <Footer/>
    </div>
  );
}
