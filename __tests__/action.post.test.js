import * as actions from 'actions/Post';
import * as types from 'constants/actionTypes/PostActionTypes';

describe ('actions', () => {
  it('should create an action to likePost', () => {
    const postId = 5;
    const expectedAction = {
      postId,
      type: types.POST_LIKE
    };
    expect(actions.likePost(postId)).toEqual(expectedAction);
  });
});
