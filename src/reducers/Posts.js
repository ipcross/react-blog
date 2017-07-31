import { assign } from 'lodash/object';
import { map } from 'lodash/collection';
import update from 'immutability-helper';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case types.POSTS_LIKE:
      return assign({}, state, {
        entries: assign({}, state.entries, {
          posts: map(state.entries.posts, (post) => {
            if (post.id == action.postId) {
              return update(post, {
                meta: {likes: {$set: (post.meta.likes + 1)}}
              });
            }
            return post;
          })
        })
      });
    default:
      return state;
  }
}
