"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "/images/logo/bengkod.png",
  },
  {
    img: "/images/logo/gdsc.png",
  },
  {
    img: "/images/logo/udinus.png",
  },
  {
    img: "/images/logo/samsung.jpeg",
  },
];

const firstRow = reviews;

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="relative w-full h-14 ">
        {" "}
        {/* Increased size here */}
        <Image
          src={img}
          alt="logo"
          fill
          className="object-contain"
          sizes="(max-width: 256px) 100vw, 256px"
        />
      </div>
    </figure>
  );
};

export function BodyLogoExperience() {
  return (
    <div className="relative flex h-[150px] justify-center w-full flex-col  overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
