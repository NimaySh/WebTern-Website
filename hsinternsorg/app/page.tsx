import React from "react";
import { HoverEffect } from "@/app/components/ui/card-hover-effect"; // Adjust the path if necessary
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import { projects } from '@/app/data/projects';

export default function Home() {
  return (
    <div className="bg-white font-sans">
      {/* Gradient Wrapper */}
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="min-h-screen bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>

          {/* Hero Section Content */}
          <div className="relative z-20 text-center px-4 py-16">
            <h1 className="text-neutral-900 md:text-7xl text-4xl font-bold">
              Teaching students
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-gray-800 to-blue-500">
                web-development.
              </span>
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              By offering them real world experiences.
            </p>

            <Link href="https://forms.gle/qTvj5pUV1aAfJ3L5A">
              <div className="mt-8 flex justify-center">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span>
                    Apply Now
                    <span className="ml-2">→</span>
                  </span>
                </button>
              </div>
            </Link>

          </div>
        </div>

        {/* Down Arrow Icon */}
        <div className="flex justify-center" style={{ marginTop: '-4rem' }}>
          <FiChevronDown className="text-neutral-700 animate-bounce" size={32} />
        </div>
      </div>

      {/* Section Title for Cards */}
      <div className="text-center mt-24 mb-8">
        <h2 className="text-neutral-900 text-3xl font-semibold">How it works</h2>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-6 bg-white">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
