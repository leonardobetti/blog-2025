import Header from "@/components/header"
import Hero from "@/components/hero"
import SectionFSB from "@/components/section-fsb"
import SectionKew from "@/components/section-kew"
import SectionSpears from "@/components/section-spears"
import Section5E from "@/components/section-5e"
import SectionSeparator from "@/components/section-separator"
import SectionTripleImages from "@/components/section-triple-images"
import Footer from "@/components/footer"

export const dynamic = "force-static"
export const revalidate = 86400 // Revalidate once per day

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <Hero />
      <SectionSeparator />
      <SectionKew />
      <SectionSeparator />
      <SectionFSB />
      <SectionTripleImages />
      <SectionSeparator />
      <SectionSpears />
      <SectionSeparator />
      <Section5E />
      <Footer />
    </main>
  )
}
