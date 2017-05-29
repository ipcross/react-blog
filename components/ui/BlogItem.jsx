import React from 'react';
import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => (
  <div>
      <Image image={props.post.image} />
      <TextBox text={props.post.text} />
  </div>
)

export default BlogItem;
