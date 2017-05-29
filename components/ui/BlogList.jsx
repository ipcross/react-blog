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
          posts.map((post, i) => {
            return (
              <li key={i}>
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
