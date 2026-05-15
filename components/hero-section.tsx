"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react"
import { useState, useEffect } from "react"

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)
    targetDate.setHours(23, 59, 59, 999)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="glass-gold px-3 sm:px-4 py-2 sm:py-3 rounded-lg min-w-[50px] sm:min-w-[60px]">
            <span className="text-xl sm:text-2xl font-bold text-gradient-gold font-[var(--font-space-grotesk)]">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-[#A1A1AA] mt-1">{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-30"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * 800,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

function TradingDashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-full max-w-4xl mx-auto perspective-1000"
    >
      {/* Glow effects */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/10 to-[#D4AF37]/20 rounded-3xl blur-3xl" />
      
      <div className="relative glass rounded-2xl p-4 sm:p-6 border border-[rgba(212,175,55,0.2)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 text-[#D4AF37] text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Live Trading</span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Win Rate", value: "87%", icon: TrendingUp, color: "text-green-500" },
            { label: "Today&apos;s Profit", value: "+$1,247", icon: Zap, color: "text-[#D4AF37]" },
            { label: "Active Trades", value: "3", icon: Play, color: "text-blue-400" },
            { label: "Risk Level", value: "Low", icon: Shield, color: "text-green-400" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="glass p-4 rounded-xl"
            >
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <p className="text-[#A1A1AA] text-xs">{stat.label}</p>
              <p className={`text-lg sm:text-xl font-bold ${stat.color} font-[var(--font-space-grotesk)]`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="glass rounded-xl p-4 h-48 sm:h-64 relative overflow-hidden">
          <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
              <motion.div
                key={i}
                className="w-full max-w-[30px] bg-gradient-to-t from-[#D4AF37] to-[#FFD700] rounded-t-sm mx-0.5"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 1, delay: 1 + i * 0.05 }}
              />
            ))}
          </div>
          {/* Chart line overlay */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <motion.path
              d="M0,150 Q50,120 100,100 T200,80 T300,60 T400,70 T500,40 T600,50 T700,30"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.1),transparent_50%)]" />
      <FloatingParticles />

      {/* Gold orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="glass-gold px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-[#D4AF37] font-medium">Live Automated Trading</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 font-[var(--font-space-grotesk)] leading-tight"
        >
          <span className="text-white">Zenith EA</span>
          <br />
          <span className="text-gradient-gold">Automated Trading</span>
          <br />
          <span className="text-white">Built For Precision</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#A1A1AA] text-center max-w-3xl mx-auto mb-10 text-balance"
        >
          Advanced automated Forex trading designed for traders who demand precision, 
          speed, and consistent execution. Experience the future of algorithmic trading.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#pricing"
            className="group px-8 py-4 bg-gradient-gold text-[#050505] rounded-full font-semibold text-lg flex items-center gap-2 gold-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Buy Zenith EA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#pricing"
            className="px-8 py-4 glass border border-[#D4AF37]/30 text-white rounded-full font-semibold text-lg hover:border-[#D4AF37] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join VVIP
          </motion.a>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-[#A1A1AA] mb-4 text-sm uppercase tracking-wider">
            Limited Access Offer Ends In
          </p>
          <div className="flex justify-center">
            <CountdownTimer />
          </div>
        </motion.div>

        {/* Dashboard Mockup */}
        <TradingDashboardMockup />
      </div>
    </section>
  )
}
