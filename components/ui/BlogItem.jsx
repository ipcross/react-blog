import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import PostDetails from './PostDetails';
import Likes from './Likes';

const BlogItem = (props) => (
  <div>
      <Image {...props.post.image} />
      <TextBox>{props.post.text}</TextBox>
      <PostDetails {...props.post.details} />
      <Likes like={props.like} likes={props.post.likes} id={props.post.id}/>
  </div>
)

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    image: Image.propTypes.image,
    details: PostDetails.propTypes.details
  }),
  like: PropTypes.func.isRequired,
  likes: PropTypes.number
};

export default BlogItem;
