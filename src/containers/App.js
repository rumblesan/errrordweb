import { connect } from 'react-redux';
import App from 'components/App';

function mapStateToProps({ image }) {
  return {
    image,
  };
}

export default connect(mapStateToProps)(App);
