import React from 'react';
import update from 'immutability-helper';

import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';

import { posts } from 'constants/static/items';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts};
    this.like = this.like.bind(this);
  }

  render() {
    const {posts} = this.state;
    return (
      <div>
        <BlogList posts={ this.state.posts } like={this.like} />
        <PieChart columns={[...posts.map(post => [post.text,post.likes])]} />
      </div>
    );
  }

  like(postId) {
    const idx = this.state.posts.findIndex((elem) => elem.id === postId);
    const newState = update(this.state, {
      posts: {
        [idx]: {
          likes: { $apply: (x) => x + 1 }
        }
      }
    });
    this.setState(newState);
  }
}
