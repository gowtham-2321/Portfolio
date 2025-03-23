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
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Flask", "Node.js", "REST API", "Cleark Authentication"],
  },
  {
    category: "Deployment-Tools",
    items: ["Git", "VS Code", "Vercel", "Postman API"],
  },
  {
    category: "Programming-Languages",
    items: ["C", "C++", "Python", "SQL", "LaTeX"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX", "Wireframing", "Prototyping", "Davinci Resolve"],
  },
  {
    category: "Soft",
    items: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Leadership"],
  },
  {
    category: "Language",
    items: ["English", "Tamil", "Telugu", "hHindi"],
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
      "- echo: print statements",
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

      let category = args[0]
      category = category.slice(1, -1)
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
      "I'm a passionate UI/UX designer, frontend developer,",
      "and data science enthusiast with a love for cybersecurity.",
      "I create beautiful, functional, and user-centered experiences.",
      "My passion for data science drives me to uncover insights,",
      "bridging aesthetics, functionality, and security in tech.",
      "",
    ],
    contact: () => [
      "Contact Information:",
      "Email: gowthamjega2005@gmail.com",
      "LinkedIn: linkedin.com/in/gowtham-jegathesan",
      "GitHub: github.com/gowtham.2321",
      "Phone No.: +91 63810 86995",
      "",
    ],
    echo: (args: string[]) => {
      return [args.join(" ")]
    },
    dusi: () => [
      "Fuck you!"
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
          <div className="relative flex-1">
            <input
              type="text"
              value={currentLine}
              onChange={(e) => setCurrentLine(e.target.value)}
              onKeyDown={handleKeyDown}
              className="ml-2 w-full bg-transparent text-zinc-300 outline-none hoverable"
              autoFocus
            />
            <span
              className={cn(
                "absolute top-0 left-2 h-full w-2 bg-zinc-300",
                cursorPosition === 0 ? "opacity-0" : "opacity-100",
              )}
              style={{ transform: `translateX(${currentLine.length * 8}px)` }}
            ></span>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 bg-zinc-950 p-2">
        <div className="flex flex-wrap gap-2">
          {["help", "skills", "about", "contact", "clear", "echo"].map((cmd) => (
            <Badge
              key={cmd}
              variant="outline"
              className="cursor-pointer border-zinc-700 text-zinc-400 hover:border-emerald-500 hover:text-emerald-500 hoverable"
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

