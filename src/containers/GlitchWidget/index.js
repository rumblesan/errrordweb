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
      <ul className="glitchStack">
        {stack.map((g, idx) => (
          <GlitchElement
            remove={() => removeGlitch(idx)}
            edit={() => console.log(`edit ${idx}`)}
            key={idx}
            glitch={g}
          />
        ))}
      </ul>
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

function GlitchElement({ glitch, remove, edit }) {
  return (
    <li className="GlitchElement">
      <div
        className="pure-button-group glitch-controls"
        role="group"
        aria-label="..."
      >
        <button className="pure-button" onClick={remove}>
          Remove
        </button>
        <button className="pure-button" onClick={edit}>
          Edit
        </button>
      </div>
      <span className="glitch-name">{glitch.type}</span>
    </li>
  );
}
