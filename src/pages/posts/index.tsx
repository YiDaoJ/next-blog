import { PostItem } from "@/components/post";
import { getSortedPosts } from "@/lib/getPosts";
import { IBlogPost } from "@/types/type";
import clsx from "clsx";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const Posts: NextPage<{ allPostsData: IBlogPost[] }> = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>{`YiDao's Blog`}</title>
      </Head>
      <ul
        className={clsx(
          "lg:w-[40rem] md:w-[35rem] w-full max-w-screen-sm",
          "flex flex-col gap-10"
        )}
      >
        {allPostsData.map((post: IBlogPost) => (
          <PostItem post={post} key={post.slug} />
        ))}
      </ul>
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
};
