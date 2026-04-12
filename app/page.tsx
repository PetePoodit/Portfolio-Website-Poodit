"use client";

import TopBar from "@/components/topbar";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold text-black mb-4">
          Poodit's Portfolios.
        </h1>
        <p className="text-gray-700">
          “A portfolio that combines all of my works across frontend
          development, UX/UI design, and creative projects.”
        </p>
      </section>
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 bg-black text-white px-6 md:px-16 py-24 min-h-screen"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-3xl overflow-hidden shadow-lg border-4 border-white">
          <Image
            src="/linkedin-pf.jpg"
            alt="Poodit Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">Hello, I’m Pete 👋</h2>
          <p className="text-gray-300 leading-relaxed">
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

      <section
        id="works"
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 bg-black text-white px-6 md:px-16 py-24 min-h-screen"
      >
        <div className="w-56 h-60 md:w-120 md:h-80  relative">
          <Image
            src="/warnjai-logo.png"
            alt="Warnjai Work"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h2 className="text-3xl font-semibold mb-4">Warnjai</h2>
          <p className="text-gray-300 leading-relaxed">
            Warnjai is the application project that i have designed with my team
            to compete in the Startup Thailand league 2024, It's the Application
            about helping people about a pms and sex problems.
          </p>
          <Link
          href="https://www.figma.com/design/j7rTAmb4T843j6oEAGjkgJ/SEX-and-PMS-App-BETA?node-id=0-1&p=f"
          className="
            inline-flex items-center justify-center
            px-6 py-3
            rounded-full
           bg-white text-black font-semibold
            transition-all duration-300
            hover:bg-gray-800 hover:scale-105
            active:scale-95
            shadow-md hover:shadow-lg"
        >
          See a Figma Prototype
        </Link>
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 bg-black text-white px-6 md:px-16 py-24 min-h-screen"
      ></section>
    </main>
  );
}
