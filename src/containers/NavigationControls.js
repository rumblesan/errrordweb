import React from 'react';
import { connect } from 'react-redux';

import { uploadImage } from 'actions';

import Navbar from 'components/Navbar';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fileUploadHandler: filePath => {
      dispatch(uploadImage(filePath));
    },
  };
}

function NavigationControls(props) {
  return <Navbar {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationControls);
