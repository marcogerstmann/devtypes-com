import * as React from 'react';
import { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Navigation from './navigation';
import Header from './header';
import Logo from './logo';
import Footer from './footer';
import Sidebar from './sidebar';
import '../../assets/scss/style.scss';

const Layout: FunctionComponent<any> = ({ children, className }) => {
  const { site } = useStaticQuery(query);
  const { siteTitle } = site.siteMetadata;

  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle}/>
        <Navigation/>
      </Header>

      <main className="container">
        <div className="row">
          <div className="col-md-8">
            <main className={'container ' + className}>{children}</main>
          </div>
          <div className="col-md-4">
            <Sidebar/>
          </div>
        </div>
      </main>

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
