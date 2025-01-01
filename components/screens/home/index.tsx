import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import Link from "next/link";

const Spacer = () => <div className="mt-6" />;

export default function Home() {
  return (
    <FadeIn.Container>
      <div className="flex flex-col min-h-svh">
        <main className="flex-grow-0">
          <FadeIn.Item>
            <div>
              <h1>Leonardo Betti</h1>
              <h2>
                aka{" "}
                <Link href="https://github.com/leonardobetti" target="_blank" className="underline">
                  @leonardobetti
                </Link>
              </h2>
            </div>
          </FadeIn.Item>
          <Spacer />
          <FadeIn.Item>
            <p>
              Product Designer living in London UK. Currently collaborating with UI and Design Systems for web and cloud-based products. I'm into chess, graphic
              novels and React components. Working at{" "}
              <Link href="https://www.kew.org/" className="underline" target="_blank">
                RGB
              </Link>
              . Opinions expressed are solely my own and do not express the views or opinions of my employer. Professional portfolio available{" "}
              <Link href="https://leonardobetti.co.uk/" className="underline" target="_blank">
                here
              </Link>
              . 
            </p>
          </FadeIn.Item>
          <FadeIn.Item>
            <Posts category="posts" />
          </FadeIn.Item>
        </main>
        <Spacer />
        <FadeIn.Item>
          <Footer />
        </FadeIn.Item>
      </div>
    </FadeIn.Container>
  );
}
