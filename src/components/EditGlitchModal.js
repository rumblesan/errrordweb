import React from 'react';
import ReactModal from 'react-modal';

import { GLITCH_EDIT_MODAL } from 'actions/modals';

const EditGlitchModal = props => {
  return (
    <ReactModal
      isOpen={props.editGlitchModal.view === GLITCH_EDIT_MODAL}
      onRequestClose={props.closeEditGlitchModal}
      contentLabel="Edit Glitch"
      style={{ content: { 'padding-top': '40px' } }}
    >
      <header className="modal-heading">
        <span onClick={props.closeEditGlitchModal} className="close">
          &times;
        </span>
        <h2>Create Glitch</h2>
      </header>
      {props.children}
    </ReactModal>
  );
};

export default EditGlitchModal;
