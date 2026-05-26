import React from "react";
import logo from "../images/DxLogo.svg"; // Change path based on your folder structure

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" aria-label="DexKor home" className="flex items-center">
          <img
            src={logo}
            alt="DexKor Logo"
            className="h-7 w-auto"
          />
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#problem"
            className="text-gray-700 hover:text-black transition"
          >
            Why Switch
          </a>

          <a
            href="#helpdesk"
            className="text-gray-700 hover:text-black transition"
          >
            Features
          </a>

          <a
            href="#how"
            className="text-gray-700 hover:text-black transition"
          >
            Migration
          </a>

          <a
            href="#case"
            className="text-gray-700 hover:text-black transition"
          >
            Customers
          </a>

          <a
            href="#faq"
            className="text-gray-700 hover:text-black transition"
          >
            FAQ
          </a>

          <a
            href="#form"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Book Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
