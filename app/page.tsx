import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { FeaturesSection } from "@/components/features-section"
import { DashboardSection } from "@/components/dashboard-section"
import { ResultsSection } from "@/components/results-section"
import { PricingSection } from "@/components/pricing-section"
import { PaymentSection } from "@/components/payment-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <DashboardSection />
      <ResultsSection />
      <PricingSection />
      <PaymentSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <MobileCTA />
    </main>
  )
}
