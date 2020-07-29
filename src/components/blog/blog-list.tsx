import * as React from 'react';
import { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PostCard from './post-card';

const BlogList: FunctionComponent = () => {
  const result = useStaticQuery(query);

  const posts = result.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
        <PostCard key={edge.node.id}
                  title={edge.node.frontmatter.title}
                  slug={edge.node.frontmatter.slug}
                  date={edge.node.frontmatter.date}
                  featuredImage={edge.node.frontmatter.featuredImage}/>
      )
    );

  return (
    <section className="blog-posts">
      {posts}
    </section>
  );
};

export default BlogList;

const query = graphql`
  query BlogPostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`;
