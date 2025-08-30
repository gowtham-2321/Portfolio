"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function medplay() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Global custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setCursorPosition({ x: e.clientX, y: e.clientY })
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

  const stats = [
    { label: "Monthly Active Sessions", value: "6.8K" },
    { label: "Total songs Listened", value: "240K" },
    { label: "Lines of Code", value: "8.6K" },
    { label: "For all users", value: "FREE" },
  ]

  const features = [
    {
      title: "Queue-Management",
      points: [
        "Add, reorder, and remove songs instantly",
        "Drag-and-drop support for smooth control",
        "Save and resume queues across sessions",
      ],
      img: "/Queue.png",
    },
    {
      title: "Favourites",
      points: [
        "One-tap save for your top tracks",
        "Organize songs for easy replay",
        "Download all your favourites for offline access",
      ],
      img: "/favourites.png",
    },
    {
      title: "Download Feature",
      points: [
        "Download available across all sections – Artists, Albums, Favourites, and Queues.",
        "Download songs with complete metadata",
        "Save songs directly to your device",
      ],
      img: "/download.png",
    },
    {
      title: "Themes",
      points: [
        "Choose from multiple preset themes",
        "Customize your player with vibrant themes",
        "Enjoy a personalized look that matches your vibe",
      ],
      img: "/Themes.png",
    },
  ]

  const screens = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
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
              <span className="text-emerald-500">Medplay</span> - Personal Project
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://medplay.vercel.app/" target="_blank" rel="noreferrer" className="hoverable">
              <Button className="gap-2 bg-emerald-500 hover:bg-emerald-600">
                <ExternalLink className="h-4 w-4" />
                Live Site
              </Button>
            </a>
            <a
              href="https://github.com/gowtham-2321/Medplay-UI-v2"
              target="_blank"
              rel="noreferrer"
              className="hoverable"
            >
              <Button
                variant="outline"
                className="gap-2 border-zinc-700 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 bg-transparent"
              >
                <Github className="h-4 w-4" />
                GitHub Repo
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-6 md:p-10">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 backdrop-blur-sm hoverable">
              Lightweight • Fast • Reliable
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">
              An Ad-free Modern Music Player
            </h2>
            <p className="max-w-3xl text-zinc-400 text-lg">
              Medplay is a full-stack music streaming platform that lets users play, download, and organize their favorite tracks. With seamless playlist creation and dynamic queue management, it combines simplicity with powerful features. 
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-6 text-center hover:border-emerald-500/30 transition-colors hoverable"
                >
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview image */}
        <section className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
            <div className="relative aspect-[16/9]">
              <Image
                src="/overview.png"
                alt="Overview screen of the E‑Commerce Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16 space-y-12">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={cn(
                "grid items-center gap-6 md:gap-10",
                idx % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-2 md:[&>*:first-child]:order-2",
              )}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{f.title}</h3>
                <ul className="space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={f.img || "/placeholder.svg"}
                    alt={`${f.title} screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Screens grid */}
        <section className="mt-16">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">Screens</h3>
            <p className="mt-2 text-zinc-400">Selected interfaces across albums, artists, and multiple other features.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {screens.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl border border-zinc-800">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Dashboard screen ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="mt-16">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">Tech Stack</h3>
            <p className="mt-2 text-zinc-400">Built on a minimal, lightweight stack for speed and simplicity.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "Javascript", "Flask", "Rest API", "FFMPEG", "ID3Writer"].map((t) => (
              <div
                key={t}
                className="hoverable rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-400"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 flex flex-wrap gap-3">
          <a href="https://medplay.vercel.app" target="_blank" rel="noreferrer" className="hoverable">
            <Button className="gap-2 bg-emerald-500 hover:bg-emerald-600">
              <ExternalLink className="h-4 w-4" />
              Live Site
            </Button>
          </a>
          <a
            href="https://github.com/gowtham-2321/Medplay-UI-v2"
            target="_blank"
            rel="noreferrer"
            className="hoverable"
          >
            <Button
              variant="outline"
              className="gap-2 border-zinc-700 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 bg-transparent"
            >
              <Github className="h-4 w-4" />
              GitHub Repo
            </Button>
          </a>
        </section>
      </main>
    </div>
  )
}
