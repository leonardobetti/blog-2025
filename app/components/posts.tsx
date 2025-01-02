import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col mb-4 space-y-1 hover:text-indigo-500"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col w-full">
              <p className="flex items-center font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-500">
                <span className="mr-2">•</span>
                {post.metadata.title}
              </p>
              <p className="mb-1 ml-4 text-sm text-neutral-600 dark:text-neutral-400 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
