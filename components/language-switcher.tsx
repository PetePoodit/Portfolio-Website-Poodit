"use client";

import { motion } from "framer-motion";
import { useLanguage, type Language } from "@/context/language-context";

const LANGS: { code: Language; label: string; aria: string }[] = [
  { code: "en", label: "EN", aria: "Switch to English" },
  { code: "th", label: "TH", aria: "Switch to Thai" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const activeIndex = LANGS.findIndex((l) => l.code === language);
  const resolvedIndex = activeIndex >= 0 ? activeIndex : 0;

  return (
    <div className="fixed top-6 right-4 sm:right-8 z-50">
      <div className="flex items-center bg-black/85 backdrop-blur-md p-1.5 sm:p-1 rounded-full border border-white/10 shadow-2xl">
        {/* Globe micro-icon */}
        <div className="pl-2.5 pr-1.5 sm:pl-2 sm:pr-1 text-gray-400 select-none">
          <svg
            className="w-4 h-4 sm:w-3.5 sm:h-3.5"
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

        {/* 2-Segment Track */}
        <div className="relative flex items-center">
          {/* Sliding indicator pill */}
          <motion.div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-white rounded-full shadow-sm pointer-events-none"
            initial={false}
            animate={{
              x: `${resolvedIndex * 100}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 32,
            }}
          />

          {LANGS.map(({ code, label, aria }) => {
            const isActive = language === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-label={aria}
                aria-pressed={isActive}
                className={`relative z-10 flex items-center justify-center w-11 h-8 sm:w-9 sm:h-7 text-sm sm:text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer select-none ${
                  isActive ? "text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
