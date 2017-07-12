import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem.jsx';

const BlogList = function ({ posts }) {
  return (
    <ul>
      {
        posts.map(function(post) {
          return (
            <li key={post.id}>
              <BlogItem  post={post} />
            </li>
          );
        })
      }
    </ul>
  );
};

BlogList.propTypes = {
  posts: PropTypes.array,
};

export default BlogList;
