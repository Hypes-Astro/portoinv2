"use client";

import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import { useState } from "react";
import { Project } from "@/app/interface/ProjectInterface";
import { dataProject } from "@/app/data/dataProject";

export function Bento() {
  // Urutkan proyek berdasarkan ID
  const sortedProjects = [...dataProject]
    .sort((a, b) => parseInt(a.id) - parseInt(b.id))
    .slice(0, 5); // 🔥 Hanya ambil 5 proyek pertama

  const [projects] = useState<Project[]>(sortedProjects);

  // Array dari classNames untuk layout grid
  const gridLayouts = [
    "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3", // Proyek 1
    "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4", // Proyek 2
    "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4", // Proyek 3
    "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2", // Proyek 4
    "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4", // Proyek 5
  ];

  return (
    <BentoGrid className="lg:grid-rows-3">
      {projects.map((feature, index) => {
        const layoutClass = gridLayouts[index] || ""; // Pastikan tidak error kalau index lebih dari 4

        return <BentoCard key={index} {...feature} className={layoutClass} />;
      })}
    </BentoGrid>
  );
}
