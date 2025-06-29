"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Github, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div
          className={cn(
            "flex flex-col justify-center space-y-6 transition-all duration-700 md:order-1",
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0",
          )}
        >
          <h1 className="font-space text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Designing Tomorrow with <span className="gradient-text">MERN</span>
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            MERN & Web Developer crafting innovative solutions for complex problems
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="glow-border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <a href="#contact">Get in touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-blue-500/50 hover:bg-blue-500/10"
            >
              <a href="#portfolio">View Projects</a>
            </Button>
          </div>
          <div className="flex flex-col gap-4 pt-4">
            {/* First Line */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/abhisekpanda2003"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-blue-500 hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhisekpanda2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-blue-500 hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/abhisek2004"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-blue-500 hover:text-primary-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/abhisekpanda2003/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-pink-500 hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.418.27-3.356 1.208-.938.938-1.15 2.075-1.208 3.356-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.27 2.418 1.208 3.356.938.938 2.075 1.15 3.356 1.208 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.418-.27 3.356-1.208.938-.938 1.15-2.075 1.208-3.356.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.27-2.418-1.208-3.356-.938-.938-2.075-1.15-3.356-1.208-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>

            {/* Second Line */}
            <div className="flex gap-4">
              <a
                href="https://leetcode.com/u/abhisekpanda/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-yellow-500 hover:text-primary-foreground"
                aria-label="LeetCode"
              >
                <img src="/icons/leetcode.svg" alt="LeetCode" className="h-5 w-5" />
              </a>
              <a
                href="https://www.naukri.com/code360/profile/abhisekpanda"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-orange-500 hover:text-primary-foreground"
                aria-label="Coding Ninjas"
              >
                <img src="/icons/codingninjas.svg" alt="Coding Ninjas" className="h-5 w-5" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/abhisekpandat6a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-green-500 hover:text-primary-foreground"
                aria-label="GeeksforGeeks"
              >
                <img src="/icons/gfg.svg" alt="GeeksforGeeks" className="h-5 w-5" />
              </a>
              <a
                href="https://codolio.com/profile/abhisek2004"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-blue-500 hover:text-primary-foreground"
                aria-label="Codolio"
              >
                <img src="/icons/codolio.svg" alt="Codolio" className="h-5 w-5" />
              </a>
            </div>

            {/* Third Line */}
            <div className="flex gap-4">
              <a
                href="https://www.hackerrank.com/profile/abhisekpanda"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-green-500 hover:text-primary-foreground"
                aria-label="HackerRank"
              >
                <img src="/icons/hackerrank.svg" alt="HackerRank" className="h-5 w-5" />
              </a>
              <a
                href="https://monkeytype.com/profile/abhisek2004"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-gray-500 hover:text-primary-foreground"
                aria-label="Monkeytype"
              >
                <img src="/icons/monkeytype.png" alt="Monkeytype" className="h-5 w-5" />
              </a>
              <a
                href="https://dev.to/abhisek_panda"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-black hover:text-primary-foreground"
                aria-label="Dev Community"
              >
                <img src="/icons/dev.svg" alt="Dev Community" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex items-center justify-center transition-all duration-700 floating",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
          )}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-xl"></div>
            <div className="relative overflow-hidden rounded-full border-2 border-blue-500/50 bg-card p-2">
              <img
                src="/images/profile.jpg"
                alt="Abhisek Panda"
                className="h-120 w-120 rounded-full object-cover md:h-96 md:w-96"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center justify-center text-muted-foreground"
      >
        <span className="mb-1 text-sm">Scroll</span>
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  )
}

export default Hero

