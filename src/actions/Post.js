import { API_CALL } from 'middleware/API';
import * as types from 'constants/actionTypes/PostActionTypes';

export const likePost = (postId) => (
  {
    postId,
    type: types.POST_LIKE
  }
);

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      query: { },
      method: 'GET',
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    }
  };
}
