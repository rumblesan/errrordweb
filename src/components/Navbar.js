import React from 'react';

export default function Navbar({ glitchImage, fileUploadHandler }) {
  return (
    <ul className="navmenu">
      <li>Errrord Web</li>

      <li>
        <input
          onChange={evt => {
            const files = evt.target.files;
            if (files[0]) {
              fileUploadHandler(files[0]);
            }
          }}
          type="file"
          id="files"
          name="files[]"
        />
      </li>
      <li>
        <button onClick={glitchImage}>Glitch</button>
      </li>
    </ul>
  );
}
