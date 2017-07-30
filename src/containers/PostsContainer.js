import { connect } from 'react-redux';

import BlogPage from 'components/BlogPage';

const stateToProps = (state) => ({
  posts: state.posts.entries.posts,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps)(BlogPage);
