//import decodeJpeg from '../glitching/decoder';

import {
  IMAGE_UPLOAD_START,
  IMAGE_UPLOAD_FINISH,
  IMAGE_UPLOAD_ERROR,
  IMAGE_SAVE,
  IMAGE_GLITCH,
} from 'actions/types';

const initialState = {
  fileData: null,
  imageData: null,
};

export default function repos(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case IMAGE_UPLOAD_START:
      return {
        fileData: action.fileData,
      };
    case IMAGE_UPLOAD_FINISH:
      return {
        fileData: state.fileData,
        imageData: action.imageData,
      };
    case IMAGE_UPLOAD_ERROR:
      return {
        fileData: null,
        imageData: null,
      };
    case IMAGE_SAVE:
      return state;
    case IMAGE_GLITCH:
      return state;
    default:
      return state;
  }
}
