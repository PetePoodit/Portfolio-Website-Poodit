import dataEn from "@/data/data-en.json";
import dataTh from "@/data/data-th.json";

export type WorkCategory = "internship" | "personal";

export interface PortfolioWork {
  id: string;
  category: WorkCategory;
  header: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  linkHref: string;
  linkLabel: string;
  company?: string;
  period?: string;
  tags?: string[];
  color?: string;
}

export const portfolioWorks = dataEn.works.items as PortfolioWork[];
export const portfolioWorksEn = dataEn.works.items as PortfolioWork[];
export const portfolioWorksTh = dataTh.works.items as PortfolioWork[];