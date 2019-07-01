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

          if (data && "feed" in data && data.feed.length > 0) {
            return (
              <div>
                {data.feed.map(({ title, content }, i) => (
                  <p key={i}>
                    {title}-{content}
                  </p>
                ))}
              </div>
            );
          }

          return <p>No results yet.</p>;
        }}
      </FeedQueryComponent>
    </Layout>
  );
};

export default IndexPage;
