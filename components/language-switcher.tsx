"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-4 sm:bottom-auto sm:top-6 sm:right-8 z-50">
      <div className="flex items-center bg-black/85 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-2xl">
        {/* Globe micro-icon */}
        <div className="pl-2 pr-1 text-gray-500">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5 0 4.5-4 4.5-9s-2-9-4.5-9m0 18c-2.5 0-4.5-4-4.5-9s2-9 4.5-9m-9 9h18"
            />
          </svg>
        </div>

        {/* EN Button */}
        <button
          onClick={() => setLanguage("en")}
          aria-label="Switch to English"
          className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer ${
            language === "en" ? "text-black" : "text-gray-400 hover:text-white"
          }`}
        >
          {language === "en" && (
            <motion.div
              layoutId="active-lang-pill"
              className="absolute inset-0 bg-white rounded-full shadow-sm"
              transition={{ type: "spring", stiffness: 450, damping: 32 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>

        {/* TH Button */}
        <button
          onClick={() => setLanguage("th")}
          aria-label="Switch to Thai"
          className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer ${
            language === "th" ? "text-black" : "text-gray-400 hover:text-white"
          }`}
        >
          {language === "th" && (
            <motion.div
              layoutId="active-lang-pill"
              className="absolute inset-0 bg-white rounded-full shadow-sm"
              transition={{ type: "spring", stiffness: 450, damping: 32 }}
            />
          )}
          <span className="relative z-10">TH</span>
        </button>
      </div>
    </div>
  );
}
