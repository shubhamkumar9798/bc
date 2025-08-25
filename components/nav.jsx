"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/auth/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 bg-transparent backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/landing">
          <Image
            src="/lononobg.png"
            alt="Build Club Logo"
            width={120}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/about"
          className="text-black no-underline hover:text-blue-500"
        >
          About Us
        </Link>
        <Link
          href="/events"
          className="text-black no-underline hover:text-orange-500"
        >
          Events
        </Link>
        <Link
          href="/gallery"
          className="text-black no-underline hover:text-orange-500"
        >
          Gallery
        </Link>
        <Link
          href="/live"
          className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 no-underline"
        >
          Live
        </Link>
        <button
          onClick={handleLogout}
          className="text-black border border-black px-3 py-1 rounded hover:bg-gray-400 hover:text-white transition"
        >
          Logout
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className="flex md:hidden">
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button className="p-2 rounded-md border border-gray-400 bg-neutral-50 hover:bg-gray-100">
        <Menu className="h-6 w-6 text-black" /> 
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      className="w-48 bg-neutral-50 border border-gray-200 shadow-md"
    >
      <DropdownMenuItem asChild>
        <Link href="/about" className="w-full">About Us</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/events" className="w-full">Events</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/gallery" className="w-full">Gallery</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/live" className="w-full">Live</Link>
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={handleLogout}
        className="cursor-pointer"
      >
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>

    </nav>
  );
}
