import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-lg font-semibold tracking-tighter mb-2">
          Blog - Leonardo Betti
        </h1>
        <h2 className="mt-2 text-sm text-neutral-600">
          aka{' '}
          <Link
            href="https://github.com/leonardobetti"
            target="_blank"
            className="underline"
          >
            @leonardobetti
          </Link>
        </h2>
      </div>
      <p className="mb-4 text-neutral-600">
        Product Designer living in London UK. Currently collaborating with UI
        and Design Systems for web and cloud-based products. I'm into chess,
        graphic novels and React components. Working at{' '}
        <Link href="https://www.kew.org/" className="underline" target="_blank">
          RGB
        </Link>
        . Opinions expressed are solely my own and do not express the views or
        opinions of my employer. Professional portfolio available{' '}
        <Link
          href="https://leonardobetti.co.uk/"
          className="underline"
          target="_blank"
        >
          here
        </Link>
        .
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
