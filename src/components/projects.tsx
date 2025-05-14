"use client";

import { useState, useEffect } from "react";
import { Card } from "@heroui/react";
import Image from "next/image";
import { Tangerine } from "next/font/google";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  techStack: string[];
  more: { image: string; description: string; status: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Livestreaming Platform",
    description: "A SaaS platform with real-time livestreaming, OMS system, and secure payment processing (Currently rebranded to Spree.city)",
    image: "/projects/carts.jpeg",
    url: "https://spree.city",
    techStack: ["React", "TypeScript", "Real-Time Integration", "PostgreSQL", "Tailwind CSS"],
    more: [
      {
        image: "/projects/all-chat.jpeg",
        description: "Livestreaming dashboard UI with real-time analytics.",
        status: "Completed"
      },
      {
        image: "/projects/carts.jpeg",
        description: "Order management system for sellers.",
        status: "Completed"
      }
    ]
  },
  {
    id: 2,
    title: "Kompaz",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/projects/kompaz1.jpg",
    url: "https://github.com/yourusername/taskmanager",
    techStack: ["React", "NextJS", "Python", "SQL", "Tailwind CSS"],
    more: [
      {
        image: "/projects/kompaz1.jpg",
        description: "Livestreaming dashboard UI with real-time analytics.",
        status: "In Progress"
      },
      {
        image: "/projects/kompaz2.jpg",
        description: "Order management system for sellers.",
        status: "In Progress"
      }
    ]
  },
  {
    id: 3,
    title: "3D Landing Page",
    description: "A landing page for a marketing agency",
    image: "/projects/goc1.png",
    url: "https://globaloneclick.com",
    techStack: ["Javascript", "ThreeJS", "Blender", "3D Rendering", "GSAP"],
    more: [
      {
        image: "/projects/goc1.png",
        description: "Integrated loader to ensure smooth user experience and low latency",
        status: "Completed"
      },
      {
        image: "/projects/goc2.png",
        description: "Designed, integrated and animated the 3D model",
        status: "Completed"
      }
    ]
  },
  {
    id: 4,
    title: "My Freelance Portfolio",
    description: "Capsulated: A creative portfolio for my freelance work",
    image: "/projects/capfirst.png",
    url: "https://capsulated.vercel.app",
    techStack: ["NextJS", "GSAP", "Tailwind CSS", "Typescript"],
    more: [
      {
        image: "/projects/capfirst.png",
        description: "Utilized GSAP with horizontal scrolling for an immersive experience",
        status: "Completed"
      },
      {
        image: "/projects/capmain.png",
        description: "Showcase of projects and creative works",
        status: "Ongoing"
      }
    ]
  },
  {
    id: 5,
    title: "Task Manager",
    description: "A desktop application for to-do list",
    image: "/projects/gary1.png",
    url: "https://github.com/vanessaxuuan/ip?tab=readme-ov-file",
    techStack: ["Java", "Shell", "Batchfile", "Gradle"],
    more: [
      {
        image: "/projects/gary1.png",
        description: "Onboarding page",
        status: "Completed"
      },
      {
        image: "/projects/gary2.png",
        description: "Listing of tasks",
        status: "Completed"
      }
    ]
  },
  {
    id: 6,
    title: "NFT Project",
    description: "An Ethereum collection of 88 unique NFTs",
    image: "/projects/nft1.png",
    url: "#",
    techStack: ["Solidity", "Javascript", "React", "Hardhat", "ERC721"],
    more: [
      {
        image: "/projects/nft1.png",
        description: "Integrated with metamask wallet for transaction",
        status: "Completed"
      },
      {
        image: "/projects/nft2.png",
        description: "Assisted in the crafting and deployment of the smart contracts",
        status: "Completed"
      }
    ]
  },
  {
    id: 7,
    title: "Landing Page: Vinifique",
    description: "A Display of wine curation",
    image: "/projects/vin1.png",
    url: "https://www.vinifique.co",
    techStack: ["NextJS", "Firebase", "Vercel"],
    more: [
      {
        image: "/projects/vin1.png",
        description: "Wine curation: Menu-style",
        status: "Completed"
      },
      {
        image: "/projects/vin2.png",
        description: "Creative collaboration with the client",
        status: "Completed"
      }
    ]
  },
  {
    id: 8,
    title: "Migration of E-commerce Website",
    description: "Akaso",
    image: "/projects/akaso1.png",
    url: "https://www.akasotech.com",
    techStack: ["Liquid", "Vue", "Javascript", "CMS"],
    more: [
      {
        image: "/projects/akaso1.png",
        description: "Migrated from Vue to Shopify (Liquid)",
        status: "Completed"
      },
      {
        image: "/projects/akaso2.png",
        description: "Mass Migrated all products into Shopify with data migration",
        status: "Completed"
      }
    ]
  },
  {
    id: 9,
    title: "Ecommerce Website: Wagacy",
    description: "Made with CMS and Ecommerce Tools",
    image: "/projects/wagacy1.png",
    url: "https://github.com/yourusername/taskmanager",
    techStack: ["CMS", "Ecommerce Tools"],
    more: [
      {
        image: "/projects/wagacy1.png",
        description: "Enhanced user experience by focusing on SEO and responsiveness",
        status: "Completed"
      },
      {
        image: "/projects/wagacy2.png",
        description: "Identified best sellers and imporved sales through SEO",
        status: "Completed"
      }
    ]
  },
];

const tangerine = Tangerine({ weight: "700", subsets: ["latin"] });

export default function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (openProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openProject]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-8xl font-bold mb-[6vw] sm:mb-[3vw] text-center ${tangerine.className}`}>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setOpenProject(project)}
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Card className="flex flex-col h-full bg-[#f5f5f5] rounded-[16px]">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {openProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred background */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpenProject(null)}
          />
          {/* Modal content */}
          <div className="relative z-10 w-[90vw] sm:w-[60vw] mx-4 sm:mx-0 max-h-[90vh] overflow-y-auto">
            <Card className="bg-[#f5f5f5] rounded-[20px] p-6 shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setOpenProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold focus:outline-none"
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex flex-col gap-[4vw] m-[16px]">
                {openProject.more.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row gap-10">
                      <div className="relative w-full sm:w-1/2 h-56 sm:h-64 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.status}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.description}</h3>
                        <p className="text-gray-700 mb-4">{openProject.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href={openProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mt-auto"
                >
                  Visit Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

            </Card>
          </div>
        </div>
      )}
    </section>
  );
}
