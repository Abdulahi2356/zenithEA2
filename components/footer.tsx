"use client"

import { motion } from "framer-motion"
import { Send, Instagram, Mail, ExternalLink, Target } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Results", href: "#results" },
    { name: "FAQ", href: "#faq" },
  ],
  legal: [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Risk Disclosure", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
  social: [
    { name: "Telegram", icon: Send, href: "https://t.me/abdalla_37" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/_.abdalla._2/" },
    { name: "Email", icon: Mail, href: "mailto:support@zenithea.com" },
  ],
}

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-[#050505]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-[#050505] font-bold text-xl font-[var(--font-space-grotesk)]">Z</span>
              </div>
              <span className="text-xl font-bold font-[var(--font-space-grotesk)] text-white">
                Zenith<span className="text-gradient-gold">EA</span>
              </span>
            </motion.a>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
              Advanced automated Forex trading designed for traders who demand precision, 
              speed, and consistent execution.
            </p>
            {/* Social links */}
           <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center hover:border-[#D4AF37]/50 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-[#A1A1AA] hover:text-[#D4AF37] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white font-semibold font-[var(--font-space-grotesk)] mb-6">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-white font-semibold font-[var(--font-space-grotesk)] mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-[var(--font-space-grotesk)] mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="https://t.me/abdalla_37"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#D4AF37] transition-colors text-sm"
              >
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                  <Send className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white font-medium">Telegram</p>
                  <p className="text-xs">@ZenithEA_Support</p>
                </div>
              </a>
              <a
                href="mailto:support@zenithea.com"
                className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#D4AF37] transition-colors text-sm"
              >
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-xs">support@zenithea.com</p>
                </div>
              </a>

              <a
               href="https://www.instagram.com/_.abdalla._2/"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#D4AF37] transition-colors text-sm"
            >
           <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
         <Instagram className="w-5 h-5 text-[#D4AF37]" />
       </div>
  
  <div>
    <p className="text-white font-medium">Instagram</p>
    <p className="text-xs">@_.abdalla._2</p>
  </div>
</a>


            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="glass rounded-xl p-6 mb-12 border border-[#D4AF37]/10">
          <h5 className="text-[#D4AF37] font-semibold text-sm mb-2">Risk Disclaimer</h5>
          <p className="text-[#A1A1AA] text-xs leading-relaxed">
            Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. 
            The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange, 
            you should carefully consider your investment objectives, level of experience, and risk appetite. 
            Past performance is not indicative of future results. There is a possibility that you could sustain a loss 
            of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-[#A1A1AA] text-sm">
            © {new Date().getFullYear()} Zenith EA. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[#A1A1AA] text-sm">
            <span>Built with</span>
            <span className="text-[#D4AF37]">♦</span>
            <span>for traders worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}