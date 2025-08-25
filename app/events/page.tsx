"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/nav";
import Footer from "@/components/foot";

interface Event {
  title: string;
  date: string;
  venue: string;
  type: string;
  description: string;
  poster?: string;
  form?: string; // ✅ new field for registration link
}

export default function EventsPage() {
  const [liveEvents, setLiveEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch("/api/events");
      const data = await res.json();

      // Debug: see exactly what API gives you
      console.log("📌 Events from API:", data.events);

      const live = data.events.filter((e: Event) => e.type === "current");
      const past = data.events.filter((e: Event) => e.type === "past");

      setLiveEvents(live);
      setPastEvents(past);
    }
    fetchEvents();
  }, []);

  const renderCard = (event: Event, idx: number, showButton: boolean) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.05 }}
      className="relative w-[320px] h-[420px] rounded-2xl shadow-lg overflow-hidden mx-auto"
    >
      {/* Background Poster */}
      <div className="absolute inset-0">
        <Image
          src={event.poster || "/postbg.png"}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"
          className="object-cover"
          priority={idx === 0}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 ">
        <h3 className="text-4xl font-bold text-orange-500 mb-3">
          {event.title}
        </h3>
        <div className="space-y-2 text-xl">
          <p className="flex items-center gap-2 justify-center">
            <Clock size={16} /> Time: {event.date}
          </p>
          <p className="flex items-center gap-2 justify-center">
            <CalendarDays size={16} /> Date: {event.date}
          </p>
          <p className="flex items-center gap-2 justify-center">
            <MapPin size={16} /> Venue: {event.venue}
          </p>
        </div>

        {/* 🎟 Register button only for live events */}
        {showButton && event.form && (
          <Button
            asChild
            className="mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold"
          >
            <a href={event.form} target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );

  return (
    <div>
    <div className="p-10 bg-[#f4efe9] min-h-screen">
      <Navbar />
      <h1 className="text-6xl font-extrabold text-center mb-16 tracking-widest text-orange-600 pt-20">
        LIVE EVENTS
      </h1>

      {/* Live Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {liveEvents.map((event, idx) => renderCard(event, idx, true))}
      </div>

      {/* Past Events */}
      <h2 className="text-5xl font-extrabold text-center mb-10 text-gray-700">
        PAST EVENTS.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pastEvents.map((event, idx) => renderCard(event, idx, false))}
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}
