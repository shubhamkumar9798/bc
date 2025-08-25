'use client';
import React from "react";

export default function AboutUs() {
  return (
    <div className="relative bg-gradient-to-br from-gray-100 to-blue-50 py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          About The Build Club
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          The Build Club is an SSN iFound initiative in collaboration with IIT Madras Incubation Centre. 
          Our goal is to provide resources and support to foster innovation, build new products, and work 
          on technical projects.
        </p>
        <p className="text-lg text-gray-700">
          We at the Build Club believe that the most effective form of learning is through peer interaction. 
          We seek to provide such a platform where you can connect and work together in a multi-disciplinary 
          environment, widening your perspective as well as enhancing your skill set.
        </p>
      </div>
    </div>
  );
}
