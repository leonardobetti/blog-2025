import Header from "@/components/header"
import Hero from "@/components/hero"
import SectionFSB from "@/components/section-fsb"
import SectionLovers from "@/components/section-lovers"
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
      <SectionLovers />
      <SectionSeparator />
      <SectionFSB />
      <SectionTripleImages />
      <Footer />
    </main>
  )
}
