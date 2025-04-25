"use client";
import { Menu, X } from "lucide-react"; // for hamburger icons
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "People", href: "/people" },
    { name: "Student", href: "/student" },
    { name: "Academics", href: "/academics" },
    { name: "Research", href: "/research" },
    { name: "Facilities", href: "/facilities" },
    { name: "BRTC - Expert Service", href: "/brtc" },
    { name: "Register", href: "/register" },
  ];

  return (
    <nav className="bg-white  sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <img src="/logo.png" alt="EEE Logo" className="h-10 w-auto" /> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-semibold text-sm text-teal-900">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-teal-900"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-teal-900 font-semibold text-base hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
