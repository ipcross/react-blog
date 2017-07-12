import { connect } from 'react-redux';
import { likePost } from 'actions/Posts';

import Likes from 'components/ui/Likes.jsx';

const actionToProps = (dispatch, ownProps) => ({
  likePost: () => dispatch(likePost(ownProps.post))
});

const stateToProps = (state) => ({
  post: state.post
});

export default connect(stateToProps, actionToProps)(Likes);
