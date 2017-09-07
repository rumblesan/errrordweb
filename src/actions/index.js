import {
  IMAGE_UPLOAD_START,
  IMAGE_UPLOAD_FINISH,
  IMAGE_UPLOAD_ERROR,
  IMAGE_SAVE,
  IMAGE_GLITCH,
} from './types';

export function imageUploadStart(fileData) {
  return { type: IMAGE_UPLOAD_START, fileData };
}

export function imageUploadFinish(imageData) {
  return { type: IMAGE_UPLOAD_FINISH, imageData };
}

export function imageUploadError(message) {
  return { type: IMAGE_UPLOAD_ERROR, message };
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
      console.log('file loaded', reader);
      dispatch(imageUploadFinish(reader.result));
    };

    reader.readAsArrayBuffer(file);
  };
}

export function imageSave(filename) {
  return { type: IMAGE_SAVE, filename };
}

export function glitchImage(glitch) {
  return { type: IMAGE_GLITCH, glitch };
}
