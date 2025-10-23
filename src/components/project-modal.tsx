"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Markdown from "react-markdown";
import { Button } from "./ui/button";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    dates: string;
    description: string;
    tags: readonly string[];
    image?: string;
    video?: string;
    images?: readonly string[];
    links?: readonly {
      icon: React.ReactNode;
      type: string;
      href: string;
    }[];
  } | null;
}

export function ProjectModal({ open, onOpenChange, project }: ProjectModalProps) {
  if (!project) return null;

  // Combine single image/video with images array for carousel
  const mediaItems: Array<{ type: "image" | "video"; src: string }> = [];

  if (project.images && project.images.length > 0) {
    project.images.forEach((img) => mediaItems.push({ type: "image", src: img }));
  } else {
    if (project.video) {
      mediaItems.push({ type: "video", src: project.video });
    }
    if (project.image) {
      mediaItems.push({ type: "image", src: project.image });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto will-change-transform">
        <DialogHeader>
          <DialogTitle className="text-3xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base">
            {project.dates}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Carousel */}
          {mediaItems.length > 0 && (
            <div className="relative w-full">
              {mediaItems.length === 1 ? (
                // Single media item
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
                  {mediaItems[0].type === "video" ? (
                    <video
                      src={mediaItems[0].src}
                      controls
                      className="w-full h-full object-cover"
                      muted
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={mediaItems[0].src}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              ) : (
                // Multiple media items - show carousel
                <Carousel className="w-full">
                  <CarouselContent>
                    {mediaItems.map((media, index) => (
                      <CarouselItem key={index}>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
                          {media.type === "video" ? (
                            <video
                              src={media.src}
                              controls
                              className="w-full h-full object-cover"
                              muted
                              autoPlay
                              loop
                            />
                          ) : (
                            <Image
                              src={media.src}
                              alt={`${project.title} - Image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              )}
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">About</h3>
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
              <Markdown>{project.description}</Markdown>
            </div>
          </div>

          {/* tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Links</h3>
              <div className="flex flex-wrap gap-2">
                {project.links.map((link, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {link.icon}
                      <span>{link.type}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
