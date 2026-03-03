import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"

import { AppShowcase } from "@/components/app-showcase"
import { StatsBar } from "@/components/stats-bar"
import { WhySection } from "@/components/why-section"
import { TapeLibrary } from "@/components/tape-library"
import { SocialProof } from "@/components/social-proof"
import { FounderNote } from "@/components/founder-note"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AppShowcase />
      <StatsBar />
      <WhySection />
      <TapeLibrary />
      <SocialProof />
      <FounderNote />
      <FinalCta />
      <Footer />
    </main>
  )
}
