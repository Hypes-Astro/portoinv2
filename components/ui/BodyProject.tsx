import React from "react";
import { Bento } from "../magic/Bento";
import Link from "next/link";

export default function BodyProject() {
  return (
    <div className="w-full flex flex-col pt-10 items-center mb-12 h-full gap-5 ">
      <h1 className="text-2xl font-semibold">My Porto</h1>
      <Link
        href={"/projects"}
        className="p-2 px-4 rounded-full bg-slate-100 hover:bg-slate-200 font-semibold "
      >
        Look Others
      </Link>
      <Bento />
    </div>
  );
}
