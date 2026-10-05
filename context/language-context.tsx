"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import dataEn from "@/data/data-en.json";
import dataTh from "@/data/data-th.json";

export type Language = "en" | "th";
export type PortfolioData = typeof dataEn;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  data: dataEn,
});

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("language-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("language-change", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("preferred_lang");
    if (saved === "en" || saved === "th") return saved;
  } catch {
    // localStorage disabled
  }
  return "en";
}

function getServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem("preferred_lang", lang);
      window.dispatchEvent(new Event("language-change"));
    } catch {
      // storage disabled
    }
  };

  const data = language === "th" ? dataTh : dataEn;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
