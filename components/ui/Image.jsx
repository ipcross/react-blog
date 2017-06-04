import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => (
  <div>
    <img
       src={props.image.src || Image.defaultProps.image.src}
       style={props.image.style || Image.defaultProps.image.style}
       alt={props.image.alt || Image.defaultProps.image.style} />
  </div>
)

Image.defaultProps = {
  image: {
    src: 'Default image',
    alt: 'Not Image',
    style: {width: 100, height: 100}
  }
};

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    })
  })
};

export default Image;
