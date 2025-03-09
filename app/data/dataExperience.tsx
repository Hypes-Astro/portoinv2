import logoBengkod from "@/public/images/icon/logoBengkod.png";
import logoSamsung from "@/public/images/logo/samsung.jpeg";
import logoApple from "@/public/images/logo/applelogo.jpeg";

import { Experience } from "../interface/ExperienceInterface";

export const dataExperience: Experience[] = [
  {
    id: "exp-001",
    date: "March 03, 2025 - Now",
    role: "Learner Apple Developer Academy | IL",
    company: "Apple Developer Academy Infinite Learning",
    place: "Nongsa, Batam, Kepulauan Riau",
    description:
      "Immersive learning experience in iOS development, focusing on design, coding, and business aspects to build innovative apps.",
    image: logoApple,
  },

  {
    id: "exp-002",
    date: "August 03, 2023 - December 25, 2024",
    role: "Frontend Web Developer",
    company: "Bengkel Koding",
    place: "Central Java, Semarang. Dian Nuswantoro University",
    description:
      "Developed and maintained educational web platforms, enhancing user experience for over 200 students at UDINUS.",
    image: logoBengkod,
  },

  {
    id: "exp-003",
    date: "March 03 - September 25, 2024",
    role: "Cohort Samsung Innovation Campus",
    company: "Samsung Indonesia & Skilvul",
    place: "Online Academy",
    description:
      "Completed a specialized program in software development, focusing on industry-relevant technologies and problem-solving skills.",
    image: logoSamsung,
  },

  {
    id: "exp-004",
    date: "March 03, 2023 - August 02, 2024",
    role: "Mentor Web Development",
    company: "Bengkel Koding",
    place: "Central Java, Semarang. Dian Nuswantoro University",
    description:
      "Guided and mentored students in front-end and back-end development, improving their coding skills and project implementation.",
    image: logoBengkod,
  },
];
