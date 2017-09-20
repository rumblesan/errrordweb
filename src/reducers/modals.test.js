import modalReducer from 'reducers/modals';

import { openModal, closeModal } from 'actions';
import { NO_MODAL } from 'actions/modals';

describe('Modal Reducer', () => {
  it('returns the expected default state', () => {
    const expected = { view: NO_MODAL };
    expect(modalReducer(undefined, {})).toEqual(expected);
  });

  it('sets the modal view state', () => {
    const state = { view: NO_MODAL };
    const view = 'view';
    const action = openModal(view);
    expect(modalReducer(state, action).view).toEqual(view);
  });

  it('can change the view state to be closed', () => {
    const view = 'view';
    const state = { view: view };
    const action = closeModal();
    expect(modalReducer(state, action).view).toEqual(NO_MODAL);
  });
});
