import { connect } from 'react-redux';

import BlogItem from 'components/ui/BlogItem.jsx';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps)(BlogItem);
