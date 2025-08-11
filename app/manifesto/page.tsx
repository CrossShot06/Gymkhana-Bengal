"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, Users, BookOpen, Trophy, Heart, Lightbulb, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { Floating3DElements } from "@/components/floating-3d-elements"

const manifestoPoints = [
  {
    icon: Users,
    title: "Student Welfare & Support",
    description:
      "Establish comprehensive mental health support, improve hostel facilities, and create better study spaces.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Enhance library resources, organize skill development workshops, and improve student-faculty interaction.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Sports & Recreation",
    description: "Upgrade sports facilities, organize inter-college tournaments, and promote fitness activities.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Cultural Development",
    description: "Expand cultural events, support student clubs, and celebrate diversity through festivals.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Entrepreneurship",
    description: "Create startup incubation programs, organize hackathons, and connect students with industry mentors.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Campus Safety & Security",
    description: "Improve campus lighting, enhance security measures, and ensure safe transportation for all students.",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <Floating3DElements />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>

      {/* Header */}
      <header className="bg-gray-800/90 backdrop-blur-md shadow-2xl border-b border-gray-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-purple-400 hover:bg-gray-700/50">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Candidates
              </Button>
            </Link>
            <div className="text-center flex-1">
              <div className="inline-flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Collective Manifesto
                </h1>
              </div>
              <p className="text-lg text-gray-300">United Vision for NIT Durgapur's Future</p>
            </div>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Introduction */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-gray-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Our Shared Vision</h2>
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
                As candidates for the NIT Durgapur Gymkhana, we stand united with a common vision to transform our
                campus into a thriving hub of academic excellence, cultural vibrancy, and student welfare. Our
                collective manifesto represents the shared values and commitments that drive us forward.
              </p>
              <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0 px-4 py-2 text-sm">
                Together We Rise, Together We Succeed
              </Badge>
            </div>
          </div>
        </div>

        {/* Manifesto Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {manifestoPoints.map((point, index) => {
            const IconComponent = point.icon
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{point.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-green-500/5"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Join Our Movement</h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              This manifesto is not just a promise—it's a commitment to action. Together, we will work tirelessly to
              implement these changes and create a better NIT Durgapur for current and future students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/">Meet the Candidates</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-500 text-gray-300 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 font-semibold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
              >
                <a href="https://forms.google.com/dummy-student-issues-form" target="_blank" rel="noopener noreferrer">
                  Share Your Ideas
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950/90 backdrop-blur-md text-white py-10 mt-20 relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-lg">© 2025 NIT Durgapur Gymkhana Elections. United for Progress.</p>
        </div>
      </footer>
    </div>
  )
}
