import * as React from 'react';
import { FunctionComponent } from 'react';
import Layout from '../components/layout/layout';
import BlogListHome from '../components/blog/blog-list-home';
import SEO from '../components/seo';

const HomePage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO/>
      <BlogListHome/>
    </Layout>
  );
};

export default HomePage;
