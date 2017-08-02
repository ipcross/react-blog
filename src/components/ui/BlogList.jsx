import React from 'react';
import PropTypes from 'prop-types';
import { Item, Divider } from 'semantic-ui-react';
import BlogItem from 'components/ui/BlogItem';

const BlogList = function ({ posts }) {
  return (
    <Item.Group>
      {posts.map((post, index) => (
        <div key={post.id}>
          {index > 0 && <Divider />}
          <BlogItem post={post} />
        </div>
      ))}
    </Item.Group>
  );
};

BlogList.propTypes = {
  posts: PropTypes.array,
};

export default BlogList;
