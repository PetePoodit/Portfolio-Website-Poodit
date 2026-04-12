"use client";

import { useCallback } from "react";

export default function TopBar() {
  const navItems = [
    { name: "Home", targetId: "home" },
    { name: "About", targetId: "about" },
    { name: "Works", targetId: "works"},
    { name: "Contact", targetId: "contact" },
  ];

  const handleScroll = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY -0; 

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center justify-between bg-white/90 backdrop-blur-md px-10 py-4 shadow-lg rounded-full border border-gray-200">
        <div className="flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              onClick={() => handleScroll(item.targetId)}
              className="text-gray-500 transition-colors cursor-pointer hover:text-black"
            > 
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
