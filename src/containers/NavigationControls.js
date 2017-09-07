import { connect } from 'react-redux';

import { uploadImage, glitchImage } from 'actions';

import Navbar from 'components/Navbar';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fileUploadHandler: filePath => {
      dispatch(uploadImage(filePath));
    },
    glitchImage: () => {
      dispatch(glitchImage('only glitch'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
