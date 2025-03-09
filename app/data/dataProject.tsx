// data image
import lms_1_1 from "@/public/images/detail/lms1/1.png";

import lms_1 from "@/public/images/detail/lms/1.png";

import alkahfi_1 from "@/public/images/detail/alkahfi/1.png";

import kerjain_1 from "@/public/images/detail/kerjain/1.png";

import kabarin_1 from "@/public/images/detail/kabarin/KabarinApp.png";

import api_1 from "@/public/images/detail/apiPerpustakaan/1.png";

import portoin1_1 from "@/public/images/detail/portoin1/1.png";

import mari_1 from "@/public/images/detail/mari/1.jpg";

import fore_1 from "@/public/images/detail/forecasting/1.png";

import { Project } from "../interface/ProjectInterface";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon } from "lucide-react";
import { InputIcon } from "@radix-ui/react-icons";

// data image --------------------------

export const dataProject: Project[] = [
  {
    id: "1",
    name: "LMS Bengkel Koding V2",
    idType: 1,
    image: lms_1,
    role: "FrontEnd Developer",
    description:
      "LMS for 1,015+ students with content management, attendance, assignments, and role-based access.",
    technologies: [
      { name: "NextJs", badgeClass: "text-white badge-ghost" },
      { name: "React", badgeClass: "text-white badge-error" },
      { name: "Tailwind", badgeClass: "text-white badge-primary" },
      { name: "Typescript", badgeClass: "text-black badge-warning" },
      { name: "Jest", badgeClass: "text-white badge-success" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/bengkelkoding/bengkod-web-laravel9",
        type: "info",
      },
      {
        label: "Visit",
        url: "https://bengkelkoding.dinus.ac.id/",
        type: "visit",
      },
    ],
    Icon: FileTextIcon,

    href: "/projects/1",
    cta: "Learn more",

    className: "-",
  },

  {
    id: "2",
    name: "LMS Bengkel Koding V1",
    idType: 1,
    image: lms_1_1,
    role: "FrontEnd Developer",
    description:
      "Early LMS version for 120 students with 5 courses, Quarto-based content, and manual system.",
    technologies: [
      { name: "Laravel", badgeClass: "text-white badge-ghost" },
      { name: "Blade", badgeClass: "text-white badge-error" },
      { name: "Tailwind", badgeClass: "text-white badge-primary" },
      { name: "Javascript", badgeClass: "text-black badge-warning" },
      { name: "Mysql", badgeClass: "text-white badge-success" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/bengkelkoding/bengkod-web-laravel9",
        type: "info",
      },
      {
        label: "Visit",
        url: "https://bengkelkoding.dinus.ac.id/",
        type: "visit",
      },
    ],
    Icon: FileTextIcon,

    href: "/projects/2",
    cta: "Learn more",

    className: "-",
  },

  {
    id: "3",
    name: "Alkahfi Muslim Center",
    idType: 1,
    image: alkahfi_1,
    role: "Full Developer",
    description:
      "Islamic web platform with prayer schedules and hadith collections.",
    technologies: [
      { name: "React JS", badgeClass: "text-white badge-ghost" },
      { name: "API", badgeClass: "text-white badge-error" },
      { name: "Tailwind", badgeClass: "text-white badge-primary" },
      { name: "Javascript", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/Hypes-Astro/Alkahfi-web-platform",
        type: "info",
      },
      {
        label: "Visit",
        url: "https://alkahfimuslimcenter.vercel.app/",
        type: "visit",
      },
    ],
    Icon: InputIcon,
    href: "/projects/3",
    cta: "Learn more",
    className: "-",
  },

  {
    id: "4",
    name: "Kerjain ToDo",
    idType: 1,
    image: kerjain_1,
    role: "Full Developer",
    description:
      "Working on a React JS CRUD project to manage activities with state.",
    technologies: [
      { name: "React", badgeClass: "text-white badge-ghost" },
      { name: "Tailwind", badgeClass: "text-white badge-primary" },
      { name: "Javascript", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/Hypes-Astro/Kerja.in",
        type: "info",
      },
      {
        label: "Visit",
        url: "https://kerjain.vercel.app/",
        type: "visit",
      },
    ],
    Icon: GlobeIcon,

    href: "/projects/4",
    cta: "Learn more",
    className: "-",
  },

  {
    id: "5",
    name: "Kabarin: News App",
    idType: 2,
    image: kabarin_1,
    role: "Full Developer",
    description:
      "This project will likely enhance the user experience by integrating real-time news updates.",
    technologies: [
      { name: "Jetpack Compose", badgeClass: "text-white badge-ghost" },
      { name: "Kotlin", badgeClass: "text-white badge-primary" },
      { name: "API", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/Hypes-Astro/Kabarin-JuaraAndroid",
        type: "info",
      },
    ],
    Icon: CalendarIcon,

    href: "/projects/5",
    cta: "Learn more",
    className: "-",
  },

  {
    id: "6",
    name: "API Perpusatakaan",
    idType: 3,
    image: api_1,
    role: "Full Developer",
    description: "Make API environment for CRUD.",
    technologies: [
      { name: "Node JS", badgeClass: "text-white badge-ghost" },
      { name: "API", badgeClass: "text-white badge-error" },
      { name: "Javascript", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/Hypes-Astro/perpusApi",
        type: "info",
      },
    ],
    Icon: BellIcon,
    href: "/projects/6",
    cta: "Learn more",
    className: "-",
  },

  {
    id: "7",
    name: "Portoin",
    idType: 1,
    image: portoin1_1,
    role: "Full Developer",
    description: "Make a simple portofolio page with framework NextJs.",
    technologies: [
      { name: "Next JS", badgeClass: "text-white badge-ghost" },
      { name: "React", badgeClass: "text-white badge-primary" },
      { name: "Typescript", badgeClass: "text-white badge-error" },
      { name: "Tailwind css", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/Hypes-Astro/portofolioWeb",
        type: "info",
      },
    ],
    Icon: FileTextIcon,

    href: "/projects/7",
    cta: "Learn more",
    className: "-",
  },

  {
    id: "8",
    name: "Mari Hearth Rate Detection",
    idType: 3,
    image: mari_1,
    role: "Full Developer",
    description: "Make a simple portofolio page with framework NextJs.",
    technologies: [
      { name: "Next JS", badgeClass: "text-white badge-ghost" },
      { name: "React", badgeClass: "text-white badge-primary" },
      { name: "Typescript", badgeClass: "text-white badge-error" },
      { name: "Tailwind css", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/Hypes-Astro/portofolioWeb",
        type: "info",
      },
    ],
    Icon: FileTextIcon,

    href: "/projects/8",
    cta: "Learn more",
    className: "-",
  },

  {
    id: "9",
    name: "Forecasting WeeklySales",
    idType: 3,
    image: fore_1,
    role: "Full Developer",
    description:
      "Sales prediction dashboard for Walmart using time-series forecasting and Streamlit.",
    technologies: [
      { name: "Next JS", badgeClass: "text-white badge-ghost" },
      { name: "React", badgeClass: "text-white badge-primary" },
      { name: "Typescript", badgeClass: "text-white badge-error" },
      { name: "Tailwind css", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/Hypes-Astro/portofolioWeb",
        type: "info",
      },
    ],
    Icon: FileTextIcon,

    href: "/projects/9",
    cta: "Learn more",
    className: "-",
  },
];
