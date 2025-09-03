"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  isLink: string
}

export function ProjectCard({ title, description, tags, image, githubUrl, liveUrl, isLink }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15

    setRotation({ x: rotateX, y: rotateY })
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className="group relative h-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 hoverable"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)`
          : "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      {isHovered && (
        <div
          className="absolute inset-0 z-0 opacity-70 blur-xl"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.4), transparent 60%)`,
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {/* Card content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="relative h-48 overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 z-10 transition-opacity duration-300",
              isHovered ? "opacity-60" : "opacity-90",
            )}
          />
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={cn("object-cover transition-transform duration-700", isHovered ? "scale-110" : "scale-100")}
          />

          {/* Floating tags */}
          <div
            className={cn(
              "absolute top-4 left-4 z-20 flex flex-wrap gap-2 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          >
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} className="bg-black/50 backdrop-blur-sm text-emerald-400 border-emerald-500/30">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3
            className={cn(
              "mb-2 text-xl font-bold transition-all duration-300",
              isHovered ? "text-emerald-400" : "text-white",
            )}
          >
            {title}
          </h3>
          <p className="mb-6 flex-1 text-sm text-zinc-400">{description}</p>
          {isLink === "gallery" && (
            <div className="flex items-center text-emerald-400 text-sm mb-4">
              <span>View Gallery</span>
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </div>
          )}
          {isLink === "chillax" && (
            <div className="flex items-center text-emerald-400 text-sm mb-4">
              <span>Learn More</span>
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </div>
          )}
          {isLink === "medplay" && (
            <div className="flex items-center text-emerald-400 text-sm mb-4">
              <span>Learn More</span>
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </div>
          )}
          {isLink === "game" && (
            <div className="flex items-center text-emerald-400 text-sm mb-4">
              <span>Working on the Link part!</span>
            </div>
          )}

          <div
            className={cn(
              "mb-4 flex flex-wrap gap-2 transition-all duration-300",
              isHovered ? "opacity-0 h-0 mb-0" : "opacity-100",
            )}
          >
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-zinc-700 text-zinc-300 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300 hoverable"
              >
                <Github className="h-4 w-4" />
                Code
              </Button>
            )}
            {liveUrl && (
              <Button
                size="sm"
                className="gap-2 bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 hoverable"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div
        className={cn(
          "absolute inset-0 z-0 rounded-xl transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute inset-[-1px] rounded-xl animate-gradient-x" />
      </div>
    </div>
  )
}

