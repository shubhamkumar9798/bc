// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white px-10 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-grey-300 font-bold mb-4 text-xl border-b-2 border-grey-500 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-3 text-lg">
            <li>
              <Link href="/about" className="hover:text-grey-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-grey-200 transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-grey-200 transition-colors">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-grey-300 font-bold mb-4 text-xl border-b-2 border-grey-500 inline-block pb-1">
            Contact Us
          </h3>
          <p className="text-lg">📧 buildclub@ssn.edu.in</p>
          {/* <p className="text-lg">📞 Avni Rajawat: +91 7389342169</p>
          <p className="text-lg">📞 Balkar Singh Sekhon: +91 9908284055</p>
          <p className="text-lg">📞 Ishan Chadha: +91 8580826594</p> */}
        </div>

        {/* Logo & Social */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src="/buildlogo1.png"
            alt="Build Club"
            width={180}
            height={60}
            className="drop-shadow-lg"
          />
          <div className="flex gap-6 text-2xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-grey-400 transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-grey-400 transition-transform transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-grey-400 transition-transform transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-grey-400 transition-transform transform hover:scale-110">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-grey-400 transition-transform transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-grey-400 transition-transform transform hover:scale-110">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SSN Build Club. All Rights Reserved.
      </div>
    </footer>
  );
}
