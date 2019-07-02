import * as React from 'react';
import Layout from '../components/layout';
import { NextPage } from 'next';

import { FeedQueryComponent } from '../generated/apollo-components';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <FeedQueryComponent>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          if (data && 'feed' in data && data.feed.length > 0) {
            return (
              <React.Fragment>
                {data.feed.map(({ title, content }, i) => (
                  <p key={i}>
                    {title}-{content}
                  </p>
                ))}
              </React.Fragment>
            );
          }

          return <p>No results yet.</p>;
        }}
      </FeedQueryComponent>
    </Layout>
  );
};

export default IndexPage;
