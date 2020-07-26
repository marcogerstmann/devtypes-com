import * as React from 'react';
import { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`;
const AboutPage: FunctionComponent<any> = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds the post data
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

export default AboutPage;