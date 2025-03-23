"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2 } from "lucide-react"
import { useForm } from "@formspree/react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false)
  //     setIsSubmitted(true)

  //     // Reset form after 3 seconds
  //     setTimeout(() => {
  //       setIsSubmitted(false)
  //     }, 3000)
  //   }, 1500)
  //}

  const [state, handleSubmit] = useForm("xknkrewb")

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-8">
          <h3 className="mb-1 text-xl font-bold">Let's talk</h3>
          <p className="mb-6 text-zinc-400">Fill out the form and I'll get back to you as soon as possible.</p>

          {state.succeeded ? (
            <div className="rounded-lg bg-emerald-500/10 p-4 text-emerald-500">
              Thanks for your message! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input 
                  name="name"
                  placeholder="Your name"
                  required
                  className="border-zinc-800 bg-zinc-950 focus-visible:ring-emerald-500 hoverable"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="border-zinc-800 bg-zinc-950 focus-visible:ring-emerald-500 hoverable"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Your message"
                  required
                  className="min-h-[120px] border-zinc-800 bg-zinc-950 focus-visible:ring-emerald-500 hoverable"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 hoverable"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-purple-500/20" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=600')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-zinc-900/60" />

          <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 rounded-full bg-zinc-800/50 p-3">
              <Send className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Contact Information</h3>
            <p className="mb-6 text-zinc-400">Let’s cook up something epic together!</p>
            <div className="space-y-2 text-zinc-400">
              <p>gowthamjega2005@gmail.com</p>
              <p>+91 63810-86995</p>
              <p>Chennai, TamilNadu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

