import React from 'react';

function ImageDisplay({ jpeg }) {
  if (jpeg) {
    const objurl = URL.createObjectURL(new Blob([jpeg.data]), {
      type: 'image/jpeg',
    });

    return <img alt="glitched" src={objurl} />;
  } else {
    return <h2>No Image</h2>;
  }
}

export default ImageDisplay;
