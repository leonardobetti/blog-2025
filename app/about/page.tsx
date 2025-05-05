import Header from "@/components/header"
import Footer from "@/components/footer"

export const dynamic = "force-static"
export const revalidate = 86400 // Revalidate once per day

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <section className="mx-auto mt-6 mb-8 max-w-screen-xl border-r border-b border-l border-slate-200 bg-white p-8 sm:p-12">
        <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">About</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground">
            I'm Leonardo Betti, a UX/UI Product Designer based in London, UK. I specialize in creating digital products
            that blend aesthetic purpose with functional elegance.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">My Approach</h2>
          <p>
            With a focus on product design, design systems, web design, and web applications, I create useful and
            scalable digital products from scratch. My design philosophy centers around creating intuitive, accessible,
            and visually appealing interfaces that solve real problems.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Experience</h2>
          <p>
            I've worked with various clients and companies to develop and maintain design systems, create user-centered
            interfaces, and implement effective design solutions. My experience includes work in the B2B sector,
            particularly with betting providers like FSB, where I maintained the Nest Design System.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Get in Touch</h2>
          <p>
            If you're interested in working together or have any questions about my work, feel free to reach out via
            email at leonardobetti [at] gmail [dot] com or connect with me on LinkedIn.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
