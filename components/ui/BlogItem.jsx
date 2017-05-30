import React from 'react';
import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => (
  <div>
      <Image image={props.post.image} />
      <TextBox>{props.post.text}</TextBox>
  </div>
)

export default BlogItem;
