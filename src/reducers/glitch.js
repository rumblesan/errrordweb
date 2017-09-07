import { ADD_GLITCH } from 'actions/types';

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
    default:
      return state;
  }
}