"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FaDownload } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

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
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

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
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-5 inset-x-0 mx-auto px-6 py-4 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center mr-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-16 h-16">
              <Image
                src="/ahmed.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((navItem: any, idx: number) => (
            <button
              key={`link=${idx}`}
              onClick={() => scrollToSection(navItem.link.replace('#', ''))}
              className={cn(
                "relative text-neutral-50 hover:text-purple transition-colors duration-300 text-sm font-medium"
              )}
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </button>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <a
          href="https://drive.google.com/file/d/1NIY-4JpkFc5nZP47hcC2-4b2KQpy2T6P/view?usp=sharing"
          target="_blank"
          className="hidden md:flex items-center gap-2 px-4 py-2 ml-10 rounded-full bg-purple/10 hover:bg-purple/20 text-purple transition-all duration-300"
        >
          <FaDownload className="w-4 h-4" />
          <span className="text-sm font-medium">Resume</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:text-purple transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 rounded-lg bg-black-100/95 backdrop-blur-lg border border-purple/20 md:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((navItem: any, idx: number) => (
                  <button
                    key={`mobile-link=${idx}`}
                    onClick={() => scrollToSection(navItem.link.replace('#', ''))}
                    className="text-neutral-50 hover:text-purple transition-colors duration-300 text-sm font-medium py-2 text-left"
                  >
                    {navItem.name}
                  </button>
                ))}
                <a
                  href="https://drive.google.com/file/d/1NIY-4JpkFc5nZP47hcC2-4b2KQpy2T6P/view?usp=sharing"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 hover:bg-purple/20 text-purple transition-all duration-300 w-fit"
                >
                  <FaDownload className="w-4 h-4" />
                  <span className="text-sm font-medium">Resume</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
