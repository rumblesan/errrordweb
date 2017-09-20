import glitchReducer from 'reducers/glitch';

import { addGlitch } from 'actions';

describe('Glitch Reducer', () => {
  it('returns the expected default state', () => {
    const expected = { stack: [], editing: null };
    expect(glitchReducer(undefined, {})).toEqual(expected);
  });

  it('adds a glitch to the stack', () => {
    const glitch = 'glitch';
    const action = addGlitch(glitch);
    expect(glitchReducer(undefined, action).stack).toEqual([glitch]);
  });
});
