import reducer from 'reducers/Post';
import * as types from 'constants/actionTypes/PostActionTypes';
import { fakeState } from 'constants/fakeState';

describe('reducerPost', () => {
  const state = fakeState;

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isFetching: false,
        error: false,
        entry: null
      }
    );
  });

  it('should handle FETCH_POST_REQUEST', () => {
    expect(
      reducer([], {
        type: types.FETCH_POST_REQUEST
      })
    ).toEqual(
      {
        isFetching: true,
        error: false,
        entry: null
      }
    );
  });

  it('should handle POST_LIKE', () => {
    const fakePostId = 10;
    const action = { fakePostId, type: types.POST_LIKE };
    const newState = reducer(state, action);
    expect(newState.post.entry.post.meta.likes).toEqual(9);
  });
});
