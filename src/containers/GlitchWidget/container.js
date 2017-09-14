import { connect } from 'react-redux';

import { addGlitch, openModal, closeModal } from 'actions';
import { GLITCH_EDIT_MODAL } from 'actions/modals';

import GlitchWidget from './index';

function mapStateToProps({ glitch, modals }) {
  return {
    stack: glitch.stack,
    editGlitchModal: modals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewGlitch: glitch => {
      dispatch(closeModal());
      dispatch(addGlitch(glitch));
    },
    removeGlitch: key => {
      console.log(`remove glitch ${key}`);
    },
    addGlitch: () => {
      dispatch(openModal(GLITCH_EDIT_MODAL));
    },
    closeEditGlitchModal: () => {
      dispatch(closeModal());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlitchWidget);
