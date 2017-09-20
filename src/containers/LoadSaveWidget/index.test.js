import React from 'react';
import ReactDOM from 'react-dom';
import LoadSaveWidget from 'containers/LoadSaveWidget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const loadImage = file => {
    return;
  };
  const saveImage = () => {
    return;
  };
  ReactDOM.render(
    <LoadSaveWidget loadImage={loadImage} saveImage={saveImage} />,
    div
  );
});
