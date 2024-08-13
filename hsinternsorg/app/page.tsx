import React from "react";
import { HoverEffect } from "@/app/components/ui/card-hover-effect"; // Adjust the path if necessary
import { FiChevronDown } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="min-h-screen bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black)]"></div>

        {/* Hero Section Content */}
        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-neutral-900 md:text-7xl text-4xl font-bold">
            Teaching students life
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-gray-800 to-blue-500">
              changing skills.
            </span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            By offering them hands-on experiences.
          </p>

          {/* Apply Now Button */}
          <div className="mt-8 flex justify-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span>Apply Now<span className="ml-2">→</span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Down Arrow Icon */} 
      <div className="flex justify-center" style={{ marginTop: '-4rem' }}> 
        <FiChevronDown className="text-neutral-700 animate-bounce" size={32} /> 
      </div>

      {/* Section Title for Cards */}
      <div className="text-center mt-24 mb-8"> {/* Increased margin-top */}
        <h2 className="text-neutral-900 text-3xl font-semibold">How it works</h2>
      </div>


      {/* Canvas Reveal Effect Demo */}
      <div className="max-w-5xl mx-auto px-8 py-6"> {/* Added padding */}
        <HoverEffect items={projects} />
      </div>      
    </div>
  );
}

export const projects = [
  {
    title: "1. You'll Learn.",
    description:
      "Our verified knowledgeable tutors are dedicated to teaching you how to think, design, and code like a web developer.",
  },
  {
    title: "2. We'll Test.",
    description:
      "Before you work with our partnered non-profit organizations we'll make sure you can do the job through a short interview.",
  },
  {
    title: "3. They'll Employ",
    description:
      "Once you've passed our interview we will assign you to a team and one of our tutors to gain experience by helping a non-profit.",
  },
  {
    title: "4. You'll Win",
    description:
      "Through your time working with the organization you'll have a resume-worthy experience and skills to continue your web-development journey.",
  },
  {
    title: "5. You Can Come Back",
    description:
      "With your skills, we can verify you as a tutor and you'll teach more students and get more experiences at non-profit organizations.",
  },
  {
    title: "6. Everyone Wins",
    description:
      "You learn + get hands-on experience while non-profits get a free modern website.",
  },
];
