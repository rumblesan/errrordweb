import React from 'react';

export default function Navbar({ fileUploadHandler }) {
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
    </ul>
  );
}
