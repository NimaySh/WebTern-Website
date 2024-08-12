import React from "react";
import { FloatingNav } from "@/app/components/ui/floating-navbar"; // Adjust the path if necessary
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { HoverEffect } from "@/app/components/ui/card-hover-effect"; // Adjust the path if necessary

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

      {/* Canvas Reveal Effect Demo */}
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="text-center md:text-left">
            <h5 className="text-lg font-bold mb-4">Company</h5>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <h5 className="text-lg font-bold mb-4">Services</h5>
            <ul className="space-y-2">
              <li>Tutoring</li>
              <li>Courses</li>
              <li>Internship Placement</li>
              <li>Project-Based Learning </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center md:text-right">
            <h5 className="text-lg font-bold mb-4">Follow Us</h5>
            <ul className="space-y-2">
              <li>YouTube</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto text-center mt-8">
          <p>© 2024 Internify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export const projects = [
  {
    title: "1. You'll Learn.",
    description:
      "Our verified knowledgable tutors are dedicated to teaching you how to think, design, and code like a web developer.",
  },
  {
    title: "2. We'll Test.",
    description:
      "Before you work with our partnered non-profit organizations we'll make sure you can do the job through a short interview.",
  },
  {
    title: "3. They'll Employ",
    description:
      "Once you've passeed our interview we will assign you to a team and one of our tutors to gain experience by helping an non-profit. ",
  },
  {
    title: "4. You'll Win",
    description:
      "Through your time working with the organization you'll have a resume-worthy experience and skills to continue your web-development journey.",
  },
  {
    title: "5. You Can Come Back",
    description:
      "With your skills, we can verify you as a tutors and you'll teach more students and get more experiences at non-profit organizations.",
  },
  {
    title: "6. Everyone Wins",
    description:
      "You learn + get hands-on experience while non-profits get a free modern website. ",
  },
];
