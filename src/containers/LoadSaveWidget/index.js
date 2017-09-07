import React from 'react';

export default function LoadSaveWidget({ loadImage, saveImage }) {
  return (
    <div className="loadsave-widget">
      <h3>Load/Save</h3>
      <input
        onChange={evt => {
          const files = evt.target.files;
          if (files[0]) {
            loadImage(files[0]);
          }
        }}
        type="file"
        id="files"
        name="files[]"
      />
      <button onClick={saveImage}>Save Image</button>
    </div>
  );
}
