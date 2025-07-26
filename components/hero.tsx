"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowDown, Shield, Lock, Eye, Brain, Radar, Zap } from "lucide-react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; char: string; left: number; delay: number }>>([])
  const [particles, setParticles] = useState<
    Array<{ id: number; left: number; top: number; delay: number; duration: number }>
  >([])
  const [orbitingIcons, setOrbitingIcons] = useState<
    Array<{ id: number; icon: any; delay: number; feature: string; color: string }>
  >([])

  const fullText = "B.Tech CSE | Cybersecurity Specialist | AI Security Expert"

  useEffect(() => {
    setIsLoaded(true)

    // Typing animation
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)

    // Check if window is available (client-side)
    const isClient = typeof window !== "undefined"

    // Reduced matrix rain for mobile performance
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-="
    const matrixCount = isClient && window.innerWidth < 768 ? 15 : 30
    const newMatrixChars = Array.from({ length: matrixCount }, (_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      left: Math.random() * 100,
      delay: Math.random() * 8,
    }))
    setMatrixChars(newMatrixChars)

    // Reduced particles for mobile
    const particleCount = isClient && window.innerWidth < 768 ? 8 : 15
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 2,
    }))
    setParticles(newParticles)

    // 6 orbiting cybersecurity icons - responsive sizing
    const securityFeatures = [
      { icon: Shield, feature: "Network Defense", color: "text-green-400" },
      { icon: Lock, feature: "Encryption", color: "text-blue-400" },
      { icon: Eye, feature: "Threat Detection", color: "text-red-400" },
      { icon: Brain, feature: "AI Security", color: "text-cyan-400" },
      { icon: Radar, feature: "Network Scan", color: "text-yellow-400" },
      { icon: Zap, feature: "Real-time Analysis", color: "text-purple-400" },
    ]

    const newOrbitingIcons = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      icon: securityFeatures[i].icon,
      feature: securityFeatures[i].feature,
      color: securityFeatures[i].color,
      delay: 0,
    }))
    setOrbitingIcons(newOrbitingIcons)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleResumeDownload = () => {
    const resumeContent = `
🔒 PRIT AMIPARA - CYBERSECURITY STUDENT 🔒

📞 CONTACT:
Phone: +91 9904756462
Email: amiparapreet111@gmail.com
Address: Nikol, Ahmedabad, Gujarat, India-382350

🎓 EDUCATION:
• Higher Secondary Education (2021-2023)
  The School of Science, Rajkot - Science Stream (A)
  
• Bachelor of Technology (2023-2027)
  Institute of Advanced Research, Gandhinagar

💻 TECHNICAL SKILLS:
• Programming: Java, Python, C, C++, Node.js
• Security: Cryptography, Ethical Hacking & Digital Forensics
• Web Development: HTML, CSS, JavaScript
• Database: Oracle SQL
• Operating Systems: Kali Linux
• Cybersecurity Concepts & Network Security

🏆 CERTIFICATIONS:
• DBMS Course – Master the Fundamentals and Advanced Concepts (Mar 2025)
• Career in Ethical Hacking / Cybersecurity Webinar (Mar 2025)
• Introduction to Programming Using Python (Mar 2025)
• SQL Certification (Feb 2025)

🚀 PROJECTS:
• AI-Based Fraud Detection System
  Built intelligent fraud detection using machine learning to identify 
  suspicious transactions. Applied supervised learning techniques and data analysis.

• DNA Binary Storage
  Created futuristic data storage solution by encoding binary data into DNA 
  sequences. Focused on error correction, sequence optimization, and long-term durability.

📧 Contact me at amiparapreet111@gmail.com for opportunities!
    `

    alert(resumeContent)

    try {
      const element = document.createElement("a")
      const file = new Blob([resumeContent], { type: "text/plain" })
      element.href = URL.createObjectURL(file)
      element.download = "Prit_Amipara_Resume.txt"
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    } catch (error) {
      console.log("Resume content displayed in alert")
    }
  }

  // Helper function to get responsive values
  const getResponsiveValue = (mobile: number, tablet: number, desktop: number) => {
    if (typeof window === "undefined") return desktop
    if (window.innerWidth < 640) return mobile
    if (window.innerWidth < 1024) return tablet
    return desktop
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-32 bg-black overflow-hidden"
    >
      {/* Fixed Background Elements */}
      <div className="background-elements">
        <div className="cyber-grid-gentle opacity-10 sm:opacity-20"></div>
      </div>

      {/* Matrix rain background - reduced on mobile */}
      <div className="particles-container">
        {matrixChars.map((item) => (
          <div
            key={item.id}
            className="matrix-rain"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.char}
          </div>
        ))}
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
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Scanning lines - reduced on mobile */}
      <div className="cyber-scan-gentle hidden sm:block" style={{ animationDelay: "0s" }}></div>
      <div className="cyber-scan-gentle hidden md:block" style={{ animationDelay: "3s" }}></div>

      {/* Data streams - reduced on mobile */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="data-stream-gentle"
          style={{
            top: `${10 + i * 10}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 content-layer">
        <div className="text-center max-w-6xl mx-auto">
          {/* Responsive Photo with Orbiting Icons */}
          <div
            className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isLoaded ? "scale-in-optimized" : "opacity-0"}`}
          >
            <div className="relative inline-block">
              {/* Main photo container - responsive sizing */}
              <div className="relative flex justify-center items-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-green-500/30 via-cyan-500/30 to-purple-500/30 p-2 sm:p-3 photo-glow-subtle hologram-gentle">
                  <div className="w-full h-full rounded-full bg-black/20 border-2 sm:border-4 border-green-500 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-24%20at%2012.07.09_eb8a3fcd.jpg-z2eVIra9DYcgnoURBQCkyluoETBXLs.jpeg"
                      alt="Prit Amipara - Cybersecurity Specialist"
                      className="w-full h-full object-cover rounded-full filter brightness-110 contrast-110"
                    />
                  </div>
                </div>

                {/* Responsive Orbiting Security Icons */}
                <div className="absolute inset-0 pointer-events-none">
                  {orbitingIcons.map((item, index) => {
                    // Responsive radius based on screen size
                    const radius = getResponsiveValue(100, 130, 200)
                    const angle = (index * 360) / 6
                    const iconSize = "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                    const iconInnerSize = "h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"

                    return (
                      <div
                        key={item.id}
                        className={`absolute top-1/2 left-1/2 ${iconSize}`}
                        style={{
                          transform: `translate(-50%, -50%)`,
                          animation: `orbit-perfect 25s linear infinite`,
                          animationDelay: `0s`,
                        }}
                      >
                        <div
                          className="w-full h-full"
                          style={{
                            transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                          }}
                        >
                          <div className="group relative w-full h-full">
                            <div
                              className={`w-full h-full rounded-full bg-gradient-to-br from-black/90 to-gray-900/90 border-2 sm:border-3 ${item.color.replace("text-", "border-")} flex items-center justify-center photo-glow-subtle backdrop-blur-sm hover:scale-110 transition-all duration-300 shadow-xl`}
                            >
                              <item.icon className={`${iconInnerSize} ${item.color} icon-enhanced drop-shadow-lg`} />
                            </div>
                            {/* Tooltip - hidden on mobile for better UX */}
                            <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 pointer-events-none hidden sm:block">
                              <div className="bg-black/95 border border-green-500 rounded-md px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-green-400 font-mono whitespace-nowrap shadow-xl">
                                {item.feature}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Responsive pulse rings */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div
                    className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border border-green-500/30 animate-ping"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full border border-cyan-500/20 animate-ping"
                    style={{ animationDuration: "4s", animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive terminal introduction */}
          <div
            className={`mb-12 sm:mb-16 md:mb-24 mt-8 sm:mt-12 transition-all duration-1000 delay-300 ${isLoaded ? "fade-in-up-optimized" : "opacity-0"}`}
          >
            <div className="terminal-window-optimized rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 max-w-5xl mx-auto">
              <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
                <div className="flex space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-red-500 rounded-full particle-float"></div>
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-yellow-500 rounded-full particle-float"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-500 rounded-full particle-float"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <span className="ml-3 sm:ml-4 md:ml-6 text-green-500 text-sm sm:text-base md:text-lg font-mono neon-glow-subtle">
                  root@cybersec:~$
                </span>
              </div>
              <div className="text-left space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg">
                <p className="text-green-500 mb-2 sm:mb-3 glitch-subtle text-wave-gentle">{"> whoami"}</p>
                <p className="text-white mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl neon-glow-subtle">Prit_Amipara</p>
                <p className="text-green-500 mb-2 sm:mb-3 glitch-subtle text-wave-gentle">{"> cat profile.txt"}</p>
                <p className="text-cyan-400 text-base sm:text-lg md:text-xl hologram-gentle">
                  🎓 B.Tech Computer Science Engineering
                </p>
                <p className="text-yellow-400 text-base sm:text-lg md:text-xl hologram-gentle">
                  🔒 Specialization: Advanced Cybersecurity
                </p>
                <p className="text-purple-400 text-base sm:text-lg md:text-xl hologram-gentle">
                  🤖 Focus: AI-Powered Security Solutions
                </p>
                <p className="text-green-500 mb-2 sm:mb-3 mt-4 sm:mt-6 glitch-subtle text-wave-gentle">
                  {"> echo $LOCATION"}
                </p>
                <p className="text-purple-400 text-sm sm:text-base md:text-lg">📍 Ahmedabad, Gujarat, India</p>
                <p className="text-green-500 mb-2 sm:mb-3 mt-3 sm:mt-4 glitch-subtle text-wave-gentle">
                  {"> systemctl status security_suite"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-3 sm:mt-4">
                  <p className="text-cyan-400 hologram-gentle text-sm sm:text-base">🛡️ Threat Detection: ACTIVE</p>
                  <p className="text-green-400 hologram-gentle text-sm sm:text-base">🔍 Penetration Testing: READY</p>
                  <p className="text-yellow-400 hologram-gentle text-sm sm:text-base">🚨 Incident Response: STANDBY</p>
                  <p className="text-purple-400 hologram-gentle text-sm sm:text-base">🤖 AI Analysis: LEARNING</p>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive main heading */}
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? "fade-in-up-optimized" : "opacity-0"}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 sm:mb-8 neon-glow-subtle glitch-subtle font-mono leading-tight">
              PRIT<span className="text-cyan-400">AMIPARA</span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? "fade-in-up-optimized" : "opacity-0"}`}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-green-400 mb-8 sm:mb-12 font-mono hologram-gentle leading-tight px-2">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-900 ${isLoaded ? "fade-in-up-optimized" : "opacity-0"}`}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-12 sm:mb-16 max-w-5xl mx-auto leading-relaxed font-mono text-wave-gentle px-4">
              🔐 Pioneering the future of cybersecurity through advanced AI-powered threat detection, quantum-resistant
              encryption, and next-generation digital defense systems. Specializing in zero-trust architecture,
              behavioral analysis, and autonomous security orchestration. 🚀 Building tomorrow's cyber defense today.
            </p>
          </div>

          {/* Responsive CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center mb-12 sm:mb-16 transition-all duration-1000 delay-1100 px-4 ${isLoaded ? "fade-in-up-optimized" : "opacity-0"}`}
          >
            <Button
              size="lg"
              className="cyber-button-optimized rounded-full text-green-400 hover:text-black hover:bg-green-400 transform hover:scale-110 transition-all duration-300 text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 border-2 border-green-500 w-full sm:w-auto"
              onClick={() => {
                alert(
                  "🚀 NEXT-GEN SECURITY ARSENAL LOADING! 🔒\n\n🤖 AI-Powered Threat Intelligence Platform\n🛡️ Quantum-Resistant Encryption Suite\n🔍 Autonomous Penetration Testing Framework\n🚨 Real-time Behavioral Analysis Engine\n🌐 Zero-Trust Network Architecture\n⚡ Blockchain Security Validator\n\n🎯 Revolutionary cybersecurity solutions incoming!",
                )
              }}
            >
              <Shield className="mr-2 sm:mr-3 md:mr-4 h-5 w-5 sm:h-6 sm:w-6 icon-enhanced" />
              <span className="hidden sm:inline">🔥 Launch Security Suite</span>
              <span className="sm:hidden">🔥 Security Suite</span>
            </Button>
            <Button
              size="lg"
              className="cyber-button-optimized rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transform hover:scale-110 transition-all duration-300 bg-transparent text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 w-full sm:w-auto"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 sm:mr-3 md:mr-4 h-5 w-5 sm:h-6 sm:w-6 icon-enhanced" />
              <span className="hidden sm:inline">📄 View Resume</span>
              <span className="sm:hidden">📄 Resume</span>
            </Button>
          </div>

          {/* Responsive social links */}
          <div
            className={`flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 mb-12 sm:mb-16 transition-all duration-1000 delay-1300 px-4 ${isLoaded ? "fade-in-up-optimized" : "opacity-0"}`}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/AMIPARAPRIT",
                color: "hover:text-green-400",
                bg: "hover:bg-green-400/20",
                label: "GitHub",
                display: "AMIPARAPRIT",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/prit-amipara-53515821b",
                color: "hover:text-blue-400",
                bg: "hover:bg-blue-400/20",
                label: "LinkedIn",
                display: "prit-amipara",
              },
              {
                icon: Mail,
                href: "mailto:amiparapreet111@gmail.com?subject=Cybersecurity Collaboration&body=Hi Prit,%0D%0A%0D%0AI'm interested in discussing cybersecurity opportunities.%0D%0A%0D%0ABest regards,",
                color: "hover:text-red-400",
                bg: "hover:bg-red-400/20",
                label: "Email",
                display: "amiparapreet111@gmail.com",
              },
            ].map((social, index) => (
              <div key={index} className="text-center group w-20 sm:w-24">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 rounded-full border-2 sm:border-3 border-gray-600 ${social.color} ${social.bg} transform hover:scale-125 transition-all duration-300 photo-glow-subtle hologram-gentle mb-2 sm:mb-3 mx-auto`}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 icon-enhanced" />
                  </a>
                </Button>
                <p className="text-xs sm:text-sm text-gray-400 font-mono group-hover:text-green-400 transition-colors duration-300 mb-1">
                  {social.label}
                </p>
                <p className="text-xs text-gray-500 font-mono group-hover:text-green-300 transition-colors duration-300 break-all px-1 leading-tight">
                  {typeof window !== "undefined" && window.innerWidth < 640 ? social.label : social.display}
                </p>
              </div>
            ))}
          </div>

          {/* Responsive scroll indicator */}
          <div
            className={`relative transition-all duration-1000 delay-1500 ${isLoaded ? "fade-in-up-optimized" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-12 sm:w-10 sm:h-16 md:w-12 md:h-20 rounded-full border-2 border-green-500 flex justify-center p-1 sm:p-2 mb-3 sm:mb-4 photo-glow-subtle">
                <div className="w-1 h-4 sm:w-2 sm:h-5 md:w-2 md:h-6 bg-green-400 rounded-full animate-bounce"></div>
              </div>
              <button
                onClick={() => scrollToSection("about")}
                className="group flex flex-col items-center hover:scale-110 transition-all duration-300"
              >
                <ArrowDown className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-400 neon-glow-subtle group-hover:animate-bounce" />
                <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1 sm:mt-2 group-hover:text-green-400 transition-colors duration-300 text-center">
                  <span className="hidden sm:inline">Explore Security Arsenal</span>
                  <span className="sm:hidden">Explore</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for perfect orbit animation */}
      <style jsx>{`
        @keyframes orbit-perfect {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
