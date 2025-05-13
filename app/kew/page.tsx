import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const dynamic = "force-static"
export const revalidate = 86400 // Revalidate once per day

export default function KewPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Content */}
      <div className="relative">
        {/* Header content */}
        <div className="mx-auto flex min-h-[25rem] w-11/12 flex-col justify-end pb-16 md:w-10/12 lg:w-7/12">
          <div className="space-y-2">
            <h1 className="mt-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">
              Kew Gardens Digital Experience
            </h1>
            <div className="text-sm text-slate-600">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                <p>
                  Sector: <span className="text-slate-600">Botanical Gardens & Tourism</span>
                </p>
                <p>
                  Timeline: <span className="text-slate-600">2023 → 2024</span>
                </p>
              </div>
              <div className="mt-4 space-y-7">
                <div className="relative w-full">
                  <Image
                    src="/kew/1-kew.webp"
                    alt="Kew Gardens Temperate House"
                    width={950}
                    height={710}
                    className="w-full"
                    quality={85}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mx-auto w-11/12 md:w-10/12 lg:w-7/12">
          <p className="py-2 text-lg text-gray-700">
            Kew Gardens, a UNESCO World Heritage site, houses the largest and most diverse botanical collections in the
            world. The project focused on redesigning the digital experience to better showcase these collections and
            improve visitor engagement.
          </p>
          <p className="py-2 text-lg text-gray-700">
            My role involved creating a cohesive design system that would work across multiple platforms, from the main
            website to interactive kiosks throughout the gardens. The goal was to create an immersive experience that
            would complement the physical visit while providing valuable information to visitors.
          </p>
          <p className="py-2 text-lg text-gray-700">
            The design approach emphasized the natural beauty of Kew Gardens, using a clean, minimal interface that
            allows the rich visual content to take center stage. Special attention was paid to accessibility, ensuring
            that the digital experience would be available to all visitors.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 w-11/12 border-b border-[#DBD8E0] md:w-10/12 lg:w-7/12"></div>

        {/* Coming Soon Message */}
        <div className="mx-auto my-16 w-11/12 text-center md:w-10/12 lg:w-7/12">
          <h2 className="text-2xl font-semibold text-gray-800">Full Case Study Coming Soon</h2>
          <p className="mt-4 text-lg text-gray-600">
            We're currently finalizing the details of this project. Check back soon for a comprehensive case study
            showcasing the design process, challenges, and outcomes.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
