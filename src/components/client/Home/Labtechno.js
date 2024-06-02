import React from "react";
import IconCloud from "../../magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "angular",
  "ionic",
  "vue",
  "svelte",
  "tailwindcss",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Labtechno() {
  return (
    <div>
      <section className="labTechno">
        <div className="container">
          <h3 className=" text-center mb-3">Labs Technologiques</h3>
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </section>
    </div>
  );
}
