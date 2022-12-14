import type { NextPage } from "next";
import Head from "next/head";

// next.js typescript example: https://github.com/vercel/next.js/tree/canary/examples/with-typescript

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`YiDao's Blog`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="prose prose-stone dark:prose-invert md:prose-lg lg:prose-xl flex flex-col justify-center h-full">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <div>Hi I'm Xiao, a front-end developer.</div>
        <div>
          Here is my blog, the implementation and styling are still WIP.{" "}
        </div>
        <div>
          My blog could be written in English, Chinese or later also in German.
        </div>
      </main>
    </>
  );
};

export default Home;
