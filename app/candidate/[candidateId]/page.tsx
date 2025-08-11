"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Award, Target, Users, Heart } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Extended candidate data with full biodata
const fullCandidateData = {
  p1: {
    name: "Arjun Sharma",
    year: "4th Year",
    branch: "Computer Science Engineering",
    image: "/professional-student-portrait.png",
    tagline: "Leading with Vision, Serving with Passion",
    contact: {
      email: "arjun.sharma@student.nitdgp.ac.in",
      phone: "+91 98765 43210",
      address: "Hostel Block A, Room 204",
    },
    about:
      "A passionate computer science student with a vision to transform student life at NIT Durgapur. With over 3 years of active involvement in student activities, I understand the challenges we face and have concrete solutions to address them.",
    experience: [
      "Student Council Member (2023) - Organized 15+ events with 90% student satisfaction",
      "Cultural Secretary (2022) - Led team of 50+ volunteers for annual fest",
      "Coding Club President (2021-2022) - Increased membership by 200%",
      "Inter-NIT Programming Contest Winner (2021)",
    ],
    achievements: [
      "Dean's List for Academic Excellence (2021, 2022, 2023)",
      "Best Student Leader Award 2023",
      "Google Summer of Code Participant 2022",
      "Published 3 research papers in international conferences",
    ],
    manifesto: [
      "Establish 24/7 study spaces with high-speed internet",
      "Create a student grievance portal with guaranteed 48-hour response",
      "Launch skill development programs with industry partnerships",
      "Improve hostel facilities and mess quality through regular audits",
      "Organize monthly town halls for transparent communication",
    ],
    vision:
      "To create an inclusive, innovative, and inspiring environment where every student can thrive academically, personally, and professionally.",
    hobbies: ["Competitive Programming", "Photography", "Playing Guitar", "Trekking"],
  },
  p2: {
    name: "Priya Patel",
    year: "4th Year",
    branch: "Electrical Engineering",
    image: "/placeholder-0b61c.png",
    tagline: "Empowering Students, Building Tomorrow",
    contact: {
      email: "priya.patel@student.nitdgp.ac.in",
      phone: "+91 98765 43211",
      address: "Hostel Block C, Room 156",
    },
    about:
      "An electrical engineering student committed to creating positive change through collaborative leadership. My experience in various student roles has taught me the importance of listening, planning, and executing with precision.",
    experience: [
      "Vice President Student Council (2023) - Implemented 5 major policy changes",
      "Sports Secretary (2022) - Organized inter-college tournaments",
      "Women Cell Coordinator (2021) - Conducted awareness programs",
      "Technical Society Joint Secretary (2020-2021)",
    ],
    achievements: [
      "Outstanding Leadership Award 2023",
      "Best Project Award in Electrical Engineering 2022",
      "State Level Badminton Champion 2021",
      "Volunteer of the Year 2020",
    ],
    manifesto: [
      "Enhance women safety measures across campus",
      "Establish mental health support system with professional counselors",
      "Create entrepreneurship incubation center for student startups",
      "Improve transportation facilities for off-campus students",
      "Launch peer mentoring programs for academic support",
    ],
    vision:
      "To build a supportive community where every student feels valued, heard, and empowered to achieve their dreams.",
    hobbies: ["Badminton", "Reading", "Volunteering", "Painting"],
  },
  // Add more candidates with similar detailed structure...
  gs1: {
    name: "Rahul Kumar",
    year: "3rd Year",
    branch: "Mechanical Engineering",
    image: "/placeholder-cppix.png",
    tagline: "Organizing Excellence, Delivering Results",
    contact: {
      email: "rahul.kumar@student.nitdgp.ac.in",
      phone: "+91 98765 43212",
      address: "Hostel Block B, Room 301",
    },
    about:
      "A mechanical engineering student with exceptional organizational skills and a track record of successful event management. I believe in systematic approaches to problem-solving and transparent communication.",
    experience: [
      "Joint Secretary Student Council (2023) - Coordinated 20+ events",
      "Event Coordinator Cultural Committee (2022) - Managed budget of ₹5 lakhs",
      "Mechanical Engineering Society President (2021-2022)",
      "NSS Volunteer (2020-2023) - 200+ hours of community service",
    ],
    achievements: [
      "Best Event Manager Award 2023",
      "Academic Excellence Award 2022",
      "Inter-NIT Mechanical Design Competition Winner 2021",
      "Social Service Award from District Collector 2022",
    ],
    manifesto: [
      "Digitize all student services for faster processing",
      "Create a unified event calendar to avoid scheduling conflicts",
      "Establish student feedback system for continuous improvement",
      "Launch skill workshops every month with industry experts",
      "Improve coordination between different student committees",
    ],
    vision:
      "To create an efficient, transparent, and student-centric administration that serves every student effectively.",
    hobbies: ["Football", "Chess", "Robotics", "Social Work"],
  },
}

export default function CandidatePage() {
  const params = useParams()
  const candidateId = params.candidateId as string
  const candidate = fullCandidateData[candidateId as keyof typeof fullCandidateData]

  if (!candidate) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Candidate Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg flex-shrink-0">
                <img
                  src={candidate.image || "/placeholder.svg"}
                  alt={candidate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-white mb-2">{candidate.name}</h1>
                <p className="text-xl text-blue-400 font-semibold mb-4">"{candidate.tagline}"</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                  <Badge variant="secondary" className="text-sm bg-gray-700 text-gray-300">
                    {candidate.year}
                  </Badge>
                  <Badge variant="outline" className="text-sm border-gray-600 text-gray-300">
                    {candidate.branch}
                  </Badge>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{candidate.contact.email}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{candidate.contact.phone}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{candidate.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Users className="w-5 h-5" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed">{candidate.about}</p>
          </CardContent>
        </Card>

        {/* Vision Section */}
        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Target className="w-5 h-5" />
              My Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed">{candidate.vision}</p>
          </CardContent>
        </Card>

        {/* Experience & Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Calendar className="w-5 h-5" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {candidate.experience.map((exp, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{exp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Award className="w-5 h-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {candidate.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Manifesto */}
        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Target className="w-5 h-5" />
              My Manifesto
            </CardTitle>
            <CardDescription className="text-gray-400">
              Key promises and initiatives I plan to implement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {candidate.manifesto.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-900 text-blue-400 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Hobbies */}
        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Heart className="w-5 h-5" />
              Hobbies & Interests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {candidate.hobbies.map((hobby, index) => (
                <Badge key={index} variant="outline" className="text-sm border-gray-600 text-gray-300">
                  {hobby}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Have Questions? Let's Connect!</h3>
            <p className="text-gray-300 mb-6">I'm always available to discuss my vision and answer your questions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href={`mailto:${candidate.contact.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                <a href={`tel:${candidate.contact.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
