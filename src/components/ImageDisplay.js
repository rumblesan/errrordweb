import React from 'react';

function ImageDisplay({ jpeg }) {
  let image;
  if (jpeg) {
    const objurl = URL.createObjectURL(new Blob([jpeg.data]), {
      type: 'image/jpeg',
    });

    image = <img alt="glitched" src={objurl} />;
  } else {
    image = <h2>No Image</h2>;
  }
  return <div className="image-display">{image}</div>;
}

export default ImageDisplay;
