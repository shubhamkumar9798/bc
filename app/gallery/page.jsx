"use client";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/nav";
import Footer from "@/components/foot";


export default function GalleryPage() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("/api/gallery");
        const { data } = await res.json();
        setGallery(data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };
    fetchGallery();
  }, []);

  return (
    <div>
    <div className="bg-[#fafafa] min-h-screen flex flex-col">
        <Navbar/>
      {/* Spline Section */}
      <div className="w-full h-screen">
        <Spline scene="https://prod.spline.design/u-FE8axZ14n8nwcH/scene.splinecode" />
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -mt-32 z-10 relative">
        {gallery.map((item, index) => (
          <Card key={index} className="shadow-lg rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}
