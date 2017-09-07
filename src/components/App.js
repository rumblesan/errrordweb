import React from 'react';
import NavigationControls from 'containers/NavigationControls';
import ImageDisplay from 'components/ImageDisplay';

export default function App(props) {
  return (
    <div>
      <div id="header">
        <NavigationControls />
      </div>
      <ImageDisplay image={props.image} />
    </div>
  );
}
