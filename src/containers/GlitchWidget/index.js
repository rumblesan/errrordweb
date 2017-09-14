import React from 'react';

import HeadedModal from 'components/EditGlitchModal';
import EditGlitchForm from 'components/EditGlitchForm';
import { GLITCH_EDIT_MODAL } from 'actions/modals';

export default function GlitchWidget({
  stack,
  editGlitchModal,
  addGlitch,
  closeEditGlitchModal,
  createNewGlitch,
  removeGlitch,
}) {
  return (
    <div className="loadsave-widget">
      <h3>Glitch</h3>
      <button className="pure-button" onClick={addGlitch}>
        Add Glitch
      </button>
      <ul>{stack.map(g => <li key={g.key}>{g.glitch.type}</li>)}</ul>
      <HeadedModal
        isOpen={editGlitchModal.view === GLITCH_EDIT_MODAL}
        closeModal={closeEditGlitchModal}
        title="Create Glitch"
      >
        <EditGlitchForm
          cancelCreate={closeEditGlitchModal}
          createNewGlitch={createNewGlitch}
        />
      </HeadedModal>
    </div>
  );
}
