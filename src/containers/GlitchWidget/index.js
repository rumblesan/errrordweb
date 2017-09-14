import React, { Component } from 'react';

import HeadedModal from 'components/EditGlitchModal';
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
      <button className="pure-button" onClick={addGlitch}>
        Add Glitch
      </button>
      <ul>{stack.map(g => <li key={g.key}>{g.glitch.type}</li>)}</ul>
      <HeadedModal
        isOpen={editGlitchModal.view === GLITCH_EDIT_MODAL}
        closeModal={closeEditGlitchModal}
        title="Create Glitch"
      >
        <GlitchCreationForm
          cancelCreate={closeEditGlitchModal}
          createNewGlitch={createNewGlitch}
        />
      </HeadedModal>
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
      <form
        className="pure-form pure-form-aligned"
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="edit-glitch-seed">Seed:</label>
            <input
              id="edit-glitch-seed"
              type="text"
              value={this.state.seed}
              onChange={this.handleChange('seed')}
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="edit-glitch-depth">Depth:</label>
            <input
              id="edit-glitch-depth"
              type="text"
              value={this.state.depth}
              onChange={this.handleChange('depth')}
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="edit-glitch-quant">Quant Table:</label>
            <input
              id="edit-glitch-quant"
              type="text"
              value={this.state.quantTable}
              onChange={this.handleChange('quantTable')}
            />
          </div>
          <div className="pure-controls">
            <button type="submit" className="pure-button pure-button-primary">
              Create
            </button>
            <button className="pure-button" onClick={this.props.cancelCreate}>
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}
