"use client"; // Next.js 13+ with App Router

import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-amber-500 mb-10 pt-10">
          Meet Our Team
        </h2>

        {/* Grid Layout for Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <Image
                width={150}
                height={150}
              src="/team1.jpg"
              alt="Team Member 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-2">John Doe</h3>
              <p className="text-sm text-gray-400 mb-4">CEO & Founder</p>
              <p className="text-sm text-gray-400">
                John is the visionary behind our company, dedicated to leading us
                toward success with his vast experience in the industry.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <Image
             width={70}
             height={70}
              src="/team2.jpg"
              alt="Team Member 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Jane Smith</h3>
              <p className="text-sm text-gray-400 mb-4">Chief Technology Officer</p>
              <p className="text-sm text-gray-400">
                Jane brings innovation and tech expertise, always pushing the
                boundaries of what’s possible.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <Image
             width={70}
             height={70}
              src="/team3.jpg"
              alt="Team Member 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Sam Wilson</h3>
              <p className="text-sm text-gray-400 mb-4">Marketing Director</p>
              <p className="text-sm text-gray-400">
                Sam is our marketing mastermind, responsible for crafting the
                strategies that drive our growth.
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <Image
             width={70}
             height={70}
              src="/team4.jpg"
              alt="Team Member 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Emma Stone</h3>
              <p className="text-sm text-gray-400 mb-4">Lead Developer</p>
              <p className="text-sm text-gray-400">
                Emma is an expert developer who ensures our product’s
                functionality is top-notch.
              </p>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <Image
             width={70}
             height={70}
              src="/team5.jpg"
              alt="Team Member 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Michael Brown</h3>
              <p className="text-sm text-gray-400 mb-4">Designer</p>
              <p className="text-sm text-gray-400">
                Michael brings creativity and innovation to every design
                project, ensuring it resonates with our users.
              </p>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <Image
             width={70}
             height={70}
              src="/team6.jpg"
              alt="Team Member 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Sarah Lee</h3>
              <p className="text-sm text-gray-400 mb-4">Operations Manager</p>
              <p className="text-sm text-gray-400">
                Sarah ensures smooth operations and is the backbone of our
                efficient workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
