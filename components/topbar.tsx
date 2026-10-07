"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export default function TopBar() {
  const [worksOpen, setWorksOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  // Remembers how the Works trigger was pressed (mouse / touch / pen)
  const lastPointerType = useRef<string | null>(null);
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

  // Close flyout on outside tap/click or Escape
  useEffect(() => {
    const handlePointerOutside = (e: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setWorksOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setWorksOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointerOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Hover handling is for real mouse pointers only, so a finger tap
  // doesn't open-then-immediately-close the flyout.
  const handlePointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setWorksOpen(true);
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    closeTimeout.current = setTimeout(() => {
      setWorksOpen(false);
    }, 200);
  };

  // "Works" never scrolls. Mouse: hover opens it (click is a no-op).
  // Touch / keyboard: press toggles the flyout.
  const handleWorksClick = () => {
    const pointer = lastPointerType.current;
    lastPointerType.current = null;
    if (pointer === "mouse") {
      setWorksOpen(true);
      return;
    }
    setWorksOpen((prev) => !prev);
  };

  const itemClass =
    "flex flex-1 sm:flex-none items-center justify-center h-full sm:h-auto px-1 sm:px-0 rounded-full text-gray-400 hover:text-white active:bg-white/10 sm:active:bg-transparent transition-colors cursor-pointer whitespace-nowrap";

  return (
    <nav className="flex items-center h-14 sm:h-auto w-full sm:w-max bg-black/85 backdrop-blur-md p-1.5 sm:px-8 sm:py-3 shadow-2xl rounded-full border border-white/10">
      <div className="flex flex-1 items-center h-full sm:gap-8 text-sm whitespace-nowrap">
        <button onClick={() => handleScroll("home")} className={itemClass}>
          {data.nav.home}
        </button>

        <button onClick={() => handleScroll("about")} className={itemClass}>
          {data.nav.about}
        </button>

        {/* Works Menu with Flyout */}
        <div
          ref={dropdownRef}
          className="relative flex flex-1 sm:flex-none h-full sm:h-auto"
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <button
            type="button"
            onPointerDown={(e) => {
              lastPointerType.current = e.pointerType;
            }}
            onClick={handleWorksClick}
            className={`${itemClass} gap-1 sm:gap-1.5 w-full group ${
              worksOpen ? "text-white bg-white/10 sm:bg-transparent" : ""
            }`}
            aria-haspopup="menu"
            aria-expanded={worksOpen}
          >
            <span>{data.nav.works}</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-3.5 h-3.5 transition-transform duration-200 rotate-180 sm:rotate-0 ${
                worksOpen ? "rotate-0 sm:rotate-180" : ""
              }`}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Flyout Sub-Pill Menu: opens upward on mobile (dock is at the bottom), downward on desktop */}
          <AnimatePresence>
            {worksOpen && (
              <motion.div
                role="menu"
                initial={{ opacity: 0, y: 6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.96 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 sm:bottom-auto sm:mb-0 sm:top-full sm:mt-3.5 w-60 sm:w-52 p-1.5 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col gap-1"
              >
                <button
                  role="menuitem"
                  onClick={() => handleScroll("internships")}
                  className="flex items-center gap-3 sm:gap-2.5 px-4 sm:px-3 py-3.5 sm:py-2 text-base sm:text-xs font-medium text-left rounded-xl text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/10 transition-all cursor-pointer group whitespace-nowrap"
                >
                  <span className="w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(34,211,238,0.8)] shrink-0" />
                  <span>{data.nav.internships}</span>
                </button>

                <button
                  role="menuitem"
                  onClick={() => handleScroll("personal-projects")}
                  className="flex items-center gap-3 sm:gap-2.5 px-4 sm:px-3 py-3.5 sm:py-2 text-base sm:text-xs font-medium text-left rounded-xl text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/10 transition-all cursor-pointer group whitespace-nowrap"
                >
                  <span className="w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(192,132,252,0.8)] shrink-0" />
                  <span>{data.nav.personalProjects}</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button onClick={() => handleScroll("contact")} className={itemClass}>
          {data.nav.contact}
        </button>
      </div>
    </nav>
  );
}
