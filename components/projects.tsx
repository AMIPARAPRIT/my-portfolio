"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current conditions, forecasts, and interactive maps using multiple weather APIs.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "AI Chat Application",
      description:
        "An intelligent chat application powered by AI with real-time messaging, file sharing, and smart conversation features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "OpenAI", "WebSocket", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind", "Framer Motion", "MDX"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%22120%22 height%3D%22120%22 viewBox%3D%220 0 120 120%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath d%3D%22M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-2.15 21.906a2 2 0 1 1-3.464 2 2 2 0 0 1 3.464-2M17 33v-2h20v2H17zm21.64-9.094l1.414-1.414L48.196 30.635l-1.414 1.414-8.142-8.143zM39 39h2v20h-2V39zm25.134-.84l-1.732 1 10 17.32 1.732-1-10-17.32zm2.15-21.906a2 2 0 1 1 3.464-2 2 2 0 0 1-3.464 2M83 61v2H63v-2h20zm-21.64 9.094l1.414 1.414L51.804 63.365l-1.414-1.414 8.142 8.143zM61 61h-2V41h2v20zm-25.134.84l1.732-1-10-17.32-1.732 1 10 17.32zm2.15 21.906a2 2 0 1 1 3.464 2 2 2 0 0 1-3.464-2M37 99v2H17v-2h20zm21.64 9.094l1.414 1.414L51.912 117.635l-1.414-1.414 8.142-8.143zM59 99h2V79h-2v20zm25.134.84l-1.732-1 10-17.32 1.732 1-10 17.32zm-2.15-21.906a2 2 0 1 1-3.464-2 2 2 0 0 1 3.464 2M83 37v-2h20v2H83zm21.64-9.094l1.414-1.414L114.196 34.635l-1.414 1.414-8.142-8.143zM105 37h2V17h-2v20zm25.134-.84l-1.732-1 10-17.32 1.732 1-10 17.32zm-2.15-21.906a2 2 0 1 1-3.464-2 2 2 0 0 1 3.464 2%22 fill%3D%22%23a855f7%22 fillOpacity%3D%220.05%22 fillRule%3D%22evenodd%22/%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 hover:scale-105 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    hoveredProject === index ? "backdrop-blur-sm" : ""
                  }`}
                >
                  <div className="flex space-x-4">
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 luxury-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="luxury-button hover:bg-gradient-to-r hover:from-gray-50 hover:to-purple-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <Button
            size="lg"
            variant="outline"
            className="luxury-button hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
