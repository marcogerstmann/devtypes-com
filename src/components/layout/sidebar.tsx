import * as React from 'react';
import { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Widget from '../../templates/widget';

const Sidebar: FunctionComponent = () => {
  const data = useStaticQuery(widgetsQuery);

  const widgets = data.allMarkdownRemark.edges
    .map(w => <Widget key={w.node.id} title={w.node.frontmatter.title} htmlContent={w.node.html}/>);

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
