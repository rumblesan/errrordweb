import { connect } from 'react-redux';

import { uploadImage, addGlitch } from 'actions';

import Navbar from 'components/Navbar';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fileUploadHandler: filePath => {
      dispatch(uploadImage(filePath));
    },
    addGlitch: () => {
      dispatch(addGlitch('quantize'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
