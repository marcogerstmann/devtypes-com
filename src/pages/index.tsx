import * as React from 'react'
import { FunctionComponent } from 'react';
import SEO from '../components/seo';
import BlogList from '../components/blog/blog-list';
import Layout from '../components/layout/layout';

const IndexPage: FunctionComponent = () => (
  <Layout>
    <SEO/>
    <BlogList/>
  </Layout>
);

export default IndexPage;
