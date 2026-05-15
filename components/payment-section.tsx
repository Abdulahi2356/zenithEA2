"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Copy, CheckCircle2, Smartphone, Wallet, ShieldCheck, ArrowRight } from "lucide-react"
const paymentMethods = [
  {
    id: "mpesa",
    name: "M-Pesa",
    icon: Smartphone,
    details: {
      number: "+254797860371",
      name: "Zenith EA",
      instructions: [
        "Go to M-Pesa on your phone",
        "Select Lipa na M-Pesa",
        "Enter the number above",
        "Enter the amount for your package",
        "Complete the transaction",
        "Send payment confirmation screenshot",
      ],
    },
  },
  {
    id: "crypto",
    name: "Crypto USDT TRC20",
    icon: Wallet,
    details: {
      address: "TAJxKaLGz69RyHyqYMXjAhbqGLLP3PqiNk",
      network: "TRC20 (Tron Network)",
      instructions: [
        "Open your crypto wallet",
        "Select USDT (TRC20 Network)",
        "Paste the wallet address above",
        "Enter the exact amount in USDT",
        "Confirm and send transaction",
        "Send transaction hash as proof",
      ],
    },
  },
]

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors"
    >
      {copied ? (
        <>
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span className="text-green-500 text-sm font-medium">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 text-[#A1A1AA]" />
          <span className="text-[#A1A1AA] text-sm font-medium">{label}</span>
        </>
      )}
    </motion.button>
  )
}

export function PaymentSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedMethod, setSelectedMethod] = useState<string>("mpesa")

  return (
    <section id="payment" ref={containerRef} className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 glass-gold rounded-full text-sm text-[#D4AF37] font-medium mb-4">
            Secure Payment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-space-grotesk)] mb-4">
            <span className="text-white">Complete Your</span>
            <br />
            <span className="text-gradient-gold">Purchase</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto">
            Choose your preferred payment method below. Instant access after payment confirmation.
          </p>
        </motion.div>
        {/* Payment Methods Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          {paymentMethods.map((method) => (
            <motion.button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                selectedMethod === method.id
                  ? "glass-gold border-2 border-[#D4AF37] gold-glow-sm"
                  : "glass border border-white/10 hover:border-[#D4AF37]/30"
              }`}
            >
              <method.icon className={`w-6 h-6 ${selectedMethod === method.id ? "text-[#D4AF37]" : "text-[#A1A1AA]"}`} />
              <span className={`font-semibold ${selectedMethod === method.id ? "text-white" : "text-[#A1A1AA]"}`}>
                {method.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Payment Details Card */}
        {paymentMethods.map((method) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: selectedMethod === method.id ? 1 : 0,
              y: selectedMethod === method.id ? 0 : 20,
              display: selectedMethod === method.id ? "block" : "none",
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="glass rounded-2xl p-6 lg:p-8 border border-[rgba(212,175,55,0.2)]">
              {/* Payment info header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold/10 flex items-center justify-center">
                  <method.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-[var(--font-space-grotesk)]">
                    Pay with {method.name}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm">
                    {method.id === "mpesa" ? "Mobile Money Payment" : "Cryptocurrency Payment"}
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Payment Details */}
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-[#A1A1AA] mb-4">Payment Details</h4>
                  
                  {method.id === "mpesa" ? (
                    <div className="space-y-4">
                      <div className="glass rounded-xl p-4">
                        <p className="text-sm text-[#A1A1AA] mb-2">M-Pesa Number</p>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold text-gradient-gold font-[var(--font-space-grotesk)]">
                            {method.details.number}
                          </p>
                          <CopyButton text={method.details.number as string} label="Copy" />
                        </div>
                      </div>
                      <div className="glass rounded-xl p-4">
                        <p className="text-sm text-[#A1A1AA] mb-2">Name</p>
                        <p className="text-lg font-semibold text-white">{method.details.name}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="glass rounded-xl p-4">
                        <p className="text-sm text-[#A1A1AA] mb-2">USDT Wallet Address (TRC20)</p>
                        <div className="flex flex-col gap-3">
                          <p className="text-sm font-mono text-[#D4AF37] break-all">
                            {method.details.address}
                          </p>
                          <CopyButton text={method.details.address || ""} label="Copy Address" />
                        </div>
                      </div>
                      <div className="glass rounded-xl p-4">
                        <p className="text-sm text-[#A1A1AA] mb-2">Network</p>
                        <p className="text-lg font-semibold text-white">{method.details.network}</p>
                      </div>
                      {/* QR Code placeholder */}
                       <div className="glass rounded-xl p-6 flex flex-col items-center">
                        <div className="w-32 h-32 bg-white rounded-lg p-2 mb-3">
                          <div className="w-full h-full bg-[#050505] rounded flex items-center justify-center">
                            <Wallet className="w-8 h-8 text-[#D4AF37]" />
                          </div>
                        </div>
                        <p className="text-sm text-[#A1A1AA]">Scan QR Code</p>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-[#A1A1AA] mb-4">Instructions</h4>
                  <div className="space-y-3">
                    {method.details.instructions.map((instruction, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-[#D4AF37]">{index + 1}</span>
                        </div>
                        <p className="text-white text-sm">{instruction}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="mt-8 p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Important</p>
                    <p className="text-[#A1A1AA] text-sm">
                      After completing your payment, please send the payment confirmation screenshot 
                      to our Telegram support for instant access verification.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://www.instagram.com/_.abdalla._2/"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-gradient-gold text-[#050505] rounded-full font-semibold gold-glow-sm"
              >
                Send Payment Proof
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
