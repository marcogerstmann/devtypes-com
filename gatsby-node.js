const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/post.tsx`);
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create blog pages
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const id = post.node.id;
    const slug = post.node.frontmatter.slug;
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.frontmatter.slug,
      component: blogPost,
      context: {
        id,
        slug,
        previous,
        next
      }
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};
