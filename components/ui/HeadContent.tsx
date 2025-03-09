import Image from "next/image";
import { Ripple } from "../magic/Ripple";
import { WordRotate } from "../magic/TextRotate";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import Link from "next/link";

export default function HeadContent() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center mb-5 md:justify-between min-h-[50vh]  md:min-h-[80vh] pt-14 ">
      {/* Left content */}
      <div className="info1 w-full max-w-6xl lg:w-[95%] flex flex-col gap-2">
        <h1 className="lg:text-8xl text-5xl font-semibold">Helloo 👋🏻</h1>
        <h1 className="lg:text-6xl text-4xl font-semibold">
          I&apos;m Alif Anwar
        </h1>
        <div className="lg:text-5xl text-2xl flex items-center gap-3 font-semibold">
          a{" "}
          <div className=" rounded-lg">
            <WordRotate
              words={[
                "Web Developer",
                "Mobile Developer",
                "Blog Writer",
                "Basic Human",
              ]}
              duration={2000}
            />
          </div>
        </div>
        <p className="lg:w-[75%] mt-2">
          I&apos;m a Computer Science student deeply passionate about software
          development. Eager to learn, collaborate, and unleash creativity, I
          aspire to contribute to dynamic teams, crafting innovative solutions
          that push boundaries and make an impact.
        </p>
        <div className="w-[75%]">
          <InteractiveHoverButton className="bg-yellow-200">
            <Link href="mailto:muhamadalifanwar@gmail.com">Contact me</Link>
          </InteractiveHoverButton>
        </div>
      </div>

      {/* Right content - Dynamic sizing */}
      <div className="image w-full lg:w-1/2 relative flex justify-end  mt-8 lg:mt-0 rounded-full">
        <div className="relative w-full aspect-square max-w-2xl">
          {/* Ripple container */}
          <div className="absolute inset-0">
            <Ripple />
          </div>

          {/* Image container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Image
              src="/images/profil-rbg.png"
              alt="Alkahfi"
              className="rounded-full w-auto h-auto max-w-full max-h-full"
              width={300}
              height={300}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
