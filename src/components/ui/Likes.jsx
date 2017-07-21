import React from 'react';
import PropTypes from 'prop-types';

const Likes = ({postId, count, likePost}) => (
  <button onClick={() => likePost(postId)}>Likes: {count}</button>
);

Likes.propTypes = {
  postId: PropTypes.number,
  count: PropTypes.number,
  likePost: PropTypes.fun
};

export default Likes;
