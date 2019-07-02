import * as React from 'react';
import Layout from '../components/layout';
import { NextPage } from 'next';
import PostsList from '../components/posts';
import NewDraft from '../components/new-draft';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <NewDraft />
      <PostsList />
    </Layout>
  );
};

export default IndexPage;
