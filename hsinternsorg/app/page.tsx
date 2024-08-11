import React from "react";
import { FloatingNav } from "@/app/components/ui/floating-navbar"; // Adjust the path if necessary
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Floating Navigation Bar */}
      <FloatingNav navItems={navItems} />

      <div className="h-[50rem] w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
        
        {/* Hero Section Content */}
        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="md:text-7xl text-4xl font-bold">
            Teaching students life
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-blue-500">
              changing skills.
            </span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            By offering them hands-on experiences.
          </p>
          
          {/* Apply Now Button */}
          <div className="mt-8 flex justify-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span>Apply Now<span className="ml-2">→</span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p>Copyright © 2024 Internify.</p>
        </div>
      </footer>
    </div>
  );
}
