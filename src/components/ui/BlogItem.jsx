import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/elements/Link';
import { postsPath } from 'helpers/routes';

import Image from 'components/ui/Image.jsx';
import PostDetails from 'components/ui/PostDetails.jsx';
import LikeContainer from 'containers/LikeContainer';

const BlogItem = (props) => (
  <div>
    <Image {...props.post.image} />
    <Link to={postsPath(props.post.id)}>{props.post.text}</Link>
    <PostDetails {...props.post.details} />
    <LikeContainer postId={props.post.id} />
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    image: Image.propTypes.image,
    details: PostDetails.propTypes.details,
    likes: PropTypes.number
  })
};

export default BlogItem;
