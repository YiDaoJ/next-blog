import { getPostByFileName, getPostsSlugs } from "@/lib/getPosts";
import { IBlogPost } from "@/types/type";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const Post: NextPage<{ postData: IBlogPost; error?: string }> = ({
  postData,
  error,
}) => {
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div>{postData?.title}</div>
      <div>{postData?.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData?.contentHtml }} />
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
  try {
    const postData = await getPostByFileName(`${params.slug}.md`);
    return {
      props: {
        postData,
      },
    };
  } catch (e: any) {
    return {
      props: {
        error: e.message,
      },
    };
  }
};

export default Post;
