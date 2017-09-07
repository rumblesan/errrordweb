//import decodeJpeg from '../glitching/decoder';

const initialState = {
  fileData: null,
  imageData: null,
};

export default function repos(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'IMAGE_UPLOAD_START':
      return {
        fileData: action.fileData,
      };
    case 'IMAGE_UPLOAD_FINISH':
      /*
       *if (state.fileData.type === 'image/jpeg') {
       *  const sections = decodeJpeg(new Uint8Array(action.imageData));
       *  console.log(sections);
       *}
       */
      return {
        fileData: state.fileData,
        imageData: action.imageData,
      };
    case 'IMAGE_UPLOAD_ERROR':
      return {
        fileData: null,
        imageData: null,
      };
    case 'IMAGE_SAVE':
      return state;
    default:
      return state;
  }
}
