"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Crown, Music, Trophy, UserCheck, Mail, Phone, Star, Award } from "lucide-react"
import Link from "next/link"
import { Floating3DElements } from "@/components/floating-3d-elements"

const posts = [
  {
    id: "president",
    title: "President",
    description: "Lead the student body and represent NIT Durgapur",
    icon: Crown,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    candidate: {
      id: "p1",
      name: "Arjun Sharma",
      year: "4th Year",
      branch: "Computer Science Engineering",
      image: "/professional-student-portrait.png",
      tagline: "Leading with Vision, Serving with Passion",
      experience: ["Student Council Member 2023", "Cultural Secretary 2022"],
      contact: { email: "arjun.sharma@student.nitdgp.ac.in", phone: "+91 98765 43210" },
    },
  },
  {
    id: "vice-president",
    title: "Vice President",
    description: "Support the President and assist in student governance",
    icon: UserCheck,
    color: "bg-gradient-to-br from-violet-500 to-purple-500",
    candidate: {
      id: "vp1",
      name: "Priya Patel",
      year: "4th Year",
      branch: "Electrical Engineering",
      image: "/placeholder-0b61c.png",
      tagline: "Empowering Students, Building Tomorrow",
      experience: ["Vice President 2023", "Sports Secretary 2022"],
      contact: { email: "priya.patel@student.nitdgp.ac.in", phone: "+91 98765 43211" },
    },
  },
  {
    id: "general-secretary",
    title: "General Secretary",
    description: "Coordinate all gymkhana activities and operations",
    icon: Users,
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    candidate: {
      id: "gs1",
      name: "Rahul Kumar",
      year: "3rd Year",
      branch: "Mechanical Engineering",
      image: "/placeholder-cppix.png",
      tagline: "Organizing Excellence, Delivering Results",
      experience: ["Joint Secretary 2023", "Event Coordinator 2022"],
      contact: { email: "rahul.kumar@student.nitdgp.ac.in", phone: "+91 98765 43212" },
    },
  },
  {
    id: "ags-cultural",
    title: "Assistant General Secretary Cultural",
    description: "Organize cultural events and festivals",
    icon: Music,
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    candidate: {
      id: "agsc1",
      name: "Vikash Singh",
      year: "3rd Year",
      branch: "Electronics & Communication",
      image: "/placeholder-sj8zg.png",
      tagline: "Celebrating Culture, Creating Memories",
      experience: ["Drama Club President 2023", "Music Society Secretary 2022"],
      contact: { email: "vikash.singh@student.nitdgp.ac.in", phone: "+91 98765 43214" },
    },
  },
  {
    id: "ags-sports",
    title: "Assistant General Secretary Sports",
    description: "Manage sports activities and competitions",
    icon: Trophy,
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    candidate: {
      id: "agss1",
      name: "Anita Rao",
      year: "2nd Year",
      branch: "Chemical Engineering",
      image: "/athletic-female-student.png",
      tagline: "Champions in Sports, Leaders in Life",
      experience: ["Basketball Team Captain 2023", "Sports Committee Member 2022"],
      contact: { email: "anita.rao@student.nitdgp.ac.in", phone: "+91 98765 43215" },
    },
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <Floating3DElements />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>

      {/* Header */}
      <header className="bg-gray-800/90 backdrop-blur-md shadow-2xl border-b border-gray-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                NIT Durgapur
              </h1>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Gymkhana Elections 2025</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Meet your candidates and make an informed choice for the future of our student community
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-yellow-400" />
            <h2 className="text-4xl font-bold text-white">Meet the Candidates</h2>
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Get to know the candidates running for each position. Click on any candidate card to view their complete
            profile, manifesto, and vision for NIT Durgapur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {posts.map((post, index) => {
            const IconComponent = post.icon
            const candidate = post.candidate
            return (
              <Link key={post.id} href={`/candidate/${candidate.id}`}>
                <Card className="h-full hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 cursor-pointer group bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-gray-700/50 hover:border-purple-500/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="text-center pb-6 relative z-10">
                    {/* Position Icon and Title */}
                    <div
                      className={`w-16 h-16 rounded-2xl ${post.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-400 mb-6 group-hover:text-blue-300 transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Candidate Photo */}
                    <div className="relative mx-auto mb-6">
                      <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-gray-600 shadow-2xl group-hover:scale-105 group-hover:border-purple-500/50 transition-all duration-500">
                        <img
                          src={candidate.image || "/placeholder.svg"}
                          alt={candidate.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Candidate Name */}
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-3">
                      {candidate.name}
                    </CardTitle>

                    {/* Year and Branch Badges */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-3 py-1"
                      >
                        {candidate.year}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-500 text-gray-300 hover:border-purple-400 transition-colors px-3 py-1"
                      >
                        {candidate.branch}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="text-center relative z-10">
                    {/* Tagline */}
                    <CardDescription className="text-gray-300 font-medium mb-6 italic text-lg leading-relaxed bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                      "{candidate.tagline}"
                    </CardDescription>

                    {/* Contact Info */}
                    <div className="space-y-3 mb-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                      <div className="flex items-center justify-center gap-3 text-sm text-gray-300">
                        <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                          <Mail className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="truncate font-medium">{candidate.contact.email}</span>
                      </div>
                      <div className="flex items-center justify-center gap-3 text-sm text-gray-300">
                        <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                          <Phone className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="font-medium">{candidate.contact.phone}</span>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                      <p className="text-sm text-purple-400 mb-3 font-semibold uppercase tracking-wide">Experience</p>
                      <div className="space-y-2">
                        {candidate.experience.slice(0, 2).map((exp, expIndex) => (
                          <Badge
                            key={expIndex}
                            variant="outline"
                            className="text-xs border-gray-600 text-gray-300 block py-2 px-3 hover:border-purple-400 transition-colors"
                          >
                            {exp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Student Issues Section */}
        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center border border-gray-700/50 relative overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Collective Manifesto</h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Discover our shared vision for NIT Durgapur. Read about our collective promises, goals, and the positive
              changes we plan to bring to campus life.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/manifesto">Read Our Manifesto</Link>
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Have Issues That Need Addressing?</h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Your voice matters! Share the problems you're facing as a student at NIT Durgapur. Help the Gymkhana
              understand what needs to be fixed and improved for a better campus experience.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="https://forms.google.com/dummy-student-issues-form" target="_blank" rel="noopener noreferrer">
                Report Student Issues
              </a>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950/90 backdrop-blur-md text-white py-10 mt-20 relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-lg">© 2025 NIT Durgapur Gymkhana Elections. Make your vote count.</p>
        </div>
      </footer>
    </div>
  )
}
