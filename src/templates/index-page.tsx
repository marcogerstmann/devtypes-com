import * as React from 'react';
import { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import BlogListHome from '../components/blog/blog-list-home';
import SEO from '../components/seo';

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;

const HomePage: FunctionComponent<any> = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO/>
      <div className="row">
        <div className="col-md-8">
          <BlogListHome/>
        </div>
        <div className="col-md-4">
          <div className="home-banner">
            <h1 className="title">{frontmatter.title}</h1>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
