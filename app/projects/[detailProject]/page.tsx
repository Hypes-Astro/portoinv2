"use client";

import { useParams } from "next/navigation";
import { DataDetailProject } from "@/app/data/dataDetailProject";
import React, { useState } from "react";
import { Safari } from "@/components/magicui/safari";
import Image from "next/image";

export default function DetailProjectPage() {
  const params = useParams();
  const projectId = Number(params.detailProject);
  const dataId = DataDetailProject.find((item) => item.id === projectId);

  // State untuk menyimpan gambar utama yang ditampilkan di Safari
  const [selectedImage, setSelectedImage] = useState(dataId?.image[0].src);

  return (
    <div className="min-h-screen mb-20 px-10 pt-20 sm:px-20 sm:pt-20">
      {dataId ? (
        <div className="container flex lg:flex-row flex-col-reverse gap-6 justify-between">
          <div className="box-left flex flex-col gap-10 mt-3 w-full h-full">
            {/* Gambar utama di Safari */}
            <div className="box-image w-full  rounded-xl">
              <div className="relative">
                <Safari
                  url={dataId.name}
                  className="size-full rounded-lg"
                  imageSrc={selectedImage} // Menggunakan state untuk gambar utama
                />
              </div>
            </div>

            {/* List Thumbnail Gambar */}
            <div
              className={`box-image bg-slate-200 ${
                dataId.image.length === 1 ? "w-1/3 justify-center" : "w-full"
              } h-full rounded-xl flex items-center gap-2 p-2 overflow-x-auto`}
            >
              {dataId.image.map((img, index) => (
                <Image
                  key={index}
                  width={150}
                  height={150}
                  src={img.src}
                  alt={`Thumbnail ${index}`}
                  className="w-[50%] object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                  onClick={() => setSelectedImage(img.src)} // Update state saat diklik
                />
              ))}
            </div>
          </div>

          <div className="box-right mt-8 w-[85%] flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{dataId.name}</h1>
            <div className="dataItemSkill flex flex-wrap gap-2">
              {dataId.technologies.map((item, index) => (
                <span
                  key={index}
                  className={`badge ${item.badgeClass} rounded-md px-2 py-1`}
                >
                  {item.name}
                </span>
              ))}
            </div>
            <p className="whitespace-pre-line">{dataId.description}</p>

            <div className="linkButton">
              <div className="mt-4 flex gap-3 flex-wrap">
                {dataId.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition 
      hover:opacity-80 ${
        link.type === null
          ? ""
          : link.type === "info"
          ? "bg-gray-800 text-white"
          : "bg-blue-600 text-white"
      }`}
                  >
                    {link.type === null ? (
                      <></>
                    ) : link.type === "info" ? (
                      <>
                        {/* Ikon GitHub */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.334-1.757-1.334-1.757-1.091-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.809 1.304 3.493.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.477 5.92.432.372.823 1.102.823 2.222v3.293c0 .32.192.693.8.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </>
                    ) : (
                      link.label
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
}
