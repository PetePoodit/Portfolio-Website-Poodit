import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface WorkCardProps {
  imagePath: string;
  imageAlt: string;
  header: string;
  description: string;
  linkHref: string;
  linkLabel: string;
  onActive: () => void;
}

export default function WorkCard({
  imagePath,
  imageAlt,
  header,
  description,
  linkHref,
  linkLabel,
  onActive,
}: WorkCardProps) {
  const buttonBg = "bg-white text-black hover:bg-gray-200";
  const descriptionColor = "text-gray-300";

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.5 }}
      onViewportEnter={onActive}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 z-5">
        <div className="w-56 h-60 md:w-120 md:h-80 relative">
          <Image
            src={imagePath}
            alt={imageAlt}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h2 className="text-3xl font-semibold mb-4">{header}</h2>
          <p className={`${descriptionColor} leading-relaxed`}>{description}</p>
          <Link
            href={linkHref}
            className={`
              inline-flex items-center justify-center
              px-6 py-3
              rounded-full
              ${buttonBg}
              font-semibold
              transition-all duration-300
              hover:scale-105
              active:scale-95
              shadow-md hover:shadow-lg`}
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
