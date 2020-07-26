import * as React from 'react';
import { FunctionComponent } from 'react';

const Header: FunctionComponent<any> = ({ children }) => (
  <header className="site-header">{children}</header>
);

export default Header;
