import * as React from 'react';
import { FunctionComponent } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const Page: FunctionComponent<any> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, excerpt } = markdownRemark;

  return (
    <Layout className="page">
      <SEO title={frontmatter.title} description={excerpt}/>
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
    </Layout>
  );
};

export default Page;
