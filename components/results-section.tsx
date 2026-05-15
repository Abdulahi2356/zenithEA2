"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { CheckCircle2, TrendingUp, DollarSign, BarChart3, X } from "lucide-react"

const results = [
  {
    id: 1,
    type: "profit",
    title: "MT5 Trade History",
    description: "+$3,247 profit in 2 weeks",
    icon: TrendingUp,
    stats: { profit: "$3,247", trades: "156", winRate: "89%" },
  },
  {
    id: 2,
    type: "payout",
    title: "Verified Payout",
    description: "Withdrawal confirmation",
    icon: DollarSign,
    stats: { amount: "$5,000", method: "Bank Transfer", date: "May 2024" },
  },
  {
    id: 3,
    type: "growth",
    title: "Account Growth",
    description: "$1,000 to $8,500 in 3 months",
    icon: BarChart3,
    stats: { start: "$1,000", end: "$8,500", growth: "+750%" },
  },
  {
    id: 4,
    type: "profit",
    title: "Weekly Performance",
    description: "+$1,892 last week",
    icon: TrendingUp,
    stats: { profit: "$1,892", trades: "78", winRate: "86%" },
  },
  {
    id: 5,
    type: "payout",
    title: "M-Pesa Withdrawal",
    description: "Instant payout received",
    icon: DollarSign,
    stats: { amount: "$2,500", method: "M-Pesa", date: "May 2024" },
  },
  {
    id: 6,
    type: "growth",
    title: "Monthly Results",
    description: "Consistent 15-20% monthly",
    icon: BarChart3,
    stats: { monthly: "18.5%", yearly: "+221%", drawdown: "4.2%" },
  },
]

function ResultCard({ result, index, isInView }: { result: typeof results[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        animate={{ scale: isHovered ? 1.02 : 1 }}
        className="relative glass rounded-2xl overflow-hidden border border-transparent group-hover:border-[#D4AF37]/30 transition-all duration-500"
      >
        {/* Image placeholder area */}
        <div className="aspect-[4/3] bg-gradient-to-br from-[#0a0a0a] to-[#111] relative overflow-hidden">
          {/* Fake chart/screenshot visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full p-4">
              {/* Chart bars */}
              <div className="h-full flex items-end justify-center gap-1">
                {[40, 55, 45, 65, 50, 70, 60, 80, 55, 85, 70, 90].map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-4 rounded-t bg-gradient-to-t from-[#D4AF37] to-[#FFD700] opacity-60"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${height}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 + i * 0.03 }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          
          {/* Verified badge */}
          <div className="absolute top-4 right-4">
            <div className="glass-gold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs text-[#D4AF37] font-medium">Verified</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold/10 flex items-center justify-center">
              <result.icon className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-white font-semibold font-[var(--font-space-grotesk)]">{result.title}</h3>
              <p className="text-[#A1A1AA] text-sm">{result.description}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(result.stats).map(([key, value]) => (
              <div key={key} className="text-center p-2 rounded-lg bg-white/5">
                <p className="text-[#D4AF37] font-semibold text-sm">{value}</p>
                <p className="text-[#A1A1AA] text-xs capitalize">{key}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ResultsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedResult, setSelectedResult] = useState<typeof results[0] | null>(null)

  return (
    <section id="results" ref={containerRef} className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.05),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-gold rounded-full text-sm text-[#D4AF37] font-medium mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-space-grotesk)] mb-4">
            <span className="text-white">Verified Trading</span>
            <br />
            <span className="text-gradient-gold">Performance</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            Real results from real traders. View verified trading statements, 
            payouts, and account growth from our community.
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div key={result.id} onClick={() => setSelectedResult(result)} className="cursor-pointer">
              <ResultCard result={result} index={index} isInView={isInView} />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-[#A1A1AA] text-sm mt-12 max-w-2xl mx-auto"
        >
          * Trading involves risk. Past performance is not indicative of future results. 
          These results are from individual users and may not be typical.
        </motion.p>
      </div>

      {/* Modal */}
      {selectedResult && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedResult(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative glass rounded-2xl p-6 max-w-lg w-full border border-[#D4AF37]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedResult(null)}
              className="absolute top-4 right-4 text-[#A1A1AA] hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold/10 flex items-center justify-center">
                <selectedResult.icon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-xl text-white font-semibold font-[var(--font-space-grotesk)]">
                  {selectedResult.title}
                </h3>
                <p className="text-[#A1A1AA]">{selectedResult.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(selectedResult.stats).map(([key, value]) => (
                <div key={key} className="text-center p-4 rounded-xl bg-white/5">
                  <p className="text-2xl text-[#D4AF37] font-bold">{value}</p>
                  <p className="text-[#A1A1AA] text-sm capitalize">{key}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
