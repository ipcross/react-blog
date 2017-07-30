import { connect } from 'react-redux';

import Post from 'components/Post';

const stateToProps = (state) => ({
  post: state.post.entry.post,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps)(Post);
