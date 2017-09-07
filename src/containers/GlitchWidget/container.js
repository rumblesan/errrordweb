import { connect } from 'react-redux';

import { addGlitch } from 'actions';

import GlitchWidget from './index';

import { quantizeGlitch } from 'glitch/types';

function mapStateToProps({ glitch }) {
  return {
    stack: glitch.stack,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewGlitch: () => {
      dispatch(addGlitch(quantizeGlitch(10, 30, 'all')));
    },
    removeGlitch: key => {
      console.log(`remove glitch ${key}`);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlitchWidget);
