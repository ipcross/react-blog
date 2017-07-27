import React, { PropTypes } from 'react';
import { Item, Loader } from 'semantic-ui-react';
import BlogItem from 'components/ui/BlogItem';
import Helmet from 'react-helmet';

const Post = (props) => (
  <div>
    {props.post && <Helmet title={props.post.text} />}
    <Item.Group>
      { props.isFetching && <Loader content='Загрузка' /> }
      { props.error && <h2>Error: {props.error}</h2> }
      {
        !props.isFetching && !props.error &&
          <BlogItem post={props.post} />
      }
    </Item.Group>
  </div>
);

Post.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  post: PropTypes.array
};

export default Post;
