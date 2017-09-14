import { Jpeg } from 'glitchlib';

import {
  IMAGE_UPLOAD_START,
  IMAGE_UPLOAD_FINISH,
  IMAGE_UPLOAD_ERROR,
  IMAGE_LOAD,
  IMAGE_SAVE,
  ADD_GLITCH,
} from './types';

export function imageUploadStart(fileData) {
  return { type: IMAGE_UPLOAD_START, payload: fileData };
}

export function imageUploadFinish(imageData) {
  return { type: IMAGE_UPLOAD_FINISH, payload: imageData };
}

export function imageLoad(jpeg) {
  return { type: IMAGE_LOAD, payload: jpeg };
}

export function imageUploadError(message) {
  return { type: IMAGE_UPLOAD_ERROR, payload: message };
}

export function uploadImage(file) {
  return dispatch => {
    dispatch(imageUploadStart(file));

    if (!file.type.match('image.*')) {
      dispatch(imageUploadError('Non image file selected'));
      return;
    }

    const reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = function(e) {
      let jpeg;
      try {
        jpeg = Jpeg.Jpeg(new Uint8Array(reader.result));
      } catch (e) {
        console.log(e);
        dispatch(imageUploadError('Problem parsing image'));
        return;
      }
      dispatch(imageLoad(jpeg));
    };

    reader.readAsArrayBuffer(file);
  };
}

export function imageSave(filename) {
  return { type: IMAGE_SAVE, filename };
}

export function addGlitch(glitch) {
  return {
    type: ADD_GLITCH,
    payload: glitch,
  };
}
