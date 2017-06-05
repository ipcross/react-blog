import React from 'react';
import PropTypes from 'prop-types';

const Image = ({src,style,alt}) => (
  <div>
    <img
       src={src}
       style={style}
       alt={alt} />
  </div>
)

Image.defaultProps = {
  src: 'Default image',
  alt: 'Not Image',
  style: {width: 100, height: 100}
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};

export default Image;
