import React, { PropTypes } from 'react';
import Link from 'components/elements/Link';

import { Segment, Container, Menu } from 'semantic-ui-react';

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>
);

const NavBar = function () {
  return (
    <Menu>
      <Menu.Item><Link to='/'>ReactBlog</Link></Menu.Item>
      <Menu.Menu>
        <Menu.Item><Link to='/contacts'>Contacts</Link></Menu.Item>
        <Menu.Item><Link to='/about'>About</Link></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const MainLayout = ({ children }) => (
  <Container>
    <NavBar />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
