import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem.jsx';

const BlogList = function ({ posts, like }) {
  return (
    <ul>
      {
        posts.map(function(post) {
          return (
            <li key={post.id}>
              <BlogItem  post={post} like={like} />
            </li>
          );
        })
      }
    </ul>
  );
};

BlogList.propTypes = {
  posts: PropTypes.array,
  like: PropTypes.func
};

export default BlogList;
