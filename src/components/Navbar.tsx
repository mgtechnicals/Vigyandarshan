"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); // Dropdown for Projects
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeProjectsDropdown = () => {
    setIsProjectsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsProjectsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:rotate-180"
                priority
              />
            </div>
            <Link
              href="/"
              onClick={closeMenu}
              className="ml-3 text-amber-500 text-lg sm:text-xl md:text-2xl font-bold hover:text-amber-300 transition-colors duration-300 tracking-wide"
            >
              Vigyan Darshan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              href="/"
              className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition duration-300 hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition duration-300 hover:scale-105"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              href="/blog"
              className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition duration-300 hover:scale-105"
            >
              Gallery
            </Link>

            {/* Projects Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProjects}
                className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition duration-300 hover:scale-105"
                ref={buttonRef}
              >
                Projects
              </button>
              {isProjectsOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50"
                >
                  <ul className="py-1">
                    <li>
                      <Link
                        href="/projects/project1"
                        onClick={closeProjectsDropdown}
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Project 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects/project2"
                        onClick={closeProjectsDropdown}
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Project 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects/project3"
                        onClick={closeProjectsDropdown}
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Project 3
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition duration-300 hover:scale-105"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
