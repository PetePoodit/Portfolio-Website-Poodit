"use client";

import TopBar from "@/components/topbar";
import LanguageSwitcher from "@/components/language-switcher";

export default function NavDock() {
  return (
    <div className="fixed z-50 inset-x-3 bottom-[max(1rem,env(safe-area-inset-bottom))] flex items-center gap-2 sm:inset-x-0 sm:top-6 sm:bottom-auto sm:justify-center sm:gap-0 sm:pointer-events-none">
      <div className="flex-1 min-w-0 sm:flex-none sm:pointer-events-auto">
        <TopBar />
      </div>
      <div className="shrink-0 sm:absolute sm:right-8 sm:top-1/2 sm:-translate-y-1/2 sm:pointer-events-auto">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
