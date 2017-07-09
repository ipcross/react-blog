import React from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'components/elements/Link';

const NavBar = function () {
  return (
    <Menu>
      <Menu.Item><Link to='/'>ReactBlog</Link></Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item><Link to='/about'>About</Link></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
