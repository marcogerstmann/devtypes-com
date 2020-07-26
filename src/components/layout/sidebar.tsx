import * as React from 'react';
import { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Widget from '../../templates/widget';

const Sidebar: FunctionComponent = () => {
  const data = useStaticQuery(widgetsQuery);
  const { edges } = data.allMarkdownRemark;

  const widgets = edges
    .map(({ node }) => <Widget key={node.id} title={node.frontmatter.title} htmlContent={node.html}/>);

  return (
    <div className="sidebar">
      {widgets}
    </div>
  );
};

export default Sidebar;

export const widgetsQuery = graphql`
  query WidgetsQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { template: { eq: "widget" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
