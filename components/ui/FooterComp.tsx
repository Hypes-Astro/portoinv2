import React from "react";
import { OrbitingCirclesFooter } from "../magic/OrbitingCirclesFooter";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import Link from "next/link";

export default function FooterComp() {
  return (
    <div className="flex justify-between mx-4 h-full p-5 rounded-lg border border-gray-300">
      <div className="flex flex-col gap-4 sisiKiri w-full md:w-3/4 ">
        <h1 className="font-semibold text-xl md:text-5xl">
          Building something cool? Stuck on a project? Or just curious to chat?{" "}
        </h1>
        <p className="text-base">
          Whatever it is, I’m happy to connect. Let’s make something awesome
          together—reach out!
        </p>

        <InteractiveHoverButton className="w-1/3 flex items-center bg-slate-200">
          <Link href="mailto:muhamadalifanwar@gmail.com">Contact me</Link>
        </InteractiveHoverButton>
      </div>
      <div className="w-1/2 md:flex hidden justify-end items-end ml-64">
        <OrbitingCirclesFooter />
      </div>
    </div>
  );
}
