"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight } from "lucide-react"

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

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

  // Scroll to about section on load
  useEffect(() => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

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
          <Link href="/" className="text-xl font-bold text-emerald-500 hoverable">
            <span className="text-white">Gow</span><span className="animate-pulse text-3xl font-bold">.</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-emerald-500 transition-colors hoverable"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/gowtham-2321" target="_blank" className="text-zinc-400 hover:text-white hoverable">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/gowtham-jegathesan" target="_blank" className="text-zinc-400 hover:text-white hoverable">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://drive.google.com/file/d/1EZJw-JKrbmhAPfYPcSAdsBI773SInXii/view?usp=sharing" target="_blank">
              <Button
                variant="outline"
                className="hidden md:flex border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 hoverable"
              >
                Resume
              </Button>
            </Link>
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden" id="about">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-emerald-500/20 blur-xl"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                opacity: Math.random() * 0.5,
              }}
            />
          ))}
        </div>

        
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <Link href="https://linkedin.com/in/gowtham-jegathesan" target="_blank">
              <div className="inline-flex items-center justify-center px-4 py-1 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Wanna work with me?
              </div>
            </Link>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text  text-transparent bg-gradient-to-r from-white via-emerald-300 to-white" style={{height: "100px"}}>
              Gowtham Jegathesan
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            I'm a <span className="text-emerald-400"> Frontend Enthusiast </span>, who brings designs to life with clean UI/UX. Passionate about <span className="text-emerald-400 ">Data Science</span> and <span className="text-emerald-400">Cyber security</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`#projects`}>
                <Button className="bg-emerald-500 hover:bg-emerald-800 text-secondary font-bold hover:text-zinc-300 rounded-full px-8 hoverable">
                  View Projects
                </Button>
              </Link>
              
              <Link href={`#contact`}>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 rounded-full px-8 hoverable"
                >
                  Contact Me
                </Button>
              </Link>
          
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-16 relative flex flex-col gap-2">
            <div className="relative flex justify-center">
              <span className="bg-black px-4 text-sm text-zinc-500 uppercase tracking-wider">Tech Stack</span>
            </div>
            <div className="inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>

            <div className="mt-2 flex flex-wrap justify-center gap-x-12 gap-y-6">
              {["React", "Adobe XD", "Figma", "Tailwind", "TypeScript", "Javascript"].map((tech) => (
                <div
                  key={tech}
                  className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 text-lg font-mono hoverable"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-zinc-950" id="skills">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-emerald-500">&lt;</span> Technical Skills{" "}
              <span className="text-emerald-500">/&gt;</span>
            </h2>
            <p className="mt-4 text-zinc-400">Explore my technical expertise</p>
          </div>
          <Terminal />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-black" id="projects">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-emerald-500">&lt;</span> Featured Projects{" "}
              <span className="text-emerald-500">/&gt;</span>
            </h2>
            <p className="mt-4 text-zinc-400">Check out some of my recent work</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/medplay" className="block h-full">
              <ProjectCard
                title="Medplay"
                description="Flask based full-stack music streaming platform that allows users to play, download songs and manage queues"
                tags={["HTML", "CSS", "Javascript", "Flask"]}
                image="https://i.ibb.co/HTHmJK9b/Screenshot-2025-03-23-161212.png"
                isLink= "medplay"
              />
            </Link>
            <Link href="/gallery" className="block h-full">
              <ProjectCard
                title="UI UX Designs"
                description="Designing intuitive, user-centric experiences that balance beauty and functionality to create seamless digital interactions."
                tags={["Figma", "Adobe XD", "Photoshop"]}
                image="https://raw.githubusercontent.com/gowtham-2321/gowtham-2321.github.io/refs/heads/main/img/13.jpg"
                isLink= "gallery"
              />
            </Link>
            <Link href= "#projects" className="block h-full">
              <ProjectCard
                title="Game development"
                description="A 2D hill climbing race game built in Unity using C#, featuring physics-based gameplay, challenging terrains and exciting race mechanics."
                tags={["Unity", "Photoshop", "C#"]}
                image="https://i.ibb.co/zWYXpJjh/Screenshot-2025-03-23-161657.png"
                isLink = "game"
              />
            </Link>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-950" id="contact">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-emerald-500">&lt;</span> Get In Touch{" "}
              <span className="text-emerald-500">/&gt;</span>
            </h2>
            <p className="mt-4 text-zinc-400">Let's discuss your next project</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <ContactForm />
          </div>
        </div>
      </section>

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

