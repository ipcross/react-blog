import React, { PropTypes } from 'react';

import { Segment, Container } from 'semantic-ui-react';
import NavBar from 'components/ui/NavBar.jsx';

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>
);

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
