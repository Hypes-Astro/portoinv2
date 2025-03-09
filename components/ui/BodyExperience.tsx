"use client";
import { dataExperience } from "@/app/data/dataExperience";
import { Experience } from "@/app/interface/ExperienceInterface";
import Image from "next/image";
import React, { useState } from "react";

export default function BodyExperience() {
  const [Experience] = useState<Experience[]>(dataExperience);

  return (
    <div className="w-full flex flex-col pt-10 items-center  min-h-[80vh] gap-5 ">
      <h1 className="text-2xl font-semibold">My Experience</h1>
      <p className="text-base text-center w-full lg:w-1/2 text-gray-700">
        As a software developer, I engage in various communities and internships
        that broaden my perspective. Each experience helps me grow, both
        technically and collaboratively. Here are the journeys that have shaped
        my career so far 🚀.
      </p>
      <div className="listExperience mt-6 flex flex-col gap-3 w-full lg:w-1/2">
        {Experience.map((experienceItem, index) => (
          <div key={index} className="item relative">
            <div className="logo absolute -left-6 ">
              <div className="w-12 h-12 bg-white p-1 rounded-full">
                <div className="w-full h-full  rounded-full flex items-center justify-center">
                  <Image
                    src={experienceItem.image}
                    alt={experienceItem.company}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="pl-12 border hover:bg-gray-50 border-gray-200 rounded-lg p-3 ">
              {/* Content */}
              <div className="flex-1">
                {/* Date */}
                <p className="text-gray-500 text-sm mb-1">
                  {experienceItem.date}
                </p>

                {/* Title */}
                <div className="text-xl font-bold text-gray-900 mb-1">
                  <p>{experienceItem.role} </p>
                  <p className="text-lg">{experienceItem.company}</p>
                </div>

                {/* Location */}
                <p className="text-gray-500 text-sm mb-2">
                  {experienceItem.place}
                </p>

                {/* Description */}
                <p className="text-gray-600">{experienceItem.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
