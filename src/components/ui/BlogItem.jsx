import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import Link from 'components/elements/Link';
import { postsPath, editPostPath } from 'helpers/routes';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import PostDetails from 'components/ui/PostDetails';
import LikeContainer from 'containers/LikeContainer';

const BlogItem = (props) => (
  <Item>
    <Image {...props.post.image} />
    <Item.Content>
      <Item.Header as='h2'>
        <Link to={postsPath(props.post.id)}>{props.post.title}</Link>
      </Item.Header>
      <Link to={editPostPath(props.post.id)}>Edit</Link>
      <Item.Description>
        <TextBox>{props.post.description}</TextBox>
      </Item.Description>
      <br/>
      <Item.Meta>
        <PostDetails {...props.post.meta} />
        <LikeContainer postId={props.post.id} />
      </Item.Meta>
    </Item.Content>
  </Item>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: Image.propTypes.image,
    meta: PostDetails.propTypes.details,
    likes: PropTypes.number
  })
};

export default BlogItem;
