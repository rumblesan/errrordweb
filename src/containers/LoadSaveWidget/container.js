import { connect } from 'react-redux';

import { uploadImage } from 'actions';

import LoadSaveWidget from './index';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadImage: filePath => {
      dispatch(uploadImage(filePath));
    },
  };
}

export default connect(null, mapDispatchToProps)(LoadSaveWidget);
