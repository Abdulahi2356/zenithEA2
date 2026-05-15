"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does Zenith EA work?",
    answer: "Zenith EA is an automated trading system (Expert Advisor) that runs on MetaTrader 5. It analyzes market conditions using advanced algorithms and executes trades automatically based on predefined strategies. Once installed and configured, it operates 24/7 without manual intervention, identifying high-probability trading setups and managing risk automatically.",
  },
  {
    question: "Which broker is supported?",
    answer: "Zenith EA is compatible with any MT5 broker. We recommend brokers with low spreads and fast execution like Exness, IC Markets, Pepperstone, XM, and FxPro. The EA performs best with ECN/Raw spread accounts. We provide a broker recommendation guide after purchase to help you choose the best option.",
  },
  {
    question: "Is the license lifetime?",
    answer: "Yes! All our licenses are lifetime with no recurring fees. Once you purchase Zenith EA, you own it forever and receive free updates. There are no monthly subscriptions or hidden costs. Your license includes access to all future updates and improvements.",
  },
  {
    question: "How do I access the VVIP group?",
    answer: "After purchasing VVIP Access or the Bundle Package, you'll receive an invitation link to our exclusive Telegram group within minutes of payment confirmation. Simply send your payment proof to our support, and we'll verify and add you to the group where you'll get daily trading signals, market analysis, and direct access to our trading community.",
  },
  {
    question: "How long does setup take?",
    answer: "Setup typically takes 15-30 minutes. We provide detailed video tutorials and step-by-step installation guides. The process includes downloading MT5, installing the EA file, configuring your settings, and activating your license. Our support team is available to assist if you encounter any issues during setup.",
  },
  {
    question: "How do payments work?",
    answer: "We accept M-Pesa and Crypto (USDT TRC20). Simply select your preferred payment method, complete the transaction, and send the payment confirmation screenshot to our Telegram support. Once verified (usually within minutes), you'll receive instant access to your purchase including download links and installation guides.",
  },
  {
    question: "What are the minimum requirements?",
    answer: "You need a computer or VPS running Windows (for MT5), a trading account with any MT5 broker, minimum $100-$500 starting capital (recommended $500+), and a stable internet connection. We recommend using a VPS for 24/7 operation to ensure the EA runs continuously.",
  },
  {
    question: "Is my investment safe?",
    answer: "Zenith EA includes advanced risk management features including stop-loss, position sizing, and maximum drawdown limits. However, all trading involves risk and past performance doesn't guarantee future results. We recommend starting with an amount you can afford to lose and using proper risk management settings.",
  },
]

function FAQItem({ faq, isOpen, onToggle, index }: {
  faq: typeof faqs[0]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-0"
    >
      <motion.button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
        whileHover={{ x: 4 }}
      >
        <span className="text-white font-medium text-lg pr-8 group-hover:text-[#D4AF37] transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? "bg-[#D4AF37]" : "bg-white/10 group-hover:bg-[#D4AF37]/20"
          }`}
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? "text-[#050505]" : "text-[#D4AF37]"}`} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-[#A1A1AA] pb-6 pr-12 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" ref={containerRef} className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03),transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-gold rounded-full text-sm text-[#D4AF37] font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-space-grotesk)] mb-4">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto">
            Everything you need to know about Zenith EA and how to get started.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-6 lg:p-8 border border-[rgba(212,175,55,0.15)]"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass-gold rounded-2xl p-6 lg:p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-xl font-semibold text-white font-[var(--font-space-grotesk)]">
                Still have questions?
              </h3>
            </div>
            <p className="text-[#A1A1AA] mb-6">
              Can&apos;t find the answer you&apos;re looking for? Reach out to our support team.
            </p>
            <motion.a
              href="https://www.instagram.com/_.abdalla._2/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-[#050505] rounded-full font-semibold gold-glow-sm"
            >
              Contact Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
