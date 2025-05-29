"use client"

import type React from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  Bell,
  Zap,
  Brain,
  Activity,
  BookOpen,
  ExternalLink,
  ChevronRight,
  Wand2,
  Sparkles,
  ZapIcon,
  Globe,
  MessageSquare,
  Rocket,
  CheckCircle,
  Mail,
  Share2,
  Clock,
  Users,
  Heart,
  CreditCard,
  BarChart3,
  PieChart,
  LineChart,
  Search,
  Database,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { InteractiveButton } from "@/components/ui/interactive-button"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { LazySection } from "@/components/ui/lazy-section"
import { FloatingActionButton } from "@/components/ui/floating-action-button"

// Auto-Flip Card Component for Features
const AutoFlipCard = ({ feature, index }: { feature: any; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const colors = [
    { front: "from-purple-600 to-pink-600", back: "from-purple-600 to-pink-600", border: "border-purple-200" },
    { front: "from-orange-600 to-pink-600", back: "from-orange-600 to-pink-600", border: "border-orange-200" },
    { front: "from-pink-600 to-purple-600", back: "from-pink-600 to-purple-600", border: "border-pink-200" },
  ]

  const color = colors[index % colors.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-80 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <Card
            className={`h-full bg-white border-2 ${color.border} hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}
          >
            <CardContent className="flex flex-col items-center justify-center h-full p-8">
              <div
                className={`mx-auto mb-6 p-4 bg-gradient-to-br ${color.front} rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg shadow-purple-500/20`}
              >
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <CardTitle
                className={`text-2xl font-bold bg-gradient-to-r ${color.front} bg-clip-text text-transparent text-center`}
              >
                {feature.title}
              </CardTitle>
            </CardContent>
          </Card>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <Card className={`h-full bg-gradient-to-br ${color.back} text-white border-2 border-white/50 shadow-lg`}>
            <CardContent className="space-y-6 flex flex-col justify-center h-full p-8">
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-white/20 rounded-2xl w-16 h-16 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Integration Card Component
const IntegrationCard = ({ integration, index }: { integration: any; index: number }) => {
  const iconColors = ["text-purple-600", "text-orange-600", "text-pink-600", "text-purple-600"]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group cursor-pointer"
    >
      <Card className="p-6 bg-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20 border-2 border-gray-200">
        <div className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
            <integration.icon className={`h-6 w-6 ${iconColors[index % iconColors.length]}`} />
          </div>
          <h4 className="font-semibold text-gray-700">{integration.name}</h4>
        </div>
      </Card>
    </motion.div>
  )
}

// Contact Form Component
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <Card className="p-8 bg-white border-2 border-gray-200 shadow-lg shadow-purple-500/10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-gray-300 focus:border-purple-500 bg-white"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-gray-300 focus:border-purple-500 bg-white"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-gray-700">
            Company
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="border-gray-300 focus:border-purple-500 bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-700">
            Message *
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="border-gray-300 focus:border-purple-500 bg-white min-h-[120px]"
            required
          />
        </div>
        <InteractiveButton type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </InteractiveButton>
      </form>
    </Card>
  )
}

export default function OnCallMateLanding() {
  // Feature data for auto-flip cards
  const features = [
    {
      icon: Bell,
      title: "Email Integration",
      description: "Seamless integration with email platforms for automated alert management",
    },
    {
      icon: Zap,
      title: "Alert Classification",
      description: "Intelligent classification based on severity, status, and alerting rules",
    },
    {
      icon: Brain,
      title: "AI Powered Response",
      description: "Automated responses with step-by-step resolution guidance",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      <FloatingParticles />

      {/* Simplified Header - No top bar, just logo in corner */}
      {/* Simplified Header with improved buttons */}
      {/* Improved Header with navigation buttons */}
      <header className="absolute top-4 left-4 right-4 z-50 flex justify-between items-center">
        <div className="flex items-center">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg shadow-purple-500/20"
          >
            <AlertTriangle className="h-6 w-6 text-white" />
          </motion.div>
          <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            OnCall Mate
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <motion.a
            href="https://github.com/oncallmate/oncall-mate"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-lg shadow-lg shadow-gray-500/20 transition-all duration-300 border border-gray-700"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">GitHub</span>
          </motion.a>

          <Link href="/teams">
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg shadow-lg shadow-purple-500/25 transition-all duration-300 border border-purple-500/20"
            >
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Team</span>
            </motion.button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-white">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute inset-0 opacity-3"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.1) 1px, transparent 0)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none"
                >
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                    OnCall Mate
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl text-gray-700 sm:text-3xl md:text-4xl font-medium"
                >
                  When Alerts Meet Intelligence
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mx-auto max-w-[800px] text-gray-600 md:text-xl mt-6 leading-relaxed"
                >
                  Intelligent alert management system that transforms overwhelming notifications into actionable
                  insights
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8"
              >
                <InteractiveButton variant="secondary" size="lg" className="text-lg px-10 py-4">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Documentation
                </InteractiveButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Problem Statement */}
        <LazySection className="w-full py-12 md:py-24 lg:py-32 relative bg-white">
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent"
              >
                The Challenge We're Solving
              </motion.h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Modern businesses face critical challenges in incident management that can cost millions
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  icon: AlertTriangle,
                  title: "Overwhelming volume of alerts",
                  description:
                    "SREs face a deluge of alerts from tools like Grafana, Prometheus, Datadog. Many alerts are not critical leading to noise.",
                  stat: "300+ alerts/day average",
                  color: "from-purple-600 to-pink-600",
                  borderColor: "border-purple-200",
                },
                {
                  icon: Clock,
                  title: "Knowledge gaps between SREs",
                  description: "Junior SREs often lack the expertise. This results in delays and extended downtime.",
                  stat: "45min average MTTR",
                  color: "from-orange-600 to-pink-600",
                  borderColor: "border-orange-200",
                },
                {
                  icon: Users,
                  title: "Unnecessary escalation and delays",
                  description:
                    "Lack of documented solutions leads to frequent escalations. Senior engineers are diverted from critical tasks affecting productivity.",
                  stat: "60% communication gaps",
                  color: "from-pink-600 to-purple-600",
                  borderColor: "border-pink-200",
                },
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card
                    className={`p-8 h-full bg-white border-2 ${problem.borderColor} hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300`}
                  >
                    <div className="text-center space-y-4">
                      <div
                        className={`mx-auto w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20`}
                      >
                        <problem.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{problem.title}</h3>
                      <Badge className={`bg-gradient-to-r ${problem.color} text-white border-0`}>{problem.stat}</Badge>
                      <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* Features Section with Auto-Flip Cards */}
        <LazySection id="features" className="w-full py-12 md:py-24 lg:py-32 relative bg-white">
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent"
              >
                Key Features
              </motion.h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl mb-8">
                Essential tools for intelligent alert management
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <AutoFlipCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </LazySection>

        {/* Solution Section */}
        <LazySection id="solution" className="w-full py-12 md:py-24 lg:py-32 relative bg-white">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-12">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 mb-4">
                  <Wand2 className="h-4 w-4 mr-2" />
                  Our Solution
                </Badge>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Intelligent Incident Response, Simplified
                </h2>
                <p className="text-gray-600 md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
                  OnCall Mate transforms chaos into clarity with AI-powered alert management, smart escalations, and
                  unified incident tracking that gets your team back to building.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mt-12">
                {[
                  {
                    icon: Brain,
                    title: "AI powered automated responses",
                    description:
                      "Integrated AI agent to automatically respond to alerts via emails, Slack and Outlook. Provide step-by-step resolutions for alerts reducing response time and manual effort.",
                    color: "from-purple-600 to-pink-600",
                  },
                  {
                    icon: ZapIcon,
                    title: "Centralized knowledge database",
                    description:
                      "Maintain a database of previously resolved issues for quick reference. Utilized Redis in-memory DB for faster query processing, cost efficient, and efficient data retrieval between LLM and backend.",
                    color: "from-orange-600 to-pink-600",
                  },
                  {
                    icon: Activity,
                    title: "Streamlined alert resolution",
                    description:
                      "Ensure consistent and accurate responses to common alerts. Minimize unnecessary escalations by equipping SREs with immediate solutions.",
                    color: "from-pink-600 to-purple-600",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center space-y-4"
                  >
                    <div
                      className={`bg-gradient-to-br ${benefit.color} p-4 rounded-xl w-16 h-16 mx-auto flex items-center justify-center shadow-lg shadow-purple-500/20`}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </LazySection>

        {/* Business Value Section */}
        <LazySection className="w-full py-12 md:py-24 lg:py-32 relative bg-white">
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent"
              >
                Business Value & Impact
              </motion.h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Measurable benefits that drive real business outcomes
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  icon: Heart,
                  title: "Reduce Burnout",
                  description:
                    "Minimize alert fatigue and improve team well-being with intelligent filtering and automated responses",
                  metric: "70% less stress",
                  color: "from-pink-600 to-purple-600",
                  borderColor: "border-pink-200",
                },
                {
                  icon: Zap,
                  title: "Faster Resolution",
                  description:
                    "Accelerate incident response with automated workflows, AI assistance, and step-by-step guidance",
                  metric: "3x faster MTTR",
                  color: "from-orange-600 to-pink-600",
                  borderColor: "border-orange-200",
                },
                {
                  icon: BookOpen,
                  title: "Knowledge Retention",
                  description:
                    "Build institutional knowledge that stays with your organization through centralized documentation",
                  metric: "90% knowledge preserved",
                  color: "from-purple-600 to-pink-600",
                  borderColor: "border-purple-200",
                },
                {
                  icon: CreditCard,
                  title: "Cost Efficiency",
                  description: "Reduce operational costs through intelligent automation and improved team efficiency",
                  metric: "40% cost reduction",
                  color: "from-pink-600 to-orange-600",
                  borderColor: "border-pink-200",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card
                    className={`p-8 h-full bg-white border-2 ${value.borderColor} hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300`}
                  >
                    <div className="text-center space-y-6">
                      <div
                        className={`mx-auto w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20`}
                      >
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
                      <Badge className={`bg-gradient-to-r ${value.color} text-white border-0 text-sm px-3 py-1`}>
                        {value.metric}
                      </Badge>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* Future Scope Section */}
        <LazySection id="roadmap" className="w-full py-12 md:py-24 lg:py-32 relative bg-white">
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent"
              >
                Future Scope & Roadmap
              </motion.h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Our vision for the future of intelligent incident management
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Globe,
                  title: "Holistic Monitoring Approach",
                  description: "Alert on metrics, traces, logs for holistic issue detection with all combined",
                  timeline: "Q2 2025",
                  color: "from-purple-600 to-pink-600",
                  borderColor: "border-purple-200",
                  features: [
                    "Metrics monitoring and alerting",
                    "Distributed tracing integration",
                    "Log aggregation and analysis",
                    "Unified observability dashboard",
                  ],
                },
                {
                  icon: MessageSquare,
                  title: "Multiple Channel Notification Integration",
                  description: "Notify via Outlook, Slack, Gmail, Teams for timely communication",
                  timeline: "Q3 2025",
                  color: "from-orange-600 to-pink-600",
                  borderColor: "border-orange-200",
                  features: [
                    "Microsoft Outlook integration",
                    "Slack real-time notifications",
                    "Gmail automated responses",
                    "Microsoft Teams collaboration",
                  ],
                },
                {
                  icon: Brain,
                  title: "Adaptive Learning System",
                  description: "Use on-call feedback and reinforcement learning to improve responses",
                  timeline: "Q4 2025",
                  color: "from-pink-600 to-purple-600",
                  borderColor: "border-pink-200",
                  features: [
                    "On-call engineer feedback collection",
                    "Reinforcement learning algorithms",
                    "Response quality improvement",
                    "Personalized recommendation engine",
                  ],
                },
                {
                  icon: Rocket,
                  title: "Streamlined Incident Response",
                  description: "Integrate with PagerDuty, Opsgenie for rapid alert escalation",
                  timeline: "Q1 2026",
                  color: "from-purple-600 to-orange-600",
                  borderColor: "border-purple-200",
                  features: [
                    "PagerDuty escalation policies",
                    "Opsgenie incident management",
                    "Automated escalation workflows",
                    "Rapid response coordination",
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-1">
                    <Card className={`p-6 bg-white border-2 ${item.borderColor} shadow-lg shadow-purple-500/10`}>
                      <div className="flex items-start space-x-4">
                        <div
                          className={`bg-gradient-to-br ${item.color} p-3 rounded-xl shadow-lg shadow-purple-500/20`}
                        >
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                            <Badge className={`bg-gradient-to-r ${item.color} text-white border-0`}>
                              {item.timeline}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <div className="space-y-2">
                            {item.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-purple-500" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="hidden lg:block">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className={`w-4 h-4 bg-gradient-to-r ${item.color} rounded-full shadow-lg shadow-purple-500/30`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* Integrations Section */}
        <LazySection className="w-full py-12 md:py-24 lg:py-32 relative bg-white">
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent"
              >
                Seamless Integrations
              </motion.h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Connect with your favorite tools and platforms
              </p>
            </div>

            <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Slack", icon: MessageSquare },
                { name: "Gmail", icon: Mail },
                { name: "Outlook", icon: Mail },
                { name: "PagerDuty", icon: Bell },
                { name: "Teams", icon: Users },
                { name: "Grafana", icon: BarChart3 },
                { name: "Datadog", icon: PieChart },
                { name: "Prometheus", icon: LineChart },
                { name: "GitHub", icon: ExternalLink },
                { name: "Jira", icon: CheckCircle },
                { name: "AWS", icon: Globe },
                { name: "Kubernetes", icon: Activity },
                { name: "Docker", icon: Activity },
                { name: "Jenkins", icon: Zap },
                { name: "Elasticsearch", icon: Search },
                { name: "OpenTelemetry", icon: Activity },
                { name: "Database", icon: Database },
                { name: "OpenAI", icon: Brain },
                { name: "Gemini", icon: Sparkles },
                { name: "Redis", icon: Database },
              ].map((integration, index) => (
                <IntegrationCard key={index} integration={integration} index={index} />
              ))}
            </div>
          </div>
        </LazySection>

        {/* Contact Section */}
        <LazySection className="w-full py-12 md:py-24 lg:py-32 relative bg-white">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Get in Touch
                </motion.h2>
                <p className="text-gray-600 md:text-xl leading-relaxed">
                  Ready to transform your incident response? Let's talk about how OnCall Mate can help your team.
                </p>
              </div>

              <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
                <div className="lg:col-span-2 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl shadow-lg shadow-purple-500/20">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm mb-1">Get in touch with our team</p>
                      <p className="text-purple-600 font-medium">hello@oncallmate.com</p>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-3">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </LazySection>
      </main>

      {/* Enhanced Footer */}
      <footer className="py-12 border-t border-gray-200 relative bg-white">
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg shadow-purple-500/20">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  OnCall Mate
                </span>
              </div>
              <p className="text-sm text-gray-600 max-w-xs">
                Smart alert and incident response management for modern teams.
              </p>
              <div className="flex space-x-2">
                {[Share2, MessageSquare, Mail, ExternalLink].map((Icon, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-white text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 border border-gray-200 shadow-sm"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.button>
                ))}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Integrations", "API", "Security"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                title: "Support",
                links: ["Help Center", "Documentation", "Status Page", "Community"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4 text-gray-800">{section.title}</h3>
                <nav className="flex flex-col space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href="#"
                      className="text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center group"
                    >
                      {link}
                      <ChevronRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-200">
            <p className="text-xs text-gray-600">© 2025 OnCall Mate. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <Link key={index} href="#" className="text-xs text-gray-600 hover:text-purple-600 transition-colors">
                  {link}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  )
}






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
