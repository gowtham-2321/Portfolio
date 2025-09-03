"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image" // import Image for screenshots
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2, Copy, Github, Linkedin, Mail } from "lucide-react" // add Github icon

export default function ChillaxProjectPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

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

  const highlights = [
    "One line setup - just set your API key and you’re ready",
    "Make up your own functions - upto your imagination",
    "Lightweight, Pythonic interface",
  ]

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {}
  }

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
              <span className="text-emerald-500">Chillax</span>
              <span className="hidden sm:inline"> - Python Package</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://pypi.org/project/Chillax/" target="_blank" rel="noreferrer" className="hoverable">
              <Button className="gap-2 bg-emerald-500 hover:bg-emerald-800 text-black hover:text-zinc-300">
                <ExternalLink className="h-4 w-4" />
                Open on PyPI
              </Button>
            </a>
            <a href="https://github.com/yourname/chillax" target="_blank" rel="noreferrer" className="hoverable">
              <Button
                variant="outline"
                className="gap-2 border-zinc-700 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 bg-transparent"
                aria-label="Open GitHub repository"
              >
                <Github className="h-4 w-4" />
                GitHub Repo
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="relative container mx-auto px-4 pt-24 pb-16">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-6 md:p-10">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 backdrop-blur-sm hoverable">
              Gemini API • Q&A • Python
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white min-h-16">
              Chillax - A perfect tool for vibecoders
            </h2>
            <p className="max-w-3xl text-zinc-400 text-lg">
              Chillax is not just another wrapper, it’s a whole new way of coding with AI. Instead of memorizing a fixed set of functions, you decide what functions you want.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-4 text-sm text-zinc-300 flex items-start gap-2 hover:border-emerald-500/30"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explainer */}
        <section className="mt-8">
          <p className="text-zinc-400 leading-relaxed">
            Chillax is a playful and flexible Python package designed to make coding feel less like a chore and more like a creative flow.
            Instead of restricting you to rigid predefined functions, Chillax embraces freedom and fun: you can call functions that may or may not exist,
            and the library will still respond in an intelligent and useful way.
            For example, you might use standard helpers like chillax.sort to perform everyday tasks,
            but you can just as easily invent your own quirky functions like chillax.writePoem and so on.
            The magic of Chillax lies in its adaptability, it’s not just a toolbox but also a creative playground where your imagination defines the API surface.
            This makes it perfect for learners who want to explore programming in a relaxed, experimental environment,
            as well as for developers who want to inject humor and personality into their workflows.
            Chillax breaks away from conventional coding practices and invites you to experiment with commands that blend productivity, creativity, and entertainment.
          </p>
        </section>

        {/* Install */}
        <section className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Install</h3>
          <p className="text-zinc-400 mb-4">Get started by installing the package from PyPI:</p>
          <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 text-xs text-zinc-400">
              <span>pip</span>
              <button
                className="flex items-center gap-1 text-zinc-400 hover:text-emerald-400 hoverable"
                onClick={() => copy("pip install Chillax")}
                aria-label="Copy install command"
              >
                <Copy className="h-3.5 w-3.5" /> Copy
              </button>
            </div>
            <pre className="p-4 text-sm text-zinc-200 overflow-x-auto">
              <code>pip install Chillax</code>
            </pre>
          </div>
        </section>

        {/* Setup */}
        <section className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Setup</h3>
          <p className="text-zinc-400 mb-4">
            Import chillax from chillax and set the Gemini api key using the setAPIKey() function
          </p>
          <div className="gap-4">
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 text-xs text-zinc-400">
                <span>Python</span>
                <button
                  className="flex items-center gap-1 text-zinc-400 hover:text-emerald-400 hoverable"
                  onClick={() => copy([
                    "import chillax from chillax",
                    "",
                    "#use the setAPIKey() function",
                    `chillax.setAPIKey("your_api_key")`,
                  ].join("\n")
                )}
                  aria-label="Copy env var"
                >
                  <Copy className="h-3.5 w-3.5" /> Copy
                </button>
              </div>
              <pre className="p-4 text-sm text-zinc-200 overflow-x-auto">
                <code>{'import chillax from chillax'}</code>
                <br />
                <br />  
                <code className="text-zinc-500">{'#use the setAPIKey() function'}</code>
                <br />
                <code>{'chillax.setAPIKey("your_api_key")'}</code>
                <br />
              </pre>
            </div>
          </div>
        </section>

        {/* Quick start */}
        <section className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Quick start</h3>
          <p className="text-zinc-400 mb-4">
            A minimal example to ask a question and print the answer. Adjust imports if your package exposes a different
            interface.
          </p>
          <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 text-xs text-zinc-400">
              <span>Python</span>
              <button
                className="flex items-center gap-1 text-zinc-400 hover:text-emerald-400 hoverable"
                onClick={() =>
                  copy(
                    [
                      "# Example of a useful function (extendable)",
                      "my_list = [5, 2, 9, 1]",
                      "sorted_list = chillax.sort(my_list)",
                      "",
                      `#No predefined "explainSorting" exists...`,
                      `#But you can just call it anyway 👇`,
                      `print(chillax.explainSorting("quick sort"))`,
                      "",
                      `#Or invent your own creative function names`,
                      `print(chillax.debugMyCode("def add(a,b): return a-b", "Python"))`,
                      `print(chillax.writePoem("about vibecoding"))`,
                      `print(chillax.createPlaylist("lofi coding beats"))`,
                      `chillax.translateFrenchToEnglish("Je suis Inde")`,
                      "",
                    ].join("\n"),
                  )
                }
                aria-label="Copy quick start example"
              >
                <Copy className="h-3.5 w-3.5" /> Copy
              </button>
            </div>
            <pre className="p-4 text-sm text-zinc-200 overflow-x-auto">
              <code className="text-zinc-500">{"#Example of a useful function (extendable)"}</code>
              <br />
              <code>{`my_list = [5, 2, 9, 1]`}</code>
              <br />
              <code>{`sorted_list = chillax.sort(my_list)`}</code>
              <br />
              <code>{`print(sorted_list)`}</code>
              <br />
              <br />
              <code className="text-zinc-500">{`#No predefined "explainSorting" exists...`}</code>
              <br />
              <code className="text-zinc-500">{`#But you can just call it anyway 👇`}</code>
              <br />
              <code>{`print(chillax.explainSorting("quick sort"))`}</code>
              <br />
              <br />
              <code className="text-zinc-500">{`#Or invent your own creative function names`}</code>
              <br />
              <code>{`print(chillax.debugMyCode("def add(a,b): return a-b", "Python"))`}</code>
              <br />
              <code>{`print(chillax.writePoem("about vibecoding"))`}</code>
              <br />
              <code>{`print(chillax.createPlaylist("lofi coding beats"))`}</code>
              <br />
              <code>{`chillax.translateFrenchToEnglish("Je suis Inde")`}</code>
              <br />
            </pre>
          </div>
          <p className="text-xs text-zinc-500 mt-3">
            Note: The function names are entirely up to your creativity, you can call anything you like, and Chillax will try to handle it.
          </p>
        </section>

        {/* Screenshots */}
        <section className="mt-12">
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold">Screenshots</h3>
            <p className="mt-2 text-zinc-400">A couple of example views showing Chillax usage and output formatting.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/chillax1.png"
                  alt="Chillax terminal usage example: asking Gemini a question"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/chillax2.png"
                  alt="Chillax Python code snippet and response preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mt-12 flex flex-wrap gap-3">
          <a href="https://pypi.org/project/Chillax/" target="_blank" rel="noreferrer" className="hoverable">
            <Button className="gap-2 bg-emerald-500 hover:bg-emerald-800 text-black hover:text-zinc-300">
              <ExternalLink className="h-4 w-4" />
              PyPI Package
            </Button>
          </a>
          <a href="https://github.com/yourname/chillax" target="_blank" rel="noreferrer" className="hoverable">
            <Button
              variant="outline"
              className="gap-2 border-zinc-700 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 bg-transparent"
            >
              <Github className="h-4 w-4" />
              GitHub Repo
            </Button>
          </a>
        </section>

        {/* Final section explaining why this page exists */}
        <section className="mt-10">
          <p className="text-sm text-zinc-500 leading-relaxed">
            This page exists to document and showcase my published Python package, Chillax, which wraps the Gemini API
            to provide concise answers with a minimal Pythonic interface. It’s part of my portfolio to highlight
            shipped, installable work on PyPI and give you a quick way to evaluate the package with setup and a
            copy‑pasteable example.
          </p>
        </section>
      </main>
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
