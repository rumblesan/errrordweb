import { connect } from 'react-redux';

import {
  addGlitch,
  editGlitch,
  updateGlitch,
  removeGlitch,
  openModal,
  closeModal,
} from 'actions';
import { GLITCH_EDIT_MODAL } from 'actions/modals';

import GlitchWidget from './index';

function mapStateToProps({ glitch, modals }) {
  return {
    stack: glitch.stack,
    editGlitchModal: modals,
    editingGlitch: glitch.editing,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewGlitch: glitch => {
      dispatch(closeModal());
      dispatch(addGlitch(glitch));
    },
    cancelEditGlitch: () => {
      dispatch(closeModal());
      dispatch(editGlitch(null));
    },
    addGlitch: () => {
      dispatch(openModal(GLITCH_EDIT_MODAL));
    },
    editGlitch: glitchId => {
      dispatch(editGlitch(glitchId));
      dispatch(openModal(GLITCH_EDIT_MODAL));
    },
    updateGlitch: glitch => {
      dispatch(updateGlitch(glitch));
      dispatch(closeModal());
    },
    removeGlitch: glitchId => {
      dispatch(removeGlitch(glitchId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlitchWidget);
