"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Terminal, Wifi, Lock, Eye, Zap, Bug, Server } from "lucide-react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([])
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => {
            setAnimatedSkills([95, 88, 92, 85, 90, 87])
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Reduced particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
    }))
    setParticles(newParticles)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "🛡️ Security Tools",
      skills: ["Nmap", "Metasploit", "Burp Suite", "Wireshark", "Nessus", "OWASP ZAP", "Kali Linux", "John the Ripper"],
      icon: Shield,
      color: "border-red-500",
      bgColor: "from-red-900/20 to-red-700/20",
    },
    {
      title: "💻 Programming",
      skills: ["Python", "Bash", "PowerShell", "C++", "JavaScript", "SQL", "Assembly", "Go"],
      icon: Terminal,
      color: "border-green-500",
      bgColor: "from-green-900/20 to-green-700/20",
    },
    {
      title: "🔧 Frameworks & OS",
      skills: ["NIST", "ISO 27001", "MITRE ATT&CK", "Linux", "Windows", "VMware", "Docker", "AWS Security"],
      icon: Server,
      color: "border-blue-500",
      bgColor: "from-blue-900/20 to-blue-700/20",
    },
  ]

  const expertiseAreas = [
    { skill: "🔓 Penetration Testing", level: 95, color: "stroke-red-400", icon: Lock },
    { skill: "🛡️ Network Security", level: 88, color: "stroke-green-400", icon: Wifi },
    { skill: "🔍 Malware Analysis", level: 92, color: "stroke-blue-400", icon: Bug },
    { skill: "🕵️ Digital Forensics", level: 85, color: "stroke-yellow-400", icon: Eye },
    { skill: "⚡ Incident Response", level: 90, color: "stroke-purple-400", icon: Zap },
    { skill: "🖥️ System Security", level: 87, color: "stroke-cyan-400", icon: Server },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-black relative">
      {/* Fixed Background Elements */}
      <div className="background-elements">
        <div className="cyber-grid-gentle opacity-15"></div>
      </div>

      {/* Particle system */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle-optimized"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Scanning lines */}
      <div className="cyber-scan-gentle" style={{ animationDelay: "2s" }}></div>

      {/* Data streams */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="data-stream-gentle"
          style={{
            top: `${10 + i * 10}%`,
            animationDelay: `${i * 0.6}s`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 content-layer">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "fade-in-up-optimized" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 neon-glow-subtle font-mono glitch-subtle">
            {"<TECHNICAL_ARSENAL />"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono hologram-gentle">
            🚀 Advanced cybersecurity tools and technologies for comprehensive digital defense.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group bg-gradient-to-br ${category.bgColor} ${category.color} border-2 backdrop-blur-sm overflow-hidden hover:scale-102 transition-all duration-500 photo-glow-subtle ${
                isVisible ? "scale-in-optimized" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-black/80 border border-gray-600 flex items-center justify-center hologram-gentle photo-glow-subtle">
                  <category.icon className="h-8 w-8 text-green-400 icon-enhanced neon-glow-subtle" />
                </div>
                <CardTitle className="text-xl text-green-400 font-mono group-hover:neon-glow-subtle transition-all duration-300 glitch-subtle">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-sm border border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400 transition-all duration-300 transform hover:scale-105 cursor-default font-mono photo-glow-subtle hologram-gentle"
                      style={{ animationDelay: `${500 + skillIndex * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise levels */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? "fade-in-up-optimized" : "opacity-0"}`}>
          <h3 className="text-3xl font-semibold text-center mb-10 text-green-400 font-mono neon-glow-subtle glitch-subtle">
            {"> EXPERTISE_MATRIX.exe"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {expertiseAreas.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-4">
                  <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-gray-700"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - (animatedSkills[index] || 0) / 100)}`}
                      className={`transition-all duration-2000 ease-out ${item.color} photo-glow-subtle`}
                      style={{
                        animationDelay: `${1000 + index * 200}ms`,
                        filter: "drop-shadow(0 0 5px currentColor)",
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <item.icon className="h-6 w-6 text-green-400 mx-auto mb-1 icon-enhanced" />
                      <span className="text-lg font-bold text-green-400 font-mono neon-glow-subtle">
                        {animatedSkills[index] || 0}%
                      </span>
                    </div>
                  </div>
                </div>
                <p className="font-medium text-gray-300 font-mono hologram-gentle">{item.skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal command output */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "fade-in-up-optimized" : "opacity-0"}`}
        >
          <div className="terminal-window-optimized p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full particle-float"></div>
                <div
                  className="w-3 h-3 bg-yellow-500 rounded-full particle-float"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-green-500 rounded-full particle-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <span className="ml-4 text-green-500 text-sm font-mono neon-glow-subtle">skills@cybersec:~$</span>
            </div>
            <div className="text-left font-mono text-sm space-y-2">
              <p className="text-green-500 glitch-subtle text-wave-gentle">{"> ./scan_capabilities.sh"}</p>
              <p className="text-cyan-400 hologram-gentle">🔍 Scanning security capabilities...</p>
              <p className="text-yellow-400 hologram-gentle">✅ Penetration Testing: EXPERT LEVEL</p>
              <p className="text-yellow-400 hologram-gentle">✅ Network Security: ADVANCED</p>
              <p className="text-yellow-400 hologram-gentle">✅ Malware Analysis: EXPERT LEVEL</p>
              <p className="text-yellow-400 hologram-gentle">✅ Digital Forensics: ADVANCED</p>
              <p className="text-green-500 mt-3 neon-glow-subtle">🚀 All systems operational!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
