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
  more: { image: string; description: string; status: string; title: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Livestreaming Platform",
    description:
      "Built a SaaS livestreaming platform, integrated order management sytem, live streaming system, real-time interactions (e.g. live chat) and secure payments",
    image: "/projects/carts.jpeg",
    url: "https://spree.city",
    techStack: ["Next.js", "Javascript", "Real-Time Integration", "API Integrations", "Tailwind CSS"],
    more: [
      {
        image: "/projects/all-chat.jpeg",
        description: "Integrated live chats and real-time interaction tools (e.g. auction, bidding) to help sellers optimize livestream engagement",
        status: "Completed",
        title: "Live Tools Integration"
      },
      {
        image: "/projects/carts.jpeg",
        description: "Built robust order management system with real-time inventory tracking, payment processing, and seamless API integration with backend services",
        status: "Completed",
        title: "Order Management System"
      }
    ]
  },
  {
    id: 2,
    title: "Smart Order Router Simulator",
    description:
      "Built a SOR simulator that evaluates multiple exchanges (live) to route client orders optimally based on price, volume, and latency",
    image: "/projects/sor-out.png",
    url: "https://github.com/vanessaxuuan/SOR-Simulator",
    techStack: ["C", "HeapSort", "QuickSort", "Multithreading"],
    more: [
      {
        image: "/projects/sor-live.png",
        description: "Allow for real-time data from live exchanges to be used in the simulator",
        status: "Ongoing",
        title: "Real-Time Data Integration"
      },
      {
        image: "/projects/sor-threads.png",
        description: "Implemented multithreading to simultaneously evaluate and rank exchanges based on weighted factors including price, volume, and latency metrics",
        status: "Ongoing",
        title: "Multithreading and Order routing"
      },
      {
        image: "/projects/SOR.jpeg",
        description: "An effort to deepen understanding of the technicalities of investment banking systems",
        status: "Ongoing",
        title: "Brainstorming"
      }
    ]
  },
  {
    id: 3,
    title: "Collaborative Trip Planner",
    description:
      "Designed to make trip planning as enjoyable as the trip itself",
    image: "/projects/kompaz1.jpg",
    url: "#",
    techStack: ["Next.js", "SQL", "Tailwind CSS"],
    more: [
      {
        image: "/projects/kompaz1.jpg",
        description: "Architected and implemented the frontend infrastructure, developing core components and user interface elements",
        status: "In Progress",
        title: "Frontend Development"
      },
      {
        image: "/projects/kompaz2.jpg",
        description: "Collaborating with backend team to design scalable system architecture for future frontend integration",
        status: "In Progress",
        title: "Backend Design"
      }
    ]
  },
  {
    id: 4,
    title: "3D Landing Page",
    description:
      "Developed an interactive 3D landing page for a marketing agency, combining animations and 3D models to elevate brand perception",
    image: "/projects/goc1.png",
    url: "https://globaloneclick.com",
    techStack: ["Javascript", "ThreeJS", "Blender", "3D Rendering", "GSAP"],
    more: [
      {
        image: "/projects/goc1.png",
        description: "As part of my internship project - Implemented smooth loading and scroll animations with GSAP for optimal UX",
        status: "Completed",
        title: "UX Optimization"
      },
      {
        image: "/projects/goc2.png",
        description: "Modeled and animated branded 3D assets using Blender and ThreeJS",
        status: "Completed",
        title: "3D Model Creation"
      }
    ]
  },
  {
    id: 5,
    title: "My Freelance Portfolio",
    description:
      "Showcased my creative and technical freelance projects using dynamic layouts and immersive scrolling experiences (Mobile version coming soon)",
    image: "/projects/capfirst.png",
    url: "https://capsulated.vercel.app",
    techStack: ["NextJS", "GSAP", "Tailwind CSS", "Typescript"],
    more: [
      {
        image: "/projects/capfirst.png",
        description: "Leveraged GSAP and horizontal scroll to create an immersive portfolio narrative",
        status: "Completed",
        title: "Immersive Narrative"
      },
      {
        image: "/projects/capmain.png",
        description: "Continuously updating with new creative works and case studies",
        status: "Ongoing",
        title: "Creative Works"
      }
    ]
  },
  {
    id: 6,
    title: "Task Manager",
    description:
      "CLI-based task tracking desktop app built in Java, featuring command parsing and persistent data storage",
    image: "/projects/gary1.png",
    url: "https://github.com/vanessaxuuan/ip?tab=readme-ov-file",
    techStack: ["Java", "Gradle", "CLI Development"],
    more: [
      {
        image: "/projects/gary1.png",
        description: "Created a minimalist onboarding CLI interface for users",
        status: "Completed",
        title: "Onboarding Interface"
      },
      {
        image: "/projects/gary2.png",
        description: "Enabled persistent task storage",
        status: "Completed",
        title: "Persistent Storage"
      }
    ]
  },
  {
    id: 7,
    title: "NFT Project",
    description:
      "Contributed to the development and deployment of an Ethereum-based NFT collection of 88 unique assets with smart contracts and wallet integration",
    image: "/projects/nft1.png",
    url: "#",
    techStack: ["Solidity", "Hardhat", "Web3.js", "React"],
    more: [
      {
        image: "/projects/nft1.png",
        description: "Integrated MetaMask wallet for seamless user minting and transaction flow",
        status: "Completed",
        title: "Wallet Integration"
      },
      {
        image: "/projects/nft2.png",
        description: "Developed and deployed ERC721-compliant smart contracts using Hardhat with comprehensive testing",
        status: "Completed",
        title: "Smart Contracts"
      }
    ]
  },
  {
    id: 8,
    title: "Landing Page: Vinifique",
    description:
      "A curated wine collection presented in an interactive, creative menu-style layout",
    image: "/projects/vin1.png",
    url: "https://www.vinifique.co",
    techStack: ["NextJS", "Firebase", "Vercel"],
    more: [
      {
        image: "/projects/vin1.png",
        description: "Integrated Firebase for a dynamic wine menu",
        status: "Completed",
        title: "Firebase Integration"
      },
      {
        image: "/projects/vin2.png",
        description: "Collaborated closely with the client for visual storytelling",
        status: "Completed",
        title: "Visual Storytelling"
      }
    ]
  },
  {
    id: 9,
    title: "Migration of E-commerce Website",
    description:
      "Migrated Akaso&apos;s ecommerce site from Vue to Shopify, optimizing store performance and ensuring seamless product transfers",
    image: "/projects/akaso1.png",
    url: "https://www.akasotech.com",
    techStack: ["Liquid", "Vue", "Javascript", "CMS"],
    more: [
      {
        image: "/projects/akaso1.png",
        description: "Rebuilt frontend using Shopify Liquid, preserving design fidelity",
        status: "Completed",
        title: "Frontend Rebuild"
      },
      {
        image: "/projects/akaso2.png",
        description: "Executed mass product and data migration across systems",
        status: "Completed",
        title: "Data Migration"
      }
    ]
  },
  {
    id: 10,
    title: "Ecommerce Website: Wagacy",
    description:
      "Developed and optimized a CMS-based ecommerce site with a focus on SEO, user flow, and conversion insights",
    image: "/projects/wagacy1.png",
    url: "https://wagacy.shop",
    techStack: ["CMS", "Ecommerce Tools", "UX Design"],
    more: [
      {
        image: "/projects/wagacy1.png",
        description: "Enhanced UX by improving mobile responsiveness and loading times",
        status: "Completed",
        title: "UX Enhancement"
      },
      {
        image: "/projects/wagacy2.png",
        description: "Analyzed sales data and applied SEO to boost visibility of best sellers",
        status: "Completed",
        title: "SEO Optimization"
      }
    ]
  }
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
                <div className="p-6 flex flex-col h-full">
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
                  <div className="flex justify-end mt-auto">
                    <button
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                    >
                      More Info
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700 mb-4">{item.description}</p>
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
                  className={`inline-flex items-center transition-colors mt-auto ${
                    openProject.url === "#" 
                      ? "text-gray-400 cursor-not-allowed" 
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  {openProject.url === "#" ? "Coming Soon" : "Visit Project"}
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
