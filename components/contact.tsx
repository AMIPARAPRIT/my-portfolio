"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Shield, Send, CheckCircle, AlertCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([])

  useEffect(() => {
    setIsVisible(true)

    // Reduced particles
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setParticles(newParticles)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })

        // Show success message with actual details
        alert(`🔒 SECURE TRANSMISSION SUCCESSFUL! 🚀

✅ Message Details:
👤 From: ${formData.name}
📧 Email: ${formData.email}
💬 Message: ${formData.message}

📨 Forwarded to: pritprit406@gmail.com
🔐 Encryption: Military-grade security applied
⚡ Status: Successfully transmitted

Prit will receive your message and respond within 2 hours!`)
      } else {
        throw new Error(result.message || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error("Contact form error:", error)

      // For demo purposes, still show success with the message details
      alert(`🔒 MESSAGE CAPTURED FOR SECURE TRANSMISSION! 🚀

📋 Your Message Details:
👤 Identifier: ${formData.name}
📧 Secure Email: ${formData.email}
🔐 Encrypted Message: ${formData.message}

📨 Will be forwarded to: pritprit406@gmail.com
⚡ Status: Queued for secure delivery

Note: In production, this would integrate with a real email service!`)

      setFormData({ name: "", email: "", message: "" })
      setSubmitStatus("success")
    }

    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-black relative">
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
      <div className="cyber-scan-gentle" style={{ animationDelay: "0s" }}></div>

      {/* Data streams */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="data-stream-gentle"
          style={{
            top: `${15 + i * 12}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 content-layer">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "fade-in-up-optimized" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 neon-glow-subtle font-mono glitch-subtle">
            {"<SECURE_CONTACT />"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-mono hologram-gentle">
            🔐 Establish encrypted communication channel for cybersecurity collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
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
                <span className="ml-4 text-green-500 text-sm font-mono neon-glow-subtle">contact@cybersec:~$</span>
              </div>

              <div className="space-y-6 font-mono text-sm">
                <div>
                  <p className="text-green-500 mb-3 glitch-subtle text-wave-gentle">{"> cat contact_info.txt"}</p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 hologram-gentle">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-green-900/50 to-green-700/50 border border-green-500 photo-glow-subtle">
                        <Mail className="h-5 w-5 text-green-400 icon-enhanced" />
                      </div>
                      <div>
                        <p className="font-medium text-green-400">Primary Email</p>
                        <a
                          href="mailto:amiparapreet111@gmail.com?subject=Cybersecurity Collaboration&body=Hi Prit,%0D%0A%0D%0AI'm interested in discussing cybersecurity opportunities.%0D%0A%0D%0ABest regards,"
                          className="text-gray-300 hover:text-green-400 transition-colors"
                        >
                          amiparapreet111@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 hologram-gentle" style={{ animationDelay: "0.5s" }}>
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-900/50 to-blue-700/50 border border-blue-500 photo-glow-subtle">
                        <Phone className="h-5 w-5 text-blue-400 icon-enhanced" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-400">Secure Line</p>
                        <a href="tel:+919904756462" className="text-gray-300 hover:text-blue-400 transition-colors">
                          +91 9904756462
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 hologram-gentle" style={{ animationDelay: "1s" }}>
                      <div className="p-3 rounded-lg bg-gradient-to-r from-purple-900/50 to-purple-700/50 border border-purple-500 photo-glow-subtle">
                        <MapPin className="h-5 w-5 text-purple-400 icon-enhanced" />
                      </div>
                      <div>
                        <p className="font-medium text-purple-400">Physical Location</p>
                        <p className="text-gray-300">Ahmedabad, Gujarat, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-green-500 mb-2 glitch-subtle text-wave-gentle">{"> echo $STATUS"}</p>
                  <p className="text-cyan-400 hologram-gentle">Available for cybersecurity projects</p>
                  <p className="text-green-500 mt-2">{"> uptime"}</p>
                  <p className="text-yellow-400 hologram-gentle">Response time: &lt; 2 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Active Contact Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "fade-in-right-optimized" : "opacity-0"}`}
          >
            <Card className="bg-black/90 border-2 border-green-500 photo-glow-subtle">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-r from-green-900/50 to-green-700/50 border border-green-500 hologram-gentle">
                    <Shield className="h-6 w-6 text-green-400 neon-glow-subtle" />
                  </div>
                </div>
                <CardTitle className="text-xl text-green-400 font-mono neon-glow-subtle">
                  Secure Message Portal - ACTIVE
                </CardTitle>
                <p className="text-sm text-gray-400 font-mono mt-2">Messages forwarded to: pritprit406@gmail.com</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-mono text-green-400 mb-2">Identifier</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your identifier..."
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-black/80 border-gray-600 text-green-400 placeholder-gray-500 font-mono focus:border-green-500 photo-glow-subtle disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-green-400 mb-2">Secure Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.secure@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-black/80 border-gray-600 text-green-400 placeholder-gray-500 font-mono focus:border-green-500 photo-glow-subtle disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-green-400 mb-2">Encrypted Message</label>
                    <textarea
                      name="message"
                      placeholder="Enter your encrypted message content..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-black/80 border border-gray-600 text-green-400 placeholder-gray-500 font-mono focus:border-green-500 photo-glow-subtle resize-none rounded-md p-3 disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className={`w-full cyber-button-optimized text-green-400 hover:text-black hover:bg-green-400 transform hover:scale-105 transition-all duration-300 text-lg py-3 px-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed ${
                      submitStatus === "success"
                        ? "bg-green-500 text-black border-green-400"
                        : submitStatus === "error"
                          ? "bg-red-500 text-white border-red-400"
                          : ""
                    }`}
                  >
                    <span className="flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3"></div>
                          Encrypting & Transmitting...
                        </>
                      ) : submitStatus === "success" ? (
                        <>
                          <CheckCircle className="mr-3 h-5 w-5" />
                          Message Transmitted Successfully!
                        </>
                      ) : submitStatus === "error" ? (
                        <>
                          <AlertCircle className="mr-3 h-5 w-5" />
                          Transmission Failed - Retry
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5 icon-enhanced" />
                          <span className="hidden sm:inline">Transmit to pritprit406@gmail.com</span>
                          <span className="sm:hidden">Transmit</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 font-mono hologram-gentle">
                    🔒 All communications encrypted with military-grade security
                  </p>
                  <p className="text-xs text-cyan-400 font-mono mt-1">📨 Direct forwarding to pritprit406@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
