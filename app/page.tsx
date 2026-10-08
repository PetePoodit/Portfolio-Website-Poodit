"use client";

import { useState } from "react";
import NavBar from "@/components/nav-bar";
import LanguageSwitcher from "@/components/language-switcher";
import WorkCard from "@/components/work-card";
import WorkIndicator from "@/components/work-indicator";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import BackgroundBubbles from "@/components/background-bubbles";
import ContactIcon from "@/components/contact-icon";
import type { ContactIcon as ContactIconType } from "@/lib/contact-items";
import type { PortfolioWork } from "@/lib/data";

export default function HomePage() {
  const [activeWork, setActiveWork] = useState(0);
  const [isWorksVisible, setIsWorksVisible] = useState(false);
  const { data } = useLanguage();

  const colors = {
    section: {
      primary: "bg-black",
    },
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      tertiary: "text-gray-400",
    },
    accent: {
      cyan: "text-cyan-300",
      purple: "text-purple-300",
    },
    card: {
      border: "border-white/15",
      bg: "bg-white/5",
    },
    icon: {
      border: "border-white/20",
      bg: "bg-white/10",
      color: "text-cyan-300",
    },
  };

  const works = (data.works?.items || []) as PortfolioWork[];

  const internshipWorks = works.filter(
    (work) => work.category === "internship"
  );
  const personalWorks = works.filter(
    (work) => work.category === "personal"
  );

  const handleScrollToWork = (id: string) => {
    const el = document.getElementById(`work-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <main
      className={`min-h-screen ${colors.section.primary} relative overflow-hidden`}
    >
      {/* Background Bubbles (Fixed behind all content layers) */}
      <BackgroundBubbles />

      {/* Floating 2-Chapter Works Indicator (sits above the mobile bottom dock) */}
      <div
        className={`fixed bottom-[calc(max(1rem,env(safe-area-inset-bottom))+4.5rem)] sm:bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
          isWorksVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <WorkIndicator
          works={works}
          currentIndex={activeWork}
          onSelectWork={handleScrollToWork}
        />
      </div>

      {/* Navigation Bar */}
      <NavBar />

      {/* Language Switcher (Top Right) */}
      <LanguageSwitcher />

      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-screen px-6 md:px-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs uppercase tracking-widest mb-6 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {data.hero.badge}
          </div>
          <h1
            className={`text-4xl md:text-6xl font-bold ${colors.text.primary} mb-6 text-center tracking-tight`}
          >
            {data.hero.title}
          </h1>
          <p
            className={`${colors.text.secondary} leading-relaxed text-center max-w-2xl text-base md:text-lg`}
          >
            {data.hero.description}
          </p>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 ${colors.section.primary} ${colors.text.primary} px-6 md:px-16 py-24 min-h-screen cursor-default`}
        >
          <div
            className={`w-64 h-64 md:w-80 md:h-80 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20`}
          >
            <Image
              src="/linkedin-pf.jpg"
              alt="Poodit Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-xl text-center md:text-left space-y-4">
            <h2 className="text-3xl font-semibold">{data.about.title}</h2>
            <p className={`${colors.text.secondary} leading-relaxed`}>
              {data.about.description}
            </p>
          </div>
        </section>

        {/* Works Section: 2 Scroll Chapters */}
        <motion.section
          id="works"
          className={`${colors.text.primary} cursor-default`}
          onViewportEnter={() => setIsWorksVisible(true)}
          onViewportLeave={() => setIsWorksVisible(false)}
          viewport={{ amount: 0.05 }}
        >
          {/* ==================================================== */}
          {/* INTERNSHIPS & WORK EXPERIENCE                         */}
          {/* ==================================================== */} 
          <div id="internships" className="scroll-mt-24 pt-20">
            {/* Internships Intro Banner */}
            <div className="flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
                {data.works.internshipsTitle}
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                {data.works.internshipsDescription}
              </p>
            </div>

            {/* Internships Cards */}
            <div className="space-y-12">
              {internshipWorks.map((work) => {
                const globalIndex = works.findIndex((w) => w.id === work.id);
                return (
                  <div
                    key={work.id}
                    id={`work-${work.id}`}
                    className="flex items-center justify-center min-h-[85vh] px-6 md:px-16 py-16"
                  >
                    <WorkCard
                      category={work.category}
                      imagePath={work.imagePath}
                      imageAlt={work.imageAlt}
                      header={work.header}
                      description={work.description}
                      linkHref={work.linkHref}
                      linkLabel={work.linkLabel}
                      company={work.company}
                      period={work.period}
                      tags={work.tags}
                      color={work.color}
                      categoryLabel={
                        data.works.categoryLabels[
                          work.category as keyof typeof data.works.categoryLabels
                        ]
                      }
                      onActive={() => setActiveWork(globalIndex)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==================================================== */}
          {/* PERSONAL & TEAM PROJECTS                              */}
          {/* ==================================================== */}
          <div id="personal-projects" className="scroll-mt-24 pt-28">
            {/* Personal Projects Intro Banner */}
            <div className="flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
                {data.works.personalTitle}
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                {data.works.personalDescription}
              </p>
            </div>

            {/* Personal Projects Cards */}
            <div className="space-y-12">
              {personalWorks.map((work) => {
                const globalIndex = works.findIndex((w) => w.id === work.id);
                return (
                  <div
                    key={work.id}
                    id={`work-${work.id}`}
                    className="flex items-center justify-center min-h-[85vh] px-6 md:px-16 py-16"
                  >
                    <WorkCard
                      category={work.category}
                      imagePath={work.imagePath}
                      imageAlt={work.imageAlt}
                      header={work.header}
                      description={work.description}
                      linkHref={work.linkHref}
                      linkLabel={work.linkLabel}
                      company={work.company}
                      period={work.period}
                      tags={work.tags}
                      color={work.color}
                      categoryLabel={
                        data.works.categoryLabels[
                          work.category as keyof typeof data.works.categoryLabels
                        ]
                      }
                      onActive={() => setActiveWork(globalIndex)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 ${colors.text.primary} px-6 md:px-16 py-24 min-h-screen`}
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p
                className={`mb-3 text-sm uppercase tracking-[0.25em] ${colors.accent.cyan}`}
              >
                {data.contact.subtitle}
              </p>
              <h2
                className={`mb-6 text-4xl font-bold leading-tight md:text-5xl ${colors.text.primary}`}
              >
                {data.contact.titleLine}{" "}
                <span className={`block ${colors.accent.cyan}`}>
                  {data.contact.titleHighlight}
                </span>
              </h2>
              <p
                className={`max-w-md text-base leading-relaxed ${colors.text.secondary} md:text-lg `}
              >
                {data.contact.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {data.contact.items.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={"external" in item && item.external ? "_blank" : undefined}
                  rel={"external" in item && item.external ? "noreferrer" : undefined}
                  className={`group rounded-2xl ${colors.card.border} ${colors.card.bg} p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/10`}
                >
                  <div
                    className={`mb-4 inline-flex rounded-xl ${colors.icon.border} ${colors.icon.bg} p-3 ${colors.icon.color} transition group-hover:scale-105`}
                  >
                    <ContactIcon icon={item.icon as ContactIconType} />
                  </div>
                  <p
                    className={`text-sm uppercase tracking-widest ${colors.text.tertiary}`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`mt-1 break-all text-base font-semibold ${colors.text.primary}`}
                  >
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
