import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { posts, like } = this.props;
    return (
      <ul>
        {
          posts.map((post) => {
            return (
              <li key={post.id}>
                <BlogItem  post={post} like={like} />
              </li>
            );
          })
        }
      </ul>
    );
  }
}

BlogList.propTypes = {
  posts: PropTypes.array,
  like: PropTypes.func
};

export default BlogList;
