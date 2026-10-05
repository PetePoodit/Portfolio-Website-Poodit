"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export default function TopBar() {
  const [worksOpen, setWorksOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const { data } = useLanguage();

  const handleScroll = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 30;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    setWorksOpen(false);
  }, []);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setWorksOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setWorksOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setWorksOpen(false);
    }, 200);
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1.5rem)]">
      <nav className="flex items-center bg-black/85 backdrop-blur-md px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 shadow-2xl rounded-full border border-white/10 w-max max-w-full">
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm whitespace-nowrap">
          <button
            onClick={() => handleScroll("home")}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            {data.nav.home}
          </button>

          <button
            onClick={() => handleScroll("about")}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            {data.nav.about}
          </button>

          {/* Works Menu with Flyout */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => {
                handleScroll("works");
                setWorksOpen((prev) => !prev);
              }}
              className="flex items-center gap-1 sm:gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer group whitespace-nowrap"
              aria-expanded={worksOpen}
            >
              <span>{data.nav.works}</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 text-gray-400 group-hover:text-white ${
                  worksOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Flyout Sub-Pill Menu */}
            <AnimatePresence>
              {worksOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-48 sm:w-52 p-1.5 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col gap-1"
                >
                  <button
                    onClick={() => handleScroll("internships")}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-left rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer group whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(34,211,238,0.8)] shrink-0" />
                    <span>{data.nav.internships}</span>
                  </button>

                  <button
                    onClick={() => handleScroll("personal-projects")}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-left rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer group whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(192,132,252,0.8)] shrink-0" />
                    <span>{data.nav.personalProjects}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleScroll("contact")}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            {data.nav.contact}
          </button>
        </div>
      </nav>
    </div>
  );
}
