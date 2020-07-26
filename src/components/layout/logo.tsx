import * as React from 'react';
import { Link } from 'gatsby';
import { FunctionComponent } from 'react';

interface Props {
  title: string
}

const Logo: FunctionComponent<Props> = props => (
  <div className="site-logo">
    <Link to="/">{props.title}</Link>
  </div>
);

export default Logo;
