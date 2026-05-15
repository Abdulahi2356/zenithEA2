"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { TrendingUp, BarChart3, Users, Award, CheckCircle2 } from "lucide-react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  {
    icon: TrendingUp,
    value: 87,
    suffix: "%",
    label: "Win Rate",
    description: "Verified performance",
  },
  {
    icon: BarChart3,
    value: 12000,
    suffix: "+",
    label: "Trades Executed",
    description: "And counting",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Active Users",
    description: "Worldwide",
  },
  {
    icon: Award,
    value: 0,
    suffix: "",
    label: "XAUUSD & Major Pairs",
    description: "Optimized trading",
    isText: true,
  },
]

const badges = [
  { label: "MT5 Compatible", icon: CheckCircle2 },
  { label: "Verified Payouts", icon: CheckCircle2 },
  { label: "24/7 Automated", icon: CheckCircle2 },
]

export function TrustBar() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[rgba(212,175,55,0.03)] to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:gold-glow-sm transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-gold/10 mb-4 group-hover:bg-gradient-gold/20 transition-colors">
                <stat.icon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gradient-gold font-[var(--font-space-grotesk)] mb-2">
                {stat.isText ? (
                  "Optimized"
                ) : (
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-[#A1A1AA] text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="glass-gold px-4 py-2 rounded-full flex items-center gap-2"
            >
              <badge.icon className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-white font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Broker Compatibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-[#A1A1AA] text-sm uppercase tracking-wider mb-6">
            Compatible With Leading Brokers
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {["EXNESS", "IC MARKETS", "PEPPERSTONE", "XM", "FXPRO"].map((broker) => (
              <div
                key={broker}
                className="text-white font-semibold text-lg tracking-wide font-[var(--font-space-grotesk)]"
              >
                {broker}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
