"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, TrendingDown, Activity, DollarSign, BarChart3, PieChart } from "lucide-react"

const recentTrades = [
  { pair: "XAUUSD", type: "BUY", profit: "+$127.50", pips: "+25", time: "2 min ago", status: "win" },
  { pair: "EURUSD", type: "SELL", profit: "+$84.20", pips: "+18", time: "15 min ago", status: "win" },
  { pair: "GBPUSD", type: "BUY", profit: "+$156.80", pips: "+32", time: "1 hr ago", status: "win" },
  { pair: "XAUUSD", type: "SELL", profit: "-$42.00", pips: "-8", time: "2 hr ago", status: "loss" },
  { pair: "USDJPY", type: "BUY", profit: "+$93.40", pips: "+21", time: "3 hr ago", status: "win" },
]

const monthlyPerformance = [
  { month: "Jan", profit: 2847, percentage: 12.4 },
  { month: "Feb", profit: 3215, percentage: 14.2 },
  { month: "Mar", profit: 2956, percentage: 11.8 },
  { month: "Apr", profit: 4123, percentage: 18.5 },
  { month: "May", profit: 3789, percentage: 15.9 },
  { month: "Jun", profit: 4567, percentage: 21.3 },
]

export function DashboardSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="dashboard" ref={containerRef} className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[rgba(212,175,55,0.02)] to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-gold rounded-full text-sm text-[#D4AF37] font-medium mb-4">
            Live Analytics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-space-grotesk)] mb-4">
            <span className="text-white">Real-Time Trading</span>
            <br />
            <span className="text-gradient-gold">Dashboard</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            Monitor your trading performance with our advanced analytics dashboard. 
            Track every metric that matters.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 rounded-3xl blur-3xl" />

          <div className="relative glass rounded-3xl p-6 lg:p-8 border border-[rgba(212,175,55,0.15)]">
            {/* Top Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Total Profit", value: "$24,567", change: "+18.2%", icon: DollarSign, positive: true },
                { label: "Win Rate", value: "87.3%", change: "+2.1%", icon: TrendingUp, positive: true },
                { label: "Total Trades", value: "1,247", change: "+124", icon: Activity, positive: true },
                { label: "Avg. Trade", value: "$19.70", change: "+$2.30", icon: BarChart3, positive: true },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-[#D4AF37]" />
                    <span className={`text-xs font-medium ${stat.positive ? "text-green-500" : "text-red-500"}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white font-[var(--font-space-grotesk)]">{stat.value}</p>
                  <p className="text-sm text-[#A1A1AA]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Equity Curve Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="lg:col-span-2 glass rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white font-[var(--font-space-grotesk)]">Equity Curve</h3>
                    <p className="text-sm text-[#A1A1AA]">Last 30 days performance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-sm font-medium">+32.4%</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                </div>
                
                {/* Chart placeholder with animated bars */}
                <div className="h-48 flex items-end justify-between gap-1 px-2">
                  {[45, 52, 48, 55, 50, 62, 58, 65, 60, 70, 68, 75, 72, 78, 74, 82, 80, 85, 83, 88, 86, 90, 88, 92, 90, 94, 92, 95, 93, 98].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#D4AF37] to-[#FFD700] rounded-t-sm opacity-80"
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${height}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + i * 0.02 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Win/Loss Distribution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <PieChart className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-lg font-semibold text-white font-[var(--font-space-grotesk)]">Win/Loss</h3>
                </div>
                
                {/* Circular chart placeholder */}
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="14"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="url(#goldGradient2)"
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeDasharray={440}
                      initial={{ strokeDashoffset: 440 }}
                      animate={isInView ? { strokeDashoffset: 440 * 0.13 } : {}}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                    <defs>
                      <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#FFD700" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gradient-gold font-[var(--font-space-grotesk)]">87%</span>
                    <span className="text-sm text-[#A1A1AA]">Win Rate</span>
                  </div>
                </div>
                
                <div className="flex justify-center gap-6">
                  <div className="text-center">
                    <p className="text-green-500 font-semibold">1,085</p>
                    <p className="text-xs text-[#A1A1AA]">Wins</p>
                  </div>
                  <div className="text-center">
                    <p className="text-red-500 font-semibold">162</p>
                    <p className="text-xs text-[#A1A1AA]">Losses</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row - Trade History & Monthly Performance */}
            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              {/* Recent Trades */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white font-[var(--font-space-grotesk)] mb-4">Recent Trades</h3>
                <div className="space-y-3">
                  {recentTrades.map((trade, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          trade.type === "BUY" ? "bg-green-500/20" : "bg-red-500/20"
                        }`}>
                          {trade.type === "BUY" ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{trade.pair}</p>
                          <p className="text-[#A1A1AA] text-xs">{trade.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold text-sm ${trade.status === "win" ? "text-green-500" : "text-red-500"}`}>
                          {trade.profit}
                        </p>
                        <p className="text-[#A1A1AA] text-xs">{trade.pips} pips</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Monthly Performance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white font-[var(--font-space-grotesk)] mb-4">Monthly Performance</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {monthlyPerformance.map((month, index) => (
                    <motion.div
                      key={month.month}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                      className="text-center p-3 rounded-lg bg-white/5 hover:bg-[#D4AF37]/10 transition-colors"
                    >
                      <p className="text-[#A1A1AA] text-xs mb-1">{month.month}</p>
                      <p className="text-green-500 font-semibold text-sm">+{month.percentage}%</p>
                      <p className="text-white text-xs">${month.profit.toLocaleString()}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
