"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, Zap, Users, Bug, Wifi, Database, Server, Cpu } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([])
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

    // Reduced particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setParticles(newParticles)

    return () => observer.disconnect()
  }, [])

  const specializations = [
    {
      icon: Shield,
      title: "🛡️ Network Security",
      description:
        "Advanced firewall configuration, intrusion detection systems, and network monitoring protocols with AI-powered threat analysis.",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-700/20",
      borderColor: "border-green-500",
    },
    {
      icon: Lock,
      title: "🔓 Penetration Testing",
      description:
        "Ethical hacking methodologies, vulnerability assessments, and comprehensive security auditing using cutting-edge tools.",
      color: "text-red-400",
      bgColor: "from-red-900/20 to-red-700/20",
      borderColor: "border-red-500",
    },
    {
      icon: Eye,
      title: "👁️ Threat Intelligence",
      description:
        "Advanced malware analysis, threat hunting, and APT detection using machine learning and behavioral analysis.",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-700/20",
      borderColor: "border-blue-500",
    },
    {
      icon: Zap,
      title: "⚡ Incident Response",
      description:
        "Rapid digital forensics, breach containment, and security incident management with automated response systems.",
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20 to-yellow-700/20",
      borderColor: "border-yellow-500",
    },
    {
      icon: Users,
      title: "👥 Security Awareness",
      description:
        "Comprehensive training programs, phishing simulations, and security culture development initiatives.",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-700/20",
      borderColor: "border-purple-500",
    },
    {
      icon: Bug,
      title: "🐛 Vulnerability Research",
      description:
        "Zero-day discovery, exploit development, and advanced security research methodologies with responsible disclosure.",
      color: "text-cyan-400",
      bgColor: "from-cyan-900/20 to-cyan-700/20",
      borderColor: "border-cyan-500",
    },
  ]

  const techIcons = [Wifi, Database, Server, Cpu]

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-black relative">
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

      {/* Floating tech icons */}
      <div className="particles-container">
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute icon-orbit-slow"
            style={{
              top: `${20 + index * 15}%`,
              left: `${15 + index * 20}%`,
              animationDelay: `${index * 3}s`,
            }}
          >
            <Icon className="h-5 w-5 text-green-400/20 icon-enhanced" />
          </div>
        ))}
      </div>

      {/* Scanning lines */}
      <div className="cyber-scan-gentle" style={{ animationDelay: "1s" }}></div>

      {/* Data streams */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="data-stream-gentle"
          style={{
            top: `${15 + i * 12}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 content-layer">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "fade-in-up-optimized" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 neon-glow-subtle font-mono glitch-subtle">
            {"<SECURITY_PROFILE />"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono hologram-gentle">
            🚀 Cybersecurity student specializing in advanced threat detection and digital defense systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left content - Terminal style */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "fade-in-left-optimized" : "opacity-0"}`}
          >
            <div className="terminal-window-optimized p-4 sm:p-6 md:p-8">
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
                <span className="ml-4 text-green-500 text-sm font-mono neon-glow-subtle">security@terminal:~$</span>
              </div>

              <div className="text-left font-mono text-sm space-y-3">
                <p className="text-green-500 mb-2 glitch-subtle text-wave-gentle">{"> cat about.txt"}</p>
                <p className="text-gray-300 leading-relaxed hologram-gentle">
                  🎯 Passionate cybersecurity student with hands-on experience in penetration testing, network security,
                  and advanced threat analysis. Currently pursuing cutting-edge certifications in ethical hacking and
                  digital forensics.
                </p>

                <p className="text-green-500 mt-4 glitch-subtle text-wave-gentle">{"> ls certifications/"}</p>
                <div className="space-y-1">
                  <p className="text-cyan-400 hologram-gentle">🏆 CompTIA Security+ (In Progress)</p>
                  <p className="text-yellow-400 hologram-gentle">⚡ CEH - Certified Ethical Hacker (In Progress)</p>
                  <p className="text-purple-400 hologram-gentle">🔒 CISSP (In Progress)</p>
                </div>

                <p className="text-green-500 mt-4 glitch-subtle text-wave-gentle">{"> echo $MISSION"}</p>
                <p className="text-yellow-400 neon-glow-subtle">
                  "🚀 Securing the digital world, one vulnerability at a time."
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                { number: "2+", label: "Security Projects", color: "text-green-400", icon: "🛡️" },
                { number: "4+", label: "Years Learning", color: "text-blue-400", icon: "📚" },
                { number: "100%", label: "Ethical Approach", color: "text-red-400", icon: "⚖️" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-2xl font-bold font-mono ${stat.color} neon-glow-subtle hologram-gentle`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Specialization cards */}
          <div className="grid gap-3 sm:gap-4">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className={`group ${spec.borderColor} border-2 bg-gradient-to-r ${spec.bgColor} backdrop-blur-sm hover:scale-102 transition-all duration-500 cursor-pointer photo-glow-subtle ${
                  isVisible ? "fade-in-right-optimized" : "opacity-0"
                }`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-black/50 border ${spec.borderColor} ${activeCard === index ? "photo-glow-subtle hologram-gentle" : ""}`}
                    >
                      <spec.icon className={`h-6 w-6 ${spec.color} icon-enhanced`} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold mb-2 font-mono ${spec.color} ${activeCard === index ? "glitch-subtle neon-glow-subtle" : ""}`}
                      >
                        {spec.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-mono hologram-gentle">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
