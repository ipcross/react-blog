import { connect } from 'react-redux';

import BlogPage from 'containers/BlogPage.jsx';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps)(BlogPage);
