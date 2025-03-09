"use client";

import { useState } from "react";
import { Project } from "../interface/ProjectInterface";
import { dataProject } from "../data/dataProject";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(dataProject);
  const [loading, setLoading] = useState(false);

  const filterProjects = (idType: number) => {
    setLoading(true);
    setTimeout(() => {
      if (idType === 0) {
        setProjects(dataProject);
      } else {
        setProjects(dataProject.filter((project) => project.idType === idType));
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen mb-20 px-10 pt-20 sm:px-20 sm:pt-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 mx-4 sm:items-start">
        <div className="headContent">
          <p className="font-medium text-lg">- Projects</p>
          <h2 className="font-semibold text-5xl">All of My Projects</h2>
          <div className="filterBy flex flex-wrap max-w-lg gap-3 mt-3">
            <button
              className="p-1 px-3 border border-blue-300 rounded-full"
              onClick={() => filterProjects(1)}
            >
              🌏 Web development
            </button>
            <button
              className="p-1 px-3 border border-yellow-300 rounded-full"
              onClick={() => filterProjects(2)}
            >
              📱 Mobile development
            </button>
            <button
              className="p-1 px-3 border border-green-300 rounded-full"
              onClick={() => filterProjects(3)}
            >
              👜 Other
            </button>
            <button
              className="p-1 px-3 border border-gray-300 rounded-full"
              onClick={() => filterProjects(0)}
            >
              🔄 Show All
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex h-80 justify-center items-center mt-10 mx-auto">
            <p className="text-xl font-semibold">Wait a minute 👋🏻</p>
          </div>
        ) : (
          <div className="w-full mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9">
            {projects.map((projectItem, index) => (
              <div
                key={index}
                className="max-w-lg bg-gray-200 rounded-lg p-6 hover:bg-slate-200 flex flex-col h-full min-h-[400px]"
              >
                <h1 className="font-semibold mb-5 text-lg">
                  {projectItem.name}
                </h1>
                <div className="w-full h-48 mb-5">
                  <Image
                    src={projectItem.image}
                    alt={projectItem.name}
                    className="w-full h-full object-cover rounded-lg"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="flex flex-col gap-3 flex-grow">
                  <p className="font-semibold">Role: {projectItem.role}</p>
                  <p>{projectItem.description}</p>
                  <div className="tech flex gap-3 mt-2 flex-wrap">
                    {projectItem.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className={`badge p-3 ${tech?.badgeClass || ""}`}
                      >
                        {tech?.name || "Unknown Technology"}
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex items-center gap-3 mt-auto">
                    <Link
                      href={`projects/${projectItem.id}`}
                      className="p-1 px-3 border border-lime-300 rounded-full hover:bg-lime-300 hover:text-black transition-colors"
                    >
                      Masuk
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
