import React from 'react';
import update from 'immutability-helper';
import { Grid } from 'semantic-ui-react';

import BlogList from 'components/ui/BlogList.jsx';
import PieChart from 'components/ui/PieChart.jsx';

import request from 'superagent';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
    this.like = this.like.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://192.168.23.148:3001/',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  render() {
    const {posts} = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            <BlogList posts={ this.state.posts } like={this.like} />
          </Grid.Column>
          <Grid.Column width={5}>
            <PieChart columns={[...posts.map(post => [post.text,post.likes])]} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
