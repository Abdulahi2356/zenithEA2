"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "James M.",
    location: "Kenya",
    avatar: "JM",
    rating: 5,
    profit: "+$2,847",
    text: "Best EA I've used so far. The execution is extremely accurate and the risk management is solid. Made my investment back in the first month.",
  },
  {
    id: 2,
    name: "Sarah K.",
    location: "Nigeria",
    avatar: "SK",
    rating: 5,
    profit: "+$4,125",
    text: "The VVIP signals are top tier. Combined with the EA, I've seen consistent profits every week. Support team is also very responsive.",
  },
  {
    id: 3,
    name: "Michael O.",
    location: "South Africa",
    avatar: "MO",
    rating: 5,
    profit: "+$3,567",
    text: "I was skeptical at first, but the results speak for themselves. The EA runs 24/7 and I wake up to profits. Highly recommend the bundle package.",
  },
  {
    id: 4,
    name: "David L.",
    location: "UK",
    avatar: "DL",
    rating: 5,
    profit: "+$5,890",
    text: "Professional grade EA with institutional-level execution. The gold optimization is particularly impressive. Worth every penny.",
  },
  {
    id: 5,
    name: "Grace N.",
    location: "Ghana",
    avatar: "GN",
    rating: 5,
    profit: "+$1,932",
    text: "Setup was incredibly easy. Within 30 minutes I had the EA running. The community in the VVIP group is also very helpful.",
  },
  {
    id: 6,
    name: "Robert T.",
    location: "Tanzania",
    avatar: "RT",
    rating: 5,
    profit: "+$3,215",
    text: "The AI market analysis feature is a game changer. It adapts to market conditions and avoids trading during volatile news events.",
  },
]

export function TestimonialsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, totalPages])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  )

  return (
    <section ref={containerRef} className="relative py-24 px-4 overflow-hidden">
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-space-grotesk)] mb-4">
            <span className="text-white">What Our Traders</span>
            <br />
            <span className="text-gradient-gold">Are Saying</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied traders who have transformed their trading with Zenith EA.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#D4AF37]" />
            </motion.button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#D4AF37]" />
            </motion.button>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative glass rounded-2xl p-6 h-full border border-transparent group-hover:border-[#D4AF37]/30 transition-all duration-500 group-hover:gold-glow-sm">
                  {/* Quote icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-[#D4AF37]/20" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-white text-sm leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Profit badge */}
                  <div className="inline-block px-3 py-1.5 rounded-full bg-green-500/10 mb-6">
                    <span className="text-green-500 font-semibold text-sm">{testimonial.profit}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                      <span className="text-[#050505] font-bold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-[#A1A1AA] text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-8 bg-[#D4AF37]"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 lg:hidden">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full glass border border-[#D4AF37]/30 flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white text-sm">Prev</span>
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full glass border border-[#D4AF37]/30 flex items-center gap-2"
            >
              <span className="text-white text-sm">Next</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
