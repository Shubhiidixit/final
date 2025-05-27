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
          <Card className="h-full bg-white border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
            <CardContent className="flex flex-col items-center justify-center h-full p-8">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-20 h-20 flex items-center justify-center">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent text-center">
                {feature.title}
              </CardTitle>
            </CardContent>
          </Card>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <Card className="h-full bg-gradient-to-br from-green-600 to-green-700 text-white border-2 border-green-400">
            <CardContent className="space-y-6 flex flex-col justify-center h-full p-8">
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-white/20 rounded-2xl w-16 h-16 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-green-100 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Integration Card Component
const IntegrationCard = ({ integration, index }: { integration: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="group cursor-pointer"
  >
    <Card className="p-6 bg-white border-2 border-green-200 hover:border-green-300 transition-all duration-300 group-hover:shadow-lg">
      <div className="text-center space-y-3">
        <div className="mx-auto w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
          <integration.icon className="h-6 w-6 text-green-600" />
        </div>
        <h4 className="font-semibold text-gray-900">{integration.name}</h4>
      </div>
    </Card>
  </motion.div>
)

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
    <Card className="p-8 bg-white border-2 border-green-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-green-200 focus:border-green-400"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-green-200 focus:border-green-400"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="border-green-200 focus:border-green-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="border-green-200 focus:border-green-400 min-h-[120px]"
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
      <header className="absolute top-4 left-4 z-50">
        <div className="flex items-center">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="p-2 bg-gradient-to-r from-green-600 to-green-700 rounded-lg"
          >
            <AlertTriangle className="h-6 w-6 text-white" />
          </motion.div>
          <span className="ml-3 text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            OnCall Mate
          </span>
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
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.15) 1px, transparent 0)",
                backgroundSize: "50px 50px",
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
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-green-600 font-medium mb-2 tracking-wide uppercase"
                  >
                    We are launching
                  </motion.p>
                  <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-600 bg-clip-text text-transparent">
                    OnCall Mate
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl text-gray-600 sm:text-3xl md:text-4xl font-medium"
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
        <LazySection className="w-full py-12 md:py-24 lg:py-32 relative bg-gradient-to-br from-green-50 to-green-100">
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent"
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
                },
                {
                  icon: Clock,
                  title: "Knowledge gaps between SREs",
                  description: "Junior SREs often lack the expertise. This results in delays and extended downtime.",
                  stat: "45min average MTTR",
                },
                {
                  icon: Users,
                  title: "Unnecessary escalation and delays",
                  description:
                    "Lack of documented solutions leads to frequent escalations. Senior engineers are diverted from critical tasks affecting productivity.",
                  stat: "60% communication gaps",
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
                  <Card className="p-8 h-full bg-white border-2 border-green-200 hover:border-green-300 group-hover:shadow-2xl transition-all duration-300">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                        <problem.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-green-800">{problem.title}</h3>
                      <Badge className="bg-green-100 text-green-800 border-green-200">{problem.stat}</Badge>
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
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent"
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
        <LazySection
          id="solution"
          className="w-full py-12 md:py-24 lg:py-32 relative bg-gradient-to-br from-green-50 to-green-100"
        >
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-12">
                <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
                  <Wand2 className="h-4 w-4 mr-2" />
                  Our Solution
                </Badge>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
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
                  },
                  {
                    icon: ZapIcon,
                    title: "Centralized knowledge database",
                    description:
                      "Maintain a database of previously resolved issues for quick reference. Utilized Redis in-memory DB for faster query processing, cost efficient, and efficient data retrieval between LLM and backend.",
                  },
                  {
                    icon: Activity,
                    title: "Streamlined alert resolution",
                    description:
                      "Ensure consistent and accurate responses to common alerts. Minimize unnecessary escalations by equipping SREs with immediate solutions.",
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
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl w-16 h-16 mx-auto flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg">{benefit.title}</h3>
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
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent"
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
                },
                {
                  icon: Zap,
                  title: "Faster Resolution",
                  description:
                    "Accelerate incident response with automated workflows, AI assistance, and step-by-step guidance",
                  metric: "3x faster MTTR",
                },
                {
                  icon: BookOpen,
                  title: "Knowledge Retention",
                  description:
                    "Build institutional knowledge that stays with your organization through centralized documentation",
                  metric: "90% knowledge preserved",
                },
                {
                  icon: CreditCard,
                  title: "Cost Efficiency",
                  description: "Reduce operational costs through intelligent automation and improved team efficiency",
                  metric: "40% cost reduction",
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
                  <Card className="p-8 h-full bg-white border-2 border-green-200 hover:border-green-300 group-hover:shadow-2xl transition-all duration-300">
                    <div className="text-center space-y-6">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-green-800">{value.title}</h3>
                      <Badge className="bg-green-100 text-green-800 border-green-200 text-sm px-3 py-1">
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
        <LazySection
          id="roadmap"
          className="w-full py-12 md:py-24 lg:py-32 relative bg-gradient-to-br from-green-50 to-green-100"
        >
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent"
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
                    <Card className="p-6 bg-white border-2 border-green-200">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            <Badge className="bg-green-100 text-green-800 border-green-200">{item.timeline}</Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <div className="space-y-2">
                            {item.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm text-gray-700">{feature}</span>
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
                      className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
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
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent"
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="p-8 bg-white border-2 border-green-200 hover:border-green-300 transition-all duration-300 group-hover:shadow-lg h-32">
                    <div className="text-center space-y-3 h-full flex flex-col justify-center">
                      <div className="mx-auto w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                        <integration.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">{integration.name}</h4>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* Contact Section */}
        <LazySection className="w-full py-12 md:py-24 lg:py-32 relative bg-gradient-to-br from-green-50 to-green-100">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent"
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
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm mb-1">Get in touch with our team</p>
                      <p className="text-green-600 font-medium">hello@oncallmate.com</p>
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
      <footer className="py-12 border-t border-green-200 relative bg-white">
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-green-600 to-green-700 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
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
                    className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-all duration-300"
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
                <h3 className="font-semibold mb-4 text-gray-900">{section.title}</h3>
                <nav className="flex flex-col space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href="#"
                      className="text-sm text-gray-600 hover:text-green-600 transition-colors flex items-center group"
                    >
                      {link}
                      <ChevronRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-green-200">
            <p className="text-xs text-gray-600">© 2025 OnCall Mate. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <Link key={index} href="#" className="text-xs text-gray-600 hover:text-green-600 transition-colors">
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
