import imageReducer from 'reducers/image';

import { imageLoad } from 'actions';

describe('Image Reducer', () => {
  it('returns the expected default state', () => {
    const expected = { jpeg: null };
    expect(imageReducer(undefined, {})).toEqual(expected);
  });

  it('sets the jpeg image state', () => {
    const state = { jpeg: null };
    const jpeg = 'jpeg';
    const action = imageLoad(jpeg);
    expect(imageReducer(state, action).jpeg).toEqual(jpeg);
  });
});
