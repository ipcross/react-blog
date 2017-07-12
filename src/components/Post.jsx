import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import BlogItem from 'components/ui/BlogItem.jsx';

const Post = (props) => (
  <Item.Group>
    { props.isFetching && <Loader content='Загрузка' /> }
    { props.error && <h2>Error: {props.error}</h2> }
    {
      !props.isFetching && !props.error &&
        <BlogItem post={props.post} />
    }
  </Item.Group>
);

Post.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  post: PropTypes.array
};

export default Post;
