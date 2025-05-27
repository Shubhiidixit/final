"use client"

import type React from "react"
import { motion } from "framer-motion"

export const InteractiveButton = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  [key: string]: any
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-pink-500/35",
    secondary:
      "bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 hover:from-orange-700 hover:via-pink-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-pink-500/35",
    ghost:
      "border-2 border-purple-300 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 hover:border-transparent hover:text-white hover:shadow-lg hover:shadow-purple-500/25",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-xl font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
