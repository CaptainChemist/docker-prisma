import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { Query } from 'react-apollo';
// @ts-ignore
import feedQuery from '../graphql/queries/feed.gql';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Query query={feedQuery}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>;
            }
            if (error) {
              return <p>Error</p>;
            }
            console.log(data);

            return <p>hi</p>;
          }}
        </Query>
      </p>
    </Layout>
  );
};

export default IndexPage;
