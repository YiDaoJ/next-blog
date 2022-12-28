import { PostItem } from "@/components/post";
import { getSortedPosts } from "@/lib/getPosts";
import { GetStaticProps, NextPage } from "next";

const Posts: NextPage<{ allPostsData: IBlogPost[] }> = ({ allPostsData }) => {
  return (
    <>
      <ul className="flex flex-col gap-8">
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
