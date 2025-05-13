import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export const dynamic = "force-static"
export const revalidate = 86400 // Revalidate once per day

export default function SpearsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Content */}
      <div className="relative">
        {/* Header content */}
        <div className="mx-auto flex min-h-[25rem] w-11/12 flex-col justify-end pb-16 md:w-10/12 lg:w-7/12">
          <div className="space-y-2">
            <h1 className="mt-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">
              Digital Directory for Wealth Advisors
            </h1>
            <div className="text-sm text-slate-600">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                <p>
                  Sector: <span className="text-slate-600">Media Industry</span>
                </p>
                <p>
                  Timeline: <span className="text-slate-600">2021 → 2024</span>
                </p>
              </div>
              <div className="mt-4 space-y-7">
                <div className="relative w-full">
                  <Image
                    src="/spears/Spears_1a.png"
                    alt="Spears 500 Platform"
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

        {/* Description Section */}
        <div className="mx-auto w-11/12 md:w-10/12 lg:w-7/12">
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Spear&apos;s magazine is a respected media brand that comprehensively covers global wealth, business, and
              culture. It is a reliable source of information for the affluent financial services sector, including
              bankers, lawyers, and family offices who advise wealthy clients. It is held in high esteem by the
              ultra-high-net-worth (UHNW) community.
            </p>
            <p>
              Since its inception in 2006, Spear&apos;s has established itself as a leading authority on wealth
              management in the UK and Europe. The magazine is also known for its incisive commentary on the latest
              arts, business, and lifestyle trends.
            </p>
            <p>
              Spear&apos;s has long relied on its print magazine to attract new readers and generate advertising revenue
              for its digital platform. However, with limited potential for lead generation and ongoing investment, the
              magazine&apos;s traditional mechanics needed to be revised to sustain long-term growth.
            </p>
            <p>
              In response to these challenges, Spear&apos;s team requested innovative strategies to expand its reach,
              attract new advisors, and increase brand awareness. It was time to get creative and develop a solution to
              increase website traffic and social media engagement.
            </p>
          </div>
        </div>

        {/* Project Development Section */}
        <div className="mx-auto mt-16 w-11/12 md:w-10/12 lg:w-7/12">
          <h3 className="text-xl font-semibold tracking-tight text-gray-950">Project Development</h3>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Our team brainstormed with Growth to create a web tool to attract new readers to Spear&apos;s. Ideas were
              evaluated with the ICE framework to select the best approach. Success metrics, user stories, and goals
              guided the design of user journeys for both Spear&apos;s readers and new financial advisors.
            </p>
            <p>
              The proposal was to build Spears500.com, a platform for UHNW clients to find advisers based on attributes
              like expertise and location. The tool also provides advisers exposure to potential clients and includes
              plans to expand Spear&apos;s directory, driving more leads.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="mx-auto mt-16 w-11/12 md:w-10/12 lg:w-7/12">
          <h3 className="text-xl font-semibold tracking-tight text-gray-950">Process</h3>
          <ul className="list-inside list-disc space-y-2 text-lg text-gray-700">
            <li>Define metrics and proposal</li>
            <li>Prepare website sitemap, navigation and taxonomy</li>
            <li>Create wireframes, prototype and test</li>
            <li>Develop a simple design system + UI designs</li>
          </ul>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 w-11/12 border-b border-[#DBD8E0] md:w-10/12 lg:w-7/12"></div>

        {/* Design System Image */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="relative w-full">
            <Image
              src="/spears/Spears2.webp"
              alt="Spears 500 Design System"
              width={950}
              height={710}
              className="w-full"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* Wireframes Image */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="relative w-full">
            <Image
              src="/spears/Spears3.webp"
              alt="Spears 500 Wireframes"
              width={950}
              height={710}
              className="w-full"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* UI Components Image */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="relative w-full">
            <Image
              src="/spears/Spears4.webp"
              alt="Spears 500 UI Components"
              width={950}
              height={710}
              className="w-full"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* Final Screens Image */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="relative w-full">
            <Image
              src="/spears/Spears5.webp"
              alt="Spears 500 Final Screens"
              width={950}
              height={710}
              className="w-full"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 w-11/12 border-b border-[#DBD8E0] md:w-10/12 lg:w-7/12"></div>

        {/* Results Section */}
        <div className="mx-auto mb-16 mt-16 w-11/12 md:w-10/12 lg:w-7/12">
          <h3 className="text-xl font-semibold tracking-tight text-gray-950">Results</h3>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Currently, the Spears 500 website attracts approximately 6.5K monthly visits, where visitors spend an
              average of 1 minute and 38 seconds per visit and view 1.5 pages on average.
            </p>
            <p>
              The website is constantly updated, with the marketing team introducing new streams of income by
              implementing sponsored tags such as Top 10 Recommended, Featured, Top Ten, and Top Flight for profiles and
              companies.
            </p>
            <p>
              In addition, we have made the decision to disable the internal blog on the Spears 500 website and instead
              utilise the Spear&apos;s Magazine blog. This allows for a more streamlined approach to content creation,
              providing readers with a centralised location for all news and articles related to the UHNW community.
            </p>
            <p>
              Since the launch of the new website, the private client directory has increased by 36% Furthermore, the
              Spears 500 print report is still published annually and includes 2,3+ profiles spread across 600 pages.
            </p>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="mx-auto mb-16 mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
