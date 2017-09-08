import { connect } from 'react-redux';
import App from 'components/App';
import { evalGlitchStack } from 'glitch';

function mapStateToProps({ image, glitch }) {
  return {
    jpeg: evalGlitchStack(image.jpeg, glitch.stack),
  };
}

export default connect(mapStateToProps)(App);
