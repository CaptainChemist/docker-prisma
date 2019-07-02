import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/main-layout';
import FeedList from '../components/feed';
import NewDraft from '../components/new-draft';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <NewDraft />
      <h1>Feed</h1>
      <FeedList published={true} />
      <h1>Hidden Feed</h1>
      <FeedList published={false} />
    </Layout>
  );
};

export default IndexPage;
