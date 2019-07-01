import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";

import { FeedQueryComponent } from "../generated/apolloComponents";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <FeedQueryComponent>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }
          if (error) {
            return <p>Error</p>;
          }
          console.log(data);

          // const { feed } = data;
          // console.log(feed);
          return <p>hi</p>;
          // return (
          //   <div>
          //     {feed.map(post => (
          //       <p>
          //         {post.title}-{post.message}
          //       </p>
          //     ))}
          //   </div>
          // );
        }}
      </FeedQueryComponent>
    </Layout>
  );
};

export default IndexPage;
