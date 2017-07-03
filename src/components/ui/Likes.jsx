import React from 'react';
import PropTypes from 'prop-types';

const Likes = ({likes, like, id}) => (
  <button onClick={(e) => like(id)}>Likes: {likes}</button>
);

Likes.defaultProps = {
  likes: 0
}

Likes.propTypes = {
  likes: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired
}

export default Likes;
