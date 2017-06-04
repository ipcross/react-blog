import React from 'react';
import PropTypes from 'prop-types';

const PostDetails = ({details}) => (
  <ul>
    <li>Author: {details.author}</li>
    <li>Created: {details.created_at}</li>
    <li>Updated: {details.updated_at}</li>
  </ul>
);

PostDetails.defaultProps = {
  details: {
    author: 'Default Author',
    created_at: '',
    updated_at: ''
  }
};

PostDetails.propTypes = {
  details: PropTypes.shape({
    author: PropTypes.string.isRequired,
    created_at: PropTypes.string,
    updated_at: PropTypes.string
  })
}

export default PostDetails;
