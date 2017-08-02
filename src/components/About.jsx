import React from 'react';
import PropTypes from 'prop-types';

const About = ({children}) => <span> About page.  {children} </span>;

About.defaultProps = {
  children: 'Default text for About'
};

About.propTypes = {
  children: PropTypes.string
};

export default About;
