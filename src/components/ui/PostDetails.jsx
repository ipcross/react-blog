import React from 'react';
import PropTypes from 'prop-types';

const PostDetails = ({author, createdAt, updatedAt}) => (
  <ul>
    <li>Author: {author}</li>
    {createdAt && <li>{`Created: ${createdAt}`}</li>}
    {updatedAt && <li>{`Updated: ${updatedAt}`}</li>}
  </ul>
);

PostDetails.defaultProps = {
  author: 'Default Author'
};

PostDetails.propTypes = {
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

export default PostDetails;
