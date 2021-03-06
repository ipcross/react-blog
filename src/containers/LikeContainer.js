import { connect } from 'react-redux';
import { likePost } from 'actions/Posts';
import { get, find } from 'lodash';

import Likes from 'components/ui/Likes';

const actionToProps = (dispatch, ownProps) => ({
  likeClick: () => dispatch(likePost(ownProps.postId))
});

const stateToProps = (state, ownProps) => ({
  count: get(find(state.posts.entries.posts, { id: ownProps.postId }), 'meta.likes', 0)
});

export default connect(stateToProps, actionToProps)(Likes);
