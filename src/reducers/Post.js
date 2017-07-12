import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/PostActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case types.LIKE_POST:
      return assign({}, initialState, { entry: incrementLikes(action.post) });
    default:
      return state;
  }
}

const incrementLikes = (post) => {
  ++post.likes;
  return post;
};
