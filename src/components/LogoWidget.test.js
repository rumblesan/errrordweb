import React from 'react';
import ReactDOM from 'react-dom';
import LogoWidget from 'components/LogoWidget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogoWidget />, div);
});
