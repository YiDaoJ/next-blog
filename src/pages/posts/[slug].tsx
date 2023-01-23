import CustomLink from "@/components/customLink";
import { Prose } from "@/components/prose";
import { ScrollToTop } from "@/components/scrollToTop";
import { getPostByFileName, getPostsSlugs } from "@/lib/getPosts";
import { IBlogPost } from "@/types/type";
import hljs from "highlight.js";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import imageSize from "rehype-img-size";
import remarkGfm from "remark-gfm";
import { Plugin } from "unified";

/**
 * render image in mdx
 * https://ironeko.com/posts/how-to-use-next-js-image-with-markdown-or-mdx
 * https://www.skovy.dev/blog/nextjs-image-with-mdx-bundler?seed=slxr9l
 * https://kylepfromer.com/blog/nextjs-image-component-blog/
 */

type PostFrontMatter = Omit<IBlogPost, "content" | "slug">;
interface ImageProps {
  src: string;
  alt: string;
  width?: string | number | undefined;
  height?: string | number | undefined;
}

// TODO: adapt type
const components: any = {
  a: CustomLink,
  img: ({ width, height, alt, src }: ImageProps) => (
    <Image
      width={width}
      height={height}
      layout="responsive"
      loading="lazy"
      alt={alt}
      src={src}
    />
  ),
};

export const Post: NextPage<{
  frontMatter: PostFrontMatter;
  mdxSource: MDXRemoteSerializeResult;
}> = ({ frontMatter, mdxSource }) => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 400
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Prose>
        <h1>{frontMatter.title}</h1>
        <div className="opacity-60">{frontMatter.date}</div>
        <div className="my-12">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </Prose>
      {showScrollButton && <ScrollToTop onClick={handleScrollToTop} />}
    </>
  );
};

// returns an array of possible values for id / slug
// MUST export!
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostsSlugs();
  return {
    paths,
    fallback: false,
  };
};

// fetch necessary data for the post with id / slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostByFileName(`${params?.slug}.mdx`);
  const { content: source, date, title, language } = postData;
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[imageSize as Plugin, { dir: "public" }]],
    },
  });

  return {
    props: {
      frontMatter: { date, title, language } as PostFrontMatter,
      mdxSource,
    },
  };
};

export default Post;
