"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-12 relative pt-40">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: "url('/bg-pattern.png')",
          backgroundSize: "200px 200px",
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and About */}
          <div className="text-center md:text-left animate-fade-in-down">
            <div className="flex items-center justify-center md:justify-start group mb-6">
              <div className="animate-bounce hover:animate-none">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="drop-shadow-2xl transition-transform duration-500 hover:rotate-180"
                  priority={false}
                />
              </div>
              <Link
                href="/"
                className="text-xl font-bold ml-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-500 transition duration-300 hover:scale-110"
              >
                Vigyan Darshan
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed bg-black/30 p-4 rounded-xl shadow-2xl backdrop-blur-sm transform transition duration-300 hover:scale-105 hover:bg-black/40">
              Exploring the intersection of science, philosophy, and spirituality through engaging content and meaningful discussions.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="text-center animate-fade-in-down"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-400">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Blog", path: "/blog" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-700 transition duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:translate-x-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div
            className="text-center md:text-right animate-fade-in-down"
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-500">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-end gap-3 text-sm">
              {[
                {
                  href: "https://www.facebook.com",
                  icon: "facebook-f",
                  label: "Facebook",
                },
                {
                  href: "https://x.com/Vigyan_darshan",
                  icon: "twitter",
                  label: "Twitter",
                },
                {
                  href: "https://www.instagram.com/vigyandarshan/",
                  icon: "instagram",
                  label: "Instagram",
                },
                {
                  href: "https://www.youtube.com/@Vigyandarshan",
                  icon: "youtube",
                  label: "YouTube",
                },
              ].map((social) => (
                <Link
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 backdrop-blur-sm group"
                >
                  <i
                    className={`fab fa-${social.icon} text-xs group-hover:animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}
                    aria-hidden="true"
                  ></i>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t border-gray-700/50 mt-8 pt-6 animate-fade-in-down"
          style={{ animationDelay: "600ms" }}
        >
          <div className="text-center text-xs text-gray-400">
            <p className="transition duration-300 hover:scale-105 hover:text-gray-300">
              &copy; {new Date().getFullYear()} Vigyan Darshan. All rights
              reserved.
            </p>
            <p className="mt-2 transition duration-300 hover:scale-105 hover:text-gray-300 flex items-center justify-center gap-1">
              Made with{" "}
              <span className="text-red-500 animate-pulse text-sm">❤</span> in
              India
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
