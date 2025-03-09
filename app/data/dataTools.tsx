import { Tools } from "../interface/ToolsInterface";

export const dataTools: Tools[] = [
  {
    stack: "Programming Language",
    detail: {
      tech: [
        "Javascript",
        "Typescript",
        "PHP",
        "Java",
        "Python",
        "Kotlin",
        "Dart",
      ],
      icon: ["js", "typescript", "php", "java", "python", "kotlin", "dart"],
    },
    folder: "pl",
  },
  {
    stack: "Framework",
    detail: {
      tech: [
        "Vite",
        "NextJs",
        "ExpressJs",
        "Laravel",
        "Streamlit",
        "Flutter",
        "React Native",
      ],
      icon: [
        "vite",
        "nextjs",
        "expressjs",
        "laravel",
        "streamlit",
        "flutter",
        "reactNative",
      ],
    },
    folder: "framework",
  },
  {
    stack: "Library",
    detail: {
      tech: ["React", "Tailwind", "Bootstrap", "JetpackCompose"],
      icon: ["react", "tailwinds", "bootstrap", "jetpack"],
    },
    folder: "library",
  },
  {
    stack: "Database",
    detail: {
      tech: ["MySql", "PostgreeSql", "MongoDB", "Firebase"],
      icon: ["mysql", "postgresql", "mongodb", "firebase"],
    },
    folder: "db",
  },
  {
    stack: "Testing",
    detail: {
      tech: ["Katalon", "Postman", "Jest", "K6", "vercel"],
      icon: ["katalon", "postman", "jest", "k6", "vercel"],
    },
    folder: "testing",
  },
  {
    stack: "Service",
    detail: {
      tech: ["Trello", "Slack", "Figma", "Github", "Notion"],
      icon: ["trello", "slack", "figma", "github", "notion"],
    },
    folder: "service",
  },
];
