import React, { Component } from 'react';

import EditGlitchModal from 'components/EditGlitchModal';

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
      <EditGlitchModal
        editGlitchModal={editGlitchModal}
        closeEditGlitchModal={closeEditGlitchModal}
      >
        <GlitchCreationForm createNewGlitch={createNewGlitch} />
        <button className="pure-button" onClick={closeEditGlitchModal}>
          Close Modal
        </button>
      </EditGlitchModal>
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
        className="pure-form pure-form-stacked"
        onSubmit={this.handleSubmit}
      >
        <fieldset>
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
          <button type="submit" className="pure-button pure-button-primary">
            Create
          </button>
        </fieldset>
      </form>
    );
  }
}
