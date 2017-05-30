import React from 'react';
import BlogItem from '../ui/BlogItem';

class BlogList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { posts }  = this.props
    return (
      <ul>
        {
          posts.map((post) => {
            return (
              <li key={post.id}>
                <BlogItem  post={post} />
              </li>
            );
          })
        }
      </ul>
    );
  };
}
export default BlogList;
