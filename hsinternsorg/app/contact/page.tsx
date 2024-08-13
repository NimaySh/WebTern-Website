import React from "react";
import { FiChevronDown } from "react-icons/fi"; // Importing the down arrow icon

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="h-[50rem] w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black)]"></div>

        {/* Hero Section Content */}
        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-neutral-900 md:text-7xl text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-gray-800 to-blue-500">
              We’d love to hear from you.
            </span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Reach out to us for any inquiries or support.
          </p>
        </div>
      </div>

      {/* Down Arrow Icon */}
      <div className="flex justify-center" style={{ marginTop: '-3rem' }}>
             <FiChevronDown className="text-neutral-700 animate-bounce" size={24} />
          </div>

      {/* Contact Form Section */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-semibold text-neutral-900">Contact Form</h2>
        <p className="mt-4 text-neutral-700">
          Please fill out the form below to get in touch with us.
        </p>
        <form className="mt-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 p-3 border border-neutral-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 p-3 border border-neutral-300 rounded-md"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-neutral-300 rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-neutral-300 rounded-md"
            rows={6}
            required
          ></textarea>
         
         <div className="mt-8 flex justify-left">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span>Send Message<span className="ml-2">→</span></span>
            </button>
          </div> 
        </form>
      </div>
    </div>

    
  );
}
