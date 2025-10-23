"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import BlurFade from "@/components/magicui/blur-fade";

interface Project {
  title: string;
  href?: string;
  dates: string;
  active?: boolean;
  description: string;
  tags: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  image?: string;
  video?: string;
  images?: readonly string[];
}

interface ProjectsSectionProps {
  projects: readonly Project[];
  blurFadeDelay: number;
}

export function ProjectsSection({ projects, blurFadeDelay }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject({
      title: project.title,
      dates: project.dates,
      description: project.description,
      tags: project.tags,
      image: project.image,
      video: project.video,
      images: project.images,
      links: project.links,
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={blurFadeDelay * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.tags}
              image={project.image}
              video={project.video}
              images={project.images}
              links={project.links}
              onClick={() => handleProjectClick(project)}
            />
          </BlurFade>
        ))}
      </div>

      <ProjectModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        project={selectedProject}
      />
    </>
  );
}
