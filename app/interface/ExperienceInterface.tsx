import { StaticImageData } from "next/image";

export type Experience = {
  id: string;
  date: string;
  role: string;
  company: string;
  place: string;
  description: string;
  image: StaticImageData | string;
};
