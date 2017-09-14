import { ADD_GLITCH, REMOVE_GLITCH } from 'actions/types';

const initialState = {
  stack: [],
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case ADD_GLITCH:
      return {
        ...state,
        stack: state.stack.concat([action.payload]),
      };
    case REMOVE_GLITCH:
      return {
        ...state,
        stack: state.stack.filter((g, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
}
