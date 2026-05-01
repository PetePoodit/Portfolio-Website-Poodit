"use client";

import { useState } from "react";
import TopBar from "@/components/topbar";
import WorkCard from "@/components/work-card";
import WorkIndicator from "@/components/work-indicator";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioWorks } from "@/lib/data";
import { contactItems } from "@/lib/contact-items";
import BackgroundBubbles from "@/components/background-bubbles";
import ContactIcon from "@/components/contact-icon";
import { themeConfig } from "@/lib/theme-config";

export default function HomePage() {
  const colors = themeConfig.dark;
  const [activeWork, setActiveWork] = useState(0);
  const [isWorksVisible, setIsWorksVisible] = useState(false);

  return (
    <main
      className={`min-h-screen ${colors.section.primary} relative overflow-hidden`}
    >
      <BackgroundBubbles />
      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300 ${
          isWorksVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <WorkIndicator
          totalItems={portfolioWorks.length}
          currentIndex={activeWork}
        />
      </div>
      <TopBar />
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen px-6 md:px-16 z-5"
      >
        <h1
          className={`text-4xl md:text-6xl font-bold ${colors.text.primary} mb-6 text-center z-5`}
        >
          Poodit&apos;s Portfolios.
        </h1>
        <p
          className={`${colors.text.secondary} leading-relaxed text-center max-w-2xl text-base md:text-lg z-5`}
        >
          “A portfolio that combines all of my works across Website/Application
          development, UX/UI design, and creative projects.”
        </p>
      </section>

      <section
        id="about"
        className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 ${colors.section.primary} ${colors.text.primary} px-6 md:px-16 py-24 min-h-screen cursor-default`}
      >
        <div
          className={`w-64 h-64 md:w-80 md:h-80 relative rounded-3xl overflow-hidden shadow-lg border-4 border-white z-5`}
        >
          <Image
            src="/linkedin-pf.jpg"
            alt="Poodit Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-xl text-center md:text-left z-5">
          <h2 className="text-3xl font-semibold mb-4">Hello, I’m Pete 👋</h2>
          <p className={`${colors.text.secondary} leading-relaxed`}>
            Hello! My fullname is Poodit Kootrakul, but you can just call me
            Pete. I’m a Computer Science student who finds beauty in both logic
            and layout where every line of code shapes an experience, and every
            pixel tells a story. For me, frontend development is more than just
            building interfaces — it’s about crafting emotions through design,
            blending art and engineering to make every click feel effortless,
            meaningful, and alive.
          </p>
        </div>
      </section>

      <motion.section
        id="works"
        className={`${colors.text.primary} cursor-default`}
        onViewportEnter={() => setIsWorksVisible(true)}
        onViewportLeave={() => setIsWorksVisible(false)}
        viewport={{ amount: 0.1 }}
      >
        {portfolioWorks.map((work, index) => (
          <div
            key={work.id}
            className="flex items-center justify-center min-h-screen px-6 md:px-16 py-24"
          >
            <WorkCard
              imagePath={work.imagePath}
              imageAlt={work.imageAlt}
              header={work.header}
              description={work.description}
              linkHref={work.linkHref}
              linkLabel={work.linkLabel}
              onActive={() => setActiveWork(index)}
            />
          </div>
        ))}
      </motion.section>

      <section
        id="contact"
        className={`relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 ${colors.text.primary} px-6 md:px-16 py-24 min-h-screen`}
      >
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <p
              className={`mb-3 text-sm uppercase tracking-[0.25em] ${colors.accent.primary}`}
            >
              Get in touch
            </p>
            <h2
              className={`mb-6 text-4xl font-bold leading-tight md:text-5xl ${colors.text.primary}`}
            >
              Let's build
              <span className={`block ${colors.accent.primary}`}>
                something unforgettable.
              </span>
            </h2>
            <p
              className={`max-w-md text-base leading-relaxed ${colors.text.secondary} md:text-lg `}
            >
              Open to internships, freelance work, and collaborations. Reach me
              on any platform below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={`group rounded-2xl ${colors.card.border} ${colors.card.bg} p-4  backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/10`}
              >
                <div
                  className={`mb-4 inline-flex rounded-xl ${colors.icon.border} ${colors.icon.bg} p-3 ${colors.icon.color} transition group-hover:scale-105`}
                >
                  <ContactIcon icon={item.icon} />
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
    </main>
  );
}
