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
  TrendingUp,
  TrendingDown,
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

// Alert Visualization Component
const AlertVisualization = () => {
  const alertData = [
    { time: "00:00", alerts: 45, resolved: 12 },
    { time: "04:00", alerts: 78, resolved: 23 },
    { time: "08:00", alerts: 156, resolved: 89 },
    { time: "12:00", alerts: 234, resolved: 178 },
    { time: "16:00", alerts: 189, resolved: 156 },
    { time: "20:00", alerts: 98, resolved: 67 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 shadow-lg shadow-purple-500/10"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Alert Volume (24h)</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Incoming</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Resolved</span>
          </div>
        </div>
      </div>
      <div className="relative h-32">
        <svg className="w-full h-full" viewBox="0 0 300 120">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="0" y1={i * 30} x2="300" y2={i * 30} stroke="#f3f4f6" strokeWidth="1" />
          ))}

          {/* Alert line */}
          <motion.polyline
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            points={alertData.map((d, i) => `${i * 50},${120 - (d.alerts / 250) * 120}`).join(" ")}
          />

          {/* Resolved line */}
          <motion.polyline
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.7, duration: 2 }}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            points={alertData.map((d, i) => `${i * 50},${120 - (d.resolved / 250) * 120}`).join(" ")}
          />

          {/* Data points */}
          {alertData.map((d, i) => (
            <g key={i}>
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                cx={i * 50}
                cy={120 - (d.alerts / 250) * 120}
                r="4"
                fill="#ef4444"
              />
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.7 + i * 0.1 }}
                cx={i * 50}
                cy={120 - (d.resolved / 250) * 120}
                r="4"
                fill="#10b981"
              />
            </g>
          ))}
        </svg>

        {/* Time labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          {alertData.map((d, i) => (
            <span key={i}>{d.time}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-500">1.2K</div>
          <div className="text-xs text-gray-600">Total Alerts</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">89%</div>
          <div className="text-xs text-gray-600">Resolved</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-500">12m</div>
          <div className="text-xs text-gray-600">Avg MTTR</div>
        </div>
      </div>
    </motion.div>
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
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Completely Redesigned */}
        <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Gradient Orbs */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 100, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 h-full">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-r border-purple-300"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10 flex items-center min-h-screen">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
              {/* Left side - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-10"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full border border-purple-200 backdrop-blur-sm"
                >
                  <Sparkles className="h-5 w-5 mr-3 text-purple-600" />
                  <span className="text-purple-700 font-semibold tracking-wide">Meet Our Revolutionary Product</span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-6"
                >
                  <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
                    <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                      OnCall
                    </span>
                    <span className="block bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                      Mate
                    </span>
                  </h1>

                  <div className="space-y-4">
                    <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                      Where <span className="text-purple-600 font-bold">Alerts</span> Meet{" "}
                      <span className="text-orange-600 font-bold">Intelligence</span>
                    </p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="relative"
                    >
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Say{" "}
                        <span className="relative">
                          <span className="text-red-500">Goodbye</span>
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="absolute bottom-0 left-0 w-full h-1 bg-red-500 origin-left"
                          />
                        </span>{" "}
                        to Alert Fatigue
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Transform overwhelming notifications into{" "}
                        <span className="font-bold text-purple-600">actionable insights</span> with our AI-powered
                        incident management platform.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Key Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="grid grid-cols-3 gap-6"
                >
                  {[
                    { icon: TrendingDown, label: "70% Less Noise", color: "text-green-600" },
                    { icon: TrendingUp, label: "3x Faster MTTR", color: "text-blue-600" },
                    { icon: Heart, label: "Zero Burnout", color: "text-pink-600" },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm"
                    >
                      <benefit.icon className={`h-8 w-8 mx-auto mb-2 ${benefit.color}`} />
                      <p className="font-semibold text-gray-800 text-sm">{benefit.label}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <InteractiveButton
                    variant="primary"
                    size="lg"
                    className="text-xl px-12 py-6 shadow-2xl shadow-purple-500/25"
                  >
                    <Rocket className="mr-3 h-6 w-6" />
                    Start Free Trial
                  </InteractiveButton>
                  <InteractiveButton variant="ghost" size="lg" className="text-xl px-12 py-6">
                    <BookOpen className="mr-3 h-6 w-6" />
                    View Demo
                  </InteractiveButton>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="flex items-center space-x-6 text-sm text-gray-600"
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"
                        ></div>
                      ))}
                    </div>
                    <span>Trusted by 500+ teams</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    ))}
                    <span className="ml-2">4.9/5 rating</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right side - Enhanced Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="relative"
              >
                {/* Main Dashboard Mockup */}
                <div className="relative bg-white rounded-3xl shadow-2xl shadow-purple-500/20 border border-gray-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      </div>
                      <div className="text-white font-semibold">OnCall Mate Dashboard</div>
                      <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-8 space-y-6">
                    {/* Alert Status Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Active", count: "12", color: "bg-red-500", trend: "↓ 70%" },
                        { label: "Resolved", count: "89", color: "bg-green-500", trend: "↑ 200%" },
                        { label: "Pending", count: "3", color: "bg-yellow-500", trend: "↓ 85%" },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.8 + index * 0.1 }}
                          className="bg-gray-50 rounded-xl p-4 text-center"
                        >
                          <div className={`w-4 h-4 ${stat.color} rounded-full mx-auto mb-2`}></div>
                          <div className="text-2xl font-bold text-gray-800">{stat.count}</div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                          <div className="text-xs text-green-600 font-semibold mt-1">{stat.trend}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Live Alert Feed */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-800 text-sm">Live Alert Feed</h3>
                      {[
                        {
                          type: "Critical",
                          service: "API Gateway",
                          status: "Resolved",
                          time: "2m ago",
                          color: "bg-red-100 text-red-700",
                        },
                        {
                          type: "Warning",
                          service: "Database",
                          status: "Investigating",
                          time: "5m ago",
                          color: "bg-yellow-100 text-yellow-700",
                        },
                        {
                          type: "Info",
                          service: "Cache",
                          status: "Resolved",
                          time: "8m ago",
                          color: "bg-blue-100 text-blue-700",
                        },
                      ].map((alert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2.2 + index * 0.2 }}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`px-2 py-1 rounded text-xs font-medium ${alert.color}`}>{alert.type}</div>
                            <span className="text-sm font-medium text-gray-800">{alert.service}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-600">{alert.status}</div>
                            <div className="text-xs text-gray-500">{alert.time}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* AI Response Preview */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.8 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200"
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <Brain className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold text-purple-800">AI Assistant</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                          <div
                            className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">
                        "I've detected a database connection spike. Based on previous incidents, I recommend scaling the
                        connection pool. Shall I execute the fix?"
                      </p>
                      <div className="flex space-x-2 mt-3">
                        <button className="px-3 py-1 bg-purple-600 text-white text-xs rounded-lg">Execute</button>
                        <button className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-lg">Review</button>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3, duration: 0.6 }}
                  className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
                >
                  ✓ 99.9% Uptime
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.2, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
                >
                  🚀 AI-Powered
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center space-y-2 text-gray-500"
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronRight className="h-5 w-5 rotate-90" />
            </motion.div>
          </motion.div>
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
                Problems We're Solving
              </motion.h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Modern businesses face critical challenges in incident management areas like{" "}
                <span className="font-semibold text-purple-600">monitoring</span>,{" "}
                <span className="font-semibold text-orange-600">alerting</span>,{" "}
                <span className="font-semibold text-pink-600">response coordination</span>, and{" "}
                <span className="font-semibold text-blue-600">knowledge management</span> that can cost millions
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  icon: AlertTriangle,
                  title: "Overwhelming volume of alerts",
                  description: (
                    <>
                      SREs face a deluge of alerts from tools like{" "}
                      <span className="font-bold text-orange-600">Grafana</span>,{" "}
                      <span className="font-bold text-blue-600">Prometheus</span>,{" "}
                      <span className="font-bold text-purple-600">Datadog</span>. Many alerts are{" "}
                      <span className="font-bold text-red-600">not critical</span> leading to noise.
                    </>
                  ),
                  stat: "300+ alerts/day average",
                  color: "from-purple-600 to-pink-600",
                  borderColor: "border-purple-200",
                },
                {
                  icon: Clock,
                  title: "Knowledge gaps between SREs",
                  description: (
                    <>
                      <span className="font-bold text-blue-600">Junior SREs</span> often lack the expertise. This
                      results in <span className="font-bold text-red-600">delays</span> and{" "}
                      <span className="font-bold text-orange-600">extended downtime</span>.
                    </>
                  ),
                  stat: "45min average MTTR",
                  color: "from-orange-600 to-pink-600",
                  borderColor: "border-orange-200",
                },
                {
                  icon: Users,
                  title: "Unnecessary escalation and delays",
                  description: (
                    <>
                      Lack of <span className="font-bold text-green-600">documented solutions</span> leads to frequent
                      escalations. <span className="font-bold text-purple-600">Senior engineers</span> are diverted from
                      critical tasks affecting <span className="font-bold text-orange-600">productivity</span>.
                    </>
                  ),
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
                Essential tools for <span className="font-semibold text-purple-600">intelligent alert management</span>
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
                  OnCall Mate transforms chaos into clarity with{" "}
                  <span className="font-semibold text-purple-600">AI-powered alert management</span>,{" "}
                  <span className="font-semibold text-orange-600">smart escalations</span>, and
                  <span className="font-semibold text-pink-600"> unified incident tracking</span> that gets your team
                  back to building.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mt-12">
                {[
                  {
                    icon: Brain,
                    title: "AI powered automated responses",
                    description: [
                      "Integrated AI agent to automatically respond to alerts via emails, Slack and Outlook",
                      "Provide step-by-step resolutions for alerts reducing response time",
                      "Minimize manual effort with intelligent automation",
                    ],
                    color: "from-purple-600 to-pink-600",
                  },
                  {
                    icon: ZapIcon,
                    title: "Centralized knowledge database",
                    description: [
                      "Maintain a database of previously resolved issues for quick reference",
                      "Utilized Redis in-memory DB for faster query processing",
                      "Cost efficient and efficient data retrieval between LLM and backend",
                    ],
                    color: "from-orange-600 to-pink-600",
                  },
                  {
                    icon: Activity,
                    title: "Streamlined alert resolution",
                    description: [
                      "Ensure consistent and accurate responses to common alerts",
                      "Minimize unnecessary escalations by equipping SREs with immediate solutions",
                      "Reduce MTTR with intelligent alert prioritization",
                    ],
                    color: "from-pink-600 to-purple-600",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-left space-y-4"
                  >
                    <div className="text-center">
                      <div
                        className={`bg-gradient-to-br ${benefit.color} p-4 rounded-xl w-16 h-16 mx-auto flex items-center justify-center shadow-lg shadow-purple-500/20 mb-4`}
                      >
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-lg mb-4">{benefit.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {benefit.description.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
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
                Measurable benefits that drive{" "}
                <span className="font-semibold text-purple-600">real business outcomes</span>
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
                Our vision for the future of{" "}
                <span className="font-semibold text-purple-600">intelligent incident management</span>
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
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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
                Connect with your <span className="font-semibold text-purple-600">favorite tools</span> and platforms
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
                  Ready to <span className="font-semibold text-purple-600">transform your incident response</span>?
                  Let's talk about how OnCall Mate can help your team.
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
