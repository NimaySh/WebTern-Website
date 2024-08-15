"use client";
import React from "react";
import { WobbleCard } from "@/app/components/ui/wobble-card"; // Adjust the import path as necessary

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="h-[30rem] w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black)]"></div>

        {/* About Page Hero Section */}
        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-neutral-900 md:text-7xl text-4xl font-bold">
            About Us
          </h1>
          <p className="mt-3.5 text-lg text-neutral-700">
            Learn more about our mission and team.
          </p>
        </div>
      </div>

      {/* Company Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto px-8 py-16">
  <WobbleCard containerClassName="col-span-1 h-full bg-blue-900 min-h-[300px]">
    <div className="max-w-xs">
      <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Our Mission
      </h2>
      <p className="mt-4 text-left text-base/6 text-neutral-200">
        WebTern is an organization dedicated to teaching students life changing skills and providing them real job experience by offering them a chance to help change the world.
      </p>
    </div>
  </WobbleCard>

  <WobbleCard containerClassName="col-span-1 bg-neutral-900 min-h-[300px]">
  <div className="max-w-xs">
    <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
      Meet the Team
    </h2>
    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
      Under Construction!! <br /><br />
      <a href="/apply" className="text-blue-700 underline">
        Apply here 
      </a>{""}
       <s></s> to join the team, helping students learn web development and get real experiences at non-profits!
    </p>
  </div>
</WobbleCard>

</div>

      </div>
  );
}
