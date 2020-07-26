import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Logo from './logo';
import Navigation from './navigation';
import Footer from './footer';
import '../../assets/scss/style.scss';
import { FunctionComponent } from 'react';

const Layout: FunctionComponent<any> = ({ children, className }) => {
  const { site } = useStaticQuery(query);
  const { siteTitle } = site.siteMetadata;

  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle}/>
        <Navigation/>
      </Header>
      <main className={'container ' + className}>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`;
