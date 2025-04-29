"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedDropdown, { Option } from "./motion/AnimatedDropdown";

interface NavLinkType {
  name: string;
  href?: string;
  children?: Array<Option>;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks: Array<NavLinkType> = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "People",
      children: [
        { name: "Teacher", href: "teacher" },
        { name: "Officers & Stuff", href: "officers-stuff" },
      ],
    },
    { name: "Student", href: "/student" },
    { name: "Academics", href: "/academics" },
    { name: "Research", href: "/research" },
    { name: "Facilities", href: "/facilities" },
    { name: "Register", href: "/register" },
  ];

  return (
    <nav className="bg-gray-100  sticky top-0 z-50 shadow-sm ">
      <div
        className="w-full bg-navy-900 py-3 flex justify-between items-center px-20"
        style={{ backgroundColor: "#0a1f3d" }}
      >
        <div className="flex gap-3 items-center">
          <Image
            src={"/assets/logo.png"}
            width={50}
            height={50}
            alt="Islamic University"
            className="border border-white rounded-xs"
          />
          <h1 className="text-xl tracking-wide md:text-xl lg:text-xl font-semibold text-center text-white">
            Islamic University, Bangladesh
          </h1>
        </div>

        <h1 className="text-xl tracking-wide md:text-xl lg:text-2xl font-semibold text-center text-yellow-100">
          Department of{" "}
          <span className="text-white">
            Electrical and Electronic Engineering
          </span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}

          {/* <img src="/logo.png" alt="EEE Logo" className="h-10 w-auto" /> */}
          <div className="py-3">
            {/* <p className="text-sm italic"> Department of </p>
            <p className="text-2xl font-bold">
              Electrical & Electronic Engineering
            </p> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden py-3 md:flex space-x-6 font-semibold text-sm text-teal-900">
            {navLinks.map((link) => {
              if (link?.href) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:underline"
                  >
                    {link.name}
                  </Link>
                );
              } else if (link.children) {
                return (
                  <AnimatedDropdown
                    name={link.name}
                    key={link.name}
                    options={link.children}
                  />
                );
              }
            })}
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
