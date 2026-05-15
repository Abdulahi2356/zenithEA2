"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Star, Zap, MessageCircle, Bot } from "lucide-react"

const pricingPlans = [
  {
    name: "Zenith EA",
    price: "$249",
    description: "Lifetime license for automated trading",
    icon: Bot,
    features: [
      "Lifetime License",
      "Free Updates",
      "Installation Guide",
      "1 Device Access",
      "Email Support",
    ],
    buttonText: "Buy Now",
    highlighted: false,
  },
  {
    name: "Bundle Package",
    price: "$300",
    description: "Complete trading package with VVIP access",
    icon: Star,
    features: [
      "Zenith EA Lifetime Access",
      "VVIP Telegram Access",
      "Priority Support",
      "Premium Updates",
      "2 Device Access",
      "Direct Mentorship",
    ],
    buttonText: "Get Access",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "VVIP Access",
    price: "$99",
    description: "Exclusive trading signals and community",
    icon: MessageCircle,
    features: [
      "Telegram Trade Signals",
      "Market Analysis",
      "Community Access",
      "Trade Discussions",
      "Daily Updates",
    ],
    buttonText: "Join VVIP",
    highlighted: false,
  },
]

export function PricingSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="pricing" ref={containerRef} className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[rgba(212,175,55,0.03)] to-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-gold rounded-full text-sm text-[#D4AF37] font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-space-grotesk)] mb-4">
            <span className="text-white">Choose Your</span>
            <br />
            <span className="text-gradient-gold">Trading Plan</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            Select the package that fits your trading needs. All plans include lifetime access with no recurring fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-gold px-4 py-1.5 rounded-full flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#050505]" />
                    <span className="text-sm font-semibold text-[#050505]">{plan.badge}</span>
                  </div>
                </div>
              )}

              <div
                className={`relative h-full rounded-2xl p-6 lg:p-8 transition-all duration-500 ${
                  plan.highlighted
                    ? "glass-gold border-2 border-[#D4AF37] gold-glow"
                    : "glass border border-white/10 hover:border-[#D4AF37]/30"
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  plan.highlighted ? "bg-gradient-gold" : "bg-gradient-gold/10"
                }`}>
                  <plan.icon className={`w-7 h-7 ${plan.highlighted ? "text-[#050505]" : "text-[#D4AF37]"}`} />
                </div>

                {/* Plan name & description */}
                <h3 className="text-xl font-bold text-white font-[var(--font-space-grotesk)] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#A1A1AA] text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl lg:text-5xl font-bold text-gradient-gold font-[var(--font-space-grotesk)]">
                    {plan.price}
                  </span>
                  <span className="text-[#A1A1AA] ml-2">one-time</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? "bg-[#D4AF37]" : "bg-[#D4AF37]/20"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? "text-[#050505]" : "text-[#D4AF37]"}`} />
                      </div>
                      <span className="text-white text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <motion.a
                  href="#payment"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full py-4 rounded-full font-semibold text-center transition-all ${
                    plan.highlighted
                      ? "bg-gradient-gold text-[#050505] gold-glow-sm"
                      : "glass border border-[#D4AF37]/30 text-white hover:border-[#D4AF37]"
                  }`}
                >
                  {plan.buttonText}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 glass-gold px-6 py-3 rounded-full">
            <Check className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white font-medium">Secure Payment • Instant Access • Lifetime Updates</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
