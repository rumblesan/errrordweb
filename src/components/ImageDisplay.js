import React from 'react';

function ImageDisplay({ jpeg }) {
  let image;
  if (jpeg) {
    const objurl = URL.createObjectURL(new Blob([jpeg.data]), {
      type: 'image/jpeg',
    });

    image = <img alt="glitched" src={objurl} />;
  } else {
    image = (
      <div className="no-image-message">
        <h2>No Image</h2>
        <div>Please load an image</div>
      </div>
    );
  }
  return <div className="image-display">{image}</div>;
}

export default ImageDisplay;
