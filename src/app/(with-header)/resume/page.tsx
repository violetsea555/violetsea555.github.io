"use client";
import watercolorPaper from "@/assets/blue-watercolor-paper.webp";
import Image from "next/image";

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="m-3 flex flex-col items-center">
      <h3 className="text-lg text-blue-950  font-semibold  mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border-2 border-white
 px-3 py-1 text-md  bg-white/80 dark:bg-blue-950"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div
      className="relative flex justify-center min-h-screen"
      style={{ backgroundColor: "#568ba4" }}
    >
      <Image
        src={watercolorPaper}
        alt=""
        fill
        priority
        className="object-cover pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)",
        }}
      />
      <div className="flex flex-col relative z-10 items-center">
        <h1 className="mt-8 max-sm:ml-2 text-5xl font-heading text-[#DDF1F7]">
          Resume Highlights
        </h1>
        <p className="mt-4 text-[#DDF1F7]">
          <i>
            For my full CV, please reach out via{" "}
            <a
              className="text-[#FFB4A2]"
              href="https://www.linkedin.com/in/avioletliu"
            >
              LinkedIn
            </a>
          </i>
        </p>
        <h2 className="mt-8 text-3xl font-heading">Skills</h2>
        <SkillGroup
          title="Languages"
          skills={["JavaScript", "TypeScript", "Python", "SQL", "C++", "Java"]}
        />
        <SkillGroup
          title="Frameworks/Libraries"
          skills={["React", "Next.js", "Tailwind", "GraphQL"]}
        />
        <SkillGroup
          title="Technical Skills"
          skills={[
            "Git",
            "Docker",
            "GitLab",
            "AWS (S3, ElasticSearch)",
            "MySQL",
            "Firebase(NoSQL)",
          ]}
        />
        <SkillGroup
          title="Interpersonal"
          skills={[
            "String written & verbal communication",
            "collaborating across globally distributed teams",
          ]}
        />
        <SkillGroup title="Currently Learning" skills={["Godot"]} />
      </div>
    </div>
  );
}
