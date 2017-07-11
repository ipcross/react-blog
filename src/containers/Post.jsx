import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import BlogItem from 'components/ui/BlogItem.jsx';
import request from 'superagent';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {post: ''};
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    request.get(
      `http://192.168.23.148:3001/posts/${this.props.params.id}`,
      {},
      (err, res) => this.setState({ post: res.body })
    );
  }

  render() {
    const {post} = this.state;
    return (
      <Item.Group>
        <BlogItem post={post} />
      </Item.Group>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};
