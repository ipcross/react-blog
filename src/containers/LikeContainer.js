import { connect } from 'react-redux';
import { likePost } from 'actions/Posts';
import { get, find } from 'lodash';

import Likes from 'components/ui/Likes';

const actionToProps = (dispatch, ownProps) => ({
  likePost: () => dispatch(likePost(ownProps.postId))
});

const stateToProps = (state, ownProps) => ({
  count: get(find(state.posts.entries, { id: ownProps.postId }), 'likes', 0)
});

export default connect(stateToProps, actionToProps)(Likes);
