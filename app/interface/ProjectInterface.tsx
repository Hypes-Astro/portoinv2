import { StaticImageData } from "next/image";
// import { ReactNode } from "react";

export type Link = {
  label: string;
  url: string;
  type: "info" | "visit" | null; // Menentukan apakah link untuk "More Info" atau "Visit"
};
export type Technology = {
  name: string; // Nama teknologi, misalnya "React JS"
  badgeClass: string; // Class untuk styling badge, misalnya "badge-primary"
};

export type Project = {
  name: string;
  className: string;
  // background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
  // --
  id: string;
  idType: number;
  image: StaticImageData | string; // atau string jika menggunakan string path untuk gambar
  role: string;
  technologies: Technology[];
  links: Link[];
};

export type DetailProject = {
  id: number;
  name: string;
  idType: number;
  image: StaticImageData[]; // atau string jika menggunakan string path untuk gambar
  role: string;
  description: string;
  technologies: Technology[];
  links: Link[];
};
