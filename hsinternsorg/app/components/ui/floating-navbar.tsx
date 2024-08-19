"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-neutral-900 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-1 items-center",
          "px-2 sm:px-4 lg:px-6 xl:px-8",
          "max-w-full mx-8 sm:mx-10 lg:mx-14 xl:mx-26",
          "rounded-lg",
          className
        )}
      >
        {/* Logo Container */}
        <div className="flex-shrink-0 mr-8">
          <Image 
            src="/WebTern Logo.png" 
            alt="WebTern Logo" 
            width={120} // Adjusted width
            height={40} // Adjusted height
            style={{ objectFit: 'contain' }} // Ensure the image fits within the given dimensions
          />
        </div>
        
        {/* Centered Navigation Items and Button */}
        <div className="flex flex-grow items-center justify-center space-x-6">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-2 text-lg font-medium text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          ))}
          <Link href="https://forms.gle/qTvj5pUV1aAfJ3L5A">
            <button className="border text-lg font-medium relative dark:border-white text-white px-6 py-3 rounded-full">
                <span>Apply</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
