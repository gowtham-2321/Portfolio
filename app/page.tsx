import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-emerald-500">
            <span className="text-white">gow_</span>Portfolio<span className="animate-pulse">.</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-emerald-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com" target="_blank" className="text-zinc-400 hover:text-white">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button
              variant="outline"
              className="hidden md:flex border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
            >
              Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden" >
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
            <Link href={"https://linkedin.com/in/gowtham-jegathesan"}>
            <div className="inline-flex items-center justify-center px-4 py-1 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Wanna work with me?
            </div>
            </Link>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">
              UI/UX Designer & Developer <br className="md:hidden" />
              <span className="relative">
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C32.3333 1.16667 132.8 -3.4 299 10.5"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Crafting futuristic digital experiences with a focus on user-centered design and cutting-edge
              technologies.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8">
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 hover:border-emerald-500 rounded-full px-8"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black px-4 text-sm text-zinc-500 uppercase tracking-wider">Tech Stack</span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-6">
              {["HTML", "CSS", "Flask", "Javascript", "Figma", "Tailwind"].map((tech) => (
                <div
                  key={tech}
                  className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 text-lg font-mono"
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
            <ProjectCard
              title="E-Commerce Dashboard"
              description="A futuristic dashboard for managing online stores with real-time analytics and AI-powered insights."
              tags={["React", "Three.js", "Tailwind CSS"]}
              image="/placeholder.svg?height=600&width=800"
            />
            <ProjectCard
              title="Crypto Tracker App"
              description="A sleek mobile application for tracking cryptocurrency prices with interactive charts and notifications."
              tags={["React Native", "Chart.js", "Firebase"]}
              image="/placeholder.svg?height=600&width=800"
            />
            <ProjectCard
              title="AI Content Generator"
              description="An innovative tool that uses machine learning to generate high-quality content for various platforms."
              tags={["Python", "TensorFlow", "Next.js"]}
              image="/placeholder.svg?height=600&width=800"
            />
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
            <p className="text-zinc-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="mailto:hello@example.com" className="text-zinc-500 hover:text-emerald-500">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="https://github.com" target="_blank" className="text-zinc-500 hover:text-emerald-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-zinc-500 hover:text-emerald-500">
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

