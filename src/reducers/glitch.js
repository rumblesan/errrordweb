import {
  ADD_GLITCH,
  UPDATE_GLITCH,
  EDIT_GLITCH,
  REMOVE_GLITCH,
} from 'actions/types';

const initialState = {
  stack: [],
  editing: null,
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case ADD_GLITCH:
      return {
        ...state,
        stack: state.stack.concat([action.payload]),
      };
    case EDIT_GLITCH:
      return {
        ...state,
        editing: action.payload,
      };
    case UPDATE_GLITCH:
      const newStack = state.stack.slice();
      newStack[state.editing] = action.payload;
      return {
        ...state,
        stack: newStack,
        editing: null,
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
