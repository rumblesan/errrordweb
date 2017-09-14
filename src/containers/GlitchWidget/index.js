import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { GLITCH_EDIT_MODAL } from 'actions/modals';

import { quantizeGlitch } from 'glitch/types';

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
      <button onClick={addGlitch}>Add Glitch</button>
      <ul>{stack.map(g => <li key={g.key}>{g.glitch.type}</li>)}</ul>
      <ReactModal
        isOpen={editGlitchModal.view === GLITCH_EDIT_MODAL}
        onRequestClose={closeEditGlitchModal}
        contentLabel="Edit Glitch"
      >
        <h2>Create Glitch</h2>
        <GlitchCreationForm createNewGlitch={createNewGlitch} />
        <button onClick={closeEditGlitchModal}>Close Modal</button>
      </ReactModal>
    </div>
  );
}

class GlitchCreationForm extends Component {
  constructor() {
    super();
    this.state = {
      type: 'quantize',
      depth: 0,
      seed: 0,
      quantTable: 'all',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return event => {
      this.setState({ [key]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { seed, depth, quantTable } = this.state;
    this.props.createNewGlitch(quantizeGlitch(seed, depth, quantTable));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Seed:
          <input
            type="text"
            value={this.state.seed}
            onChange={this.handleChange('seed')}
          />
        </label>
        <label>
          Depth:
          <input
            type="text"
            value={this.state.depth}
            onChange={this.handleChange('depth')}
          />
        </label>
        <label>
          Quant Table:
          <input
            type="text"
            value={this.state.quantTable}
            onChange={this.handleChange('quantTable')}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
