import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DynamicBreadcrumbVideo from "@/components/fsb/dynamic-breadcrumb-video"

export const dynamic = "force-static"
export const revalidate = 86400 // Revalidate once per day

export default function FSBPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Content */}
      <div className="relative">
        {/* Header content - positioned to always stay above background */}
        <div className="mx-auto flex min-h-[25rem] w-11/12 flex-col justify-end pb-16 md:w-10/12 lg:w-7/12">
          <div className="space-y-2">
            <h1 className="mt-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">
              Maintaining Nest Design System
            </h1>
            <div className="text-sm text-slate-600">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                <p>
                  Sector: <span className="text-slate-600">Betting and Gambling Industry</span>
                </p>
                <p>
                  Timeline: <span className="text-slate-600">2021 → 2024</span>
                </p>
              </div>
              <div className="mt-4 space-y-7">
                <div className="relative w-full">
                  <Image
                    src="/fsb/FSB_1.webp"
                    alt="FSB Tech Design System"
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

        {/* Main content - below blue background */}
        <div className="mx-auto w-11/12 md:w-10/12 lg:w-7/12">
          <p className="py-2 text-lg text-gray-700">
            FSB Tech is a B2B provider offering a platform for building and customising betting products. The company
            provides a range of offerings, including casinos, iGaming, retail, and sportsbook solutions. I was
            responsible for designing UI screens and refining our existing design system to ensure our designs aligned
            with the overall product strategy.
          </p>
          <p className="py-2 text-lg text-gray-700">
            My role focused on developing and enhancing the visual and interactive elements of the user experience,
            while maintaining consistency and scalability across our product range and platforms.
          </p>
          <p className="py-2 text-lg text-gray-700">
            Our team was responsible for creating the FSB Nest Design System, which we use to build websites and apps
            for our clients. This design system adopts a centralised file to house the components and utilises Figma
            Variables to customise pages for our clients, ensuring both consistency and flexibility in our designs.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 w-11/12 border-b border-[#DBD8E0] md:w-10/12 lg:w-7/12"></div>

        {/* Second Featured Image */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="relative w-full">
            <Image
              src="/fsb/FSB_2a.png"
              alt="FSB Tech Design System Components"
              width={950}
              height={1203}
              className="w-full"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* Additional Images - Lazy loaded */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="relative w-full">
            <Image
              src="/fsb/FSB_3a.webp"
              alt="FSB Tech Design System Interface"
              width={950}
              height={500}
              className="w-full"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="relative w-full">
            <Image
              src="/fsb/FSB_4a.webp"
              alt="FSB Tech Design System Implementation"
              width={950}
              height={910}
              className="w-full"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 w-11/12 border-b border-[#DBD8E0] md:w-10/12 lg:w-7/12"></div>

        {/* Dynamic Breadcrumb Section */}
        <div className="mx-auto w-11/12 md:w-10/12 lg:w-7/12">
          <div className="mt-16 flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/3">
              <DynamicBreadcrumbVideo />
            </div>
            <div className="lg:w-2/3">
              <h3 className="text-xl font-semibold tracking-tight text-gray-950">Dynamic Breadcrumbs</h3>
              <div className="space-y-4 py-2 text-lg text-gray-700">
                <p className="leading-normal">
                  This component allows users to backtrack or switch between Categories and Subcategories smoothly,
                  helping them navigate the sportsbook more easily. This new feature is especially useful for punters
                  exploring various betting options. It makes it simpler to move through sports, leagues, matches, and
                  featured events, ensuring quick access to different areas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Companion App Section */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold tracking-tight text-gray-950">Companion App</h3>
              <p className="py-2 text-lg leading-normal text-gray-700">
                Product allows players to transfer bets placed within anonymous retail environments onto a digital
                wallet app via their smartphone with the ability to track it and cash it out at any time. The wager can
                also be transferred back to retail via a unique QR code.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/fsb/FSB_CompanionApp.png"
                  width={450}
                  height={400}
                  alt="FSB Companion App"
                  className="h-full w-full object-cover"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Account Signup Section */}
        <div className="mx-auto mb-16 mt-16 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/fsb/FSB_Login.png"
                  width={450}
                  height={430}
                  alt="FSB Social Account Login"
                  className="h-full w-full object-cover"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold tracking-tight text-gray-950">Signing up with social account</h3>
              <p className="py-2 text-lg leading-normal text-gray-700">
                Experience a simplified registration process by typing in your email address and password or signing up
                immediately with your social account.
              </p>
            </div>
          </div>
        </div>

        {/* Others Section */}
        <div className="mx-auto mb-16 mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/fsb/FSB_Others.png"
              width={930}
              height={560}
              alt="FSB Others"
              className="h-full w-full object-cover"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 w-11/12 border-b border-[#DBD8E0] md:w-10/12 lg:w-7/12"></div>

        {/* Text Sections */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <h3 className="text-xl font-semibold tracking-tight text-gray-950">Past Insights</h3>
          <p className="py-2 text-lg text-gray-700">
            Working on FSB Tech&apos;s design system Nest showed us important lessons about design. We learned that
            success is not about speed of creating mockups, but about making a system that works for clients worldwide.
            This meant adapting to different cultures and rules while keeping design consistent across markets and
            understanding the unique needs of various regions.
          </p>
          <p className="py-2 text-lg text-gray-700">
            As Nest developed, we faced challenges with complex UI files, frequent changes, and diverse gambling
            regulations. We discovered that designers and developers must work closely together. Often, the design in
            Figma did not match the final website, revealing a critical gap in our process. Bridging this gap requires
            constant communication and collaboration to ensure what we design matches what users ultimately see and
            experience.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
