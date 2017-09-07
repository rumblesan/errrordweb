import React from 'react';
import ImageDisplay from 'components/ImageDisplay';
import ToolBar from 'components/ToolBar';

export default function App(props) {
  return (
    <div className="app">
      <div className="app-sidebar">
        <ToolBar />
      </div>
      <div className="app-display">
        <ImageDisplay jpeg={props.jpeg} />
      </div>
    </div>
  );
}
