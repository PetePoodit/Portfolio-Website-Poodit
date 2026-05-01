"use client";

import { useCallback } from "react";

export default function TopBar() {
  const navItems = [
    { name: "Home", targetId: "home" },
    { name: "About", targetId: "about" },
    { name: "Works", targetId: "works" },
    { name: "Contact", targetId: "contact" },
  ];

  const handleScroll = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 0;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, []);

  const bgClass = "bg-black/90";
  const borderClass = "border-white/10";
  const textClass = "text-gray-400 hover:text-white";

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className={`flex items-center justify-between ${bgClass} backdrop-blur-md px-10 py-4 shadow-lg rounded-full ${borderClass} border`}
      >
        <div className="flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              onClick={() => handleScroll(item.targetId)}
              className={`${textClass} transition-colors cursor-pointer`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
