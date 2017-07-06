import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import PostDetails from 'components/ui/PostDetails';
import Likes from 'components/ui/Likes';

const BlogItem = (props) => (
  <div>
    <Image {...props.post.image} />
    <TextBox>{props.post.text}</TextBox>
    <PostDetails {...props.post.details} />
    <Likes like={props.like} likes={props.post.likes} id={props.post.id}/>
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    image: Image.propTypes.image,
    details: PostDetails.propTypes.details,
    likes: PropTypes.number
  }),
  like: PropTypes.func.isRequired
};

export default BlogItem;
