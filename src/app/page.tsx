import Image from "next/image";

import townBg from "@/assets/scene/portfolio_town_bg_01.webp";
import deck from "@/assets/scene/deck.webp";
import water from "@/assets/scene/water1.webp";
import lighthouse from "@/assets/buildings/lighthouse-plain.webp";
import resumeResort from "@/assets/buildings/resume-resort/resume-resort.webp";
import resumeResortHitmask from "@/assets/buildings/resume-resort/resume-resort-hitmask.webp";
import resumeResortSmoke from "@/assets/buildings/resume-resort/resume-resort-smoke.webp";
import resumeResortLights from "@/assets/buildings/resume-resort/resume-resort-light_3.webp";
import gallery from "@/assets/buildings/gallery/gallery.webp";
import galleryHitmask from "@/assets/buildings/gallery/gallery-hitmask.webp";
import galleryLights from "@/assets/buildings/gallery/gallery-light.webp";
import gallerySmoke from "@/assets/buildings/gallery/gallery-smoke.webp";
import aboutMe from "@/assets/buildings/about-me/about-me.webp";
import aboutMeSmoke from "@/assets/buildings/about-me/about-me-smoke.webp";
import aboutMeLights from "@/assets/buildings/about-me/about-me-light.webp";
import aboutMeHitmask from "@/assets/buildings/about-me/about-me-hitmask.webp";
import BuildingLink from "@/components/BuildingLink";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full">
        {/* Fixed aspect ratio keeps every child layer in proportional sync */}
        <div
          className="relative w-full mx-auto"
          style={{
            aspectRatio: "16 / 9",
          }}
        >
          <Image src={townBg} alt="" fill priority className="object-cover" />
          <Image src={deck} alt="" fill priority className="object-cover" />
          <Image src={water} alt="" fill priority className="object-cover" />
          <Image src={lighthouse} alt="" fill className="object-cover" />

          <BuildingLink
            href="#"
            label="Gallery — view my projects"
            smokeSrc={gallerySmoke}
            buildingSrc={gallery}
            windowsLitSrc={galleryLights}
            left="18%"
            top="40.5%"
            width="24%"
            aspectRatio={"465 / 487"}
            hitMaskSrc={galleryHitmask}
          />
          <BuildingLink
            href="#"
            label="Resume Resort — view my résumé"
            smokeSrc={resumeResortSmoke}
            buildingSrc={resumeResort}
            windowsLitSrc={resumeResortLights}
            left="45%"
            top="37%"
            width="37%"
            aspectRatio={"687 / 504"}
            hitMaskSrc={resumeResortHitmask}
          />
          <BuildingLink
            href="/about-me"
            label="About Me"
            smokeSrc={aboutMeSmoke}
            buildingSrc={aboutMe}
            windowsLitSrc={aboutMeLights}
            left="83%"
            top="48%"
            width="15%"
            aspectRatio={"259 / 361"}
            hitMaskSrc={aboutMeHitmask}
          />
        </div>
      </main>
    </div>
  );
}
