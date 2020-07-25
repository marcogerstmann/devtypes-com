import React from 'react';
import { graphql, Link } from 'gatsby';
import { RiArrowRightSLine } from 'react-icons/ri';

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
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO/>
      <div className="row">
        <div className="col-8">
          <BlogListHome/>
        </div>
        <div className="col-4">
          <div className="home-banner">
            <h1 className="title">{frontmatter.title}</h1>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link to={frontmatter.cta.ctaLink} className="button">
              {frontmatter.cta.ctaText}
              <span className="icon -right">
              <RiArrowRightSLine/>
            </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
