"use client";
import { dataTools } from "@/app/data/dataTools";
import { Tools } from "@/app/interface/ToolsInterface";
import Image from "next/image";
import React, { useState } from "react";

export default function BodyTools() {
  const [tools] = useState<Tools[]>(dataTools);

  return (
    <div className="w-full flex flex-col pt-10 items-center min-h-[80vh] ">
      <h1 className="text-2xl font-semibold">Tools</h1>

      <div className="listTools grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full p-5 ">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white rounded-lg p-5 shadow-md">
            <h1 className="text-xl font-semibold">{tool.stack}</h1>
            <div className="flex flex-wrap gap-2">
              {tool.detail.tech.map((tech, index) => (
                <div
                  key={index}
                  className="relative my-6 flex items-center gap-3 group"
                >
                  <Image
                    src={`/images/tools/${tool.folder}/${tool.detail.icon[index]}.png`}
                    alt={tech}
                    className="h-10 w-10"
                    width={100}
                    height={100}
                  />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
