import * as React from 'react';
import { Link } from 'gatsby';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const MenuItems = [
  {
    path: '/blog',
    title: 'Blog'
  },
  {
    path: '/about',
    title: 'About'
  }
];

interface State {
  showMenu: boolean;
}

class Navigation extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <li key={index}>
        <Link to={menuItem.path}>{menuItem.title}</Link>
      </li>
    ));
    return (
      <nav className="site-navigation">
        <button
          onClick={this.handleToggleClick}
          className={'menu-trigger' + (this.state.showMenu ? ' is-active' : '')}
        >
          <div className="icon-menu-line">
            <RiMenu3Line/>
          </div>
          <div className="icon-menu-close">
            <RiCloseLine/>
          </div>
        </button>
        <ul>{listMenuItems}</ul>
      </nav>
    );
  }
}

export default Navigation;
