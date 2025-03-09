import BodyExperience from "@/components/ui/BodyExperience";
import { BodyLogoExperience } from "@/components/ui/BodyLogoExperience";
import BodyProject from "@/components/ui/BodyProject";
import BodyTools from "@/components/ui/BodyTools";
import HeadContent from "@/components/ui/HeadContent";

export default function Home() {
  return (
    <div className="min-h-screen px-10 pt-20 sm:px-20 sm:pt-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  gap-2 mx-4 sm:items-start ">
        {/* hallo */}
        <HeadContent />
        <BodyExperience />
        <BodyLogoExperience />
        <BodyProject />
        <BodyTools />
      </main>
    </div>
  );
}
