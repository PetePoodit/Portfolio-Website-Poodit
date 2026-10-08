"use client";

import type { PortfolioWork } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

interface WorkIndicatorProps {
  works: PortfolioWork[];
  currentIndex: number;
  onSelectWork: (id: string) => void;
}

const COLOR_HEX_MAP: Record<string, string> = {
  cyan: "#22d3ee",
  purple: "#c084fc",
  rose: "#fb7185",
  amber: "#fbbf24",
  emerald: "#34d399",
  blue: "#60a5fa",
  orange: "#fb923c",
  indigo: "#818cf8",
  teal: "#2dd4bf",
  violet: "#a78bfa",
};

function getWorkColor(work: PortfolioWork): string {
  if (work.color) {
    if (work.color.startsWith("#") || work.color.startsWith("rgb")) {
      return work.color;
    }
    return COLOR_HEX_MAP[work.color.toLowerCase()] || "#22d3ee";
  }
  return work.category === "internship" ? "#22d3ee" : "#c084fc";
}

export default function WorkIndicator({
  works,
  currentIndex,
  onSelectWork,
}: WorkIndicatorProps) {
  const { data } = useLanguage();
  const currentWork = works[currentIndex] || works[0];
  const isInternship = currentWork?.category === "internship";
  const activeColor = getWorkColor(currentWork);

  const internshipWorks = works.filter((w) => w.category === "internship");
  const personalWorks = works.filter((w) => w.category === "personal");

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 w-max max-w-[calc(100vw-2rem)] min-h-[44px] bg-black/85 backdrop-blur-xl px-4 sm:px-5 py-2 rounded-full border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300">
      {/* Category Indicator Label */}
      <div className="flex items-center gap-2 pr-2.5 sm:pr-3 border-r border-white/10 shrink-0">
        <span
          className="w-2 h-2 shrink-0 rounded-full transition-colors duration-300"
          style={{
            backgroundColor: activeColor,
            boxShadow: `0 0 10px ${activeColor}cc`,
          }}
        />
        <span
          className="text-xs sm:text-[11px] tracking-wider uppercase font-semibold transition-colors duration-300 whitespace-nowrap"
          style={{ color: activeColor }}
        >
          {isInternship
            ? data.indicator?.internships || "Internships"
            : data.indicator?.personal || "Personal"}
        </span>
      </div>

      {/* Dots Track Container */}
      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 pl-1">
        {/* Dots Track: Internships */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {internshipWorks.map((work) => {
            const globalIndex = works.findIndex((w) => w.id === work.id);
            const isActive = globalIndex === currentIndex;
            const dotColor = getWorkColor(work);

            return (
              <button
                key={work.id}
                type="button"
                onClick={() => onSelectWork(work.id)}
                aria-label={`Jump to ${work.header}`}
                className="relative flex items-center justify-center p-1.5 sm:p-1 cursor-pointer"
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    isActive ? "w-6 h-2" : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: dotColor,
                          boxShadow: `0 0 10px ${dotColor}cc`,
                        }
                      : undefined
                  }
                />
              </button>
            );
          })}
        </div>

        {/* Subtle Divider */}
        <span className="w-[1px] h-3.5 bg-white/20 mx-0.5 shrink-0" />

        {/* Dots Track: Personal Projects */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {personalWorks.map((work) => {
            const globalIndex = works.findIndex((w) => w.id === work.id);
            const isActive = globalIndex === currentIndex;
            const dotColor = getWorkColor(work);

            return (
              <button
                key={work.id}
                type="button"
                onClick={() => onSelectWork(work.id)}
                aria-label={`Jump to ${work.header}`}
                className="relative flex items-center justify-center p-1.5 sm:p-1 cursor-pointer"
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    isActive ? "w-6 h-2" : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: dotColor,
                          boxShadow: `0 0 10px ${dotColor}cc`,
                        }
                      : undefined
                  }
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
