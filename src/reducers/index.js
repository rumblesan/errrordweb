import { combineReducers } from 'redux';
import image from './image';
import glitch from './glitch';
import modals from './modals';

const rootReducer = combineReducers({
  image,
  glitch,
  modals,
});

export default rootReducer;
