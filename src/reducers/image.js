import { IMAGE_LOAD } from 'actions/types';

const initialState = {
  jpeg: null,
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case IMAGE_LOAD:
      return {
        ...state,
        jpeg: action.payload,
      };
    default:
      return state;
  }
}
