import React from 'react';
import PropTypes from 'prop-types';

const Likes = ({postId, count, likeClick}) => (
  <button onClick={() => likeClick(postId)}>Likes: {count}</button>
);

Likes.propTypes = {
  postId: PropTypes.number,
  count: PropTypes.number,
  likeClick: PropTypes.fun
};

export default Likes;
