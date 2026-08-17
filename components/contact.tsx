"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-24 space-y-12 max-w-2xl mx-auto px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-playfair font-bold tracking-tight">Get in Touch</h2>
        <p className="text-muted-foreground font-lora max-w-xl mx-auto text-lg">
          I am currently open to new opportunities. Whether you have a question or want to say hi, send me a message and I'll get back to you.
        </p>
      </div>

      <div className="p-2 bg-black/5 dark:bg-white/5 rounded-[2.25rem]">
        <div className="bg-background border border-border/50 rounded-[1.75rem] p-8 shadow-sm">
          <form action="https://formspree.io/f/xbgrzpzv" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-lora">
                  Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  className="font-lora transition-all bg-black/5 dark:bg-white/5 border-border/50 focus-visible:bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-lora">
                  Email
                </label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  className="font-lora transition-all bg-black/5 dark:bg-white/5 border-border/50 focus-visible:bg-transparent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-lora">
                Message
              </label>
              <Textarea 
                id="message" 
                name="message"
                placeholder="Your message here..." 
                required 
                rows={5}
                className="font-lora resize-none transition-all bg-black/5 dark:bg-white/5 border-border/50 focus-visible:bg-transparent"
              />
            </div>
            <Button type="submit" className="w-full font-lora text-base rounded-full pl-6 pr-2 py-6 bg-primary text-primary-foreground flex items-center justify-between group active:scale-[0.98] transition-transform">
              <span>Send Message</span>
              <div className="w-10 h-10 rounded-full bg-background/20 dark:bg-black/20 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Button>
          </form>
        </div>
      </div>

      <div className="pt-8 border-t border-border/50">
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/sakacyd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sakahayu-pribadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:psakahayu@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.section>
  )
}
