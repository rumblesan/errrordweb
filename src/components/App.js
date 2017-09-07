import React from 'react';
import NavigationControls from 'containers/NavigationControls';
import ImageCanvas from 'containers/ImageCanvas';

export default function App(props) {
  return (
    <div>
      <div id="header">
        <NavigationControls />
      </div>
      <ImageCanvas />
    </div>
  );
}
