import React, { Component } from 'react';

import { quantizeGlitch } from 'glitch/types';

class EditGlitchForm extends Component {
  constructor() {
    super();
    this.state = {
      type: 'quantize',
      depth: 0.05,
      seed: Math.random(),
      quantTable: 'all',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return event => {
      let val = event.target.value;
      if (key === 'depth' || key === 'seed') {
        val = parseFloat(val);
      }
      this.setState({ [key]: val });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { seed, depth, quantTable } = this.state;
    let qt;
    if (quantTable === 'all') {
      qt = null;
    } else {
      qt = parseInt(quantTable, 10);
    }
    this.props.createNewGlitch(quantizeGlitch(seed, depth, qt));
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
            <button
              type="button"
              className="pure-button"
              onClick={this.props.cancelCreate}
            >
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default EditGlitchForm;
