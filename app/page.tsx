"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Heart, Zap, GraduationCap, Coffee, Music, Trophy, Menu, X } from "lucide-react"
import { Hero3D } from "./components/hero-3d"
import { FloatingElements } from "./components/floating-elements"
import { ParticleBackground } from "./components/particle-background"
import { Loader } from "./components/loader"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function GymkhanaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name.trim() || !formData.message.trim()) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    setIsSubmitting(true)

    try {
      // Create submission object with timestamp
      const submission = {
        id: Date.now(),
        name: formData.name.trim(),
        message: formData.message.trim(),
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      }

      // Get existing submissions from localStorage
      const existingSubmissions = JSON.parse(localStorage.getItem("gymkhana-submissions") || "[]")

      // Add new submission
      const updatedSubmissions = [submission, ...existingSubmissions]

      // Store in localStorage
      localStorage.setItem("gymkhana-submissions", JSON.stringify(updatedSubmissions))

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus("success")
      setFormData({ name: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const candidates = [
    {
      id: 1,
      name: "Arjun Sharma",
      position: "President",
      positionAbbr: "PRESIDENT",
      party: "Unity Alliance",
      image: "/candidate-sarah.png",
      description:
        "Final year Computer Science student with extensive student leadership experience. Led successful campaigns for better hostel facilities, improved campus Wi-Fi, and extended library hours. Former head of the Technical Society with a track record of organizing major tech fests and hackathons.",
      achievements: ["Tech Fest Organizer", "Hostel Welfare Champion", "Digital Innovation Leader"],
      color: "from-yellow-500 to-amber-600",
      featured: true,
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Vice President",
      positionAbbr: "VICE PRESI",
      party: "Unity Alliance",
      image: "/candidate-michael.png",
      description:
        "Business Administration student and former Cultural Secretary. Successfully organized inter-college festivals and improved student engagement significantly. Passionate about mental health awareness and creating inclusive campus environments for all students.",
      achievements: ["Cultural Event Leader", "Mental Health Advocate", "Inclusion Champion"],
      color: "from-amber-500 to-yellow-600",
      keyPolicies: ["Cultural Activities", "Mental Health", "Inclusive Campus"],
    },
    {
      id: 3,
      name: "Rahul Verma",
      position: "Sports Secretary",
      positionAbbr: "SPORTS SEC",
      party: "Unity Alliance",
      image: "/candidate-emily.png",
      description:
        "Physical Education student and captain of the university cricket team. Led the sports committee to win multiple inter-university championships. Advocate for better sports infrastructure and equal opportunities for all students in athletics.",
      achievements: ["Sports Champion", "Infrastructure Advocate", "Team Leadership"],
      color: "from-yellow-600 to-amber-700",
      keyPolicies: ["Sports Infrastructure", "Athletic Programs", "Fitness Facilities"],
    },
    {
      id: 4,
      name: "Sneha Gupta",
      position: "Cultural Secretary",
      positionAbbr: "CULTURAL SEC",
      party: "Unity Alliance",
      image: "/candidate-james.png",
      description:
        "Fine Arts student and accomplished dancer. Organized numerous cultural events and established partnerships with local artists. Champion of creative expression and arts education, working to make cultural activities accessible to all students.",
      achievements: ["Arts Advocate", "Event Organizer", "Creative Leader"],
      color: "from-amber-600 to-yellow-700",
      keyPolicies: ["Arts Programs", "Cultural Events", "Creative Spaces"],
    },
    {
      id: 5,
      name: "Vikash Kumar",
      position: "General Secretary",
      positionAbbr: "GEN SEC",
      party: "Unity Alliance",
      image: "/candidate-maria.png",
      description:
        "Social Work student with extensive experience in student welfare and community service. Led initiatives that improved campus sustainability and established student support systems. Passionate about academic excellence and student rights.",
      achievements: ["Student Welfare Expert", "Sustainability Leader", "Academic Advocate"],
      color: "from-yellow-700 to-amber-800",
      keyPolicies: ["Student Rights", "Campus Sustainability", "Academic Support"],
    },
  ]

  const manifestoPoints = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Enhanced learning resources, extended library hours, and improved study spaces for all students.",
      details: "24/7 library access, more study rooms, and better academic support systems.",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Campus Life Enhancement",
      description: "Better dining options, improved hostel facilities, and enhanced campus infrastructure.",
      details: "Upgraded mess facilities, better hostel amenities, and improved campus connectivity.",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Sports & Recreation",
      description: "World-class sports facilities, more recreational activities, and support for athletic excellence.",
      details: "New sports complex, equipment upgrades, and increased sports scholarships.",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Cultural Development",
      description: "Vibrant cultural scene with more events, better venues, and support for artistic talents.",
      details: "New auditorium, cultural grants, and regular artist workshops and performances.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Student Welfare",
      description: "Comprehensive health services, mental health support, and student assistance programs.",
      details: "24/7 medical facility, counseling services, and emergency student support fund.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Innovation",
      description: "High-speed campus-wide Wi-Fi, digital learning platforms, and tech-enabled services.",
      details: "Fiber optic internet, online course platforms, and digital student services portal.",
    },
  ]

  if (isLoading) {
    return <Loader onFinish={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="pointer-events-none">
        <ParticleBackground />
        <FloatingElements />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-black/90 backdrop-blur-xl border-b border-yellow-500/30 shadow-2xl"
            : "bg-black/20 backdrop-blur-md border-b border-yellow-500/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q0HE3nOScaGXI7LqUBCYH8K6cxFSQu.png"
                  alt="NIT Durgapur"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y18oe7768P4MmudObrbaiXTlz4aXpl.png"
                  alt="Students' Gymkhana"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Students' Gymkhana
                </h1>
                <p className="text-sm text-gray-400 -mt-1">NIT Durgapur</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Manifesto", "Candidates", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group hover:scale-110"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 transition-all duration-300 hover:scale-110 hover:rotate-180"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-yellow-500/20 animate-in slide-in-from-top duration-300">
              <nav className="flex flex-col space-y-2">
                {["Manifesto", "Candidates", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-yellow-500/10 hover:scale-105"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Hero3D />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 animate-in fade-in duration-1000">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-500">
                Students' Gymkhana Elections 2025
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-300">
                Shape the future of NIT Durgapur with your vote. Meet the candidates who will lead our student
                community.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom duration-1000 delay-500">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <a href="#candidates">Meet the Candidates</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-transparent"
              >
                <a href="#manifesto">Read Manifesto</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in duration-1000">
            <div className="inline-flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-yellow-400 animate-pulse" />
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
                Campus Vision
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive plan to transform NIT Durgapur into a world-class institution that prioritizes student
              welfare, academic excellence, and holistic development.
            </p>
            <div className="mt-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-full border border-yellow-500/30 text-yellow-400 font-semibold hover:scale-110 transition-transform duration-300 cursor-pointer">
                Our Commitment
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {manifestoPoints.map((point, index) => (
              <Card
                key={index}
                className="accenture-card group hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center text-yellow-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {point.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed">{point.description}</CardDescription>
                  <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <p className="text-sm text-yellow-200 font-medium">{point.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Full Manifesto
            </Button>
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section id="candidates" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in duration-1000">
            <div className="inline-flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-yellow-400 animate-bounce" />
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-500">
                Student Leaders
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who are ready to serve and lead our student community with passion,
              integrity, and vision.
            </p>
            <div className="mt-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-full border border-yellow-500/30 text-yellow-400 font-semibold hover:scale-110 transition-transform duration-300 cursor-pointer">
                Leadership Team
              </span>
            </div>
          </div>

          <div className="mb-12 animate-in slide-in-from-left duration-1000">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-white mb-8 tracking-wider hover:text-yellow-400 transition-colors duration-300">
                  PRESIDENT
                </h3>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-64 h-64 mx-auto lg:mx-0 rounded-3xl overflow-hidden border-4 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:scale-105">
                    <Image
                      src="/candidate-sarah.png"
                      alt="Arjun Sharma"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-3xl font-bold text-yellow-400 mb-2 hover:scale-105 transition-transform duration-300">
                      Arjun Sharma
                    </h4>
                    <p className="text-gray-400 mb-6 text-lg">President</p>
                    <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                      Final year Computer Science student with extensive student leadership experience. Led successful
                      campaigns for better hostel facilities, improved campus Wi-Fi, and extended library hours. Former
                      head of the Technical Society with a track record of organizing major tech fests and hackathons.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <span className="px-6 py-3 bg-yellow-500/20 text-yellow-300 rounded-full font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                        Tech Fest Organizer
                      </span>
                      <span className="px-6 py-3 bg-yellow-500/20 text-yellow-300 rounded-full font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                        Hostel Welfare Champion
                      </span>
                      <span className="px-6 py-3 bg-yellow-500/20 text-yellow-300 rounded-full font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                        Digital Innovation Leader
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Vice President */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 animate-in slide-in-from-bottom duration-1000 delay-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-wider hover:text-yellow-400 transition-colors duration-300">
                  VICE PRESI
                </h3>
                <div className="w-32 h-32 mx-auto mb-6 rounded-3xl overflow-hidden border-4 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:scale-110">
                  <Image
                    src="/candidate-michael.png"
                    alt="Priya Patel"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 hover:scale-105 transition-transform duration-300">
                  Priya Patel
                </h4>
                <p className="text-gray-400 mb-4">Vice President</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    Cultural Event Leader
                  </span>
                  <span className="px-3 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    Mental Health Advocate
                  </span>
                </div>
              </div>
            </div>

            {/* Sports Secretary */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 animate-in slide-in-from-bottom duration-1000 delay-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-wider hover:text-yellow-400 transition-colors duration-300">
                  SPORTS SEC
                </h3>
                <div className="w-32 h-32 mx-auto mb-6 rounded-3xl overflow-hidden border-4 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:scale-110">
                  <Image
                    src="/candidate-emily.png"
                    alt="Rahul Verma"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 hover:scale-105 transition-transform duration-300">
                  Rahul Verma
                </h4>
                <p className="text-gray-400 mb-4">Sports Secretary</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    Sports Champion
                  </span>
                  <span className="px-3 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    Team Leadership
                  </span>
                </div>
              </div>
            </div>

            {/* Cultural Secretary */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 animate-in slide-in-from-bottom duration-1000 delay-400">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-wider hover:text-yellow-400 transition-colors duration-300">
                  CULTURAL SEC
                </h3>
                <div className="w-32 h-32 mx-auto mb-6 rounded-3xl overflow-hidden border-4 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:scale-110">
                  <Image
                    src="/candidate-james.png"
                    alt="Sneha Gupta"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 hover:scale-105 transition-transform duration-300">
                  Sneha Gupta
                </h4>
                <p className="text-gray-400 mb-4">Cultural Secretary</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    Arts Advocate
                  </span>
                  <span className="px-3 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    Event Organizer
                  </span>
                </div>
              </div>
            </div>

            {/* General Secretary */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 animate-in slide-in-from-bottom duration-1000 delay-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-wider hover:text-yellow-400 transition-colors duration-300">
                  GEN SEC
                </h3>
                <div className="w-32 h-32 mx-auto mb-6 rounded-3xl overflow-hidden border-4 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:scale-110">
                  <Image
                    src="/candidate-maria.png"
                    alt="Vikash Kumar"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 hover:scale-105 transition-transform duration-300">
                  Vikash Kumar
                </h4>
                <p className="text-gray-400 mb-4">General Secretary</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    Student Welfare Expert
                  </span>
                  <span className="px-3 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    Academic Advocate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-8 animate-in slide-in-from-left duration-1000">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-500">
                  Let's Talk
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Send us your questions or suggestions through this form.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 hover:border-yellow-500/50"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none hover:border-yellow-500/50"
                    placeholder="Write your question here"
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg animate-in slide-in-from-top duration-300">
                    <p className="text-green-300 text-sm">✅ Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg animate-in slide-in-from-top duration-300">
                    <p className="text-red-300 text-sm">❌ Please fill in all fields correctly.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold py-4 rounded-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit now →<span className="ml-2">✨</span>
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-in slide-in-from-right duration-1000">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">@</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors duration-300">
                    SEND US A MESSAGE
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Feel free to reach out through the contact form or find our contact information below. Your feedback,
                  questions, and suggestions are important to us as we strive to provide exceptional service to our
                  university community.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                      <span className="text-xl">@</span>
                    </div>
                    <div>
                      <p className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300">
                        standtogether@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                      <span className="text-xl">📍</span>
                    </div>
                    <div className="text-gray-300">
                      <p className="font-semibold text-white mb-1 hover:text-yellow-400 transition-colors duration-300">
                        National Institute of Technology Durgapur
                      </p>
                      <p className="text-sm">Mahatma Gandhi Avenue,</p>
                      <p className="text-sm">Durgapur,</p>
                      <p className="text-sm">West Bengal 713209,</p>
                      <p className="text-sm">India.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q0HE3nOScaGXI7LqUBCYH8K6cxFSQu.png"
                  alt="NIT Durgapur"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain hover:rotate-12 transition-transform duration-300"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y18oe7768P4MmudObrbaiXTlz4aXpl.png"
                  alt="Students' Gymkhana"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white hover:text-yellow-400 transition-colors duration-300">
                  Official Student Body
                </h3>
                <p className="text-sm text-gray-400">NIT Durgapur</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                © 2024 Gymkhana NITDGP. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
