# final

"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ArrowLeft, Sparkles, Rocket, Code, Palette, Database, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { InteractiveButton } from "@/components/ui/interactive-button"
import { FloatingParticles } from "@/components/ui/floating-particles"

// Team member data - simplified for freshers
const teamMembers = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Full Stack Developer",
    avatar: "/placeholder.svg?height=300&width=300&query=professional+headshot+indian+male+developer",
    gradient: "from-purple-600 to-pink-600",
    icon: Code,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Frontend Developer",
    avatar: "/placeholder.svg?height=300&width=300&query=professional+headshot+indian+female+frontend",
    gradient: "from-orange-600 to-pink-600",
    icon: Palette,
  },
  {
    id: 3,
    name: "Rohit Kumar",
    role: "Backend Developer",
    avatar: "/placeholder.svg?height=300&width=300&query=professional+headshot+indian+male+backend",
    gradient: "from-pink-600 to-purple-600",
    icon: Database,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "UI/UX Designer",
    avatar: "/placeholder.svg?height=300&width=300&query=professional+headshot+indian+female+designer",
    gradient: "from-purple-600 to-orange-600",
    icon: Sparkles,
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "DevOps Engineer",
    avatar: "/placeholder.svg?height=300&width=300&query=professional+headshot+indian+male+devops",
    gradient: "from-orange-600 to-purple-600",
    icon: Rocket,
  },
  {
    id: 6,
    name: "Ananya Gupta",
    role: "Security Specialist",
    avatar: "/placeholder.svg?height=300&width=300&query=professional+headshot+indian+female+security",
    gradient: "from-pink-600 to-orange-600",
    icon: Shield,
  },
  {
    id: 7,
    name: "Karthik Nair",
    role: "AI/ML Engineer",
    avatar: "/placeholder.svg?height=300&width=300&query=professional+headshot+indian+male+ai",
    gradient: "from-purple-600 to-pink-600",
    icon: Zap,
  },
]

// Team member card component - simplified
const TeamMemberCard = ({ member, index }: { member: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <Card className="overflow-hidden bg-white border-2 border-gray-200 hover:border-purple-300 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
        <div className="relative">
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-10`} />

          {/* Avatar section */}
          <div className="relative p-8 text-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative mx-auto mb-6"
            >
              <div
                className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} p-1 shadow-lg shadow-purple-500/20`}
              >
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20`}
              >
                <member.icon className="h-5 w-5 text-white" />
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1 + 0.2 }}>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <Badge className={`bg-gradient-to-r ${member.gradient} text-white border-0 mb-4`}>{member.role}</Badge>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      <FloatingParticles />

      {/* Header */}
      <header className="absolute top-4 left-4 right-4 z-50 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.05 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg shadow-purple-500/20 mr-3"
          >
            <AlertTriangle className="h-6 w-6 text-white" />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            OnCall Mate
          </span>
        </Link>

        <Link href="/">
          <InteractiveButton variant="ghost" size="sm" className="text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </InteractiveButton>
        </Link>
      </header>

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 relative overflow-hidden bg-white">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full border border-purple-200 mb-6"
              >
                <Sparkles className="h-4 w-4 mr-2 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Fresh Minds, Bold Ideas</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent"
              >
                Meet Our Founding Team
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mx-auto max-w-[700px] text-gray-600 md:text-lg leading-relaxed"
              >
                A passionate team of fresh graduates and young professionals bringing innovative perspectives to solve
                real-world problems. This is our first venture, and we're excited to make a difference!
              </motion.p>
            </motion.div>

            {/* Team Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20"
            >
              {[
                { label: "Team Members", value: "7", icon: "👥" },
                { label: "Fresh Graduates", value: "100%", icon: "🎓" },
                { label: "Passion Level", value: "∞", icon: "🔥" },
                { label: "First Company", value: "Yes!", icon: "🚀" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="w-full py-16 relative bg-white">
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Fresh Graduates Section */}
        <section className="w-full py-16 md:py-24 relative bg-white">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                Why Fresh Graduates Make Great Founders
              </h2>
              <div className="grid gap-8 md:grid-cols-3 mt-12">
                {[
                  {
                    icon: "🧠",
                    title: "Fresh Perspectives",
                    description: "We bring new ideas without being constrained by 'how things have always been done'",
                  },
                  {
                    icon: "⚡",
                    title: "Boundless Energy",
                    description: "Our enthusiasm and drive to prove ourselves fuels our dedication to excellence",
                  },
                  {
                    icon: "🎯",
                    title: "Latest Technologies",
                    description: "We're up-to-date with cutting-edge tech and modern development practices",
                  },
                  {
                    icon: "🤝",
                    title: "Collaborative Spirit",
                    description: "We believe in teamwork, learning from each other, and growing together",
                  },
                  {
                    icon: "💡",
                    title: "Innovation First",
                    description: "We're not afraid to experiment and try new approaches to solve problems",
                  },
                  {
                    icon: "🌟",
                    title: "Hungry for Success",
                    description: "This is our first company, and we're determined to make it a success story",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    className="text-center space-y-4"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:py-24 relative bg-white">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Join Our Journey
              </h2>
              <p className="text-gray-600 md:text-lg leading-relaxed mb-8">
                We're just getting started, and we'd love to have you along for the ride. Whether you're a potential
                customer, investor, or fellow entrepreneur, let's connect!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton variant="primary" size="lg">
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Started
                </InteractiveButton>
                <InteractiveButton variant="secondary" size="lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Learn More
                </InteractiveButton>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 relative bg-white">
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-600">© 2025 OnCall Mate. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <Link href="/" className="text-xs text-gray-600 hover:text-purple-600 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
