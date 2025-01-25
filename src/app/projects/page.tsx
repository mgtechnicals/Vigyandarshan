"use client";

import Link from "next/link";

const Projects = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-amber-500 mb-10 pt-12">
          Our Projects
        </h2>

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link
              
              href="/project1.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Project 1</h3>
              <p className="text-sm text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                vitae ante at nisi malesuada egestas.
              </p>
              <Link
                href="/projects/project1"
                className="text-amber-500 font-medium hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link
              href="/project2.jpg"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Project 2</h3>
              <p className="text-sm text-gray-400 mb-4">
                Curabitur id gravida nunc. Donec luctus erat vitae orci fermentum,
                non placerat felis sagittis.
              </p>
              <Link
                href="/projects/project2"
                className="text-amber-500 font-medium hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link
              href="/project3.jpg"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Project 3</h3>
              <p className="text-sm text-gray-400 mb-4">
                Suspendisse potenti. Nulla facilisi. Vestibulum lacinia ante dui,
                ac tincidunt risus laoreet sit amet.
              </p>
              <Link
                href="/projects/project3"
                className="text-amber-500 font-medium hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link
              href="/project4.jpg"
              alt="Project 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Project 4</h3>
              <p className="text-sm text-gray-400 mb-4">
                Vivamus consequat diam a risus tempus, vel feugiat purus varius.
                Fusce sollicitudin nisi vitae tortor cursus.
              </p>
              <Link
                href="/projects/project4"
                className="text-amber-500 font-medium hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
