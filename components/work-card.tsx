"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { WorkCategory } from "@/lib/data";

interface WorkCardProps {
  category: WorkCategory;
  imagePath: string;
  imageAlt: string;
  header: string;
  description: string;
  linkHref: string;
  linkLabel: string;
  company?: string;
  period?: string;
  tags?: string[];
  color?: string;
  categoryLabel?: string;
  onActive: () => void;
}

const COLOR_PALETTES: Record<
  string,
  {
    badgeBorder: string;
    badgeBg: string;
    badgeText: string;
    dotBg: string;
    glow: string;
    buttonHover: string;
    hex: string;
  }
> = {
  cyan: {
    badgeBorder: "border-cyan-400/30",
    badgeBg: "bg-cyan-400/10",
    badgeText: "text-cyan-300",
    dotBg: "bg-cyan-400",
    glow: "from-cyan-500/15 to-transparent",
    buttonHover: "hover:border-cyan-400 hover:shadow-cyan-500/20",
    hex: "#22d3ee",
  },
  purple: {
    badgeBorder: "border-purple-400/30",
    badgeBg: "bg-purple-400/10",
    badgeText: "text-purple-300",
    dotBg: "bg-purple-400",
    glow: "from-purple-500/15 to-transparent",
    buttonHover: "hover:border-purple-400 hover:shadow-purple-500/20",
    hex: "#c084fc",
  },
  rose: {
    badgeBorder: "border-rose-400/30",
    badgeBg: "bg-rose-400/10",
    badgeText: "text-rose-300",
    dotBg: "bg-rose-400",
    glow: "from-rose-500/15 to-transparent",
    buttonHover: "hover:border-rose-400 hover:shadow-rose-500/20",
    hex: "#fb7185",
  },
  amber: {
    badgeBorder: "border-amber-400/30",
    badgeBg: "bg-amber-400/10",
    badgeText: "text-amber-300",
    dotBg: "bg-amber-400",
    glow: "from-amber-500/15 to-transparent",
    buttonHover: "hover:border-amber-400 hover:shadow-amber-500/20",
    hex: "#fbbf24",
  },
  emerald: {
    badgeBorder: "border-emerald-400/30",
    badgeBg: "bg-emerald-400/10",
    badgeText: "text-emerald-300",
    dotBg: "bg-emerald-400",
    glow: "from-emerald-500/15 to-transparent",
    buttonHover: "hover:border-emerald-400 hover:shadow-emerald-500/20",
    hex: "#34d399",
  },
  blue: {
    badgeBorder: "border-blue-400/30",
    badgeBg: "bg-blue-400/10",
    badgeText: "text-blue-300",
    dotBg: "bg-blue-400",
    glow: "from-blue-500/15 to-transparent",
    buttonHover: "hover:border-blue-400 hover:shadow-blue-500/20",
    hex: "#60a5fa",
  },
  orange: {
    badgeBorder: "border-orange-400/30",
    badgeBg: "bg-orange-400/10",
    badgeText: "text-orange-300",
    dotBg: "bg-orange-400",
    glow: "from-orange-500/15 to-transparent",
    buttonHover: "hover:border-orange-400 hover:shadow-orange-500/20",
    hex: "#fb923c",
  },
  indigo: {
    badgeBorder: "border-indigo-400/30",
    badgeBg: "bg-indigo-400/10",
    badgeText: "text-indigo-300",
    dotBg: "bg-indigo-400",
    glow: "from-indigo-500/15 to-transparent",
    buttonHover: "hover:border-indigo-400 hover:shadow-indigo-500/20",
    hex: "#818cf8",
  },
  teal: {
    badgeBorder: "border-teal-400/30",
    badgeBg: "bg-teal-400/10",
    badgeText: "text-teal-300",
    dotBg: "bg-teal-400",
    glow: "from-teal-500/15 to-transparent",
    buttonHover: "hover:border-teal-400 hover:shadow-teal-500/20",
    hex: "#2dd4bf",
  },
  violet: {
    badgeBorder: "border-violet-400/30",
    badgeBg: "bg-violet-400/10",
    badgeText: "text-violet-300",
    dotBg: "bg-violet-400",
    glow: "from-violet-500/15 to-transparent",
    buttonHover: "hover:border-violet-400 hover:shadow-violet-500/20",
    hex: "#a78bfa",
  },
};

export default function WorkCard({
  category,
  imagePath,
  imageAlt,
  header,
  description,
  linkHref,
  linkLabel,
  company,
  period,
  tags,
  color,
  categoryLabel,
  onActive,
}: WorkCardProps) {
  const isInternship = category === "internship";

  // Resolve palette by color property or fallback by category
  const selectedColorKey =
    color?.toLowerCase() || (isInternship ? "cyan" : "purple");

  const isCustomHex =
    selectedColorKey.startsWith("#") || selectedColorKey.startsWith("rgb");

  const presetAccent =
    COLOR_PALETTES[selectedColorKey] ||
    (isInternship ? COLOR_PALETTES.cyan : COLOR_PALETTES.purple);

  const accent = isCustomHex
    ? {
        badgeBorder: "border-white/20",
        badgeBg: "bg-white/5",
        badgeText: "text-white",
        dotBg: "bg-white",
        glow: "from-white/10 to-transparent",
        buttonHover: "hover:border-white/40",
        hex: selectedColorKey,
      }
    : presetAccent;

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.35 }}
      onViewportEnter={onActive}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Visual / Image Container */}
      <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-72 md:h-96 flex items-center justify-center">
        {/* Ambient Glow */}
        <div
          className={`absolute inset-0 rounded-3xl bg-radial ${accent.glow} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
          style={
            isCustomHex
              ? {
                  background: `radial-gradient(circle, ${selectedColorKey}33 0%, transparent 70%)`,
                }
              : undefined
          }
        />

        {/* Card Frame */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 flex items-center justify-center shadow-2xl transition duration-500 group-hover:border-white/20">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imagePath}
              alt={imageAlt}
              fill
              className="object-contain p-2 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>

      {/* Information Details */}
      <div className="flex-1 max-w-xl text-center md:text-left space-y-5">
        {/* Category & Period Pill (clean without chapter label) */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${accent.badgeBorder} ${accent.badgeBg} ${accent.badgeText} text-xs tracking-wider uppercase font-semibold`}
            style={
              isCustomHex
                ? {
                    color: selectedColorKey,
                    borderColor: `${selectedColorKey}40`,
                    backgroundColor: `${selectedColorKey}15`,
                  }
                : undefined
            }
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${accent.dotBg} animate-pulse`}
              style={
                isCustomHex
                  ? { backgroundColor: selectedColorKey }
                  : undefined
              }
            />
            {categoryLabel ||
              (isInternship ? "Internship Experience" : "Personal Project")}
          </div>

          {period && (
            <span className="text-xs text-white-100 font-bold">{period}</span>
          )}
        </div>

        {/* Title & Company */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {header}
          </h3>
          {company && (
            <p
              className={`text-base sm:text-lg ${accent.badgeText} mt-1.5 font-medium flex items-center justify-center md:justify-start gap-1.5`}
              style={isCustomHex ? { color: selectedColorKey } : undefined}
            >
              <span>@</span>
              <span>{company}</span>
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] sm:text-xs px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-gray-300 font-medium tracking-wide hover:border-white/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${accent.buttonHover}`}
          >
            <span>{linkLabel}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
