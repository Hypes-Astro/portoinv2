// data image
import lms_1_1 from "@/public/images/detail/lms1/1.png";

import lms_1 from "@/public/images/detail/lms/1.png";
import lms_2 from "@/public/images/detail/lms/2.png";
import lms_3 from "@/public/images/detail/lms/3.png";
import lms_4 from "@/public/images/detail/lms/4.png";

import alkahfi_1 from "@/public/images/detail/alkahfi/1.png";
import alkahfi_2 from "@/public/images/detail/alkahfi/2.png";
import alkahfi_3 from "@/public/images/detail/alkahfi/3.png";

import kerjain_1 from "@/public/images/detail/kerjain/1.png";
import kerjain_2 from "@/public/images/detail/kerjain/2.png";

import kabarin_1 from "@/public/images/detail/kabarin/KabarinApp.png";

import api_1 from "@/public/images/detail/apiPerpustakaan/1.png";

import portoin1_1 from "@/public/images/detail/portoin1/1.png";
import portoin1_2 from "@/public/images/detail/portoin1/2.png";

import mari_1 from "@/public/images/detail/mari/1.jpg";
import mari_2 from "@/public/images/detail/mari/2.jpg";
import mari_3 from "@/public/images/detail/mari/3.jpg";
import mari_4 from "@/public/images/detail/mari/4.png";

import fore_1 from "@/public/images/detail/forecasting/1.png";
import fore_2 from "@/public/images/detail/forecasting/2.png";

import { DetailProject } from "../interface/ProjectInterface";

// data detail
export const DataDetailProject: DetailProject[] = [
  // web LMS bengkel koding V2
  {
    id: 1,
    name: "LMS Bengkel Koding V2",
    idType: 1,
    image: [lms_1, lms_2, lms_3, lms_4],
    role: "Full Developer",
    description: `We developed an enhanced LMS platform used by 1,015+ students at Universitas Dian Nuswantoro to improve learning experiences in Bengkel Koding courses and professional certification guidance.

This version is a major upgrade from the first LMS Bengkel Koding, expanding its features and scalability to better support students and instructors. The system was built from end to end, covering:

✅ Content management for structured learning materials.
✅ Class attendance tracking for better monitoring.
✅ Assignment and grading system to streamline assessments.
✅ User roles & access control, including Super Admin, Admin, Lecturers, Assistants, and Students.

With this improved system, we significantly enhanced the learning process, providing a more integrated, scalable, and efficient platform for both instructors and students. 🚀`,

    technologies: [
      { name: "Next JS", badgeClass: "text-white badge-ghost" },
      { name: "React", badgeClass: "text-white badge-primary" },
      { name: "Typescript", badgeClass: "text-white badge-error" },
      { name: "Tailwind css", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "🌐 Visit",
        url: "https://bengkelkoding.dinus.ac.id/",
        type: "visit",
      },
    ],
  },

  // web LMS bengkel koding V1
  {
    id: 2,
    name: "LMS Bengkel Koding V1",
    idType: 1,
    image: [lms_1_1],
    role: "Full Developer",
    description: `The first version of Bengkel Koding LMS was developed to support 120 students at Universitas Dian Nuswantoro, offering 5 courses in coding and professional certification preparation.

Key aspects of V1:
✅ Content delivery using Quarto – Learning materials were structured in interactive documents.
✅ Basic user roles – Admin, Lecturers, Assistants, and Students.
✅ No online attendance – Attendance tracking was manual.
✅ Manual assignment & grading – No built-in automation.`,
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
        url: "-",
        type: null,
      },

      {
        label: "🌐 Visit",
        url: "-",
        type: null,
      },
    ],
  },

  // Alkahfi muslim center
  {
    id: 3,
    name: "Alkahfi Muslim Center",
    idType: 1,
    image: [alkahfi_1, alkahfi_3, alkahfi_2], // Array untuk menampung gambar
    role: "Full Developer",
    description:
      "Alkahfi Muslim Center is a web platform that provides essential Islamic resources, including prayer schedules and collections of hadith. It serves as a simple and accessible tool to support the community in practicing and deepening their religious knowledge.",
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
        label: "🌐 Visit",
        url: "https://alkahfimuslimcenter.vercel.app/",
        type: "visit",
      },
    ],
  },

  // IoT hearth rate detection (samsung innovation campus)

  //kerjain todo
  {
    id: 4,
    name: "Kerjain Todo",
    idType: 1,
    image: [kerjain_1, kerjain_2], // Array untuk menampung gambar
    role: "Full Developer",
    description: `Kerjain is a lightweight and efficient to-do list application built using Vite. Designed for simplicity and productivity, it helps users manage their daily tasks with ease.

This app allows users to:
✅ Add, edit, and delete tasks effortlessly.
✅ Mark tasks as completed to track progress.
✅ Maintain a clean and intuitive UI for better usability.

Built with performance in mind, Kerjain leverages Vite for a fast and smooth user experience. 🚀`,
    technologies: [
      { name: "React", badgeClass: "text-white badge-ghost" },
      { name: "Tailwind", badgeClass: "text-white badge-primary" },
      { name: "Javascript", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/Hypes-Astro/kerjain",
        type: "info",
      },

      {
        label: "🌐 Visit",
        url: "https://kerjain.vercel.app/",
        type: "visit",
      },
    ],
  },

  // Kabarin news app
  {
    id: 5,
    name: "Kabarin news app",
    idType: 1,
    image: [kabarin_1], // Array untuk menampung gambar
    role: "Full Developer",
    description: `Kabarin is an Android-based information platform designed to help users find, share, and manage information effortlessly.

Key features:
✅ Search for information easily.
✅ Share news and updates with others.
✅ Add, delete, and bookmark important information for later reading.

The app can be accessed by downloading it or cloning the repository and running it via Android Studio. 🚀`,
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
  },
  // API Perpustakaan
  {
    id: 6,
    name: "API Perpustakaan",
    idType: 1,
    image: [api_1], // Array untuk menampung gambar
    role: "Backend Developer",
    description: `Bookshelf API is a simple RESTful API for managing book collections. It allows users to:

✅ Add, update, and delete books from the collection.
✅ Mark books as read or unread for easy tracking.
✅ Retrieve book details with filtering options.

Built with efficiency in mind, this API provides a structured way to manage digital bookshelves seamlessly. 🚀`,
    technologies: [
      { name: "Node JS", badgeClass: "text-white badge-ghost" },
      { name: "API", badgeClass: "text-white badge-error" },
      { name: "Javascript", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/Hypes-Astro/BookShelfAppDicoding",
        type: "info",
      },
    ],
  },

  {
    id: 7,
    name: "Portoin v1",
    idType: 1,
    image: [portoin1_1, portoin1_2], // Array untuk menampung gambar
    role: "Full Developer",
    description: `This is my first portfolio website, built using Next.js to showcase my projects, skills, and experiences.

✅ Responsive and dynamic design for a smooth user experience.
✅ Showcases my projects and contributions in web and mobile development.
✅ Built with Next.js for performance and scalability.

This portfolio serves as a central hub to highlight my journey in tech and development. 🚀`,
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
  },

  {
    id: 8,
    name: "Mari Hearth Rate Detection",
    idType: 1,
    image: [mari_1, mari_2, mari_3, mari_4], // Array untuk menampung gambar
    role: "IoT and Backend Developer",
    description: `This IoT-based heart rate detection system utilizes Flask and MongoDB for real-time monitoring and data management.

✅ ECG sensor integration to measure heart rate.
✅ Flask API backend to process and store data.
✅ MongoDB database for scalable and efficient data storage.
✅ Real-time monitoring for health tracking.

This system provides an efficient way to track heart rate data and analyze health trends. 🚀`,
    technologies: [
      { name: "Next JS", badgeClass: "text-white badge-ghost" },
      { name: "React", badgeClass: "text-white badge-primary" },
      { name: "Typescript", badgeClass: "text-white badge-error" },
      { name: "Tailwind css", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/TimKahyo/Kelompok12SIC2024Batch5",
        type: "info",
      },
    ],
  },

  {
    id: 9,
    name: "Forecasting WeeklySales",
    idType: 1,
    image: [fore_1, fore_2], // Array untuk menampung gambar
    role: "Frontend Developer",
    description: `This project predicts Walmart's weekly sales using time-series forecasting techniques. The model analyzes historical sales data to provide future sales estimates, helping with inventory planning and decision-making.

✅ Built using Python, Streamlit, and Machine Learning models
✅ Visualized sales trends and predictions interactively
✅ Helps in demand forecasting and business insights

The project is deployed using Streamlit, allowing users to explore the forecasts in an interactive dashboard. 🚀`,
    technologies: [
      { name: "Streamlit", badgeClass: "text-white badge-ghost" },
      { name: "Python", badgeClass: "text-white badge-primary" },
      { name: "CSV", badgeClass: "text-white badge-error" },
      { name: "Forecasting ML", badgeClass: "text-black badge-warning" },
    ],
    links: [
      {
        label: "More Info",
        url: "https://github.com/Hypes-Astro/forecasting-walmartmentoring",
        type: "info",
      },
    ],
  },
];
