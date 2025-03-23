"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Skill = {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX", "Wireframing", "Prototyping"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST API", "GraphQL"],
  },
]

export function Terminal() {
  const [text, setText] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const [currentLine, setCurrentLine] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to my interactive terminal!",
    "Type 'help' to see available commands.",
    "",
  ])
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands = {
    help: () => [
      "Available commands:",
      "- skills: List all skill categories",
      "- skills [category]: Show skills in a specific category",
      "- clear: Clear the terminal",
      "- about: About me",
      "- contact: Contact information",
      "",
    ],
    skills: (args: string[]) => {
      if (args.length === 0) {
        return [
          "Skill categories:",
          ...skills.map((skill) => `- ${skill.category}`),
          "Type 'skills [category]' to see specific skills.",
          "",
        ]
      }

      const category = args[0]
      const skillCategory = skills.find((skill) => skill.category.toLowerCase() === category.toLowerCase())

      if (!skillCategory) {
        return [`Category '${category}' not found. Type 'skills' to see available categories.`, ""]
      }

      return [`${skillCategory.category} skills:`, ...skillCategory.items.map((item) => `- ${item}`), ""]
    },
    clear: () => {
      setTimeout(() => {
        setHistory(["Terminal cleared.", ""])
      }, 100)
      return []
    },
    about: () => [
      "About Me:",
      "I'm a passionate UI/UX designer and developer with 5+ years of experience",
      "creating beautiful, functional, and user-centered digital experiences.",
      "My background in both design and development allows me to bridge the gap",
      "between aesthetics and functionality.",
      "",
    ],
    contact: () => [
      "Contact Information:",
      "Email: hello@example.com",
      "LinkedIn: linkedin.com/in/yourname",
      "GitHub: github.com/yourname",
      "",
    ],
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim()
    if (!trimmedCmd) {
      return setHistory([...history, "", ""])
    }

    const [command, ...args] = trimmedCmd.split(" ")

    if (command in commands) {
      const result = commands[command as keyof typeof commands](args)
      setHistory([...history, `> ${trimmedCmd}`, ...result])
    } else {
      setHistory([
        ...history,
        `> ${trimmedCmd}`,
        `Command not found: ${command}. Type 'help' for available commands.`,
        "",
      ])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(currentLine)
      setCurrentLine("")
    }
  }

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorPosition((prev) => (prev === 0 ? 1 : 0))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-lg">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-2">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-zinc-500">skills.terminal</div>
        <div className="text-xs text-zinc-500">bash</div>
      </div>
      <div
        ref={terminalRef}
        className="h-[400px] overflow-y-auto p-4 font-mono text-sm leading-relaxed scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700"
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={cn("whitespace-pre-wrap", line.startsWith(">") ? "text-emerald-500" : "text-zinc-300")}
          >
            {line}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-emerald-500">guest@portfolio:~$</span>
          <input
            type="text"
            value={currentLine}
            onChange={(e) => setCurrentLine(e.target.value)}
            onKeyDown={handleKeyDown}
            className="ml-2 flex-1 bg-transparent text-zinc-300 outline-none"
            autoFocus
          />
          <span className={cn("h-4 w-2 bg-zinc-300", cursorPosition === 0 ? "opacity-0" : "opacity-100")}></span>
        </div>
      </div>
      <div className="border-t border-zinc-800 bg-zinc-950 p-2">
        <div className="flex flex-wrap gap-2">
          {["help", "skills", "about", "contact", "clear"].map((cmd) => (
            <Badge
              key={cmd}
              variant="outline"
              className="cursor-pointer border-zinc-700 text-zinc-400 hover:border-emerald-500 hover:text-emerald-500"
              onClick={() => handleCommand(cmd)}
            >
              {cmd}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

