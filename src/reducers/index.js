import { combineReducers } from 'redux';
import image from './image';
import glitch from './glitch';

const rootReducer = combineReducers({
  image,
  glitch,
});

export default rootReducer;
