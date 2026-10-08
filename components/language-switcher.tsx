"use client";

import { motion } from "framer-motion";
import { useLanguage, type Language } from "@/context/language-context";

const LANGS: { code: Language; label: string; aria: string }[] = [
  { code: "en", label: "EN", aria: "Switch to English" },
  { code: "th", label: "TH", aria: "Switch to Thai" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center h-14 sm:h-auto bg-black/85 backdrop-blur-md p-1.5 sm:p-1 rounded-full border border-white/10 shadow-2xl">
      {/* Globe micro-icon (desktop only, saves space in the mobile dock) */}
      <div className="hidden sm:block pl-2 pr-1 text-gray-500">
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

      {LANGS.map(({ code, label, aria }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          aria-label={aria}
          aria-pressed={language === code}
          className={`relative flex items-center justify-center h-full sm:h-auto min-w-11 sm:min-w-0 px-3 sm:px-2.5 sm:py-1 text-sm sm:text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer ${
            language === code ? "text-black" : "text-gray-400 hover:text-white"
          }`}
        >
          {language === code && (
            <motion.div
              layoutId="active-lang-pill"
              className="absolute inset-0 bg-white rounded-full shadow-sm"
              transition={{ type: "spring", stiffness: 450, damping: 32 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </button>
      ))}
    </div>
  );
}
