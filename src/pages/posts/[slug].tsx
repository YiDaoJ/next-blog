import { getPostByFileName, getPostsSlugs } from "@/lib/getPosts";
import { IBlogPost } from "@/types/type";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";

export const Post: NextPage<{
  postData: IBlogPost;
  mdxSource: MDXRemoteSerializeResult;
}> = ({ postData, mdxSource }) => {
  return (
    <article>
      <Head>
        <title>{postData?.title}</title>
      </Head>
      <div>{postData?.title}</div>
      <div>{postData?.date}</div>
      <MDXRemote {...mdxSource} />
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
  const source = postData.content;
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      development: false,
    },
  });

  return { props: { postData, mdxSource } };
};

export default Post;
