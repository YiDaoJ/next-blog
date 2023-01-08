import CustomLink from "@/components/customLink";
import { getPostByFileName, getPostsSlugs } from "@/lib/getPosts";
import { IBlogPost } from "@/types/type";
import hljs from "highlight.js";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { useEffect } from "react";
import remarkGfm from "remark-gfm";

type PostFrontMatter = Omit<IBlogPost, "content" | "slug">;

// TODO: adapt type
const components: any = {
  a: CustomLink,
};

export const Post: NextPage<{
  frontMatter: PostFrontMatter;
  mdxSource: MDXRemoteSerializeResult;
}> = ({ frontMatter, mdxSource }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <article className="prose prose-stone dark:prose-invert md:prose-md lg:prose-lg tracking-wide w-full font-light">
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <h1>{frontMatter.title}</h1>
      <div className="opacity-60">{frontMatter.date}</div>
      <div className="my-12">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </article>
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
      rehypePlugins: [],
      development: false,
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
