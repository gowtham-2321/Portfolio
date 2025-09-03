"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRight, Maximize2, X, Github, Linkedin, Mail, ArrowDown  } from "lucide-react"
import { cn } from "@/lib/utils"

// Gallery images data
const galleryImages = [
  {
    id: 1,
    title: "Language Learning App",
    description: "Playful, intuitive, accessible, engaging language-learning app.",
    src: "/images/1.jpg",
    category: "Learning",
  },
  {
    id: 2,
    title: "Hotel Booking App",
    description: "A user-friendly app for finding hotels easily.",
    src: "/images/2.jpg",
    category: "Booking",
  },
  {
    id: 3,
    title: "Travel Planner App",
    description: "An intuitive and engaging app for travel planning.",
    src: "/images/3.jpg",
    category: "Booking",
  },
  {
    id: 4,
    title: "Self Improvement App",
    description: "A motivating app for growth and self-improvement.",
    src: "/images/4.jpg",
    category: "Task Management",
  },
  {
    id: 5,
    title: "Japanese Themed",
    description: "A user-friendly app for exploring and navigating Japan",
    src: "/images/5.jpg",
    category: "Explorer",
  },
  {
    id: 6,
    title: "Illustrations App",
    description: "An intuitive app UI for exploring categorized illustrations.",
    src: "/images/6.jpg",
    category: "UI Design",
  },
  {
    id: 7,
    title: "City Explorer App",
    description: "An intuitive UI for seamless city exploration.",
    src: "/images/7.jpg",
    category: "Explorer",
  },
  {
    id: 8,
    title: "Blog Post App",
    description: "A clean, immersive UI for seamless blog reading.",
    src: "/images/8.jpg",
    category: "Blog",
  },
  {
    id: 9,
    title: "Learning App",
    description: "An engaging UI for structured, interactive learning.",
    src: "/images/9.png",
    category: "Learning",
  },
  {
    id: 10,
    title: "On-Boarding UI",
    description: "A smooth, intuitive, and engaging onboarding experience.",
    src: "/images/10.jpg",
    category: "On-boarding",
  },
  {
    id: 11,
    title: "Tourism App",
    description: "A seamless, intuitive UI for exploring travel destinations.",
    src: "/images/11.jpg",
    category: "Explorer",
  },
  {
    id: 12,
    title: "Blog Reading App",
    description: "A clean, user-friendly UI for effortless blog reading.",
    src: "/images/12.jpg",
    category: "Blog",
  },
  {
    id: 13,
    title: "Tech News",
    description: "A smooth, engaging UI for tech news onboarding.",
    src: "/images/13.jpg",
    category: "On-boarding",
  },
]

// Filter categories
const categories = ["All","On-boarding", "Blog", "Explorer", "Learning", "UI Design", "Booking", "Task Management"]

export default function GalleryPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredImages, setFilteredImages] = useState(galleryImages)

  // Track mouse position for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hoverable")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  // Filter images based on selected category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredImages(galleryImages)
    } else {
      setFilteredImages(galleryImages.filter((img) => img.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <div className="relative min-h-screen bg-black text-white">

      {/* Custom cursor */}
      <div
        className="fixed z-[100] pointer-events-none mix-blend-difference transition-transform duration-150"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`,
          opacity: 0.9,
        }}
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black">
          <ArrowUpRight
            className={`w-4 h-4 ${isHovering ? "opacity-100" : "opacity-0"} transition-opacity duration-150`}
          />
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-zinc-400 hover:text-emerald-500 transition-colors hoverable">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold">
              <span className="text-emerald-500">UI UX Design</span> Gallery
            </h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Category filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full hoverable",
                activeCategory === category
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "border-zinc-700 text-zinc-400 hover:border-emerald-500 hover:text-emerald-500",
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 hoverable"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-black/50 border-white/20 backdrop-blur-sm hoverable"
                  >
                    <Maximize2 className="h-5 w-5 text-white" />
                  </Button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block mb-2 px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400 backdrop-blur-sm">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{image.title}</h3>
                  <p className="text-sm text-zinc-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-4 right-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 border-white/20 hoverable"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-5 w-5 text-white" />
            </Button>
          </div>

          <div className="relative max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={galleryImages.find((img) => img.id === selectedImage)?.src || ""}
                alt={galleryImages.find((img) => img.id === selectedImage)?.title || ""}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 bg-zinc-900/80 backdrop-blur-sm p-4 rounded-lg">
              <h2 className="text-xl font-bold text-white">
                {galleryImages.find((img) => img.id === selectedImage)?.title}
              </h2>
              <p className="text-zinc-300">{galleryImages.find((img) => img.id === selectedImage)?.description}</p>
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-zinc-500">© {new Date().getFullYear()} Gowtham Jegathesan. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="mailto:gowthamjega2005@gmail.com" className="text-zinc-500 hover:text-emerald-500 hoverable">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://github.com/gowtham-2321"
                target="_blank"
                className="text-zinc-500 hover:text-emerald-500 hoverable"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/gowtham-jegathesan"
                target="_blank"
                className="text-zinc-500 hover:text-emerald-500 hoverable"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

