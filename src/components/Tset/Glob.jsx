import React from "react";

// This is a simple array of icon slugs for different technologies.
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
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
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

// IconCloud component, which receives an array of slugs and renders them
const IconCloud = ({ iconSlugs }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {iconSlugs.map((slug) => (
        <div
          key={slug}
          className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded-lg shadow-md"
        >
          {/* Placeholder for icons, in a real scenario, you'd dynamically load icons */}
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`}
            alt={slug}
            className="h-10 w-10"
          />
        </div>
      ))}
    </div>
  );
};

// Main component to render the IconCloud inside a styled container
const IconCloudDemo = () => {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default IconCloudDemo;
