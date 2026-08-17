import Card from "@/components/Card";
import townBg from "@/assets/scene/portfolio_town_bg_01.webp";
import scalSk8 from "@/assets/scal-sk8.jpg";

export default function gallery() {
  return (
    <main>
      <div className="flex flex-col mt-4 gap-y-4 items-center justify-center min-h-screen">
        <Card
          imageSrc={townBg}
          title={"Portfolio Town - Behind the Scenes"}
          description={
            <>
              {" "}
              <p className="font-heading">
                Drawn by hand; built with React(Next.js, TypeScript, Tailwind).
                Technical process detailed in the{" "}
                <a
                  href="https://github.com/violetsea555/violetsea555.github.io"
                  target="_blank"
                  className="text-blue-500"
                >
                  README document via GitHub.
                </a>
              </p>
            </>
          }
        />
        <Card
          imageSrc={scalSk8}
          title={"Scal-Sk8.org Website Redesign"}
          description={
            <>
              <p className="pt-1 leading-5 font-heading text-sm">
                Bringing a pre-mobile-era site into the 21st century —
                responsive, mobile-first, built with Bootstrap via CDN.{" "}
                <a
                  className="text-blue-500"
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
                  the redesign.
                </a>
              </p>
              <p className="text-sm pt-2 leading-4">
                When I joined my local rollerskating league, I noticed skaters
                frequently pulling up this site on their phones to check
                competition requirements and deadlines — a site designed 20
                years ago, that hadn&apos;t changed since. I volunteered to
                rework it: moved the most-requested resource (competition
                requirements) to the top of the page, restructured the
                competition list into a table for at-a-glance legibility, and
                prioritized load performance over decorative graphics, since
                nearly all traffic was mobile.
              </p>
            </>
          }
        />
      </div>
    </main>
  );
}
