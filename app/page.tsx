import { BlogPosts } from "app/components/posts";
import Link from "next/link";
import { Header } from "app/components/header";
import Balancer from "react-wrap-balancer";

export default function Page() {
  return (
    <section>
      <Header />
      <p className="mb-4 mt-8 text-neutral-600 dark:hover:text-indigo-500">
        <Balancer>
          Product Designer living in London UK. Working at{" "}
          <Link
            href="https://www.kew.org/"
            className="underline"
            target="_blank"
          >
            RBG
          </Link>
          . Currently collaborating with UI and Design Systems for web and
          cloud-based products. I'm into chess, graphic novels and React
          components. Opinions expressed are solely my own and do not express
          the views or opinions of my employer. Professional portfolio available{" "}
          <Link
            href="https://leonardobetti.co.uk/"
            className="underline"
            target="_blank"
          >
            here
          </Link>
          .
        </Balancer>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
