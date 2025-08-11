"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock candidate data
const candidatesData = {
  president: [
    {
      id: "p1",
      name: "Arjun Sharma",
      year: "4th Year",
      branch: "Computer Science Engineering",
      image: "/professional-student-portrait.png",
      tagline: "Leading with Vision, Serving with Passion",
      experience: ["Student Council Member 2023", "Cultural Secretary 2022"],
      contact: { email: "arjun.sharma@student.nitdgp.ac.in", phone: "+91 98765 43210" },
    },
    {
      id: "p2",
      name: "Priya Patel",
      year: "4th Year",
      branch: "Electrical Engineering",
      image: "/placeholder-0b61c.png",
      tagline: "Empowering Students, Building Tomorrow",
      experience: ["Vice President 2023", "Sports Secretary 2022"],
      contact: { email: "priya.patel@student.nitdgp.ac.in", phone: "+91 98765 43211" },
    },
  ],
  "general-secretary": [
    {
      id: "gs1",
      name: "Rahul Kumar",
      year: "3rd Year",
      branch: "Mechanical Engineering",
      image: "/placeholder-cppix.png",
      tagline: "Organizing Excellence, Delivering Results",
      experience: ["Joint Secretary 2023", "Event Coordinator 2022"],
      contact: { email: "rahul.kumar@student.nitdgp.ac.in", phone: "+91 98765 43212" },
    },
    {
      id: "gs2",
      name: "Sneha Gupta",
      year: "3rd Year",
      branch: "Civil Engineering",
      image: "/determined-female-student.png",
      tagline: "Bridging Ideas with Action",
      experience: ["Cultural Committee Head 2023", "Volunteer Coordinator 2022"],
      contact: { email: "sneha.gupta@student.nitdgp.ac.in", phone: "+91 98765 43213" },
    },
  ],
  "ags-cultural": [
    {
      id: "agsc1",
      name: "Vikash Singh",
      year: "3rd Year",
      branch: "Electronics & Communication",
      image: "/placeholder-sj8zg.png",
      tagline: "Celebrating Culture, Creating Memories",
      experience: ["Drama Club President 2023", "Music Society Secretary 2022"],
      contact: { email: "vikash.singh@student.nitdgp.ac.in", phone: "+91 98765 43214" },
    },
  ],
  "ags-sports": [
    {
      id: "agss1",
      name: "Anita Rao",
      year: "2nd Year",
      branch: "Chemical Engineering",
      image: "/athletic-female-student.png",
      tagline: "Champions in Sports, Leaders in Life",
      experience: ["Basketball Team Captain 2023", "Sports Committee Member 2022"],
      contact: { email: "anita.rao@student.nitdgp.ac.in", phone: "+91 98765 43215" },
    },
  ],
  "ug-representative": [
    {
      id: "ugr1",
      name: "Amit Joshi",
      year: "2nd Year",
      branch: "Metallurgical Engineering",
      image: "/young-male-student-representative.png",
      tagline: "Your Voice, Our Priority",
      experience: ["Class Representative 2023", "Fresher Welcome Committee 2022"],
      contact: { email: "amit.joshi@student.nitdgp.ac.in", phone: "+91 98765 43216" },
    },
    {
      id: "ugr2",
      name: "Kavya Reddy",
      year: "2nd Year",
      branch: "Biotechnology",
      image: "/bright-female-student.png",
      tagline: "Representing with Responsibility",
      experience: ["Academic Committee Member 2023", "Debate Society Secretary 2022"],
      contact: { email: "kavya.reddy@student.nitdgp.ac.in", phone: "+91 98765 43217" },
    },
  ],
  "girls-representative": [
    {
      id: "gr1",
      name: "Riya Sharma",
      year: "3rd Year",
      branch: "Information Technology",
      image: "/placeholder-0b61c.png",
      tagline: "Empowering Women, Strengthening Community",
      experience: ["Women Cell Coordinator 2023", "Anti-Ragging Committee 2022"],
      contact: { email: "riya.sharma@student.nitdgp.ac.in", phone: "+91 98765 43218" },
    },
  ],
  "pg-representative": [
    {
      id: "pgr1",
      name: "Dr. Suresh Menon",
      year: "PhD 2nd Year",
      branch: "Materials Science",
      image: "/mature-male-graduate-student.png",
      tagline: "Research Excellence, Student Welfare",
      experience: ["Research Scholar Association President 2023", "PhD Committee Member 2022"],
      contact: { email: "suresh.menon@student.nitdgp.ac.in", phone: "+91 98765 43219" },
    },
  ],
}

const postTitles = {
  president: "President",
  "general-secretary": "General Secretary",
  "ags-cultural": "Assistant General Secretary Cultural",
  "ags-sports": "Assistant General Secretary Sports",
  "ug-representative": "UG Representative",
  "girls-representative": "Girls Representative",
  "pg-representative": "PG Representative",
}

export default function PostPage() {
  const params = useParams()
  const postId = params.postId as string
  const candidates = candidatesData[postId as keyof typeof candidatesData] || []
  const postTitle = postTitles[postId as keyof typeof postTitles] || "Unknown Position"

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Positions
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Candidates for {postTitle}</h1>
            <p className="text-lg text-gray-300">Meet the candidates running for this position</p>
          </div>
        </div>
      </header>

      {/* Candidates Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {candidates.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-white mb-4">No candidates yet</h2>
            <p className="text-gray-300">Candidates for this position will be announced soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map((candidate) => (
              <Link key={candidate.id} href={`/candidate/${candidate.id}`}>
                <Card className="h-full hover:shadow-xl hover:shadow-gray-700/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer group bg-gray-800 border-gray-700">
                  <CardHeader className="text-center pb-4">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={candidate.image || "/placeholder.svg"}
                        alt={candidate.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {candidate.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 justify-center mt-2">
                      <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                        {candidate.year}
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {candidate.branch}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-300 font-medium mb-4">"{candidate.tagline}"</CardDescription>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{candidate.contact.email}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <Phone className="w-4 h-4" />
                        <span>{candidate.contact.phone}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-300 mb-2">Experience:</p>
                      <div className="space-y-1">
                        {candidate.experience.map((exp, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                            {exp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
