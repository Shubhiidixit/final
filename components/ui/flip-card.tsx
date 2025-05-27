"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const FlipCard = ({ feature, index }: { feature: any; index: number }) => {
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
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-16 h-16 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-gray-600">{feature.description}</CardDescription>
            </CardHeader>
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
