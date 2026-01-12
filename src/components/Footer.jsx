import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="h-full bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 to-green-500 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-extrabold flex items-center gap-2 hover:text-yellow-300 transition-colors cursor-pointer">
            <span>🍎</span> FruitsHub
          </h1>
          <p className="mt-3 text-sm md:text-base">
            Fresh fruits delivered directly from farms to your home. Taste the goodness with every click!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="hover:text-yellow-200 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-yellow-200 cursor-pointer transition-colors">Mango</li>
            <li className="hover:text-yellow-200 cursor-pointer transition-colors">Apple</li>
            <li className="hover:text-yellow-200 cursor-pointer transition-colors">Cart</li>
            <li className="hover:text-yellow-200 cursor-pointer transition-colors">Checkout</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <FaFacebookF className="cursor-pointer text-blue-600 hover:text-blue-400 transition-colors" />
            <FaInstagram className="cursor-pointer text-pink-500 hover:text-pink-300 transition-colors" />
            <FaTwitter className="cursor-pointer text-sky-400 hover:text-sky-200 transition-colors" />
            <FaGithub className="cursor-pointer text-gray-200 hover:text-white transition-colors" />
          </div>
        </div>

      </div>

      <div className="text-center text-sm py-4 bg-black/40">
        © {new Date().getFullYear()} FruitsHub. All rights reserved666...
      </div>
    </footer>
  );
}
