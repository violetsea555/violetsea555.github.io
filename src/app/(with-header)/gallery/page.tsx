import GalleryItem from "@/components/GalleryItem";
import townBg from "@/assets/scene/portfolio_town_bg_01.webp";
import scalSk8 from "@/assets/scal-sk8.jpg";

export default function gallery() {
  return (
    <main>
      <div className="flex flex-col gap-4 m-10 items-center justify-center min-h-screen">
        <GalleryItem
          imageSrc={scalSk8}
          title={"Scal-Sk8 Website Revamp"}
          description={
            <>
              Bringing a pre-mobile era website into the 21st century with a
              responsive, mobile first interface. Utilizing Bootstrap via CDN.{" "}
              <a
                className="text-blue-600"
                href="https://scal-sk8.org/archive.html"
                target="_blank"
              >
                Explore the old version
              </a>{" "}
              or{" "}
              <a
                className="text-blue-500"
                href="https://scal-sk8.org/homepage.html"
              >
                the new one.
              </a>
            </>
          }
        />
        <GalleryItem
          imageSrc={townBg}
          title={"Portfolio Town - Behind the Scenes"}
          description={
            <>
              Drawn by hand; built with React(Next.js, TypeScript, Tailwind).
              Technical process detailed in the{" "}
              <a
                href="https://github.com/violetsea555/violetsea555.github.io"
                target="_blank"
                className="text-blue-500"
              >
                README document via GitHub.
              </a>
            </>
          }
        />
      </div>
    </main>
  );
}
