import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Projects | Vigyan Darshan',
  description: 'Explore our innovative projects in science and technology. View our latest work and achievements.',
  openGraph: {
    title: 'Our Projects | Vigyan Darshan',
    description: 'Explore our innovative projects in science and technology',
    images: ['/project1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
}

const projects = [
    {
    id: 'project1',
    title: 'Project 1',
    image: '/project1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ante at nisi malesuada egestas.',
    link: '/projects/project1'
  },
    {
    id: 'project2',
    title: 'Project 1',
    image: '/project1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ante at nisi malesuada egestas.',
    link: '/projects/project1'
  },
    {
    id: 'project3',
    title: 'Project 1',
    image: '/project1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ante at nisi malesuada egestas.',
    link: '/projects/project1'
  },
  // ...Add other projects similarly
];

export default function Projects() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Collection",
    "name": "Vigyan Darshan Projects",
    "description": "Our innovative projects in science and technology",
    "itemListElement": projects.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "url": `https://your-domain.com${project.link}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section 
        className="py-20 bg-gray-900 text-white" 
        id="projects"
        aria-label="Projects Section"
      >
        <div className="container mx-auto px-4 mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-amber-500 mb-10 pt-1">
            Our Projects
          </h1>

          <div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            role="list"
          >
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
                role="listitem"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  priority={index < 4}
                  loading={index < 4 ? 'eager' : 'lazy'}
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-amber-400 mb-4">{project.title}</h2>
                  <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    className="text-amber-500 font-medium hover:underline"
                    aria-label={`View details for ${project.title}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
