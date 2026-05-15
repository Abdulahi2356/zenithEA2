"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Bot,
  Shield,
  Zap,
  Brain,
  TrendingUp,
  MessageSquare,
  Clock,
  Settings,
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Fully Automated Trading",
    description: "Set it and forget it. Zenith EA executes trades 24/7 without manual intervention, capturing opportunities around the clock.",
  },
  {
    icon: Shield,
    title: "Smart Risk Management",
    description: "Advanced algorithms protect your capital with dynamic stop-loss, position sizing, and drawdown limits.",
  },
  {
    icon: Zap,
    title: "High-Speed Execution",
    description: "Lightning-fast order execution ensures you never miss an entry or exit point, maximizing potential profits.",
  },
  {
    icon: Brain,
    title: "AI Market Analysis",
    description: "Machine learning algorithms analyze market conditions in real-time to identify high-probability trading setups.",
  },
  {
    icon: TrendingUp,
    title: "Gold & Forex Optimization",
    description: "Specifically optimized for XAUUSD and major currency pairs with proven backtested strategies.",
  },
  {
    icon: MessageSquare,
    title: "VVIP Signal Access",
    description: "Get exclusive access to premium trading signals and real-time market insights from professional traders.",
  },
  {
    icon: Clock,
    title: "24/7 Market Monitoring",
    description: "Continuous market surveillance ensures no trading opportunity is missed across all time zones.",
  },
  {
    icon: Settings,
    title: "Beginner Friendly Setup",
    description: "Easy installation with step-by-step guides. Start trading in minutes, no coding required.",
  },
]

export function FeaturesSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="features" ref={containerRef} className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-gold rounded-full text-sm text-[#D4AF37] font-medium mb-4">
            Why Choose Zenith EA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-space-grotesk)] mb-4">
            <span className="text-white">Powerful Features For</span>
            <br />
            <span className="text-gradient-gold">Serious Traders</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            Built with precision engineering and advanced algorithms to deliver consistent results in any market condition.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/10 group-hover:to-[#D4AF37]/5 rounded-2xl transition-all duration-500" />
              <div className="relative glass rounded-2xl p-6 h-full border border-transparent group-hover:border-[#D4AF37]/30 transition-all duration-500 group-hover:gold-glow-sm">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-gold/10 flex items-center justify-center mb-4 group-hover:bg-gradient-gold/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 font-[var(--font-space-grotesk)]">
                  {feature.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
