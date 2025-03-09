"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const cvAlif = "/pdf/CV_Muhamad_Alif_Anwar.pdf";
const portoAlif = "/pdf/Porto_Muhamad_Alif_Anwar.pdf";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg text-black p-4 shadow-md z-50">
      <div className="container mx-auto">
        <div className="flex w-[95vw] md:w-full justify-between items-center">
          <Link
            href={"/"}
            className="text-xl font-bold relative bg-yellow-300 px-3 py-1 rounded-xl"
          >
            Porto.in
          </Link>

          {/* Mobile menu button with animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 transition-transform duration-200 ease-in-out hover:scale-110"
          >
            <div className="relative w-6 h-6">
              <div
                className={`absolute transition-opacity duration-200 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              >
                <Menu size={24} />
              </div>
              <div
                className={`absolute transition-opacity duration-200 ease-in-out ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                <X size={24} />
              </div>
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-4 gap-4 relative">
            <div className="boxIcon flex items-center justify-center p-1 gap-3 ">
              <Link
                href="https://github.com/Hypes-Astro"
                className="hover:underline transition-all duration-200 hover:text-gray-600"
              >
                <Image
                  src="/images/icon/github.png"
                  width={20}
                  height={20}
                  alt="icon"
                />
              </Link>
              <Link
                href="https://www.instagram.com/a.lifanwar/"
                target="_blank"
                className="hover:underline transition-all duration-200 hover:text-gray-600"
              >
                <Image
                  src="/images/icon/instagram.png"
                  width={20}
                  height={20}
                  alt="icon"
                />
              </Link>
              <Link
                href="https://medium.com/@muhamadalifanwar"
                target="_blank"
                className="hover:underline transition-all duration-200 hover:text-gray-600"
              >
                <Image
                  src="/images/icon/medium.png"
                  width={20}
                  height={20}
                  alt="icon"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhamad-alif-anwar/"
                target="_blank"
                className="hover:underline transition-all duration-200 hover:text-gray-600"
              >
                <Image
                  src="/images/icon/linkedin.png"
                  width={20}
                  height={20}
                  alt="icon"
                />
              </Link>
            </div>
            <div className="downloadItem flex flex-col md:flex-row gap-4">
              <InteractiveHoverButton>
                <Link href={cvAlif} download={"CV Muhamad Alif Anwar"}>
                  Download CV
                </Link>
              </InteractiveHoverButton>
              <InteractiveHoverButton>
                <Link href={portoAlif} download={"Porto Muhamad Alif Anwar"}>
                  Download Porto
                </Link>
              </InteractiveHoverButton>
            </div>
          </div>

          {/* Mobile menu with slide and fade animation */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out transform ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0 pointer-events-none"
            }`}
          >
            <div className="bg-white/95 backdrop-blur-lg shadow-lg rounded-b-lg">
              <div className="flex flex-col space-y-4 p-4">
                <div className="downloadItem flex flex-col-reverse items-center  md:flex-row gap-4">
                  <div className="boxIcon flex items-center justify-center p-1 gap-3 ">
                    <Link
                      href="https://github.com/Hypes-Astro"
                      target="_blank"
                      className="hover:underline transition-all duration-200 hover:text-gray-600"
                    >
                      <Image
                        src="/images/icon/github.png"
                        width={20}
                        height={20}
                        alt="icon"
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/a.lifanwar/"
                      target="_blank"
                      className="hover:underline transition-all duration-200 hover:text-gray-600"
                    >
                      <Image
                        src="/images/icon/instagram.png"
                        width={20}
                        height={20}
                        alt="icon"
                      />
                    </Link>
                    <Link
                      href="https://medium.com/@muhamadalifanwar"
                      target="_blank"
                      className="hover:underline transition-all duration-200 hover:text-gray-600"
                    >
                      <Image
                        src="/images/icon/medium.png"
                        width={20}
                        height={20}
                        alt="icon"
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/muhamad-alif-anwar/"
                      target="_blank"
                      className="hover:underline transition-all duration-200 hover:text-gray-600"
                    >
                      <Image
                        src="/images/icon/linkedin.png"
                        width={20}
                        height={20}
                        alt="icon"
                      />
                    </Link>
                  </div>
                  <InteractiveHoverButton>
                    <Link href={cvAlif} download={"CV Muhamad Alif Anwar"}>
                      Download CV
                    </Link>
                  </InteractiveHoverButton>
                  <InteractiveHoverButton>
                    <Link
                      href={portoAlif}
                      download={"Porto Muhamad Alif Anwar"}
                    >
                      Download Porto
                    </Link>
                  </InteractiveHoverButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
