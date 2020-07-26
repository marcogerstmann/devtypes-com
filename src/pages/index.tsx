import * as React from 'react'
import { FunctionComponent } from 'react';
import SEO from '../components/seo';
import BlogListHome from '../components/blog/blog-list-home';
import Layout from '../components/layout/layout';

const IndexPage: FunctionComponent = () => (
  <Layout>
    <SEO/>
    <BlogListHome/>
  </Layout>
);

export default IndexPage;
