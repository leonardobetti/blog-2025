import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export const dynamic = "force-static"
export const revalidate = 86400 // Revalidate once per day

export default function FiveEPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Content */}
      <div className="relative">
        {/* Header content */}
        <div className="mx-auto flex min-h-[25rem] w-11/12 flex-col justify-end pb-16 md:w-10/12 lg:w-7/12">
          <div className="space-y-2">
            <h1 className="mt-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">
              Transforming 5E&apos;s Digital Presence
            </h1>
            <div className="text-sm text-slate-600">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                <p>
                  Sector: <span className="text-slate-600">Education</span>
                </p>
                <p>
                  Timeline: <span className="text-slate-600">2018</span>
                </p>
              </div>
              <div className="mt-4 space-y-7">
                <div className="relative w-full">
                  <Image
                    src="/5e/5E_1a.png"
                    alt="5E Ltd Project Overview"
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
            5E Ltd is a social enterprise based in North and East London. It operates four centres, delivering
            vocational training and apprenticeships. The organisation offers industry-recognised qualifications in
            subjects like accounting, English, business, digital marketing, and ICT.
          </p>
          <p className="py-2 text-lg text-gray-700">
            5E&apos;s mission is to empower disadvantaged communities by helping unemployed individuals re-enter the
            workforce. Their services target diverse groups, refugees, lone parents, young people, non-native speakers,
            ex-offenders, and learners facing personal challenges.
          </p>
          <p className="py-2 text-lg text-gray-700">
            In April 2018, I joined 5E Ltd&apos;s Digital Marketing Team. My role involved creating ideas for new
            marketing campaigns, designing printed materials, assembling presentations, and supporting online presence
            improvement projects.
          </p>
          <p className="py-2 text-lg text-gray-700">
            The directors recognised the need for an effective online presence and decided to rebuild the company&apos;s
            website. The existing site, developed by an external collaborator, was outdated and failed to communicate
            5E&apos;s mission and services effectively.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 w-11/12 border-b border-[#DBD8E0] md:w-10/12 lg:w-7/12"></div>

        {/* Second Featured Image */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="relative w-full">
            <Image
              src="/5e/fivee_2a.png"
              alt="5E Ltd Website Design"
              width={950}
              height={710}
              className="w-full"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* Third Featured Image */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="relative w-full">
            <Image
              src="/5e/fivee_socialmedia.jpeg"
              alt="5E Ltd Social Media Campaign"
              width={950}
              height={710}
              className="w-full"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* Components Library Section */}
        <div className="mx-auto mt-16 w-11/12 md:w-10/12 lg:w-7/12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="relative w-full">
              <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-lg">
                <Image
                  src="/5e/fivee_1a.png"
                  alt="5E Ltd Component Library"
                  fill
                  className="object-cover"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-gray-950">Components Library</h3>
              <p className="text-lg text-gray-700">
                Leveraging Figma for our component library was instrumental in the project&apos;s success. I developed a
                streamlined system for the team, simplifying the creation and maintenance of webpages. Figma played a
                crucial role in maintaining brand consistency across all materials.
              </p>
            </div>
          </div>
        </div>

        {/* Automation Section */}
        <div className="mx-auto mt-16 w-11/12 md:w-10/12 lg:w-7/12">
          <h3 className="text-xl font-semibold tracking-tight text-gray-950">Automating Student Sign-Ups</h3>
          <p className="text-lg text-gray-700">
            The Design and Digital Marketing Department significantly improved the lead registration process. We
            implemented a two-step system: utilizing Google Forms for data collection and HubSpot for lead management
            and updates. This innovative approach proved highly effective in funneling leads and promoting our primary
            technical course.
          </p>
          <p className="py-2 text-lg text-gray-700">
            Google Forms streamlined the sign-up process for potential students, while HubSpot empowered our team to
            efficiently manage and follow up with leads over time. This automated approach resulted in increased lead
            generation, improved data accuracy, and more effective guidance towards our main course enrollment. Our
            flagship offering, the PC Maintenance course (PCM), particularly benefited from this streamlined process,
            seeing a notable uptick in student engagement and enrollment.
          </p>
        </div>

        {/* Impact Section */}
        <div className="mx-auto mt-16 w-11/12 md:w-10/12 lg:w-7/12">
          <h3 className="text-xl font-semibold tracking-tight text-gray-950">Impact</h3>
          <div className="space-y-2 text-lg text-gray-700">
            <ul className="list-inside list-disc">
              <li>27.3% rise in leads generated each month</li>
              <li>18 spreadsheets moved to HubSpot</li>
              <li>12 old pages removed from the website</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 w-11/12 border-b border-[#DBD8E0] md:w-10/12 lg:w-7/12"></div>

        {/* Past Insights Section */}
        <div className="mx-auto mt-8 w-11/12 md:w-10/12 lg:w-7/12">
          <h3 className="text-xl font-semibold tracking-tight text-gray-950">Past Insights</h3>
          <p className="text-lg text-gray-700">
            Maintaining consistency proved challenging due to numerous internal and external stakeholders. Effective
            training and documentation were essential to overcome this.
          </p>
          <p className="py-2 text-lg text-gray-700">
            Conducting interviews with 40 current students provided valuable insights into user needs, revealing
            significant gaps in the website&apos;s structure. This information was instrumental in reorganising the
            sitemap and realigning business objectives.
          </p>
          <p className="py-2 text-lg text-gray-700">
            Unfortunately, subsequent staff turnover hindered project continuity due to insufficient documentation and
            knowledge transfer, leading to a gradual decline in website and HubSpot CRM maintenance.
          </p>
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
