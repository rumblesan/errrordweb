import { OPEN_UI_MODAL, CLOSE_UI_MODAL } from 'actions/types';

import { NO_MODAL } from 'actions/modals';

const initialState = {
  view: NO_MODAL,
};

export default function modals(state = initialState, action) {
  switch (action.type) {
    case OPEN_UI_MODAL:
      return {
        ...state,
        view: action.payload,
      };
    case CLOSE_UI_MODAL:
      return {
        ...state,
        view: NO_MODAL,
      };
    default:
      return state;
  }
}
