import * as React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { RiHeart2Line } from 'react-icons/ri';

const Footer: FunctionComponent = () => (
  <footer className="site-footer">
    <div className="container">
      <p>
        A GatsbyJS Starter for Netlify CMS, Made with{' '}
        <span className="icon -love">
          <RiHeart2Line/>
        </span>{' '}
        by <Link to="/">Stackrole.com</Link>
      </p>
    </div>
  </footer>
);

export default Footer;
