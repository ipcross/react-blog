import React from 'react';
import PropTypes from 'prop-types';

const Likes = (props) => (
  <button>Likes: {props.post.likes}</button>
);

Likes.propTypes = {
  post: PropTypes.shape({
    likes: PropTypes.number
  })
};

export default Likes;
