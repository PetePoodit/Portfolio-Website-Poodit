export type ContactIcon = "gmail" | "phone" | "linkedin" | "github";

export type ContactItem = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: ContactIcon;
  external?: boolean;
};

export const contactItems: ContactItem[] = [
  {
    id: "gmail",
    label: "Gmail",
    value: "pooditpete7555@gmail.com",
    href: "mailto:poodit.kootrakul@gmail.com",
    icon: "gmail",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+66 99-154-2964",
    href: "tel:+66800000000",
    icon: "phone",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Poodit Kootrakul",
    href: "https://linkedin.com/in/poodit-kootrakul-5b742b372",
    icon: "linkedin",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "PetePoodit",
    href: "https://github.com/PetePoodit",
    icon: "github",
    external: true,
  },
];
